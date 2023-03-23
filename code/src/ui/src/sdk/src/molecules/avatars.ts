import { Molecule } from "./molecule";
import { IMolecules } from "../interfaces";
import { PropertyPixelSelectable, PropertyElevationSelectable } from "../common/props";

/**
 * The avatars molecule.
 * @category Molecules
 */
export class Avatars extends Molecule {
    
    /** The medium border property */
    public mediumBorder: PropertyPixelSelectable;
    /** The extra large border property */
    public extraLargeBorder: PropertyPixelSelectable;
    /** The elevation property */
    public elevation: PropertyElevationSelectable;

    constructor(molecules: IMolecules) {
        super("Avatars", molecules);
        this.mediumBorder = new PropertyPixelSelectable("Medium Avatar Border", false, this, [0, 0.5, 1, 2, 3, 4], 2);
        this.extraLargeBorder = new PropertyPixelSelectable("Extra Large Avatar Border", false, this, [0, 0.5, 1, 2, 3, 4, 5, 6, 7, 8], 2);
        this.elevation = new PropertyElevationSelectable("Avatar Elevation", false, this, 0, 9);
    }

    public deserialize(obj: any) {
        if (!obj) return;
        super.deserialize(obj);
        this.mediumBorder.deserialize(obj.mediumBorder);
        this.extraLargeBorder.deserialize(obj.extraLargeBorder);
        this.elevation.deserialize(obj.elevation);
    }

    public serialize(): any {
        const obj: any = {};
        obj.mediumBorder = this.mediumBorder.serialize();
        obj.extraLargeBorder = this.extraLargeBorder.serialize();
        obj.elevation = this.elevation.serialize();
        return obj;
    }
}