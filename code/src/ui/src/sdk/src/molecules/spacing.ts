import { Molecule } from "./molecule";
import { IMolecules } from "../interfaces";
import { PropertyPixelSelectable } from "../common/props";

/**
 * The spacing molecule.
 * @category Molecules
 */
export class Spacing extends Molecule {
    
    /** The section padding property */
    public sectionPadding: PropertyPixelSelectable;
    /** The paragraph padding property */
    public paragraphPadding: PropertyPixelSelectable;

    constructor(molecules: IMolecules) {
        super("Spacing", molecules);
        this.sectionPadding = new PropertyPixelSelectable("Section Padding", false, this, [16, 24, 32, 40, 48, 56, 64, 72, 80], 24);
        this.paragraphPadding = new PropertyPixelSelectable("Paragraph Padding", false, this, [8, 16, 24, 32, 40], 8);
    }

    public deserialize(obj: any) {
        if (!obj) return;
        super.deserialize(obj);
        this.sectionPadding.deserialize(obj.sectionPadding);
        this.paragraphPadding.deserialize(obj.paragraphPadding);
    }

    public serialize(): any {
        const obj: any = {};
        obj.sectionPadding = this.sectionPadding.serialize();
        obj.paragraphPadding = this.paragraphPadding.serialize();
        return obj;
    }
}