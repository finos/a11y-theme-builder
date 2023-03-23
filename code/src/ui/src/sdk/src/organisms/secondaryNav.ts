import { IOrganisms } from "../interfaces";
import { Organism } from "./organism";
import { PropertyBoolean, PropertyPixelSelectable, PropertyButtonText } from "../common/props";

/**
 * The secondary nav organism.
 * @category Organisms
 */
export class SecondaryNav extends Organism {
    
    /** The sticky property */
    public sticky: PropertyBoolean;
    /** The vertical padding property */
    public verticalPadding: PropertyPixelSelectable;
    /** The horizontal tab padding property */
    public horizontalTabPadding: PropertyPixelSelectable;
    /** The nav text property */
    public navText: PropertyButtonText;

    constructor(organisms: IOrganisms) {
        super("Secondary Nav", organisms);
        this.sticky = new PropertyBoolean("Sticky", false, this);
        this.verticalPadding = new PropertyPixelSelectable("Vertical Padding", false, this, [4, 8, 16, 24]);
        this.horizontalTabPadding = new PropertyPixelSelectable("Horizontal Tab Padding", false, this, [4, 8, 16, 24]);
        this.navText = new PropertyButtonText("Nav Text", false, this);
    }

    public deserialize(obj: any) {
        if (!obj) return;
        super.deserialize(obj);
        this.sticky.deserialize(obj.sticky);
        this.verticalPadding.deserialize(obj.verticalPadding);
        this.horizontalTabPadding.deserialize(obj.horizontalTabPadding);
        this.navText.deserialize(obj.navText);
    }

    public serialize(): any {
        const obj: any = {};
        obj.sticky = this.sticky.serialize();
        obj.verticalPadding = this.verticalPadding.serialize();
        obj.horizontalTabPadding = this.horizontalTabPadding.serialize();
        obj.navText = this.navText.serialize();
        return obj;
    }
}