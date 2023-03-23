import { Atom } from "./atom";
import { IAtoms } from "../interfaces";
import { PropertyString, PropertyNumberRange, PropertyPercentage } from "../common/props";

/**
 * The elevation settings atom.
 * @category Atoms
 */
export class ElevationSettings extends Atom {

    /** The shadow color property */
    public shadowColor: PropertyString;
    /** The base blur radius property */
    public baseBlurRadius: PropertyNumberRange;
    /** The base spread radius property */
    public baseSpreadRadius: PropertyNumberRange;
    /** The base color opacity property */
    public baseColorOpacity: PropertyNumberRange;
    /** The horizontal shadow length property */
    public horizontalShadowLength: PropertyNumberRange;
    /** The vertical shadow length property */
    public verticalShadowLength: PropertyNumberRange;
    /** The blur radius property */
    public blurRadius: PropertyNumberRange;
    /** The spread radius property */
    public spreadRadius: PropertyNumberRange;
    /** The color opacity property */
    public colorOpacity: PropertyNumberRange;
    /** The percentage change property */
    public percentageChange: PropertyPercentage;

    constructor(atoms: IAtoms) {
        super("Elevation Settings", false, atoms);
        this.addDependency(atoms.colorThemes);
        this.shadowColor = new PropertyString("Color", false, this);
        // TODO: What are the numeric ranges for the radius, opacity, and shadow length?
        this.baseBlurRadius = new PropertyNumberRange("Base Blur Radius", false, this, 0, 10, 0);
        this.baseSpreadRadius = new PropertyNumberRange("Base Spread Radius", false, this, 0, 10, 0);
        this.baseColorOpacity = new PropertyNumberRange("Base Color Opacity", false, this, 0, 10, 0);
        this.horizontalShadowLength = new PropertyNumberRange("Horizontal Shadow Length", false, this, 0, 10, 0);
        this.verticalShadowLength = new PropertyNumberRange("Vertical Shadow Length", false, this, 0, 10, 0);
        this.blurRadius = new PropertyNumberRange("Blur Radius", false, this, 0, 10, 0);
        this.spreadRadius = new PropertyNumberRange("Spread Radius", false, this, 0, 10, 0);
        this.colorOpacity = new PropertyNumberRange("Color Opacity", false, this, 0, 10, 0);
        this.percentageChange = new PropertyPercentage("Percentage Change", false, this, 0);
    }

    public deserialize(obj: any) {
        if (!obj) return;
        super.deserialize(obj);
        this.shadowColor.deserialize(obj.shadowColor);
        this.baseBlurRadius.deserialize(obj.baseBlurRadius);
        this.baseSpreadRadius.deserialize(obj.baseSpreadRadius);
        this.baseColorOpacity.deserialize(obj.baseColorOpacity);
        this.horizontalShadowLength.deserialize(obj.horizontalShadowLength);
        this.verticalShadowLength.deserialize(obj.verticalShadowLength);
        this.blurRadius.deserialize(obj.blurRadius);
        this.spreadRadius.deserialize(obj.spreadRadius);
        this.colorOpacity.deserialize(obj.colorOpacity);
        this.percentageChange.deserialize(obj.percentageChange);
    }

    public serialize(): any {
        const obj: any = {};
        obj.shadowColor = this.shadowColor.serialize();
        obj.baseBlurRadius = this.baseBlurRadius.serialize();
        obj.baseSpreadRadius = this.baseSpreadRadius.serialize();
        obj.baseColorOpacity = this.baseColorOpacity.serialize();
        obj.horizontalShadowLength = this.horizontalShadowLength.serialize();
        obj.verticalShadowLength = this.verticalShadowLength.serialize();
        obj.blurRadius = this.blurRadius.serialize();
        obj.spreadRadius = this.spreadRadius.serialize();
        obj.colorOpacity = this.colorOpacity.serialize();
        obj.percentageChange = this.percentageChange.serialize();
        return obj;
    }
}