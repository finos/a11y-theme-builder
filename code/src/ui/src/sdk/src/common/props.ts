import { Node, ListenerSubscription } from "./node";
import { Event, EventType, EventValueChange, EventCallback, EventValueChangeCallback } from "../interfaces";
import { Shade } from "./shade";
import { Logger } from "../util/logger";

const log = new Logger("prop");

export interface PropertyOpts<T> {
    defaultValue?: T;
    getDefaultValue?: () => T | undefined;
}

/**
 * A property of a generic type.
 * @category Utilities
 */
export class Property<T> extends Node {

    public readonly required: boolean;
    protected value?: T;
    private opts: PropertyOpts<T>;

    constructor(name: string, required: boolean, parent: Node, opts?: PropertyOpts<T>) {
        super(name, parent);
        this.required = required;
        this.opts = opts || {};
        parent.addProperty(this);
    }

    public isInitialized(): boolean {
        if (!this.required || this.value !== undefined) {
            return true;
        } else {
            return false;
        }
    }

    public getValue(): T | undefined {
        if (this.value !== undefined) {
            return this.value;
        }
        return this.getDefaultValue();
    }

    public setValue(newValue: T | undefined) {
        const oldValue = this.value;
        if (oldValue !== newValue) {
            log.debug(`Changing value of ${this.key} from ${oldValue} to ${JSON.stringify(newValue)}`);
            // Get the old node state before changing the property value
            const oldNodeState = this.getNodeState();
            // Change the property value
            this.value = newValue;
            // Send the value change event
            const event: EventValueChange<T> = {
                type: EventType.ValueChanged,
                node: this,
                oldValue,
                newValue,
            };
            this.notifyListeners(event);
            // Compare the current node state to the old state and send
            // any node enabled/disabled events which should be sent.
            this.compareNodeState(oldNodeState);
        }
    }

    public getDefaultValue(): T | undefined {
        if (this.opts.getDefaultValue) {
            return this.opts.getDefaultValue();
        } else {
            return this.opts.defaultValue;
        }
    }

    public setListener( name: string, listener: EventCallback, eventTypes?: EventType[] ): ListenerSubscription {
        const ls = super.setListener(name, listener, eventTypes);
        const val = this.getValue();
        if (val !== undefined) {
            // Go ahead and notify the listener of the current value
            const event: EventValueChange<T> = {
                type: EventType.ValueChanged,
                node: this,
                oldValue: undefined,
                newValue: val,
            };
            listener(event);
        }
        return ls;
    }

    public setPropertyListener(name: string, callback: EventValueChangeCallback<T>): ListenerSubscription {
        return this.setListener(name, callback as EventCallback, [EventType.ValueChanged]);
    }

    public serialize(): any {
        const obj: any = this.value;
        if (obj && typeof obj.serialize === 'function') {
            return obj.serialize();
        }
        return this.value;
    }

    public deserialize(obj: any): void {
        this.value = obj;
    }

    public toJSON(): Object {
        return { value: this.value };
    }

    protected getShadeRef(shade?: Shade): any {
        if (!shade) return undefined;
        if (shade.key) return {key: shade.key};
        return {hex: shade.hex, opacity: shade.opacity, mode: shade.hasMode() ? shade.getMode().key : undefined}
    }

    protected getShadeFromRef(ref: any): Shade | undefined {
        if (!ref) return undefined;
        if (ref.key) return this.getDesignSystem().findShade(ref.key);
        if (ref.hex) {
            const shade = Shade.fromHex(ref.hex);
            if (ref.opacity) shade.setOpacity(ref.opacity);
            if (ref.mode) {
                const mode = this.getDesignSystem().getNode(ref.mode);
                if (!mode) throw new Error(`Mode node was not found at ${ref.mode}`);
                shade.setMode(mode as any);
            }
            return shade;
        }
        throw new Error(`Invalid shade reference: ${JSON.stringify(ref)}`);
    }

}

