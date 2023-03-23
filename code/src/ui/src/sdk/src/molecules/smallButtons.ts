import { Molecule } from "./molecule";
import { IMolecules } from "../interfaces";
import { PropertyStringSelectable, PropertyNumberSelectable } from "../common/props";

/**
 * The small buttons molecule.
 * @category Molecules
 */
export class SmallButtons extends Molecule {
    
    /** The visible height property */
    public visibleHeight: PropertyNumberSelectable;
    /** The horizontal padding property */
    public horizontalPadding: PropertyNumberSelectable;
    /** The button text property */
    public buttonText: PropertyStringSelectable;

    constructor(molecules: IMolecules) {
        super("Small Buttons", molecules);
        this.visibleHeight = new PropertyNumberSelectable("Visible Height", false, this, {selectables: [24/8, 32/8, 40/8, 44/8], defaultValue: 32/8});
        this.horizontalPadding = new PropertyNumberSelectable("Horizontal Padding", false, this, {selectables: [16/8, 24/8, 32/8, 48/8], defaultValue: 16/8});
        this.buttonText = new PropertyStringSelectable("Button Text", false, this, {
            selectables: ["CTA LARGE", "CTA Small"],
            defaultValue: "CTA Small",
        });
    }

    public deserialize(obj: any) {
        if (!obj) return;
        super.deserialize(obj);
        this.visibleHeight.deserialize(obj.visibleHeight);
        this.horizontalPadding.deserialize(obj.horizontalPadding);
        this.buttonText.deserialize(obj.buttonText);
    }

    public serialize(): any {
        const obj: any = {};
        obj.visibleHeight = this.visibleHeight.serialize();
        obj.horizontalPadding = this.horizontalPadding.serialize();
        obj.buttonText = this.buttonText.serialize();
        return obj;
    }
}