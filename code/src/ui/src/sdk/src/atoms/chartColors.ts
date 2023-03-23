import { Atom } from "./atom";
import { IAtoms } from "../interfaces";
import { PropertyStringSelectable } from "../common/props";

/**
 * The ChartColors atom.
 * @category Atoms
 */
export class ChartColors extends Atom {

    /** The options property */
    public options: PropertyStringSelectable;

    constructor(atoms: IAtoms) {
        super("Chart Colors", false,atoms);
        this.addDependency(atoms.colorThemes);
        this.options = new PropertyStringSelectable("Options", false, this, {
            selectables: ["Default", "Complementary", "Analagous", "Triad", "Tetrad", "Color Blind"]
        });
    }

    public deserialize(obj: any) {
        if (!obj) return;
        super.deserialize(obj);
        this.options.deserialize(obj.options);
    }

    public serialize(): any {
        const obj: any = {};
        obj.options = this.options.serialize();
        return obj;
    }
}