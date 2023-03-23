import { Molecule } from "./molecule";
import { IMolecules } from "../interfaces";
import { 
    PropertyBoolean,
    PropertyPixelSelectable,
    PropertyBackgroundColorStyle,
    PropertyBevelSelectable,
    PropertyElevationSelectable,
} from "../common/props";

/**
 * The Chart Bar molecule.
 * @category Molecules
 */
export class ChartBar extends Molecule {
    
    /** The chart bar background color property  */
    public barBackgroundColor: PropertyBackgroundColorStyle;
    /** The chart bar width property  */
    public barWidth: PropertyPixelSelectable;
    /** The chart bar radius property  */
    public barRadius: PropertyPixelSelectable;
    /** The chart border property  */
    public chartBorder: PropertyPixelSelectable;
    /** The bar elevation property  */
    public barElevation: PropertyElevationSelectable;
    /** The bar bevel property  */
    public barBevel: PropertyBevelSelectable;
    /** The chart line display property  */
    public chartLinesDisplay: PropertyBoolean;
    /** The Y labels display property  */
    public yLabelsDisplay: PropertyBoolean;

    constructor(molecules: IMolecules) {
        super("Bar Chart", molecules);
        this.barBackgroundColor = new PropertyBackgroundColorStyle("Line Background Color", false, this);
        this.barWidth = new PropertyPixelSelectable("Bar Width", false, this, [8, 16, 24, 32, 40, 48, 56]);
        this.barRadius = new PropertyPixelSelectable("Bar Radius", false, this, [0, 4, 8, 16, 24, 32, 40, 48, 56]);
        this.chartBorder = new PropertyPixelSelectable("Chart Border", false, this, [1, 2, 3, 4]);
        this.barElevation = new PropertyElevationSelectable("Bar Elevation", false, this, 0, 9);
        this.barBevel = new PropertyBevelSelectable("Bar Bevel", false, this, 3, 3);
        this.chartLinesDisplay = new PropertyBoolean("Chart Lines Display", false, this);
        this.yLabelsDisplay = new PropertyBoolean("Y Labels Display", false, this);
    }

    public deserialize(obj: any) {
        if (!obj) return;
        super.deserialize(obj);
        this.barBackgroundColor.deserialize(obj.barBackgroundColor);
        this.barWidth.deserialize(obj.barWidth);
        this.barRadius.deserialize(obj.barRadius);
        this.chartBorder.deserialize(obj.chartBorder);
        this.barElevation.deserialize(obj.barElevation);
        this.barBevel.deserialize(obj.barBevel);
        this.chartLinesDisplay.deserialize(obj.chartLinesDisplay);
        this.yLabelsDisplay.deserialize(obj.yLabelsDisplay);
    }

    public serialize(): any {
        const obj: any = {};
        obj.barBackgroundColor = this.barBackgroundColor.serialize();
        obj.barWidth = this.barWidth.serialize();
        obj.barRadius = this.barRadius.serialize();
        obj.chartBorder = this.chartBorder.serialize();
        obj.barElevation = this.barElevation.serialize();
        obj.barBevel = this.barBevel.serialize();
        obj.chartLinesDisplay = this.chartLinesDisplay.serialize();
        obj.yLabelsDisplay = this.yLabelsDisplay.serialize();
        return obj;
    }
}