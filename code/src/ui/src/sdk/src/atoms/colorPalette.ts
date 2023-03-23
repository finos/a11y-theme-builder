import * as chroma from "chroma-js";
import { Node } from "../common/node";
import { Atom } from "./atom";
import { MyMap } from "../util/myMap";
import { Shade } from "../common/shade";
import { Logger } from "../util/logger";
import { PropertyStringSelectable, PropertyString } from "../common/props";
import { IAtoms, IColorPalette, IColor, ColorListener, ShadeFilter, EventValueChange } from "../interfaces";

const log = new Logger("cp");

/**
 * The ColorPalette atom.
 * @category Atoms
 */
export class ColorPalette extends Atom implements IColorPalette {

    private readonly colors: MyMap<string,Color> = new MyMap<string,Color>();
    /** The default color name property */
    public readonly defaultColorName: PropertyStringSelectable;
    private readonly colorListeners: {[name: string]: ColorListener} = {};

    constructor(atoms: IAtoms) {
        super("Color Palette", true, atoms);
        this.defaultColorName = new PropertyStringSelectable("Default Color", true, this, {
            getSelectables: this.getColorNames.bind(this),
            getDefaultValue: this.getDefaultColorName.bind(this),
        });
    }

    /**
     * Add a color to the color palette.
     * @param name The name of the color to add to the palette
     * @param hex The hex value of the color to add to the palette
     * @returns The color added to the palette
     */
    public addColor(name: string, hex: string): Color {
        log.debug(`Adding color ${name} with hex ${hex}`);
        if (this.colors.get(name)) {
            throw Error(`Color ${name} already exists`);
        }
        const color = new Color(name, hex, this);
        this.colors.set(name,color);
        if (!this.defaultColorName.isInitialized()) {
            this.defaultColorName.setValue(name);
        }
        // Notify color listeners
        Object.values(this.colorListeners).forEach((cl) => cl(color.name,color));
        log.debug(`Added color ${name} with hex ${hex}`);
        return color;
    }

    /**
     * Remove a color from the color palette.
     * @param name The name of the color to remove from the palette
     */
    public removeColor(name: string) {
        if (this.defaultColorName.getValue() === name) {
            throw new Error(`You can not remove the default color (${this.name})`);
        }
        const color = this.colors.get(name);
        if (!color) {
            throw new Error(`Color ${name} is not an existing color`);
        }
        this.colors.delete(name);
        // Notify color listeners
        Object.values(this.colorListeners).forEach((cl) => cl(color.name));
    }

    /**
     * Set a color listener which is called when a color is added or removed from the palette.
     * @param name The name of the color listener.
     * @param cb The callback function to call when a color is added or removed.
     */
    public setColorListener(name: string, cb: ColorListener) {
        this.colorListeners[name] = cb;
        // Notify caller of currently existing colors
        Object.values(this.colors).forEach((color) => cb(color.name,color));
    }

    /**
     * Get a list of all color names in the palette.
     * @returns Return a list of string names for the colors.
     */
    public getColorNames(): string[] {
        return Object.keys(this.colors);
    }

    /**
     * Get a color by name, or throw an exception if not found.
     * @param colorName The name of the color to return.
     * @returns The color object
     */
    public getColor(colorName: string): Color {
        const color = this.colors.get(colorName);
        if (!color) {
            throw new Error(`'${colorName}' is an invalid color; must be one of ${JSON.stringify(this.getColorNames())}`);
        }
        return color;
    }

    /**
     * Returns the default color, if any.
     * @returns The default color (if any).
     */
    public getDefaultColor(): Color | undefined {
        const name = this.getDefaultColorName();
        if (name) {
            return this.getColor(name);
        }
    }

    /**
     * Get the default color name (if any).
     * @returns The default color name.
     */
    public getDefaultColorName(): string | undefined {
        const names = this.getColorNames();
        if (names.length > 0) {
            return names[0];
        }
    }

    /**
     * Get all colors in the palette.
     * @returns Returns all colors in the palette.
     */
    public getColors(): Color[] {
        return this.colors.getValues();
    }

    /**
     * Return all light or dark mode colors which match the filter.  If no filter is provided, return all.
     * @param type Either 'lm' for light mode or 'dm' for dark mode.
     * @param filter An optional filter
     * @returns Returns all light mode or dark mode colors which match the filter (if any).
     */
    public getColorShades(type: string, filter?: ShadeFilter): Shade[][] {
        if (type === "lm") {
            return this.getLightColorShades(filter);
        } else if (type === "dm") {
            return this.getDarkColorShades(filter);
        } else {
            throw new Error(`'${type}' is an invalid color shade type; expecting 'lm' or 'dm'`);
        }
    }