/**
 * Register a single listener for a group of properties and call the callback
 * when all of the properties have values and any of their values change.
 * @category Utilities
 */
export class PropertyGroupListener {

    private props: Property<any>[];
    private cb: (pgl: PropertyGroupListener) => void;
    private lname: string;
    private started = false; 

    constructor(name: string, props: Property<any>[], cb: (pgl: PropertyGroupListener) => void) {
        this.props = props;
        this.cb = cb;
        this.lname = `_tb.PropertyGroupListener.${name}`;
        this.start();
    }

    public start() {
        log.debug(`Starting property group listener for ${this.lname}`);
        this.props.forEach(prop => {
            prop.setListener(this.lname, this.callback.bind(this));
        });
        this.started = true;
        if (this.allPropsHaveValues()) {
            this.cb(this);
        }
    }

    public stop() {
        log.debug(`Stopping property group listener for ${this.lname}`);
        this.props.forEach(prop => prop.removeListener(this.lname));
        this.started = false;
    }

    private callback(event: Event) {
        if (this.started && this.allPropsHaveValues()) {
            log.debug(`Calling the listener for property group ${this.lname} because it is ready`);
            this.cb(this);
        }
    }

    private allPropsHaveValues(): boolean {
        for (let i = 0; i < this.props.length; i++) {
            const p = this.props[i];
            if (p.getValue() === undefined) {
                log.debug(`Property group ${this.lname} is not ready because property ${p.key} has no value`);
                return false;
            }
        }
        return true;
    }

}

export class PropertyString extends Property<string> {

}

export class PropertyNumber extends Property<number> {

}

export class PropertyBoolean extends Property<boolean> {

}

export class PropertyPixel extends Property<number> {

}

export class PropertyTime extends Property<number> {

}

/**
 * A range of numeric values property.
 * @category Utilities
 */
export class PropertyRange extends Property<number> {

    public min: number;
    public max: number;

    constructor(name: string, min: number, max: number, required: boolean, parent: Node) {
        super(name, required, parent);
        this.min = min;
        this.max = max;
    }

    public deserialize(obj: any) {
        this.min = obj.min;
        this.max = obj.max;
    }

    public serialize(): any {
        return {
            min: this.min,
            max: this.max,
        };
    }
}

export class PropertySelectable<S,T> extends Property<T> {

    private sopts: PropertySelectableOpts<S,T>;
    private propertyGroupListener?: PropertyGroupListener;

    constructor(name: string, required: boolean, parent: Node, opts: PropertySelectableOpts<S,T>) {
        super(name, required, parent, opts);
        this.sopts = opts;
        if (!opts.getSelectables && !opts.selectables) {
            throw new Error(`Either 'getSelectables' or 'selectables' must be defined for ${this.key}`);
        }
        const dp = opts.dependentProps;
        if (dp) {
            dp.forEach(prop => this.addDependency(prop));
            this.propertyGroupListener = new PropertyGroupListener(this.key, dp, this.sendSelectablesChangedNotification.bind(this));
        }
    }

    public setDefault(defaultValue: T) {
        this.sopts.defaultValue = defaultValue;
    }

    public stop() {
        if (this.propertyGroupListener) {
            this.propertyGroupListener.stop();
            this.propertyGroupListener = undefined;
        }
    }

    public getSelectableValues(): S {
        if (this.sopts.getSelectables) {
            return this.sopts.getSelectables();
        } else if (this.sopts.selectables) {
            return this.sopts.selectables;
        } else {
            throw new Error(`Should be unreachable`);
        }
    }

    public setSelectableValues(s: S) {
        if (this.sopts.getSelectables) {
            throw new Error(`Can't call setSelectableValues if function getSelectables is set`);
        } else if (this.sopts.selectables) {
            this.sopts.selectables = s;
            this.sendSelectablesChangedNotification();
        } else {
            throw new Error(`Should be unreachable`);
        }
    }

