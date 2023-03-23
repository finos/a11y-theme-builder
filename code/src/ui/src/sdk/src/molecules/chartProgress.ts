import { Molecule } from "./molecule";
import { IMolecules } from "../interfaces";
import { 
    PropertyRange,
    PropertyStringSelectable,
    PropertyPixelSelectable,
    PropertyBevelSelectable,
    PropertyElevationSelectable,
} from "../common/props";

/**
 * The chart progress molecule.
 * @category Molecules
 */
export class ChartProgress extends Molecule {
    
    /** The cutout thickness range property */
    public cutoutThickness: PropertyRange;
    /** The segment elevation property */
    public segmentElevation: PropertyElevationSelectable;
    /** The segment bevel property */
    public segmentBevel: PropertyBevelSelectable;
    /** The container padding property */
    public containerPadding: PropertyPixelSelectable;
    /** The container reverse padding property */
    public containerReverseBevel: PropertyBevelSelectable;
    /** The starting position property */
    public startingPosition: PropertyStringSelectable;

    constructor(molecules: IMolecules) {
        super("Progress Charts", molecules);
        this.cutoutThickness = new PropertyRange("Cut out thickness", 0, 100, false, this);
        this.segmentElevation = new PropertyElevationSelectable("Segment Elevation", false, this, 0, 9);
        this.segmentBevel = new PropertyBevelSelectable("Segment Bevel", false, this, 0, 3);
        this.containerPadding = new PropertyPixelSelectable("Container Padding", false, this, [0, 2, 4, 8, 16, 24, 32]);
        this.containerReverseBevel = new PropertyBevelSelectable("Container Reverse Bevel", false, this, 3, 0);
        this.startingPosition = new PropertyStringSelectable("Starting position", false, this, {selectables: ["Top", "Bottom"]});
    }

    public deserialize(obj: any) {
        if (!obj) return;
        super.deserialize(obj);
        this.cutoutThickness.deserialize(obj.cutoutThickness);
        this.segmentElevation.deserialize(obj.segmentElevation);
        this.segmentBevel.deserialize(obj.segmentBevel);
        this.containerPadding.deserialize(obj.containerPadding);
        this.containerReverseBevel.deserialize(obj.containerReverseBevel);
        this.startingPosition.deserialize(obj.startingPosition);
    }

    public serialize(): any {
        const obj: any = {};
        obj.cutoutThickness = this.cutoutThickness.serialize();
        obj.segmentElevation = this.segmentElevation.serialize();
        obj.segmentBevel = this.segmentBevel.serialize();
        obj.containerPadding = this.containerPadding.serialize();
        obj.containerReverseBevel = this.containerReverseBevel.serialize();
        obj.startingPosition = this.startingPosition.serialize();
        return obj;
    }
}