    /**
     * Get all light mode shades matching the filter
     * @param filter An optional filter which must be matched
     * @returns The matching light mode shades
     */
    public getLightColorShades(filter?: ShadeFilter): Shade[][] {
        const shades: Shade[][] = [];
        this.colors.forEach((color) => {
            const colorShades: Shade[] = [];
            color.light.shades.forEach((shade) => {
                if (!filter || filter(shade)) {
                    colorShades.push(shade);
                }
            });
            shades.push(colorShades);
        });
        return shades;
    }

    /**
     * Get all dark mode shades matching the filter
     * @param filter An optional filter which must be matched
     * @returns The matching dark mode shades
     */
    public getDarkColorShades(filter?: ShadeFilter): Shade[][] {
        const shades: Shade[][] = [];
        this.colors.forEach((color) => {
            const colorShades: Shade[] = [];
            color.dark.shades.forEach((shade) => {
                if (!filter || filter(shade)) {
                    colorShades.push(shade);
                }
            });
            shades.push(colorShades);
        });
        return shades;
    }

    public serialize(): any {
        const obj = super.serialize();
        obj.colors = [];
        for (const name of this.colors.getKeys()) {
            obj.colors.push({name, hex: this.colors.get(name)?.hex.getValue()});
        }
        obj.defaultColorName = this.defaultColorName.serialize();
        return obj;
    }

    public deserialize(obj: any) {
        if (!obj) return;
        super.deserialize(obj);
        obj.colors.forEach((value:any) => this.addColor(value.name, value.hex));
        this.defaultColorName.setValue(obj.defaultColorName);
    }

}

/**
 * A color.
 * @category Atoms
 */
export class Color extends Node implements IColor {

    /** The hex value for the color */
    public hex: PropertyString;
    /** The generated light mode shades for the color */
    public light!: ColorMode;
    /** The generated dark mode shades for the color */
    public dark!: ColorMode;

    constructor(name: string, hex: string, palette: ColorPalette ) {
        super(name, palette);
        this.hex = new PropertyString("hex", true, palette);
        this.hex.setValue(hex);
        this.hex.setListener("_tb.colorListener", this.buildShades.bind(this));
        log.debug(this.toString());
    }

    private buildShades(vc: EventValueChange<string>) {
        this.light = new ColorMode("lm", this, { quarterShade: true, halfShade: true});
        this.dark = new ColorMode("dm", this);
    }

    public toString(): string {
        let str = `Color name=${this.name}, hex=${this.hex}`;
        str = `${str}\nLight:`;
        this.light.shades.forEach((shade) => str = `${str}\n   ${shade.toString()}`)
        str = `${str}\nDark:`;
        this.dark.shades.forEach((shade) => str = `${str}\n   ${shade.toString()}`)
        return str;
    }

    public deserialize(obj: any) {
        throw new Error(`Shouldn't be here`);
    }

    public serialize(): any {
        throw new Error(`Shouldn't be here`);
    }

}


/**
 * A color mode (light or dark) with all related shades.
 * @category Atoms
 */
export class ColorMode extends Node {

    /** The name of the mode: "lm" or "dm" */
    public readonly name: string;
    public readonly color: Color;
    /** The generated shades associated with this color and mode */
    public readonly shades: Shade[];

    constructor(name: string, color: Color, opts?: { quarterShade?: boolean, halfShade?: boolean}) {
        super(name, color);
        this.name = name;
        this.color = color;
        if (name === 'lm') {
            this.shades = this.buildShades(true);
        } else if (name === 'dm') {
            this.shades = this.buildShades(false);
        } else {
            throw new Error(`Expecting one of 'lm' or 'dm' but found '${name}`);
        }
    }

    private buildShades(lm: boolean): Shade[] {
        log.debug(`building shades (lm=${lm})`);
        const ds = this.getDesignSystem();
        const hex = this.color.hex.getValue();
        if (!hex) throw new Error('No hex value');
        const shade = Shade.fromHex(hex);
        const shades = shade.buildShades(lm);
        for (let i = 0; i < shades.length; i++) {
            let shade = shades[i];
            shade.key = `${this.key}[${i}]`;
            ds.registerShade(shade.key, shade);
            shade.setMode(this);
            log.debug(`Built shade: color=${this.color.hex}, lm=${lm}, id=${shade.id}, shade=${shade.hex}`);
        }
        return shades;
    }

}