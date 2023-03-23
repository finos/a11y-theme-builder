import { Storage } from "./storage/index";
import { Shade } from "./common/shade";
import { PropertyTitledShade, PropertyStringSelectable } from "./common";

/**
 * The node interface, representing the node of a tree.
 */
export interface INode {
    /** The unique key of the node */
    key: string;
    /**
     * Set a listener for events on this node.
     * @param name  The listener name
     * @param callback The callback for each event.
     * @param eventTypes The event types requiring notification, or undefined if all event types.
     */
    setListener(name: string, callback: EventCallback, eventTypes?: EventType[]): IListenerSubscription;
    removeListener(name: string): void;
}

export interface IListenerSubscription {
    cancel(): void;  // Same as calling removeListener above
}
export interface IProperty extends INode {
    isInitialized(): boolean;
}

export interface IAtoms extends INode {
    colorPalette: IColorPalette;
    colorThemes: IColorThemes;
    gridSettings: IGridSettings;
    inputBackground: IInputBackground;
    addAtom(atom: IAtom): void;
}

export interface IColorPalette extends IAtom {
    setColorListener(name: string, listener: ColorListener): void;
}

export interface IColorThemes extends IAtom {
    defaultTheme: PropertyStringSelectable;
    getDefaultTheme(): IColorTheme | undefined;
    atoms: IAtoms;
}

export interface IGridSettings extends IAtom {}

export interface IInputBackground extends IAtom {
    overlayColor: PropertyTitledShade;
}

export interface IAtom extends INode {}

export interface IMolecules extends INode {}

export interface IMolecule extends INode {}

export interface IOrganisms extends INode {}

export interface IOrganism extends INode {}

export interface IColorTheme extends IAtom {}

export enum EventType { 
    NodeEnabled = "NodeEnabled",
    NodeDisabled = "NodeDisabled",
    NodeDeleted = "NodeDeleted",
    ValueChanged = "ValueChanged",
    ValueDeleted = "ValueDeleted",
    SelectablesChanged = "SelectablesChanged",
}

export interface Event {
    type: EventType
    node: INode;
}

export interface EventValueChange<T> extends Event {
    oldValue?: T;
    newValue?: T;
}

export type EventCallback = (event: Event) => void;

export type EventValueChangeCallback<T> = (event: EventValueChange<T>) => void;

export interface EventListener {
    eventTypes?: EventType[];
    callback: EventCallback;
}

export type IVarGroupListener = (group: IVarGroup) => void;

export interface IVarGroup {
    vars: {[name: string]: string};
    setListener(name: string, listener: IVarGroupListener): void;
}

export interface IDesignSystem extends INode {
    atoms: IAtoms;
    molecules: IMolecules;
    organisms: IOrganisms;
    registerNode(node: INode): void;
    getNode(key: string): INode | undefined;
    registerShade(key: string, shade: Shade): void;
    getShade(key: string): Shade | undefined;
    findShade(key: string): Shade;
    getCSSVarGroup(node: INode): IVarGroup;
}

export interface IThemeBuilder {
    storage: Storage;
}

export type VarListener = (name: string, value?: string) => void;

export type ShadeFilter = (shade: Shade) => boolean;

export type ColorListener = (name: string, color?: IColor) => void;

export interface IColor {
    name: string;
    hex: IProperty;
    light: IColorMode;
    dark: IColorMode;
}

export interface IColorMode {
    key: string;
    name: string;
    color: IColor;
    shades: Shade[];
}

export interface IGeneratedVar {
    name: string;
    unit: string;
    props: IProperty[];
}