    public getDefaultValue(): T | undefined {
        if (this.sopts.getDefaultValue) {
            return this.sopts.getDefaultValue();
        } else if (this.sopts.defaultValue !== undefined) {
            return this.sopts.defaultValue;
        } else {
            return undefined;
        }
    }

    private sendSelectablesChangedNotification() {
        this.notifyListeners({type: EventType.SelectablesChanged, node: this});
    }

}

export class PropertyStringSelectable extends PropertySelectable<string[],string> {

}

export interface PropertySelectableOpts<S,T> extends PropertyOpts<T> {
    selectables?: S;
    getSelectables?: () => S;
    dependentProps?: Property<any>[];
}

export class PropertyNumberSelectable extends PropertySelectable<number[],number> {

}

export class PropertyPercentageSelectable extends PropertyNumberSelectable {

    constructor(name: string, required: boolean, parent: Node, percentages: number[], defaultPercentage: number) {
        super(name, required, parent, {
            selectables: percentages,
            defaultValue: defaultPercentage,
        });
    }

}

export class PropertyPixelSelectable extends PropertySelectable<number[],number> {

    constructor(name: string, required: boolean, parent: Node, pixels: number[], defaultValue?: number) {
        super(name, required, parent, { selectables: pixels, defaultValue });
    }


}

export class PropertyElevationSelectable extends PropertyStringSelectable {

    constructor(name: string, required: boolean, parent: Node, min: number, max: number, def?: number) {
        super(name, required, parent, { 
            selectables: PropertyElevationSelectable.toStrings(min, max),
            defaultValue: def ? `Elevation-${def}`: "No Elevation",
        });
    }

    private static toStrings(min: number, max: number): string[] {
        const elevations = ["No Elevation"];
        for (let i = 1; i <= max; i++) {
            elevations.push(`Elevation-${i}`);
        }
        for (let i = 1; i <= min; i++) {
            elevations.push(`Reverse-Elevation-${i}`);
        }
        return elevations;
    }

}

export class PropertyBevelSelectable extends PropertyStringSelectable {

    constructor(name: string, required: boolean, parent: Node, min: number, max: number) {
        super(name, required, parent, { 
            selectables: PropertyBevelSelectable.toStrings(min, max),
            defaultValue: "No Bevel",
        });
    }

    public toIndex(): number {
        const val = this.getValue();
        if (!val || val === "No Bevel") return 0;
        if (val.startsWith("Bevel-")) return parseInt(val.slice(6));
        if (val.startsWith("Reverse-Bevel-")) return parseInt(val.slice(14));
        throw new Error(`Invalid bevel value: ${val}`);
    }

    private static toStrings(min: number, max: number): string[] {
        const bevels = ["No Bevel"];
        for (let i = 1; i <= max; i++) {
            bevels.push(`Bevel-${i}`);
        }
        for (let i = 1; i <= min ; i++) {
            bevels.push(`Reverse-Bevel-${i}`);
        }
        return bevels;
    }

}

export class PropertyShadowSelectable extends PropertyStringSelectable {

    constructor(name: string, required: boolean, parent: Node, min: number, max: number) {
        super(name, required, parent, { 
            selectables: PropertyShadowSelectable.toStrings(min, max),
            defaultValue: "None",
        });
    }

    private static toStrings(min: number, max: number): string[] {
        const shadows = ["None"];
        for (let i = 1; i <= max; i++) {
            shadows.push(`Shadow-${i}`);
        }
        for (let i = 1; i <= min ; i++) {
            shadows.push(`Inverse-Shadow-${i}`);
        }
        return shadows;
    }

}

export class PropertyButtonText extends PropertyStringSelectable {

    constructor(name: string, required: boolean, node: Node) {
        super(name, required, node, { selectables: ["CTA LARGE", "CTA Small"]});
    }

}

export class PropertyBackgroundColorStyle extends PropertyStringSelectable {

    constructor(name: string, required: boolean, node: Node) {
        super(name, required, node, { selectables: ["Solid", "Opaque", "Gradient"]});
    }

}

