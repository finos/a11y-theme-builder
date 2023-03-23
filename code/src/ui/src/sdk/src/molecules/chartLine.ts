import { Molecule } from "./molecule";
import { IMolecules } from "../interfaces";
import { 
    PropertyBoolean,
    PropertyPixelSelectable,
    PropertyBackgroundColorStyle,
    PropertyElevationSelectable,
} from "../common/props";

/**
 * The chart line molecule.
 * @category Molecules
 */
export class ChartLine extends Molecule {
    
    /** The line background color style property */
    public lineBackgroundColor: PropertyBackgroundColorStyle;
    /** The line width property */
    public lineWidth: PropertyPixelSelectable;
    /** The line elevation property */
    public lineElevation: PropertyElevationSelectable;
    /** The chart lines display property */
    public chartLinesDisplay: PropertyBoolean;
    /** The Y labels display property */
    public yLabelsDisplay: PropertyBoolean;

    constructor(molecules: IMolecules) {
        super("Line Chart", molecules);
        this.lineBackgroundColor = new PropertyBackgroundColorStyle("Line Background Color", false, this);
        this.lineWidth = new PropertyPixelSelectable("Line Width", false, this, [1, 2, 3, 4]);
        this.lineElevation = new PropertyElevationSelectable("Line Elevation", false, this, 0, 9);
        this.chartLinesDisplay = new PropertyBoolean("Chart Lines Display", false, this);
        this.yLabelsDisplay = new PropertyBoolean("Y Labels Display", false, this);
    }

    public deserialize(obj: any) {
        if (!obj) return;
        super.deserialize(obj);
        this.lineBackgroundColor.deserialize(obj.lineBackgroundColor);
        this.lineWidth.deserialize(obj.lineWidth);
        this.lineElevation.deserialize(obj.lineElevation);
        this.chartLinesDisplay.deserialize(obj.chartLinesDisplay);
        this.yLabelsDisplay.deserialize(obj.yLabelsDisplay);
    }

    public serialize(): any {
        const obj: any = {};
        obj.lineBackgroundColor = this.lineBackgroundColor.serialize();
        obj.lineWidth = this.lineWidth.serialize();
        obj.lineElevation = this.lineElevation.serialize();
        obj.chartLinesDisplay = this.chartLinesDisplay.serialize();
        obj.yLabelsDisplay = this.yLabelsDisplay.serialize();
        return obj;
    }
}