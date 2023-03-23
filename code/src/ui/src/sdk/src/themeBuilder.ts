import { IThemeBuilder } from "./interfaces";
import { MyMap } from "./util/myMap";
import { DesignSystem } from "./designSystem";
import { Storage, MemStorage } from "./storage/index";

export interface ThemeBuilderOpts {
    storage?: Storage;
}

/**
 * The main Theme Builder class.
 * 
 * @category Main
 */
export class ThemeBuilder implements IThemeBuilder {

    private static default: ThemeBuilder;

    public static async setDefault(opts?: ThemeBuilderOpts): Promise<ThemeBuilder> {
        if (this.default) {
            throw new Error("ThemeBuilder.setDefault has already been called");
        }
        this.default = await this.create(opts);
        return this.default;
    }

    public static getDefault(): ThemeBuilder {
        if (!this.default) {
            throw new Error("ThemeBuilder.setDefault has not been called");
        }
        return this.default;
    }

    /**
     * Create a theme builder.
     * @param opts Theme Builder options.
     * @returns The ThemeBuilder object.
     */
    public static async create(opts?: ThemeBuilderOpts): Promise<ThemeBuilder> {
        return new ThemeBuilder(opts);
    }

    public readonly storage: Storage;
    private readonly designSystems: MyMap<string,DesignSystem> = new MyMap<string,DesignSystem>();

    private constructor(opts?: ThemeBuilderOpts) {
        opts = opts || {};
        const storage = opts.storage || new MemStorage();
        this.storage = storage;
    }

    /**
     * Add a new design system to the theme builder.
     * @param name The name of the design system to add.
     * @returns The new design system
     */
    public async addDesignSystem(name: string): Promise<DesignSystem> {
        const ds = new DesignSystem(name, this);
        await this.store(ds);
        return ds;
    }

    /**
     * Get an existing design system by name
     * @param name The name of the design system to return.
     * @returns The design system with the specified name, or throws an error otherwise.
     */
    public async getDesignSystem(name: string): Promise<DesignSystem> {
        let ds = this.designSystems.get(name);
        if (!ds) {
            const str = await this.storage.get(name);
            if (!str) {
                throw new Error(`Design system '${name}' does not exist`);
            }
            ds = this.designSystemFromString(name, str);
            this.designSystems.set(name,ds);
        }
        return ds;
    }

    /**
     * Delete the design system named 'name'.
     * 
     * @param name The name of the design system to delete.
     */
    public async deleteDesignSystem(name: string): Promise<void> {
        let ds = this.designSystems.get(name);
        if (!ds) {
            const str = await this.storage.get(name);
            if (!str) {
                throw new Error(`Design system '${name}' does not exist`);
            }
        } else {
            this.designSystems.delete(name);
        }
        await this.storage.delete(name);
    }

    public designSystemFromString(name: string, str: string): DesignSystem {
        const ds = new DesignSystem(name, this);
        ds.deserialize(JSON.parse(str));
        return ds;
    }

    /**
     * Get a list of all design system names.
     * @returns The list of all design system names.
     */
    public async listDesignSystemNames(): Promise<string[]> {
        return await this.storage.listKeys();
    }

    public async store(ds: DesignSystem) {
        await this.storage.set(ds.name, JSON.stringify((ds.serialize())));
    }

}