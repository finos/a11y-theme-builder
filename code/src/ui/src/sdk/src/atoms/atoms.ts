import { ColorPalette } from "./colorPalette";
import { ColorThemes } from "./colorThemes";
import { FontsSettings } from "./fontsSettings";
import { DisplayAndHeaderStyles } from "./displayAndHeaderStyles";
import { BodyStyles } from "./bodyStyles";
import { SmallTextStyles } from "./smallTextStyles";
import { StatStyles } from "./statStyles";
import { GridSettings } from "./gridSettings";
import { MinimumTarget } from "./minTarget";
import { StateSettings } from "./stateSettings";
import { ChartColors } from "./chartColors";
import { BorderSettings } from "./borderSettings";
import { FocusStates } from "./focusStates";
import { Hotlinks } from "./hotlinks";
import { InputBackground } from "./inputBackground";
import { ElevationSettings } from "./elevationSettings";
import { BevelSettings } from "./bevelSettings";
import { AnimationSettings } from "./animationSettings";
import { ColorBlind } from "./colorBlind";
import { Node } from "../common/node";
import { Atom } from "./atom";
import { IDesignSystem } from "../interfaces";
import { MyMap } from "../util/myMap";

/**
 * All atoms for each design system.
 * @category Atoms 
 */
export class Atoms extends Node {

    public readonly designSystem: IDesignSystem;
    /** The color palette for this design system */
    public readonly colorPalette: ColorPalette;
    /** The color themes for this design system */
    public readonly colorThemes: ColorThemes;
    /** The font settings for this design system */
    public readonly fontsSettings: FontsSettings;
    /** The display and header style settings for this design system */
    public readonly displayAndHeaderStyles: DisplayAndHeaderStyles;
    /** The body style settings for this design system */
    public readonly bodyStyles: BodyStyles;
    /** The small text style settings for this design system */
    public readonly smallTextStyles: SmallTextStyles;
    /** The stat style settings for this design system */
    public readonly statStyles: StatStyles;
    /** The grid settings for this design system */
    public readonly gridSettings: GridSettings;
    /** The minimum target settings for this design system */
    public readonly minimumTarget: MinimumTarget;
    /** The state settings for this design system */
    public readonly stateSettings: StateSettings;
    /** The chart color settings for this design system */
    public readonly chartColors: ChartColors;
    /** The border settings for this design system */
    public readonly borderSettings: BorderSettings;
    /** The focus state settings for this design system */
    public readonly focusStates: FocusStates;
    /** The hotlink settings for this design system */
    public readonly hotlinks: Hotlinks;
    /** The input background settings for this design system */
    public readonly inputBackground: InputBackground;
    /** The elevation settings for this design system */
    public readonly elevationSettings: ElevationSettings;
    /** The bevel settings for this design system */
    public readonly bevelSettings: BevelSettings;
    /** The animation settings for this design system */
    public readonly animationSettings: AnimationSettings;
    /** The color blind settings for this design system */
    public readonly colorBlind: ColorBlind;
    private readonly atoms: MyMap<string,Atom> = new MyMap<string,Atom>();

    constructor(designSystem: IDesignSystem) {
        super("atoms", designSystem);
        this.designSystem = designSystem;
        this.colorPalette = new ColorPalette(this);
        this.colorThemes = new ColorThemes(this);
        this.fontsSettings = new FontsSettings(this);
        this.displayAndHeaderStyles = new DisplayAndHeaderStyles(this);
        this.bodyStyles = new BodyStyles(this);
        this.smallTextStyles = new SmallTextStyles(this);
        this.statStyles = new StatStyles(this);
        this.gridSettings = new GridSettings(this);
        this.minimumTarget = new MinimumTarget(this);
        this.stateSettings = new StateSettings(this);
        this.chartColors = new ChartColors(this);
        this.borderSettings = new BorderSettings(this);
        this.focusStates = new FocusStates(this);
        this.hotlinks = new Hotlinks(this);
        this.inputBackground = new InputBackground(this);
        this.elevationSettings = new ElevationSettings(this);
        this.bevelSettings = new BevelSettings(this);
        this.animationSettings = new AnimationSettings(this);
        this.colorBlind = new ColorBlind(this);
    }

    public addAtom(atom: Atom) {
        this.atoms.set(atom.name, atom);
    }

    public getAtom(key: string): Atom {
        const atom = this.atoms.get(key);
        if (!atom) {
            throw new Error(`Atom '${key}' was not found`);
        }
        return atom;
    }

    public serialize(): any {
        const obj = super.serialize();
        obj.colorPalette = this.colorPalette.serialize();
        obj.colorThemes = this.colorThemes.serialize();
        obj.fontsSettings = this.fontsSettings.serialize();
        obj.displayAndHeaderStyles = this.displayAndHeaderStyles.serialize();
        obj.bodyStyles = this.bodyStyles.serialize();
        obj.smallTextStyles = this.smallTextStyles.serialize();
        obj.statStyles = this.statStyles.serialize();
        obj.gridSettings = this.gridSettings.serialize();
        obj.minimumTarget = this.minimumTarget.serialize();
        obj.stateSettings = this.stateSettings.serialize();
        obj.chartColors = this.chartColors.serialize();
        obj.borderSettings = this.borderSettings.serialize();
        obj.focusStates = this.focusStates.serialize();
        obj.hotlinks = this.hotlinks.serialize();
        obj.inputBackground = this.inputBackground.serialize();
        obj.elevationSettings = this.elevationSettings.serialize();
        obj.bevelSettings = this.bevelSettings.serialize();
        obj.animationSettings = this.animationSettings.serialize();
        obj.colorBlind = this.colorBlind.serialize();
        return obj;
    }

    public deserialize(obj: any) {
        if (!obj) return;
        super.deserialize(obj);
        this.colorPalette.deserialize(obj.colorPalette);
        this.colorThemes.deserialize(obj.colorThemes);
        this.fontsSettings.deserialize(obj.fontsSettings);
        this.displayAndHeaderStyles.deserialize(obj.displayAndHeaderStyles);
        this.bodyStyles.deserialize(obj.bodyStyles);
        this.smallTextStyles.deserialize(obj.smallTextStyles);
        this.statStyles.deserialize(obj.statStyles);
        this.gridSettings.deserialize(obj.gridSettings);
        this.minimumTarget.deserialize(obj.minimumTarget);
        this.stateSettings.deserialize(obj.stateSettings);
        this.chartColors.deserialize(obj.chartColors);
        this.borderSettings.deserialize(obj.borderSettings);
        this.focusStates.deserialize(obj.focusStates);
        this.hotlinks.deserialize(obj.hotlinks);
        this.inputBackground.deserialize(obj.inputBackground);
        this.elevationSettings.deserialize(obj.elevationSettings);
        this.bevelSettings.deserialize(obj.bevelSettings);
        this.animationSettings.deserialize(obj.animationSettings);
        this.colorBlind.deserialize(obj.colorBlind);
    }

}