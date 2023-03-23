import { Molecule } from "./molecule";
import { IMolecules } from "../interfaces";
import { PropertyPixelSelectable, PropertyElevationSelectable, PropertyShadowSelectable } from "../common/props";

/**
 * The sliders molecule.
 * @category Molecules
 */
export class Sliders extends Molecule {
    
    /** The handle border radius property */
    public handleBorderRadius: PropertyPixelSelectable;
    /** The visible height property */
    public visibleHeight: PropertyPixelSelectable;
    /** The handle elevation property */
    public handleElevation: PropertyElevationSelectable;
    /** The bar height property */
    public barHeight: PropertyPixelSelectable;
    /** The bar inset shadow property */
    public barInsetShadow: PropertyShadowSelectable;

    constructor(molecules: IMolecules) {
        super("Sliders", molecules);
        this.handleBorderRadius = new PropertyPixelSelectable("Handle Border Radius", false, this, [0,8,16,24,32,40,48,56,64], 8);
        this.visibleHeight = new PropertyPixelSelectable("Visible Height", false, this, [24, 32, 40, 44], 32);
        this.handleElevation = new PropertyElevationSelectable("Handle Elevation", false, this, 0, 9);
        this.barHeight = new PropertyPixelSelectable("Bar Height", false, this, [8, 16, 32], 32);
        this.barInsetShadow = new PropertyShadowSelectable("Bar Inset Shadow", false, this, 9, 0);
    }

    public deserialize(obj: any) {
        if (!obj) return;
        super.deserialize(obj);
        this.handleBorderRadius.deserialize(obj.handleBorderRadius);
        this.visibleHeight.deserialize(obj.visibleHeight);
        this.handleElevation.deserialize(obj.handleElevation);
        this.barHeight.deserialize(obj.barHeight);
        this.barInsetShadow.deserialize(obj.InsetShadow);
    }

    public serialize(): any {
        const obj: any = {};
        obj.handleBorderRadius = this.handleBorderRadius.serialize();
        obj.visibleHeight = this.visibleHeight.serialize();
        obj.handleElevation = this.handleElevation.serialize();
        obj.barHeight = this.barHeight.serialize();
        obj.barInsetShadow = this.barInsetShadow.serialize();
        return obj;
    }
}