import { Atom } from "./atom";
import { IAtoms } from "../interfaces";
import { PropertyStringSelectable } from "../common/props";

/**
 * The ColorBlind atom.
 * @category Atoms
 */
export class ColorBlind extends Atom {

    /** The available color blind themes property */
    public availableColorblindThemes: PropertyStringSelectable;

    constructor(atoms: IAtoms) {
        super("Color Blind", false, atoms);
        this.addDependency(atoms.colorThemes);
        this.availableColorblindThemes = new PropertyStringSelectable("Available Colorblind Themes", false, this, {
            selectables: ["None", "Protanopia", "Deuteranopia", "Tritanopia", "Monochrome"]
        });
    }

    public deserialize(obj: any) {
        if (!obj) return;
        super.deserialize(obj);
        this.availableColorblindThemes.deserialize(obj.availableColorblindThemes);
    }

    public serialize(): any {
        const obj: any = {};
        obj.availableColorblindThemes = this.availableColorblindThemes.serialize();
        return obj;
    }
}