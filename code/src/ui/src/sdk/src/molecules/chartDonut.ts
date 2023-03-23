import { Molecule } from "./molecule";
import { IMolecules } from "../interfaces";
import { 
    PropertyBoolean,
    PropertyRange,
    PropertyStringSelectable,
    PropertyPixelSelectable,
    PropertyBevelSelectable,
    PropertyElevationSelectable,
} from "../common/props";

/**
 * The Chart Donut molecule.
 * @category Molecules
 */
export class ChartDonut extends Molecule {
    
    /** The cutoout thickness property */
    public cutoutThickness: PropertyRange;
    /** The segment border radius property */
    public segmentBorderRadius: PropertyStringSelectable;
    /** The space between segments property */
    public spaceBetweenSegments: PropertyPixelSelectable;
    /** The segment elevation property */
    public segmentElevation: PropertyElevationSelectable;
    /** The segment bevel property */
    public segmentBevel: PropertyBevelSelectable;
    /** The container display property */
    public containerDisplay: PropertyBoolean;
    /** The container padding property */
    public containerPadding: PropertyPixelSelectable;
    /** The container reverse bevel property */
    public containerReverseBevel: PropertyBevelSelectable;
    /** The center display property */
    public centerDisplay: PropertyBoolean;

    constructor(molecules: IMolecules) {
        super("Donut Chart", molecules);
        this.cutoutThickness = new PropertyRange("Cut out thickness", 0, 100, false, this);
        this.segmentBorderRadius = new PropertyStringSelectable("Segment Border Radius", false, this, {selectables: ["0px", "4px", "8px", "16px", "24px", "Rounded"]});
        this.spaceBetweenSegments = new PropertyPixelSelectable("Space between segments", false, this, [2, 4, 8, 16]);
        this.segmentElevation = new PropertyElevationSelectable("Segment Elevation", false, this, 0, 9);
        this.segmentBevel = new PropertyBevelSelectable("Segment Bevel", false, this, 0, 3);
        this.containerDisplay = new PropertyBoolean("Container Display", false, this);
        this.containerPadding = new PropertyPixelSelectable("Container Padding", false, this, [4, 8, 16, 24, 32]);
        this.containerReverseBevel = new PropertyBevelSelectable("Container Reverse Bevel", false, this, 3, 0);
        this.centerDisplay = new PropertyBoolean("Center Display", false, this);
    }

    public deserialize(obj: any) {
        if (!obj) return;
        super.deserialize(obj);
        this.cutoutThickness.deserialize(obj.cutoutThickness);
        this.segmentBorderRadius.deserialize(obj.segmentBorderRadius);
        this.spaceBetweenSegments.deserialize(obj.spaceBetweenSegments);
        this.segmentElevation.deserialize(obj.segmentElevation);
        this.segmentBevel.deserialize(obj.segmentBevel);
        this.containerDisplay.deserialize(obj.containerDisplay);
        this.containerPadding.deserialize(obj.containerPadding);
        this.centerDisplay.deserialize(obj.centerDisplay);
    }

    public serialize(): any {
        const obj: any = {};
        obj.cutoutThickness = this.cutoutThickness.serialize();
        obj.segmentBorderRadius = this.segmentBorderRadius.serialize();
        obj.spaceBetweenSegments = this.spaceBetweenSegments.serialize();
        obj.segmentElevation = this.segmentElevation.serialize();
        obj.segmentBevel = this.segmentBevel.serialize();
        obj.containerDisplay = this.containerDisplay.serialize();
        obj.containerPadding = this.containerPadding.serialize();
        obj.centerDisplay = this.centerDisplay.serialize();
        return obj;
    }
}