const defaultFont = "Discover Sans";

export class PropertyFontFamily extends PropertyStringSelectable {

    constructor(name: string, required: boolean, node: Node) {
        super(name, required, node, { selectables: [defaultFont], defaultValue: defaultFont});
    }

}
export class PropertyNumberRange extends PropertyNumber {

    public min: number;
    public max: number;

    constructor(name: string, required: boolean, node: Node, min: number, max: number, def: number) {
        super(name, required, node, { defaultValue: def});
        this.min = min;
        this.max = max;
    }

    public setValue(num: number) {
        if (num < this.min || num > this.max) {
            throw new Error(`Can't set value to ${num} for property '${this.key}' which has a range of [${this.min},${this.max}]`);
        }
        super.setValue(num);
    }

}

export class PropertyPercentage extends PropertyNumberRange {

    constructor(name: string, required: boolean, parent: Node, defaultPercentage: number) {
        super(name, required, parent, 0, 100, defaultPercentage);
    }

}

export class PropertyFontRange extends PropertyNumberRange {}

export class PropertyPixelRange extends PropertyNumberRange {}

export class PropertyColorShade extends PropertySelectable<Shade[][],Shade> {

    /*
     * All PropertyColorShade objects are references to Shade objects built by the color palette.
     * The info in the serialization is the key to lly serializing a reference to the
     * shade so that it be looked up.  The reason is that a sh
     */
    public serialize(): any {
        return this.getShadeRef(this.value);
    }

    public deserialize(obj: any) {
        this.value = this.getShadeFromRef(obj);
    }

}

export class PropertyColorPair extends PropertySelectable<ColorPair[],ColorPair> {

    constructor(name: string, required: boolean, theme: Node, selectables: ColorPair[]) {
        super(name, required, theme, {selectables});
    }

    public serialize(): any {
        if (!this.value) return undefined;
        return {
            title: this.value.title,
            primary: this.getShadeRef(this.value.secondary),
            secondary: this.getShadeRef(this.value.primary),
            lighter: this.value.lighter,
        };
    }

    public deserialize(obj: any) {
        if (!obj) return;
        this.value = new ColorPair(
            obj.title,
            this.getShadeFromRef(obj.primary) as Shade,       
            this.getShadeFromRef(obj.secondary) as Shade,       
            obj.lighter, 
        );
    }

}

export class PropertyTitledShade extends PropertySelectable<TitledShade[],TitledShade> {

    public serialize(): any {
        if (!this.value) return undefined;
        return {
            title: this.value.title,
            shade: this.getShadeRef(this.value.shade),
        };
    }

    public deserialize(obj: any) {
        if (!obj) return;
        this.value = new TitledShade(
            obj.title,
            this.getShadeFromRef(obj.shade) as Shade,       
        );
    }

}

export class ColorPair {

    public title: string;
    public readonly primary: Shade;
    public readonly secondary: Shade;
    public lighter: boolean;

    constructor(title: string, primary: Shade, secondary: Shade, lighter: boolean) {
        this.title = title;
        this.primary = primary;
        this.secondary = secondary;
        this.lighter = lighter;
    }

    public deserialize(obj: any) {
        if (!obj) return;
        this.title = obj.title;
        this.primary.deserialize(obj.primary);
        this.secondary.deserialize(obj.secondary);
        this.lighter = obj.lighter;
    }

    public serialize(): any {
        const obj: any = {};
        obj.title = this.title;
        obj.primary = this.primary;
        obj.secondary = this.secondary.serialize();
        obj.lighter = this.lighter;
        return obj;
    }
}

export class TitledShade {

    public readonly title: string;
    public shade: Shade;

    constructor(title: string, shade: Shade) {
        this.title = title;
        this.shade = shade;
    }

    public deserialize(obj: any) {
        if (!obj) return;
        this.shade.deserialize(obj.shade);
    }

    public serialize(): any {
        const obj: any = {};
        obj.shade = this.shade.serialize();
        return obj;
    }
}