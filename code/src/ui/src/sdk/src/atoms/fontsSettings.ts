import { Atom } from "./atom";
import { IAtoms } from "../interfaces";
import { PropertyString, PropertyNumber } from "../common/props";

const defaultFont = "Discover Sans";

/**
 * The focus settings atom.
 * @category Atoms
 */
export class FontsSettings extends Atom {

    /** The primary font property */
    public primaryFont: PropertyString;
    /** The secondary font property */
    public secondaryFont: PropertyString;
    /** The base font size property */
    public baseFontSize: PropertyNumber;
    /** The font weights properties */
    public fontWeights: PropertyNumber[] = [];
    /** The standard line height property */
    public standardLineHeight: PropertyNumber;
    /** The header line height property */
    public headerLineHeight: PropertyNumber;
    /** The small line height property */
    public smallLineHeight: PropertyNumber;

    constructor(atoms: IAtoms) {
        super("Fonts Settings", false, atoms);
        this.addDependency(atoms.colorThemes);
        this.primaryFont = new PropertyString("Primary font", false, this, {defaultValue: defaultFont});
        this.secondaryFont = new PropertyString("Secondary font", false, this, {defaultValue: defaultFont});
        this.baseFontSize = new PropertyNumber("Base font size", false, this, {defaultValue: 16});
        this.fontWeights.push(new PropertyNumber(`Font weight 0`, false, this, {defaultValue: 100}))
        this.fontWeights.push(new PropertyNumber(`Font weight 1`, false, this, {defaultValue: 300}))
        this.fontWeights.push(new PropertyNumber(`Font weight 2`, false, this, {defaultValue: 500}))
        this.fontWeights.push(new PropertyNumber(`Font weight 3`, false, this, {defaultValue: 600}))
        this.fontWeights.push(new PropertyNumber(`Font weight 4`, false, this, {defaultValue: 700}))
        this.standardLineHeight = new PropertyNumber("Standard Line Height", false, this, {defaultValue: 160});
        this.headerLineHeight = new PropertyNumber("Header Line Height", false, this, {defaultValue: 130});
        this.smallLineHeight = new PropertyNumber("Small Text Line Height", false, this, {defaultValue: 110});
    }

    public deserialize(obj: any) {
        if (!obj) return;
        super.deserialize(obj);
        this.primaryFont.deserialize(obj.primaryFont);
        this.secondaryFont.deserialize(obj.secondaryFont);
        this.baseFontSize.deserialize(obj.baseFontSize);
        const fw = obj.fontWeights;
        for (let i = 0; i < this.fontWeights.length; i++) {
            this.fontWeights[i].setValue(fw[i]);
        }
        this.standardLineHeight.deserialize(obj.standardLineHeight);
        this.headerLineHeight.deserialize(obj.headerLineHeight);
        this.smallLineHeight.deserialize(obj.smallLineHeight);
    }

    public serialize(): any {
        const obj: any = {};
        obj.primaryFont = this.primaryFont.serialize();
        obj.secondaryFont = this.secondaryFont.serialize();
        obj.baseFontSize = this.baseFontSize.serialize();
        obj.fontWeights = this.fontWeights.map(ele => {
            if (!ele) return undefined;
            return ele.serialize();
        });
        obj.standardLineHeight = this.standardLineHeight.serialize();
        obj.headerLineHeight = this.headerLineHeight.serialize();
        obj.smallLineHeight = this.smallLineHeight.serialize();
        return obj;
    }
}