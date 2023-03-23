import { Node } from "../common/node";
import { MyMap } from "../util/myMap";
import { IDesignSystem, IOrganism, IOrganisms } from "../interfaces";
import { Organism } from "./organism";
import { DataTables } from "./dataTables";
import { Hero } from "./hero";
import { PrimaryNav } from "./primaryNav";
import { SecondaryNav } from "./secondaryNav";
import { FooterAndCopyright } from "./footerAndCopyright";

/**
 * All organisms.
 * @category Organisms
 */
export class Organisms extends Node implements IOrganisms {

    public readonly designSystem: IDesignSystem;
    /** The data tables organism */
    public readonly dataTables: DataTables;
    /** The hero organism */
    public readonly hero: Hero;
    /** The primary nav organism */
    public readonly primaryNav: PrimaryNav;
    /** The secondary nav organism */
    public readonly secondaryNav: SecondaryNav;
    /** The footer and copyright organism */
    public readonly footerAndCopyright: FooterAndCopyright;
    private readonly organisms: MyMap<string,Organism> = new MyMap<string,Organism>();

    constructor(designSystem: IDesignSystem) {
        super("organisms", designSystem);
        this.designSystem = designSystem;
        this.dataTables = new DataTables(this);
        this.hero = new Hero(this);
        this.primaryNav = new PrimaryNav(this);
        this.secondaryNav = new SecondaryNav(this);
        this.footerAndCopyright = new FooterAndCopyright(this);
        this.addDependency(this.designSystem.atoms);
    }

    public getOrganism(key: string): IOrganism {
        const organism = this.organisms.get(key);
        if (!organism) {
            throw new Error(`Organism '${key}' was not found`);
        }
        return organism;
    }

    public deserialize(obj: any) {
        if (!obj) return;
        super.deserialize(obj);
        this.dataTables.deserialize(obj.dataTables);
        this.hero.deserialize(obj.hero);
        this.primaryNav.deserialize(obj.primaryNav);
        this.secondaryNav.deserialize(obj.secondaryNav);
        this.footerAndCopyright.deserialize(obj.footerAndCopyright);
    }

    public serialize(): any {
        const obj: any = {};
        obj.dataTables = this.dataTables.serialize();
        obj.hero = this.hero.serialize();
        obj.primaryNav = this.primaryNav.serialize();
        obj.secondaryNav = this.secondaryNav.serialize();
        obj.footerAndCopyright = this.footerAndCopyright.serialize();
        return obj;
    }
}