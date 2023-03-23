import { Molecule } from "./molecule";
import { IMolecules } from "../interfaces";
import { PropertyPixelSelectable, PropertyNumberSelectable, PropertyElevationSelectable, PropertyShadowSelectable } from "../common/props";

/**
 * The toasts molecule.
 * @category Molecules
 */
export class Toasts extends Molecule {
    
    /** The handle border radius property */
    public handleBorderRadius: PropertyNumberSelectable;
    /** The gap property */
    public gap: PropertyPixelSelectable;
    /** The elevation property */
    public elevation: PropertyElevationSelectable;

    constructor(molecules: IMolecules) {
        super("Toasts", molecules);
        this.handleBorderRadius = new PropertyNumberSelectable("Handle Border Radius", false, this, {selectables: [0,8/8,16/8,24/8,32/8,40/8,48/8,56/8,64/8], defaultValue: 1});
        this.gap = new PropertyPixelSelectable("Gap", false, this, [8,16,24,32,40,44], 24);
        this.elevation = new PropertyElevationSelectable("Toast Elevation", false, this, 0, 9);
    }

    public deserialize(obj: any) {
        if (!obj) return;
        super.deserialize(obj);
        this.handleBorderRadius.deserialize(obj.handleBorderRadius);
        this.gap.deserialize(obj.gap);
        this.elevation.deserialize(obj.elevation);
    }

    public serialize(): any {
        const obj: any = {};
        obj.handleBorderRadius = this.handleBorderRadius.serialize();
        obj.gap = this.gap.serialize();
        obj.elevation = this.elevation.serialize();
        return obj;
    }
}