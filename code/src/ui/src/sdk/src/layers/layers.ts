import { Node } from "../common/node";
import { PropertyBoolean } from "../common/props";

/**
 * Accessibility layers.
 * @category Layers
 */
export class Layers extends Node {

    /** Color blind property */
    public readonly colorBlind: PropertyBoolean;
    /** Dyslexia property */
    public readonly dyslexia: PropertyBoolean;
    /** Motion sensitivity property */
    public readonly motionSensitivity: PropertyBoolean;
    /** All accessbility layer properties */
    public readonly properties: PropertyBoolean[];

    constructor(parent: Node) {
        super("layers", parent);
        this.colorBlind = new PropertyBoolean("Color Blind", false, this, {defaultValue: false});
        this.dyslexia = new PropertyBoolean("Dyslexia", false, this, {defaultValue: false});
        this.motionSensitivity = new PropertyBoolean("Motion Sensitivity", false, this, {defaultValue: false});
        this.properties = [this.colorBlind, this.dyslexia, this.motionSensitivity];
    }

    public deserialize(obj: any) {
        if (!obj) return;
        super.deserialize(obj);
        this.colorBlind.deserialize(obj.colorBlind);
        this.dyslexia.deserialize(obj.dyslexia);
        this.motionSensitivity.deserialize(obj.motionSensitivity);
    }

    public serialize(): any {
        const obj: any = {};
        obj.colorBlind = this.colorBlind.serialize();
        obj.dyslexia = this.dyslexia.serialize();
        obj.motionSensitivity = this.motionSensitivity.serialize();
        return obj;
    }
}