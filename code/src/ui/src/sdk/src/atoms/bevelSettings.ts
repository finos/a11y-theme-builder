import { Atom } from "./atom";
import { IAtoms } from "../interfaces";
import { PropertyNumberRange, PropertyPercentage } from "../common/props";

/**
 * The BevelSettings atom.
 * @category Atoms
 */
export class BevelSettings extends Atom {

    /** The standard bevel settings */
    public standard: BevelSettingsProps;
    /** The inverse bevel settings */
    public inverse: BevelSettingsProps;

    constructor(atoms: IAtoms) {
        super("Bevel Settings", false, atoms);
        this.addDependency(atoms.colorThemes);
        this.standard = new BevelSettingsProps(true, this);
        this.inverse = new BevelSettingsProps(false, this);
    }

    public deserialize(obj: any) {
        if (!obj) return;
        super.deserialize(obj);
        this.standard.deserialize(obj.standard);
        this.inverse.deserialize(obj.inverse);
    }

    public serialize(): any {
        const obj: any = {};
        obj.standard = this.standard.serialize();
        obj.inverse = this.inverse.serialize();
        return obj;
    }
}

/**
 * The bevel settings.
 * @category Atoms
 */
export class BevelSettingsProps {

    /** Is this a standard bevel? */
    public standard: boolean;
    /** The horizontal shadow length property */
    public horizontalShadowLength: PropertyNumberRange;
    /** The vertical shadow length property */
    public verticalShadowLength: PropertyNumberRange;
    /** The blur radius property */
    public blurRadius: PropertyNumberRange;
    /** The spread radius property */
    public spreadRadius: PropertyNumberRange;
    /** The light glow opacity property */
    public lightGlowOpacity: PropertyNumberRange;
    /** The dark shadow opacity property */
    public darkShadowOpacity: PropertyNumberRange;
    /** The percentage change property */
    public percentageChange: PropertyPercentage;

    constructor(standard: boolean, bs: BevelSettings) {
        this.standard = standard;
        const p = standard ? "Standard " : "Inverse";
        this.horizontalShadowLength = new PropertyNumberRange(`${p} Horizontal Shadow Length`, false, bs, 0, 10, 6);
        this.verticalShadowLength = new PropertyNumberRange(`${p} Vertical Shadow Length`, false, bs, 0, 10, 6);
        this.blurRadius = new PropertyNumberRange(`${p} Blur Radius`, false, bs, 0, 10, 6);
        this.spreadRadius = new PropertyNumberRange(`${p} Spread Radius`, false, bs, 0, 10, 1);
        this.lightGlowOpacity = new PropertyNumberRange(`${p} Light Glow Opacity`, false, bs, 0, 100, 30);
        this.darkShadowOpacity = new PropertyNumberRange(`${p} Dark Shadow Opacity`, false, bs, 0, 100, 10);
        this.percentageChange = new PropertyPercentage(`${p} Percentage Change`, false, bs, 20);
    }

    public deserialize(obj: any) {
        if (!obj) return;
        this.horizontalShadowLength.deserialize(obj.horizontalShadowLength);
        this.verticalShadowLength.deserialize(obj.verticalShadowLength);
        this.blurRadius.deserialize(obj.blurRadius);
        this.spreadRadius.deserialize(obj.spreadRadius);
        this.lightGlowOpacity.deserialize(obj.lightGlowOpacity);
        this.darkShadowOpacity.deserialize(obj.darkShadowOpacity);
        this.percentageChange.deserialize(obj.percentageChange);
    }

    public serialize(): any {
        const obj: any = {};
        obj.horizontalShadowLength = this.horizontalShadowLength.serialize();
        obj.verticalShadowLength = this.verticalShadowLength.serialize();
        obj.blurRadius = this.blurRadius.serialize();
        obj.spreadRadius = this.spreadRadius.serialize();
        obj.lightGlowOpacity = this.lightGlowOpacity.serialize();
        obj.darkShadowOpacity = this.darkShadowOpacity.serialize();
        obj.percentageChange = this.percentageChange.serialize();
        return obj;
    }
}