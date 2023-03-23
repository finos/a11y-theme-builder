import { Node } from "../common/node";
import {
    PropertyNumberSelectable,
    PropertyFontFamily,
    PropertyFontRange,
    PropertyPixelRange,
    PropertyPercentageSelectable,
} from "../common/props";

/**
 * Typography styling properties used by multiple atoms.
 * 
 * @category Atoms
 */
export class TypographyStyling extends Node {

    /** The font family property */
    public fontFamily: PropertyFontFamily;
    /** The font size property */
    public fontSize: PropertyFontRange;
    /** The font weight property */
    public fontWeight: PropertyNumberSelectable;
    /** The line height property */
    public lineHeight: PropertyPercentageSelectable;
    /** The character spacing property */
    public characterSpacing: PropertyPixelRange;

    constructor(
        name: string, 
        parent: Node, 
        defaultFontSize: number, 
        defaultFontWeight: number,
        defaultLineHeight: number,
        defaultCharacterSpacing: number,
    ) {
        super(name, parent);
        this.fontFamily = new PropertyFontFamily("Font Family", false, this);
        this.fontSize = new PropertyFontRange("Font Size", false, this, 0, 128, defaultFontSize);
        this.fontWeight = new PropertyNumberSelectable("Font Weight", false, this, {
            selectables: [100, 300, 400, 500, 600, 700],
            defaultValue: defaultFontWeight,
        });
        this.lineHeight = new PropertyPercentageSelectable("Line Height", false, this, [130, 160], defaultLineHeight);
        this.characterSpacing = new PropertyPixelRange("Character Spacing", false, this, -1, 10, defaultCharacterSpacing);
    }

    public deserialize(obj: any) {
        if (!obj) return;
        super.deserialize(obj);
        this.fontFamily.deserialize(obj.fontFamily);
        this.fontSize.deserialize(obj.fontSize);
        this.fontWeight.deserialize(obj.fontWeight);
        this.lineHeight.deserialize(obj.lineHeight);
        this.characterSpacing.deserialize(obj.characterSpacing);
    }

    public serialize(): any {
        const obj: any = {};
        obj.fontFamily = this.fontFamily.serialize();
        obj.fontSize = this.fontSize.serialize();
        obj.fontWeight = this.fontWeight.serialize();
        obj.lineHeight = this.lineHeight.serialize();
        obj.characterSpacing = this.characterSpacing.serialize();
        return obj;
    }
}