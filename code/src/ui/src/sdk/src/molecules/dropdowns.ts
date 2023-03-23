import { Molecule } from "./molecule";
import { IMolecules } from "../interfaces";
import { PropertyStringSelectable, PropertyNumberSelectable, PropertyElevationSelectable } from "../common/props";

/**
 * The dropdowns molecule.
 * @category Molecules
 */
export class Dropdowns extends Molecule {
    
    /** The menu focus state property */
    public menuFocusState: PropertyStringSelectable;
    /** The menu elevation property */
    public menuElevation: PropertyElevationSelectable;
    /** The border radius property */
    public borderRadius: PropertyNumberSelectable;

    constructor(molecules: IMolecules) {
        super("Dropdowns", molecules);
        this.menuFocusState = new PropertyStringSelectable("Dropdown Menu Focus State", true, this, {
            selectables: ["Full Color", "Left border only"],
            defaultValue: "Left border only",
        });
        this.menuElevation = new PropertyElevationSelectable("Open Dropdown Menu Elevation", true, this, 0, 9, 2);
        this.borderRadius = new PropertyNumberSelectable("Dropdown Border Radius", true, this, {selectables: [0, 0.5, 1, 2], defaultValue: 1});
    }

    public deserialize(obj: any) {
        if (!obj) return;
        super.deserialize(obj);
        this.menuFocusState.deserialize(obj.menuFocusState);
        this.borderRadius.deserialize(obj.borderRadius);
        this.menuElevation.deserialize(obj.menuElevation);
    }

    public serialize(): any {
        const obj: any = {};
        obj.menuFocusState = this.menuFocusState.serialize();
        obj.borderRadius = this.borderRadius.serialize();
        obj.menuElevation = this.menuElevation.serialize();
        return obj;
    }
}