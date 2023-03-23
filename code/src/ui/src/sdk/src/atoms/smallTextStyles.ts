import { TypographyStyling } from "./typographyStyling";
import { Atom } from "./atom";
import { IAtoms } from "../interfaces";

/**
 * The small text styles atom.
 * @category Atoms
 */
export class SmallTextStyles extends Atom {

    /** The subtitle1 topography styling properties */
    public subtitle1: TypographyStyling;
    /** The subtitle2 topography styling properties */
    public subtitle2: TypographyStyling;
    /** The caption topography styling properties */
    public caption: TypographyStyling;
    /** The caption bold topography styling properties */
    public captionBold: TypographyStyling;
    /** The overline topography styling properties */
    public overline: TypographyStyling;
    /** The overline large topography styling properties */
    public overlineLarge: TypographyStyling;
    /** The overline extra large topography styling properties */
    public overlineExtraLarge: TypographyStyling;
    /** The label1 topography styling properties */
    public label1: TypographyStyling;
    /** The label1 all caps topography styling properties */
    public label1AllCaps: TypographyStyling;
    /** The label2 all caps topography styling properties */
    public label2: TypographyStyling;
    /** The label2 all caps topography styling properties */
    public label2AllCaps: TypographyStyling;
    /** The label small topography styling properties */
    public labelSmall: TypographyStyling;
    /** The call-to-action topography styling properties */
    public callToAction: TypographyStyling;
    /** The call-to-action small topography styling properties */
    public callToActionSmall: TypographyStyling;
    /** The small topography styling properties */
    public small: TypographyStyling;
    /** The small semi-bold topography styling properties */
    public smallSemibold: TypographyStyling;

    constructor(atoms: IAtoms) {
        super("Small Tests Styles", false, atoms);
        this.addDependency(atoms.colorThemes);
        this.subtitle1 = new TypographyStyling("Subtitle 1", this, 16, 600, 110, 2);
        this.subtitle2 = new TypographyStyling("Subtitle 2", this, 14, 700, 110, 1.75);
        this.caption = new TypographyStyling("Caption", this, 12, 600, 110, 1.5);
        this.captionBold = new TypographyStyling("Caption Bold", this, 12, 700, 110, 1.5);
        this.overline = new TypographyStyling("Overline", this, 10, 600, 110, 0.12);
        this.overlineLarge = new TypographyStyling("Overline Large", this, 14, 600, 110, 1.75);
        this.overlineExtraLarge = new TypographyStyling("Overline Extra Large", this, 16, 700, 110, 2);
        this.label1 = new TypographyStyling("Label 1", this, 14, 700, 110, 1.75);
        this.label1AllCaps = new TypographyStyling("LABEL 1 ALL CAPS", this, 14, 700, 110, 1.75);
        this.label2 = new TypographyStyling("Label 2", this, 12, 700, 110, 1.5);
        this.label2AllCaps = new TypographyStyling("LABEL 2 ALL CAPS", this, 12, 700, 110, 1.5);
        this.labelSmall = new TypographyStyling("Label Small", this, 10, 700, 110, 0.12);
        this.callToAction = new TypographyStyling("Call To Action", this, 16, 500, 110, 2);
        this.callToActionSmall = new TypographyStyling("Call To Action Small", this, 14, 600, 110, 1.75);
        this.small = new TypographyStyling("Small", this, 10.8, 500, 110, 0.13);
        this.smallSemibold = new TypographyStyling("Small Semibold", this, 10.8, 700, 110, 0.13);
    }

    public deserialize(obj: any) {
        if (!obj) return;
        super.deserialize(obj);
        this.subtitle1.deserialize(obj.subtitle1);
        this.subtitle2.deserialize(obj.subtitle2);
        this.caption.deserialize(obj.caption);
        this.captionBold.deserialize(obj.captionBold);
        this.overline.deserialize(obj.overline);
        this.overlineLarge.deserialize(obj.overlineLarge);
        this.overlineExtraLarge.deserialize(obj.overlineExtraLarge);
        this.label1.deserialize(obj.label1);
        this.label1AllCaps.deserialize(obj.label1AllCaps);
        this.label2.deserialize(obj.label2);
        this.label2AllCaps.deserialize(obj.label2AllCaps);
        this.labelSmall.deserialize(obj.labelSmall);
        this.callToAction.deserialize(obj.callToAction);
        this.callToActionSmall.deserialize(obj.callToActionSmall);
        this.small.deserialize(obj.small);
        this.smallSemibold.deserialize(obj.smallSemibold);
    }

    public serialize(): any {
        const obj: any = {};
        obj.subtitle1 = this.subtitle1.serialize();
        obj.subtitle2 = this.subtitle2.serialize();
        obj.caption = this.caption.serialize();
        obj.captionBold = this.captionBold.serialize();
        obj.overline = this.overline.serialize();
        obj.overlineLarge = this.overlineLarge.serialize();
        obj.overlineExtraLarge = this.overlineExtraLarge.serialize();
        obj.label1 = this.label1.serialize();
        obj.label1AllCaps = this.label1AllCaps.serialize();
        obj.label2 = this.label2.serialize();
        obj.label2AllCaps = this.label2AllCaps.serialize();
        obj.labelSmall = this.labelSmall.serialize();
        obj.callToAction = this.callToAction.serialize();
        obj.callToActionSmall = this.callToActionSmall.serialize();
        obj.small = this.small.serialize();
        obj.smallSemibold = this.smallSemibold.serialize();
        return obj;
    }
}