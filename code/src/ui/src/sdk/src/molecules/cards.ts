import { Molecule } from "./molecule";
import { IMolecules } from "../interfaces";
import { PropertyPixel, 
    PropertyBevelSelectable, 
    PropertyElevationSelectable,
    PropertyNumberSelectable,
} from "../common/props";

/**
 * The cards molecule.
 * @category Molecules
 */
export class Cards extends Molecule {
    
    /** The card minimum width property */
    public minWidth: PropertyPixel;
    /** The card minimum height property */
    public minHeight: PropertyPixel;
    /** The card border radius property */
    public borderRadius: PropertyNumberSelectable;
    /** The card padding property */
    public padding: PropertyNumberSelectable;
    /** The card content gap property */
    public contentGap: PropertyNumberSelectable;
    /** The card elevation property */
    public elevation: PropertyElevationSelectable;
    /** The card bevel property */
    public bevel: PropertyBevelSelectable;

    constructor(molecules: IMolecules) {
        super("Cards", molecules);
        this.minWidth = new PropertyPixel("Min Width", false, this, {defaultValue: 80});
        this.minHeight = new PropertyPixel("Min Height", false, this, {defaultValue: 80});
        this.borderRadius = new PropertyNumberSelectable("Border Radius", false, this, {selectables: [4/8, 1, 2, 3, 4, 5, 6, 7], defaultValue: 3});
        this.padding = new PropertyNumberSelectable("Padding", false, this, {selectables: [2, 3, 4, 5], defaultValue: 2});
        this.contentGap = new PropertyNumberSelectable("Content Gap", false, this, {selectables: [1, 2, 3, 4, 5], defaultValue: 2});
        this.elevation = new PropertyElevationSelectable("Card Elevation", false, this, 0, 9, 2);
        this.bevel = new PropertyBevelSelectable("Card Bevel", false, this, 3, 9);
    }

    public deserialize(obj: any) {
        if (!obj) return;
        super.deserialize(obj);
        this.minWidth.deserialize(obj.minWidth);
        this.minHeight.deserialize(obj.minHeight);
        this.borderRadius.deserialize(obj.borderRadius);
        this.padding.deserialize(obj.padding);
        this.contentGap.deserialize(obj.contentGap);
        this.elevation.deserialize(obj.elevation);
        this.bevel.deserialize(obj.bevel);
    }

    public serialize(): any {
        const obj: any = {};
        obj.minWidth = this.minWidth.serialize();
        obj.minHeight = this.minHeight.serialize();
        obj.borderRadius = this.borderRadius.serialize();
        obj.padding = this.padding.serialize();
        obj.contentGap = this.contentGap.serialize();
        obj.elevation = this.elevation.serialize();
        obj.bevel = this.bevel.serialize();
        return obj;
    }
}