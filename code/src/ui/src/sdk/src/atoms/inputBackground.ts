import * as chroma from "chroma-js";
import { TitledShade, PropertyTitledShade } from "../common/props";
import { ColorTheme } from "./colorThemes";
import { Atom } from "./atom";
import { IAtoms, IInputBackground } from "../interfaces";
import { Shade } from "../common/shade";
import { Logger } from "../util/logger";

export interface InputBackgroundVariables {
    inputDefault: Shade;
    inputDisabled: Shade;
    onInputDefault: Shade;
    onInputDisabled: Shade;
    dmInputDefault: Shade;
    dmInputDisabled: Shade;
}

const log = new Logger("ib");

/**
 * The input backbround atom.
 * @category Atoms
 */
export class InputBackground extends Atom implements IInputBackground {

    /** The overlay shade property */
    public readonly overlayColor: PropertyTitledShade;
    private readonly whiteBackground: TitledShade;

    constructor(atoms: IAtoms) {
        super("Input Background", false, atoms);
        this.addDependency(atoms.colorThemes);
        this.whiteBackground = new TitledShade("White Background", Shade.WHITE);
        this.overlayColor = new PropertyTitledShade("Overlay Color", false, this, {
            getSelectables: this.getSelectables.bind(this),
            defaultValue: this.whiteBackground,
        });
    }

    private getSelectables(): TitledShade[] {
        const ct = this.getDefaultColorTheme();
        const primary = ct.primary.getValue();
        if (!primary) throw new Error(`The primary of the default theme has not been set`);
        // Use the 100 value (i.e. index 1 below) for the primary overlay
        const primaryBackground = new TitledShade("Primary Background", primary.getMode().shades[1]);
        return [this.whiteBackground, primaryBackground];
    }

    public getVariables(): InputBackgroundVariables | undefined {
        const background = this.overlayColor.getValue();
        if (!background) {
            log.debug(`InputBackground.getVariables: no background`);
            return undefined;
        }
        const whiteBackgroundWasSelected = background === this.whiteBackground;
        const theme = this.getDefaultColorTheme();
        if (!theme) {
            log.debug(`InputBackground.getVariables: no default theme`);
            return undefined;
        }
        const lmbg = theme.lightModeBackground.getValue();
        if (!lmbg) {
            log.debug(`InputBackground.getVariables: no lightmode background`);
            return undefined;
        }
        const dmbg = theme.darkModeBackground.getValue();
        if (!dmbg) {
            log.debug(`InputBackground.getVariables: no darkmode background`);
            return undefined;
        }
        const dmbgPrimary = dmbg.primary.hex;
        const primaryDark = dmbg.primary.getMode().shades[4].rgbArray;
        const pHex = lmbg.primary.hex;
        const rgb = background.shade.rgbArray;
        // Set light mode variables
        let inputDefault: Shade;
        let inputDisabled: Shade;
        let onInputDefault: Shade;
        let onInputDisabled: Shade;
        if (lmbg.lighter) {
            if (whiteBackgroundWasSelected) {
                inputDefault = this.avgShade([pHex, 'rgba(255,255,255,.1)']);
                inputDisabled = this.avgShade([pHex, 'rgba(0,0,0,.07)']);
            } else {
                inputDefault = this.avgShade([pHex, 'rgba('+rgb+',.3)']);
                inputDisabled = this.avgShade([pHex, 'rgba(0,0,0,.03)']);
            }
            onInputDefault = Shade.BLACK;
            onInputDisabled = Shade.BLACK;
        } else {
            if (whiteBackgroundWasSelected) {
                inputDefault = this.avgShade([pHex, 'rgba('+rgb+',.03)']);
                inputDisabled = this.avgShade([pHex, 'rgba(0,0,0,.03)']);
            } else {
                inputDefault = this.avgShade([pHex, 'rgba('+rgb+',.1)']);
                inputDisabled = this.avgShade([pHex, 'rgba(255,255,255,.07)']);
            }
            onInputDefault = Shade.WHITE;
            onInputDisabled = Shade.WHITE;
        }
        // Set dark mode variables
        let dmInputDefault: Shade;
        let dmInputDisabled: Shade;
        if (dmbg.lighter) {
            dmInputDefault = this.avgShade([pHex, 'rgba('+rgb+',.2)']);
            dmInputDisabled = this.avgShade([pHex, 'rgba(0,0,0,.3)']);
        } else {
            if (whiteBackgroundWasSelected) {
                dmInputDefault  = this.avgShade([dmbgPrimary, 'rgba('+primaryDark+',.08)']);
            } else {
                dmInputDefault  = this.avgShade([dmbgPrimary, 'rgba('+primaryDark+',.2)']);
            }
            dmInputDisabled = this.avgShade([dmbgPrimary, 'rgba(0,0,0,.03)']);
        }
        const vars: InputBackgroundVariables = {
            inputDefault,
            inputDisabled,
            onInputDefault,
            onInputDisabled,
            dmInputDefault,
            dmInputDisabled,
        };
        log.debug(`InputBackground variables: ${JSON.stringify(vars,null,4)}`);
        return vars;
    }

    private avgShade(strs: string[]): Shade {
        return Shade.fromRGBAString(chroma.average(strs).css());
    }

    private getDefaultColorTheme(): ColorTheme {
        return this.atoms.colorThemes.getDefaultTheme() as ColorTheme;
    }

    public deserialize(obj: any) {
        if (!obj) return;
        super.deserialize(obj);
        this.overlayColor.deserialize(obj.background);
        this.whiteBackground.deserialize(obj.whiteBackground);
    }

    public serialize(): any {
        const obj: any = {};
        obj.background = this.overlayColor.serialize();
        obj.whiteBackground = this.whiteBackground.serialize();
        return obj;
    }
}