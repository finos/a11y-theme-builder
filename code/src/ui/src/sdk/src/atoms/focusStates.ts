import { Atom } from "./atom";
import { IAtoms } from "../interfaces";
import { PropertyBoolean, PropertyStringSelectable } from "../common/props";

/**
 * The focus states atom.
 * @category Atoms
 */
export class FocusStates extends Atom {

    /** The focus color property */
    public focusColor: PropertyStringSelectable;
    /** The add focus blur property */
    public addFocusBlur: PropertyBoolean;

    constructor(atoms: IAtoms) {
        super("Focus States", false, atoms);
        this.addDependency(atoms.colorThemes);
        this.focusColor = new PropertyStringSelectable("Focus Color", false, this, {selectables: ["Theme Color", "Default Blue"]});
        this.addFocusBlur = new PropertyBoolean("Add focus blur?", false, this, {defaultValue: true});
    }

    public deserialize(obj: any) {
        if (!obj) return;
        super.deserialize(obj);
        this.focusColor.deserialize(obj.focusColor);
        this.addFocusBlur.deserialize(obj.addFocusBlur);
    }

    public serialize(): any {
        const obj: any = {};
        obj.focusColor = this.focusColor.serialize();
        obj.addFocusBlur = this.addFocusBlur.serialize();
        return obj;
    }
}