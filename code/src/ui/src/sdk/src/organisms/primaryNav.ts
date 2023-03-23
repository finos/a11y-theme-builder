import { IOrganisms } from "../interfaces";
import { Organism } from "./organism";
import { PropertyBoolean, PropertyPixelSelectable, PropertyButtonText } from "../common/props";

/**
 * The primary nav organism.
 * @category Organisms
 */
export class PrimaryNav extends Organism {
    
    /** The fixed property */
    public fixed: PropertyBoolean;
    /** The vertical padding property */
    public verticalPadding: PropertyPixelSelectable;
    /** The horizontal tab padding property */
    public horizontalTabPadding: PropertyPixelSelectable;
    /** The nav text property */
    public navText: PropertyButtonText;

    constructor(organisms: IOrganisms) {
        super("Primary Nav", organisms);
        this.fixed = new PropertyBoolean("Fixed", false, this);
        this.verticalPadding = new PropertyPixelSelectable("Vertical Padding", false, this, [4, 8, 16, 24]);
        this.horizontalTabPadding = new PropertyPixelSelectable("Horizontal Tab Padding", false, this, [4, 8, 16, 24]);
        this.navText = new PropertyButtonText("Nav Text", false, this);
    }

    public deserialize(obj: any) {
        if (!obj) return;
        super.deserialize(obj);
        this.fixed.deserialize(obj.fixed);
        this.verticalPadding.deserialize(obj.verticalPadding);
        this.horizontalTabPadding.deserialize(obj.horizontalTabPadding);
        this.navText.deserialize(obj.navText);
    }

    public serialize(): any {
        const obj: any = {};
        obj.fixed = this.fixed.serialize();
        obj.verticalPadding = this.verticalPadding.serialize();
        obj.horizontalTabPadding = this.horizontalTabPadding.serialize();
        obj.navText = this.navText.serialize();
        return obj;
    }
}