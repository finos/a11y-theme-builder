import { IOrganisms } from "../interfaces";
import { Organism } from "./organism";
import { PropertyStringSelectable, PropertyPixelSelectable } from "../common/props";

/**
 * The hero organism.
 * @category Organisms
 */
export class Hero extends Organism {
    
    /** The hero available colors property */
    public availableColors: PropertyStringSelectable;
    /** The hero vertical gap property */
    public verticalGap: PropertyPixelSelectable;
    /** The hero title property */
    public title: PropertyStringSelectable;
    /** The hero body property */
    public body: PropertyStringSelectable;

    constructor(organisms: IOrganisms) {
        super("Hero", organisms);
        this.availableColors = new PropertyStringSelectable("Available Colors", false, this, {selectables: ["Colored", "Black", "White"]});
        this.verticalGap = new PropertyPixelSelectable("Hero Vertical Gap", false, this, [8, 16, 24, 32, 40]);
        this.title = new PropertyStringSelectable("Hero Title", false, this, {selectables: ["Display 1", "Display 2", "H1"]});
        this.body = new PropertyStringSelectable("Hero Body", false, this, {
            selectables: ["Body 1", "Body 2", "Body 3", "Body 1 - Bold", "Body 2 - Bold", "Body 3 - Bold"]
        });
    }

    public deserialize(obj: any) {
        if (!obj) return;
        super.deserialize(obj);
        this.availableColors.deserialize(obj.availableColors);
        this.verticalGap.deserialize(obj.verticalGap);
        this.title.deserialize(obj.title);
        this.body.deserialize(obj.body);
    }

    public serialize(): any {
        const obj: any = {};
        obj.availableColors = this.availableColors.serialize();
        obj.verticalGap = this.verticalGap.serialize();
        obj.title = this.title.serialize();
        obj.body = this.body.serialize();
        return obj;
    }
}