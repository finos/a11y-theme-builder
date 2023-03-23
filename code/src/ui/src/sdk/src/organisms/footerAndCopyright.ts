import { IOrganisms } from "../interfaces";
import { Organism } from "./organism";
import { PropertyStringSelectable, PropertyPixelSelectable } from "../common/props";

/**
 * The footer and copyright organism.
 * @category Organisms
 */
export class FooterAndCopyright extends Organism {
    
    /** The footer background property */
    public footerBackground: PropertyStringSelectable;
    /** The footer vertical padding property */
    public footerVerticalPadding: PropertyPixelSelectable;
    /** The copyright vertical padding property */
    public copyrightVerticalPadding: PropertyPixelSelectable;

    constructor(organisms: IOrganisms) {
        super("Footer And Copyright", organisms);
        this.footerBackground = new PropertyStringSelectable("Footer background", false, this, {
            selectables: ["Primary 800/Primary 900", "Primary 800/Primary 900"] // TODO: Shouldn't be duplicate selectable values
        });
        this.footerVerticalPadding = new PropertyPixelSelectable("Footer vertical padding", false, this, [4, 8, 16, 24, 32, 40, 48]);
        this.copyrightVerticalPadding = new PropertyPixelSelectable("Copyright vertical padding", false, this, [4, 8, 16, 24]);
    }

    public deserialize(obj: any) {
        if (!obj) return;
        super.deserialize(obj);
        this.footerBackground.deserialize(obj.footerBackground);
        this.footerVerticalPadding.deserialize(obj.footerVerticalPadding);
        this.copyrightVerticalPadding.deserialize(obj.copyrightVerticalPadding);
    }

    public serialize(): any {
        const obj: any = {};
        obj.footerBackground = this.footerBackground.serialize();
        obj.footerVerticalPadding = this.footerVerticalPadding.serialize();
        obj.copyrightVerticalPadding = this.copyrightVerticalPadding.serialize();
        return obj;
    }
}