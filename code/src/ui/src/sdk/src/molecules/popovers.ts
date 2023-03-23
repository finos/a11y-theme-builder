import { Molecule } from "./molecule";
import { IMolecules } from "../interfaces";
import { PropertyNumberSelectable, PropertyElevationSelectable, PropertyBevelSelectable } from "../common/props";

/**
 * The popovers molecule.
 * @category Molecules
 */
export class Popovers extends Molecule {
    
    /** The border radius property */
    public borderRadius: PropertyNumberSelectable;
    /** The elevation property */
    public elevation: PropertyElevationSelectable;
    /** The bevel property */
    public bevel: PropertyBevelSelectable;

    constructor(molecules: IMolecules) {
        super("Popovers", molecules);
        this.borderRadius = new PropertyNumberSelectable("Border Radius", false, this, {selectables: [0, 1, 2, 3], defaultValue: 1});
        this.elevation = new PropertyElevationSelectable("Popover Elevation", false, this, 0, 9, 0);
        this.bevel = new PropertyBevelSelectable("Popover Bevel", false, this, 0, 9);
    }

    public deserialize(obj: any) {
        if (!obj) return;
        super.deserialize(obj);
        this.borderRadius.deserialize(obj.borderRadius);
        this.elevation.deserialize(obj.elevation);
        this.bevel.deserialize(obj.bevel);
    }

    public serialize(): any {
        const obj: any = {};
        obj.borderRadius = this.borderRadius.serialize();
        obj.elevation = this.elevation.serialize();
        obj.bevel = this.bevel.serialize();
        return obj;
    }
}