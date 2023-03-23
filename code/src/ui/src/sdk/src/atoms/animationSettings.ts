import { Atom } from "./atom";
import { IAtoms } from "../interfaces";
import { PropertyPixel, PropertyTime } from "../common/props";

/**
 * The animation settings atom
 * @category Atoms
 */
export class AnimationSettings extends Atom {

    public animationTiming: PropertyTime;
    public hoverAndFocusAnimationDistance: PropertyPixel;

    constructor(atoms: IAtoms) {
        super("Animation Settings", false, atoms);
        this.addDependency(atoms.colorThemes);
        this.animationTiming = new PropertyTime("Animation Timing", false, this, {defaultValue: 600});
        this.hoverAndFocusAnimationDistance = new PropertyPixel("Hover and Focus Animation Distance", false, this, {defaultValue: 8});
    }

    public deserialize(obj: any) {
        if (!obj) return;
        super.deserialize(obj);
        this.animationTiming.deserialize(obj.animationTiming);
        this.hoverAndFocusAnimationDistance.deserialize(obj.hoverAndFocusAnimationDistance);
    }

    public serialize(): any {
        const obj: any = {};
        obj.animationTiming = this.animationTiming.serialize();
        obj.hoverAndFocusAnimationDistance = this.hoverAndFocusAnimationDistance.serialize();
        return obj;
    }

    public toJSON(): Object {
        return {
            animationTiming: this.animationTiming,
            hoverAndFocusAnimationDistance: this.hoverAndFocusAnimationDistance,
        };
    }
}