import { Atom } from "./atom";
import { IAtoms } from "../interfaces";
import { PropertyPixel } from "../common/props";

/**
 * The BorderSettings atom.
 * @category Atoms
 */
export class BorderSettings extends Atom {

    /** The base border width property */
    public baseBorderWidth: PropertyPixel;
    /** The base border radius property */
    public baseBorderRadius: PropertyPixel;

    constructor(atoms: IAtoms) {
        super("Border Settings", false,atoms);
        this.addDependency(atoms.colorThemes);
        this.baseBorderWidth = new PropertyPixel("Base border width", false, this, {defaultValue: 1});
        this.baseBorderRadius = new PropertyPixel("Base border radius", false, this, {defaultValue: 8});
    }

    public deserialize(obj: any) {
        if (!obj) return;
        super.deserialize(obj);
        this.baseBorderWidth.deserialize(obj.baseBorderWidth);
        this.baseBorderRadius.deserialize(obj.baseBorderRadius);
    }

    public serialize(): any {
        const obj: any = {};
        obj.baseBorderWidth = this.baseBorderWidth.serialize();
        obj.baseBorderRadius = this.baseBorderRadius.serialize();
        return obj;
    }
}