import { Molecule } from "./molecule";
import { IMolecules } from "../interfaces";
import { 
    PropertyBoolean,
    PropertyPixelSelectable,
    PropertyBevelSelectable,
    PropertyElevationSelectable,
} from "../common/props";

/**
 * The chart pie molecule.
 * @category Molecules
 */
export class ChartPie extends Molecule {
    
    /** The segment radius property */
    public segmentRadius: PropertyPixelSelectable;
    /** The space between segments property */
    public spaceBetweenSegments: PropertyPixelSelectable;
    /** The progress elevation property */
    public progressElevation: PropertyElevationSelectable;
    /** The progress bevel property */
    public progressBevel: PropertyBevelSelectable;
    /** The container display property */
    public containerDisplay: PropertyBoolean;
    /** The container padding property */
    public containerPadding: PropertyPixelSelectable;
    /** The container reverse padding property */
    public containerReverseBevel: PropertyBevelSelectable;

    constructor(molecules: IMolecules) {
        super("Pie Chart", molecules);
        this.segmentRadius = new PropertyPixelSelectable("Segment Radius", false, this, [0, 4, 8, 16]);
        this.spaceBetweenSegments = new PropertyPixelSelectable("Space between segments", false, this, [2, 4, 8, 16]);
        this.progressElevation = new PropertyElevationSelectable("Progress Elevation", false, this, 0, 9);
        this.progressBevel = new PropertyBevelSelectable("Progress Bevel", false, this, 3, 3);
        this.containerDisplay = new PropertyBoolean("Container Display", false, this);
        this.containerPadding = new PropertyPixelSelectable("Container Padding", false, this, [4, 8, 16, 24, 32]);
        this.containerReverseBevel = new PropertyBevelSelectable("Container Reverse Bevel", false, this, 3, 0);
    }

    public deserialize(obj: any) {
        if (!obj) return;
        super.deserialize(obj);
        this.segmentRadius.deserialize(obj.segmentRadius);
        this.spaceBetweenSegments.deserialize(obj.spaceBetweenSegments);
        this.progressElevation.deserialize(obj.progressElevation);
        this.progressBevel.deserialize(obj.progressBevel);
        this.containerDisplay.deserialize(obj.containerDisplay);
        this.containerPadding.deserialize(obj.containerPadding);
        this.containerReverseBevel.deserialize(obj.containerReverseBevel);
    }

    public serialize(): any {
        const obj: any = {};
        obj.segmentRadius = this.segmentRadius.serialize();
        obj.spaceBetweenSegments = this.spaceBetweenSegments.serialize();
        obj.progressElevation = this.progressElevation.serialize();
        obj.progressBevel = this.progressBevel.serialize();
        obj.containerDisplay = this.containerDisplay.serialize();
        obj.containerPadding = this.containerPadding.serialize();
        obj.containerReverseBevel = this.containerReverseBevel.serialize();
        return obj;
    }
}