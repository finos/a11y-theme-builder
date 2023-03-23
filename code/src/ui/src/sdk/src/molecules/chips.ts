import { Molecule } from "./molecule";
import { IMolecules } from "../interfaces";
import { 
    PropertyStringSelectable,
    PropertyPixel,
    PropertyBevelSelectable,
    PropertyElevationSelectable,
    PropertyNumber,
    PropertyNumberSelectable,
} from "../common/props";

/**
 * The chips molecule.
 * @category Molecules
 */
export class Chips extends Molecule {
    
    /** The minimum width property */
    public minWidth: PropertyNumber;
    /** The visible height property */
    public visibleHeight: PropertyNumberSelectable;
    /** The radius property */
    public radius: PropertyNumberSelectable;
    /** The horizontal padding property */
    public horizontalPadding: PropertyNumberSelectable;
    /** The text property */
    public text: PropertyStringSelectable;
    /** The elevation property */
    public elevation: PropertyElevationSelectable;
    /** The bevel property */
    public bevel: PropertyBevelSelectable;

   constructor(molecules: IMolecules) {
        super("Chips", molecules);
        this.minWidth = new PropertyPixel("Chip Min Width", false, this, {defaultValue: 80});
        this.visibleHeight = new PropertyNumberSelectable("Visible Height", false, this, {selectables: [4, 5, 6, 7, 8], defaultValue: 5});
        this.radius = new PropertyNumberSelectable("Chip Radius", false, this, {selectables: [0, 1, 2, 3, 4, 5, 6, 7, 8], defaultValue: 2});
        this.horizontalPadding = new PropertyNumberSelectable("Horizontal Padding", false, this, {selectables: [1, 2, 3, 4, 5], defaultValue: 2});
        this.text = new PropertyStringSelectable("Chip Text", false, this, {
            selectables: ["Caption", "Caption Bold"],
            defaultValue: "Caption",
        });
        this.elevation = new PropertyElevationSelectable("Chip Elevation", false, this, 0, 9, 2);
        this.bevel = new PropertyBevelSelectable("Chip Bevel", false, this, 3, 3);
    }

    public deserialize(obj: any) {
        if (!obj) return;
        super.deserialize(obj);
        this.minWidth.deserialize(obj.minWidth);
        this.visibleHeight.deserialize(obj.visibleHeight);
        this.radius.deserialize(obj.radius);
        this.horizontalPadding.deserialize(obj.horizontalPadding);
        this.text.deserialize(obj.text);
        this.elevation.deserialize(obj.elevation);
        this.bevel.deserialize(obj.bevel);
    }

    public serialize(): any {
        const obj: any = {};
        obj.minWidth = this.minWidth.serialize();
        obj.visibleHeight = this.visibleHeight.serialize();
        obj.radius = this.radius.serialize();
        obj.horizontalPadding = this.horizontalPadding.serialize();
        obj.text = this.text.serialize();
        obj.elevation = this.elevation.serialize();
        obj.bevel = this.bevel.serialize();
        return obj;
    }
}