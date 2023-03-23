import { IOrganisms } from "../interfaces";
import { Organism } from "./organism";
import { 
    PropertyStringSelectable,
    PropertyPixelSelectable,
    PropertyElevationSelectable,
    PropertyButtonText,
} from "../common/props";

/**
 * The data tables organism.
 * @category Organisms
 */
export class DataTables extends Organism {
    
    /** The available colors property */
    public availableColors: PropertyStringSelectable;
    /** The padding property */
    public padding: PropertyPixelSelectable;
    /** The header text property */
    public headerText: PropertyButtonText;
    /** The elevation property */
    public elevation: PropertyElevationSelectable;

    constructor(organisms: IOrganisms) {
        super("Data Tables", organisms);
        this.availableColors = new PropertyStringSelectable("Available Colors", false, this, {selectables: ["Colored", "Black", "White"]});
        this.padding = new PropertyPixelSelectable("Table Padding", false, this, [4, 8, 16]);
        this.headerText = new PropertyButtonText("Table Header Text", false, this);
        this.elevation = new PropertyElevationSelectable("Avatar Elevation", false, this, 0, 9);
    }

    public deserialize(obj: any) {
        if (!obj) return;
        super.deserialize(obj);
        this.availableColors.deserialize(obj.availableColors);
        this.padding.deserialize(obj.padding);
        this.headerText.deserialize(obj.headerText);
        this.elevation.deserialize(obj.elevation);
    }

    public serialize(): any {
        const obj: any = {};
        obj.availableColors = this.availableColors.serialize();
        obj.padding = this.padding.serialize();
        obj.headerText = this.headerText.serialize();
        obj.elevation = this.elevation.serialize();
        return obj;
    }
}