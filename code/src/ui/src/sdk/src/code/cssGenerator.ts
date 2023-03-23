import { Atoms, Shade, ColorTheme, ShadeGroup, ButtonModeShadeGroups, StateSetting, BevelSettingsProps, HotlinkModeVariables, OnHotlink, OnHotlinkWithDecoration} from "../atoms/index";
import { Molecules } from "../molecules/index";
import { Organisms } from "../organisms/index";
import { PropertyColorShade, PropertyPercentage, PropertyGroupListener, PropertyColorPair, Property, ListenerSubscription, ColorPair } from "../common/index";
import { IDesignSystem, EventValueChange, VarListener, IVarGroup, IColor } from "../interfaces";

import { Logger } from "../util/logger";

const log = new Logger("css");

/**
 * The CSS code generator.
 * @category Generators
 */
export class CSSGenerator {

    public readonly ds: IDesignSystem;
    public readonly atoms: Atoms;
    public readonly molecules: Molecules;
    public readonly organisms: Organisms;
    private readonly cssVars: {[key:string]: string} = {};
    private readonly cssVarListeners: {[key:string]: VarListener} = {};
    private readonly varGroups: {[key:string]: VarGroup} = {};
    private readonly cssColors: {[name: string]: CSSColor} = {};
    private defaultTheme?: CSSTheme;

    constructor(ds: IDesignSystem) {
        this.ds = ds;
        this.atoms = ds.atoms as Atoms;
        this.molecules = ds.molecules as Molecules;
        this.organisms = ds.organisms as Organisms;
        this.generate();
    }

    public generate() {

        // Set all static CSS variables
        this.setStaticVars();

        // Set all atom CSS variables
        this.setAtomVars();

        // Set all molecule CSS variables
        this.setMoleculeVars();

        // Set all organism CSS variables
        this.setOrganismVars();
    }

    public getVars(): {[name: string]: string} {
        return this.cssVars;
    }

    public getVarGroupKeys(): string[] {
        return Object.keys(this.varGroups);
    }

    private setStaticVars() {
        const vk = new VariableKind("static","",[], this);
        vk.setVars({
            "zoom": "1",
            "meshSVGfill": "rgb(0,102,239)",
            "transparent": "rgba(0,0,0,0)",
            "white": "#ffffff",
            "white-half": "rgba(255, 255, 255, 0.5)",
            "on-white": "var(--black)",
            "black": "#121212",
            "black-half": "rgba(0,0,0, 0.5)",
            "nearblack": "#181818",
            "on-nearblack": "#ffffff",
            "dm-white": "rgba(255, 255, 255, 0.6)",
            "dm-on-white": "#121212",
            "on-black": "#ffffff",
            "dm-on-black": "rgba(255, 255, 255, 0.6)",
            "dm-nearblack": "rgba(255, 255, 255, 0.6)",
            "dm-on-nearblack": "rgba(255, 255, 255, 0.6)",
            "textLight": "var(--white)",
            "textDark": "var(--black)",
            "dm-textLight": "var(--dm-white)",
            "dm-textDark": "var(--black)",
            "gray-0": "#fafafa",
            "gray-100": "#e4e4e4",
            "gray-200": "#cdcdcd",
            "gray-400": "#a0a0a0",
            "gray-500": "#8a8a8a",
            "gray-600": "#737373",
            "gray-700": "#5d5d5d",
            "gray-800": "#464646",
            "gray-900": "#303030",
            "on-gray-0": "var(--black)",
            "on-gray-100": "var(--black)",
            "on-gray-200": "var(--black)",
            "on-gray-300": "var(--black)",
            "on-gray-400": "var(--black)",
            "on-gray-500": "var(--white)",
            "on-gray-600": "var(--white)",
            "on-gray-700": "var(--white)",
            "on-gray-800": "var(--white)",
            "on-gray-900": "var(--white)",
            "dm-gray-0": "#dfdfdf",
            "dm-gray-100": "#c8c8c8",
            "dm-gray-200": "#b1b1b1",
            "dm-gray-300": "#9b9b9b",
            "dm-gray-400": "#858585",
            "dm-gray-500": "#6a6a6a",
            "dm-gray-600": "#505050",
            "dm-gray-700": "#383838",
            "dm-gray-800": "#212121",
            "dm-gray-900": "#070707",
            "dm-on-gray-0": "var(--black)",
            "dm-on-gray-100": "var(--black)",
            "dm-on-gray-200": "var(--black)",
            "dm-on-gray-300": "var(--black)",
            "dm-on-gray-400": "var(--black)",
            "dm-on-gray-500": "var(--white)",
            "dm-on-gray-600": "var(--white)",
            "dm-on-gray-700": "var(--white)",
            "dm-on-gray-800": "var(--white)",
            "dm-on-gray-900": "var(--white)",
            "white-bg": "#ffffff",
            "quiet": "68%",
            "disabled": "38%",
            "hover": "50%",
            "active": "100%",
        });
    }

    private setAtomVars() {
        const atoms = this.atoms;

        // Listen for the addition of colors or removal of colors from the color palette.
        atoms.colorPalette.setColorListener(this.lkey("colorPalette"), this.colorListener.bind(this));

        // Listen for default theme changes
        atoms.colorThemes.defaultTheme.setPropertyListener(this.lkey("colorTheme"), this.defaultThemeListener.bind(this));

        this.coreSystemSettings();

        // Listen for changes to the input background
        this.addPropVar("myInputBackground", "", atoms.inputBackground.overlayColor, this.generateInputBackgroundVariables.bind(this));

        // Listen for the state settings changes
        atoms.stateSettings.all.forEach(ss => this.addPropVar(ss.name, "", ss.prop, this.setStateSettingVar.bind(this, ss)));

        // Listen for changes affecting hotlinks calculations
        this.addPropsVar("hotlinks", "", [atoms.hotlinks.underlineHotlinksInLightMode, this.ds.atoms.colorThemes.defaultTheme], this.generateHotlinkVariables.bind(this));

        // Topography root
        const fs = atoms.fontsSettings;
        this.addPropVar("primary-font", "", fs.primaryFont);
        this.addPropVar("secondary-font", "", fs.secondaryFont);
        this.addPropVar("baseFont", "px", fs.baseFontSize);
        const fw = fs.fontWeights;
        for (let i = 0; i < fw.length; i++) {
            this.addPropVar(`font-weight-${i}`, "", fw[i]);
        }
        this.addPropVar("standard-line-height", "%", fs.standardLineHeight);
        this.addPropVar("header-line-height", "%", fs.headerLineHeight);
    }

    private setMoleculeVars() {
        const ms = this.molecules;
        const vk = new VariableKind("molecules","",[], this);
        // dropdowns
        const dd = ms.dropdowns;
        const mfs = dd.menuFocusState;
        this.addPropVar("dropdown-focus-theme", "", mfs, dropDownToCSS);
        this.addPropVar("dropdown-elevation", "", dd.menuElevation, elevationToCSS);
        this.addPropVar("dropdown-radius", "", dd.borderRadius);
        vk.setVars({ // TODO: static
            "dropdown-focus-bg": "linear-gradient(90deg, var(--button) var(--dropdown-focus-theme), var(--transparent) var(--dropdown-focus-theme))",
            "on-dropdown-focus-bg": "#ffffff",
            "dm-dropdown-focus-bg": "linear-gradient(90deg, var(--dm-button) var(--dropdown-focus-theme), var(--transparent) var(--dropdown-focus-theme))",
            "dm-on-dropdown-focus-bg": "rgba(255,255,255,.6)",
            "dropdown-hover-style": "100%",
            "dropdown-hover-bg": "linear-gradient(90deg, var(--button-half) var(--dropdown-focus-theme), var(--transparent) var(--dropdown-focus-theme)) !important",
            "dm-dropdown-hover-bg": "linear-gradient(90deg, var(--button-half) var(--dropdown-focus-theme), var(--transparent) var(--dropdown-focus-theme))",
            "dm-on-dropdown-hover-bg": "rgba(255,255,255,.6)",
            "dropdown-bottom-hover-bg": "linear-gradient(0deg, var(--button-half) var(--dropdown-focus-theme), var(--transparent) var(--dropdown-focus-theme)) !important",
            "dm-dropdown-bottom-hover-bg": "linear-gradient(0deg, var(--dm-button) var(--dropdown-focus-theme), var(--transparent) var(--dropdown-focus-theme)) !important",
        });
        // standard button
        const stb = ms.standardButtons;
        stb.buttonText.setListener(this.lkey("stb.buttonText"), function(event) {
            const ctaSize = (stb.buttonText.getValue() === "CTA Small") ? "CTA-Small" : "CTA"
            vk.setVars({
                "buttonTypography": `var(--${ctaSize}FontWeight) var(--${ctaSize}FontSize) / var(--${ctaSize}LineHeight) var(--${ctaSize}FontFamily)`,
                "buttonTextDecoration": `var(--${ctaSize}TextDecoration)`,
                "buttonTextTransform": `var(--${ctaSize}TextTransform)`,
                "buttonCharacterSpacing": `var(--${ctaSize}CharacterSpacing)`,
            });    
        })
        this.addPropVar("button-padding", "", stb.horizontalPadding);
        this.addPropVar("button-border", "", stb.secondaryBorder);
        this.addPropVar("button-radius", "", stb.radius);
        this.addPropVar("button-minwidth", "", stb.minWidth);
        this.addPropVar("button-height", "", stb.height);
        this.addPropVar("button-elevation", "", stb.buttonElevation, elevationToCSS);
        this.addPropVar("button-bevel", "", stb.buttonBevel, bevelToCSS);
        vk.setVars({ // TODO: static?
            "button": "TODO",
            "on-button": "TODO",
            "button-half": "TODO",
            "dm-on-button": "TODO",
            "dm-button": "TODO",
            "dm-button-half": "TODO",
            "button-shadow": "var(--button-elevation), var(--button-bevel)",
        });
        // small button
        const smb = ms.smallButtons;
        this.addPropVar("sm-button-height", "", smb.visibleHeight);
        this.addPropVar("sm-button-padding", "", smb.horizontalPadding);
        smb.buttonText.setListener(this.lkey("smb.buttonText"), function(event) {
            const ctaSize = (smb.buttonText.getValue() == "CTA Small") ? "CTA-Small" : "CTA"
            vk.setVars({
                "sm-buttonTypography": `var(--${ctaSize}FontWeight) var(--${ctaSize}FontSize) / var(--${ctaSize}LineHeight) var(--${ctaSize}FontFamily)`,
                "sm-buttonTextDecoration": `var(--${ctaSize}TextDecoration)`,
                "sm-buttonTextTransform": `var(--${ctaSize}TextTransform)`,
                "sm-buttonCharacterSpacing": `var(--${ctaSize}CharacterSpacing)`,
            });    
        })
        vk.setVars({ // TODO: static?
            "groupButton-radius": "calc(var(--radius-1) * var(--button-radius) * 1.6)",
            "groupButtonBG": "#ffffff", // TODO?
            "on-groupButtonBG": "var(--textDark)",
            "dm-groupButtonBG": "rgba(0,0,0,.6)",
            "dm-on-groupButtonBG": "var(--dm-dmwhite)",
        });
        // chip
        const chip = ms.chips;
        this.addPropVar("chip-minwidth", "px", chip.minWidth);
        this.addPropVar("chip-height", "", chip.visibleHeight);
        this.addPropVar("chip-radius", "", chip.radius);
        this.addPropVar("chip-padding", "", chip.horizontalPadding);
        this.addPropVar("chip-elevation", "", chip.elevation, elevationToCSS);
        this.addPropVar("chip-bevel", "", chip.bevel, bevelToCSS);
        this.addPropVar("chip-text", "", chip.text, function(vk: VariableKind) {
            const typography = (chip.text.getValue() === "Caption") ? "caption" : "caption-bold";
            vk.setVars({
                "chipTypography": `var(--${typography}FontWeight) var(--${typography}FontSize) / var(--${typography}LineHeight) var(--${typography}FontFamily)`,
                "chipTextTransform": `var(--${typography}TextTransform)`,
                "chipCharacterSpacing": `var(--${typography}CharacterSpacing)`,
            });    
        });
        // switch - TODO - part of charts?
        vk.setVars({
           "switch-height": "var(--spacing-3)",
           "switch-radius": "3",
           "switch-bar-height": "var(--spacing-1)", // I see bar width and radius, but not height
           "switch-bar-radius": "1",
        });
        // cards
        const card = ms.standardCards;
        this.addPropVar("card-padding", "", card.padding);
        this.addPropVar("card-gap", "", card.contentGap);
        this.addPropVar("card-radius", "", card.borderRadius);
        this.addPropVar("card-elevation", "", card.elevation, elevationToCSS);
        this.addPropVar("card-bevel", "", card.bevel, bevelToCSS);
        vk.setVars({ // TODO: static?
            "card-border": "1",
            "card-border-color": "var(--border)",
            "card-shadow": "var(--card-elevation), var(--card-bevel)",
        });
        // modals - TODO: How should modal.color be used?
        const modal = ms.modal;
        this.addPropVar("modal-radius", "px", modal.borderRadius);
        this.addPropVar("modal-elevation", "", modal.elevation, elevationToCSS);
        vk.setVars({
            "modal-padding": "var(--spacing-2)",
            "modal-border": "var(--spacing-2)",
            "modal-shadow": "var(--spacing-2)",
            "modal-overlay": "var(--spacing-2)",
        });
        // tooltips - TODO: where do these come from?
        vk.setVars({
            "dmtooltip": "",
            "tooltip-padding": "var(--spacing-2)",
            "tooltip-border": "var(--spacing-1)",
            "tooltip-elevation": "0",
        });
        // toasts - TODO: How is gap used?
        const toast = ms.toasts;
        this.addPropVar("toast-radius", "", toast.handleBorderRadius);
        this.addPropVar("toast-elevation", "", toast.elevation, elevationToCSS);
        this.addPropVar("toast-padding", "px", toast.gap);
        vk.setVars({
            "toast-bevel": "var(--bevel-0)",
            "toast-boxshadow": "var(--toast-elevation), var(--toast-bevel)",
        });
        // Images
        const image = ms.images;
        this.addPropVar("image-elevation", "", image.imageElevation, elevationToCSS);
        this.addPropVar("image-radius", "", image.generalImageBorderRadius);
        this.addPropVar("inline-image-height", "", image.listImageHeight);
        this.addPropVar("inline-image-radius", "", image.listImageBorderRadius);
        // Avatar Images
        const avatar = ms.avatars;
        this.addPropVar("avatar-border", "px", avatar.mediumBorder);
        this.addPropVar("avatar-border-lg", "px", avatar.extraLargeBorder);
        this.addPropVar("avatar-elevation", "", avatar.elevation, elevationToCSS);
        vk.setVar("avatar-shadow", "var(--avatar-elevation)");
        // sliders
        const slider = ms.sliders;
        this.addPropVar("sliderhandleHeight", "px", slider.barHeight);
        this.addPropVar("sliderhandleRadius", "px", slider.handleBorderRadius);
        vk.setVar("barInBevel", "1"); // TODO: where from?
        // popover
        const popover = ms.popovers;
        this.addPropVar("popoverRadius", "", popover.borderRadius);
        this.addPropVar("popoverElevation", "", popover.elevation, elevationToCSS);
        this.addPropVar("popoverBevel", "", popover.bevel, bevelToCSS);
        vk.setVar("popoverShadow", "var(--popoverElevation), var(--popoverBevel)");
    }

    private setOrganismVars() {
        const org = this.organisms;
        const vk = new VariableKind("organism","",[], this);
        // leftNav - TODO - listed under molecules?
        vk.setVars({
          "leftNav": "var(--gray-100)",
          "on-leftNav": "var(--on-gray-100)",
          "leftNavPadding": "var(--spacing-2)",
        });
        // footer - TODO - listed under molecules?
        const fc = org.footerAndCopyright;
        this.addPropVar("footer-padding", "px", fc.footerVerticalPadding);
        vk.setVars({
            "footer": "var(--gray-900)",
            "on-footer": "var(--on-gray-900)",
            "dm-footer": "var(--dm-gray-900)",
            "dm-on-footer": "var(--dm-on-gray-900)",
        });
        // copyright - TODO - listed under molecules?
        vk.setVars({
            "copyright": "var(--nearblack)",
            "on-copyright": "var(--on-nearblack)",
            "copyright-padding":  "var(--spacing-1)",
            "dm-copyright": "var(--nearblack)",
            "dm-on-copyright": "var(--dm-on-nearblack)",
        });
        // paragraph - TODO: static? - listed under molecules?
        vk.setVar("p-padding", "1");
        // sections - TODO static? listed under molecules?
        vk.setVar("section-padding", "3");
        // navbar primary
        const pnav = org.primaryNav;
        this.addPropVar("navbarPrimary-padding", "px", pnav.verticalPadding);
        this.addPropVar("navbarPrimary-position", "", pnav.fixed, function(vk: VariableKind) {
            vk.setVar(vk.name, pnav.fixed.getValue() ? "fixed" : "relative"); // TODO: Is "relative" correct?
        });
        // navbar secondary /
        const snav = org.secondaryNav;
        this.addPropVar("navbarSecondary-padding", "px", snav.verticalPadding);
        this.addPropVar("navbarSecondary-position", "", snav.sticky, function(vk: VariableKind) {
            vk.setVar(vk.name, snav.sticky.getValue() ? "sticky" : "fixed"); // TODO: Is "fixed" correct?
        });
        vk.setVar("navbarSecondary-stickyTop", "48px"); // TODO: static?
        // hero
        const hero = org.hero;
        this.addPropVar("hero-gap", "px", hero.verticalGap);
        vk.setVars({ // TODO: Static?  
            "hero-padding": "var(--spacing-3)",
            "hero-heroTitleTopography": "var(--Display1FontWeight) var(--Dislay1FontSize) / var(--Display1LineHeight) var(--Display1FontFamily)",
            "hero-heroTitleTransform": "var(--Display1TextTransform)",
            "hero-heroTitleSpacing": "var(--Dislay1CharacterSpacing)",
            "hero-heroBodyTypography": "var(--body1FontWeight) var(--body1FontSize) / var(--body1LineHeight) var(--body1FontFamily)",
            "hero-heroBodyTransform": "var(--body1TextTransform)",
            "hero-heroBodySpacing": "var(--body1CharacterSpacing)",
            "hero-title-gap": "16px",
            "hero-justify-content": "flex-start",
        });
        // tables
        vk.setVars({ // TODO: static?
            "tableheaderTopography": "var(--label-1FontWeight) var(--label-1FontSize) / var(--label-1LineHeight) var(--label-1FontFamily)",
            "tableheaderSpacing": "var(--label-1CharacterSpacing)",
            "tableheaderTransform": "var(--label-1TextTransform)",
            "tablebodyTopography": "var(--body1FontWeight) var(--body1FontSize) / var(--body1LineHeight) var(--body1FontFamily)",
            "tablebodySpacing": "var(--body1CharacterSpacing)",
            "tablebodyTransform": "var(--body1TextTransform)",
            "tableheaderPadding": "1",
            "tablebodyPadding": "1",
        });
    }

    // core system settings
    private coreSystemSettings() {
        const atoms = this.atoms;
        const vk = new VariableKind("", "", [], this);
        // targets
        this.addPropVar("min-target", "px", atoms.minimumTarget.minHeight);
        this.addPropVar("mobile-target", "px", atoms.minimumTarget.minHeight);
        this.addPropVar("animation-speed", "s", atoms.animationSettings.animationTiming);
        this.addPropVar("animation-distance", "px", atoms.animationSettings.hoverAndFocusAnimationDistance);
        this.addPropVar("animation-focus-distance", "px", atoms.animationSettings.hoverAndFocusAnimationDistance);
        // radius
        vk.setVar("radius-0", "0px");
        this.addPropVar("radius-1", "px", atoms.borderSettings.baseBorderRadius);
        for (let i = 2; i <= 10; i++) vk.setVar(`radius-${i}`, `calc(var(--radius-1) * ${i})`);
        vk.setVar(`radius-quarter`, `calc(var(--radius-1 / 4)`);
        vk.setVar(`radius-half`, `calc(var(--radius-1 / 2)`);
        // spacing
        vk.setVar("spacing-0", "0px");
        this.addPropVar("spacing-1", "px", atoms.gridSettings.grid);
        for (let i = 2; i <= 10; i++) vk.setVar(`spacing-${i}`, `calc(var(--spacing-1) * ${i})`);
        vk.setVar(`spacing-quarter`, `calc(var(--spacing-1 / 4)`);
        vk.setVar(`spacing-half`, `calc(var(--spacing-1 / 2)`);
        vk.setVar(`negative-size-half`, `calc(0 - var(--spacing-1 / 2)`);
        // borders
        vk.setVar("border-0", "0px");
        this.addPropVar("border-1", "px", atoms.borderSettings.baseBorderWidth);
        for (let i = 2; i <= 4; i++) vk.setVar(`border-${i}`, `calc(var(--border-1) * ${i})`);
        // elevation settings
        this.addPercentToDecimal("elevation-change", atoms.elevationSettings.percentageChange);
        for (let i = 2; i <= 9; i++) vk.setVar(`change-${i}`, `calc(1 + calc(var(--elevation-change) * ${i}))`);
        this.addPropVar("elevation-horizontal", "px", atoms.elevationSettings.horizontalShadowLength);
        this.addPropVar("elevation-vertical", "px", atoms.elevationSettings.verticalShadowLength);
        this.addPropVar("elevation-blur", "px", atoms.elevationSettings.blurRadius);
        this.addPropVar("elevation-spread", "px", atoms.elevationSettings.spreadRadius);
        this.addPropVar("base-elevation-blur", "px", atoms.elevationSettings.baseBlurRadius);
        this.addPropVar("base-elevation-spread", "px", atoms.elevationSettings.baseSpreadRadius);
        this.addPropVar("elevation-rgb", "", atoms.elevationSettings.shadowColor, this.shadowColorListener.bind(this)); 
        this.addPercentToDecimal("elevation-opacity", atoms.elevationSettings.colorOpacity);
        this.addPercentToDecimal("base-elevation-opacity", atoms.elevationSettings.baseColorOpacity);
        // elevations
        vk.setVar("elevation-0", "0 0 0 0 rgba(0,0,");
        for (let i = 1; i <= 9; i++) {
            const vc = `var(--change-${i})`;
            vk.setVar( `elevation-${i}`, 
                `calc(var(--elevation-horizontal) * ${vc}) ` +
                `calc(var(--elevation-vertical) * ${vc}) ` +
                `calc(var(--elevation-blur) * ${vc}) ` +
                `calc(var(--elevation-spread) * ${vc}) ` +
                `rgba(var(--elevation-rgb), calc(var(--elevation-opacity) * ${vc})), 0 0 ` +
                `calc(var(--base-elevation-blur) * ${vc}) ` +
                `calc(var(--base-elevation-spread) * ${vc}) ` +
                `rgba(var(--elevation-rgb), calc(var(--base-elevation-opacity) * ${vc}))`
            );
        }
        // bevel standard and inverse settings
        this.addBevelProps(atoms.bevelSettings.standard);
        this.addBevelProps(atoms.bevelSettings.inverse);

        this.addPropsVar("focusBlur", "px", [atoms.gridSettings.grid, atoms.focusStates.addFocusBlur], this.generateFocusBlurVariables.bind(this));
    }

    private addBevelProps(props: BevelSettingsProps) {
        // bevel or inbevel settings
        const p = props.standard ? "bevel" : "inbevel";
        this.addPropVar(`${p}-horizontal`, "px", props.horizontalShadowLength);
        this.addPropVar(`${p}-vertical`, "px", props.verticalShadowLength);
        this.addPropVar(`${p}-spread`, "px", props.spreadRadius);
        this.addPropVar(`${p}-blur`, "px", props.blurRadius);
        this.addPercentToDecimal(`${p}-light-opacity`, props.lightGlowOpacity);
        this.addPercentToDecimal(`${p}-dark-opacity`, props.darkShadowOpacity);
        this.addPercentToDecimal(`${p}-change`, props.percentageChange);
        // bevels
        const vk = new VariableKind(p, "", [], this);
        if (props.standard) {
            vk.setVar("bevel-0", "0 0 0 0 rgba(0,0,0,0)");
            vk.setVar("bevel-1", "inset var(--bevel-horizontal) var(--bevel-vertical) var(--bevel-blur) var(--bevel-spread) rgba(255, 255, 255, var(--bevel-light-opacity)), inset calc(0px-var(--bevel-horizontal)) calc(0px - var(--bevel-vertical)) var(--bevel-blur) var(--bevel-spread) rgba(0,0,0,var(--bevel-dark-opacity))");
            for (let i = 2; i <= 9; i++) {
                const bc = `calc(1 + calc(var(--bevel-change) * ${i}))`;
                vk.setVar(`bevel-${i}`, 
                    `inset calc(var(--bevel-horizontal) * ${bc}) ` +
                    `calc(var(--bevel-vertical) * ${bc}) ` +
                    `var(--bevel-blur) ` +
                    `var(--bevel-spread) ` +
                    `rgba(255, 255, 255, var(--bevel-light-opacity)), ` +
                    `inset calc(0px - calc(var(--bevel-horizontal) * ${bc}) ` +
                    `calc(0px - calc(var(--bevel-vertical) * ${bc}) ` +
                    `var(--bevel-blur) ` +
                    `var(--bevel-spread) ` +
                    `rgba(0,0,0,calc(var(--bevel-dark-opacity) * ${bc}))`);
            }
        } else {
            vk.setVar("reverse-bevel-1", "inset var(--inbevel-horizontal) var(--inbevel-vertical) var(--inbevel-blur) var(--inbevel-spread) rgba(0,0,0,calc(var(--inbevel-dark-opacity)*(1+var(--inbevel-change))))");
            for (let i = 2; i <= 9; i++) {
                const bc = `calc(1-calc(var(--inbevel-change) * ${i-1}))`;
                const m = Math.round((1 - ((i-1)/10)) * 10) / 10;
                vk.setVar(`reverse-bevel-${i}`,
                    `inset calc(var(--inbevel-horizontal) * ${bc}) ` +
                    `calc(var(--inbevel-vertical) * ${bc}) ` +
                    `calc(var(--inbevel-blur) * ${m}) ` +
                    `calc(var(--inbevel-spread) * ${m}) ` +
                    `rgba(0,0,0,calc(var(--inbevel-dark-opacity)*${bc}))`);
            }
        }
    }

    public getVarGroup(name: string): VarGroup {
        let vg = this.varGroups[name];
        if (!vg) {
            vg = new VarGroup(name);
            this.varGroups[name] = vg;
        }
        return vg;
    }

    private colorListener(name: string, color?: IColor) {
        if (color) {
            const cssColor = new CSSColor(color, this);
            this.cssColors[name] = cssColor;
        } else {
            const cssColor = this.cssColors[name];
            cssColor.stop();
            delete this.cssColors[name];
        }
    }

    private shadowColorListener(vk: VariableKind) {
        const val = this.atoms.elevationSettings.shadowColor.getValue();
        if (val !== undefined) {
            const shade = Shade.fromHex(val);
            vk.setVar("elevation-rgb", `${shade.R}, ${shade.G}, ${shade.B}`);
        }
    }

    private addPercentToDecimal(name: string, prop: PropertyPercentage) {
        this.addPropVar(name, "", prop, this.percentToDecimalListener.bind(this, name));
    }

    private percentToDecimalListener(varName: string, vk: VariableKind) {
        const val = vk.props[0].getValue();
        if (val !== undefined) {
            // Convert from percentage to decimal value
            vk.setVar(varName, `${val/100}`);
        }
    }

    private generateFocusBlurVariables(vk: VariableKind) {
        const name = "focus-blur";
        const unit = "px";
        const focusBlur = this.atoms.focusStates.addFocusBlur.getValue();
        const grid = this.atoms.gridSettings.grid.getValue();
        if (focusBlur === undefined || grid === undefined) {
            this.setVar(name, unit, vk);
            return;
        }
        if (focusBlur) {
            this.setVar(name, unit, vk, `${grid/2}`);
        } else {
            this.setVar(name, unit, vk, '0');
        }
    }

    private generateInputBackgroundVariables(vk: VariableKind) {
        const vars = this.atoms.inputBackground.getVariables();
        if (!vars) return;
        this.setVar(`input-default`, "", vk, vars.inputDefault.getHexOrRGBA());
        this.setVar(`input-disabled`, "", vk, vars.inputDisabled.getHexOrRGBA());
        this.setVar(`on-input-default`, "", vk, vars.onInputDefault.getHexOrRGBA());
        this.setVar(`on-input-disabled`, "", vk, vars.onInputDisabled.getHexOrRGBA());
        this.setVar(`dm-input-default`, "", vk, vars.dmInputDefault.getHexOrRGBA());
        this.setVar(`dm-input-disabled`, "", vk, vars.dmInputDisabled.getHexOrRGBA());
    }

    //@bc - HERE not sure it's setting css vars correctly
    private setStateSettingVar(ss: StateSetting, vk: VariableKind) {
        const hex = vk.props[0].getValue();
        if (hex !== undefined) {
            this.setVar(ss.name, "", vk, ss.lmShade.hex);
            this.setVar(`on-${ss.name}`, "", vk, ss.lmShade.getOnShade().hex);
            this.setVar(`dm-${ss.name}`, "", vk, ss.dmShade.hex);
            this.setVar(`dm-on-${ss.name}`, "", vk, ss.dmShade.getOnShade().hex);
        }
    }

    private generateHotlinkVariables(vk: VariableKind) {
        log.debug(`Generating hotlinks variables`);
        const vars = this.atoms.hotlinks.getHotlinkVars();
        if (vars) {
            this.generateHotlinkModeVariables(vars.lm, "", vk);
            this.generateHotlinkModeVariables(vars.dm, "dm-", vk);
            this.generateOnHotlinkWithDecorationVariables("White", vk, vars.onWhite);
            this.generateOnHotlinkWithDecorationVariables("Black", vk, vars.onBlack);
            this.generateOnHotlinkWithDecorationVariables("Tertiary", vk, vars.onTertiary);
            this.generateOnHotlinkVariables("Gradient3", vk, vars.onGradient3);
            this.generateOnHotlinkVariables("dm-gradient3", vk, vars.onDMGradient3);
        }
    }

    private generateHotlinkModeVariables(vars: HotlinkModeVariables, prefix: string, vk: VariableKind) {
        vk.setShadeVar(`${prefix}hotlink`, vars.unvisited.shade);
        vk.setShadeVar(`${prefix}hotlink-visited`, vars.visited.shade);
        vk.setVar(`${prefix}hotlink-decoration`, vars.unvisited.decoration);
        vk.setVar(`${prefix}hotlink-hover-decoration`, vars.unvisited.hoverDecoration);
    }

    private generateOnHotlinkWithDecorationVariables(color: string, vk: VariableKind, vars: OnHotlinkWithDecoration) {
        this.generateOnHotlinkVariables(color, vk, vars);
        vk.setVar(`hotlinkOn${color}-decoration`, vars.decoration);
        vk.setVar(`hotlinkOn${color}-hover-decoration`, vars.hoverDecoration);
    }

    private generateOnHotlinkVariables(color: string, vk: VariableKind, vars: OnHotlink) {
        vk.setShadeVar(`hotlinkOn${color}`, vars.unvisited);
        vk.setShadeVar(`hotlinkOn${color}-visited`, vars.visited);
    }

    public setShadeListener(args: ShadeListenerArgs): ListenerSubscription {
        return args.pcs.setListener(this.lkey(args.name), this.shadeListener.bind(this, args));
    }

    private shadeListener(args: ShadeListenerArgs, vc: EventValueChange<Shade>) {
        log.debug(`shadeListener entry: ${args.name}`);
        const shade = vc.newValue;
        if (shade) {
            const name = args.name;
            const pcs = args.pcs;
            const vk = new VariableKind(name,"", [pcs], this);
            const dmPrefix = args.dmPrefix || "dm-";
            this.setShadeVars(name, "", args, shade, vk);
            if (args.dm) {
                const dmShade = shade.getMode().color.dark.shades[shade.index];
                this.setShadeVars(name, dmPrefix, args, dmShade, vk);
            }
            if (args.palette) {
                const color = shade.getMode().color;
                this.setPaletteVars(name, "", args, color.light.shades, vk);
                if (args.dm) this.setPaletteVars(name, dmPrefix, args, color.dark.shades, vk);
            }
        }
    }

    private setShadeVars(name: string, prefix: string, args: ShadeListenerArgs, shade: Shade, vk: VariableKind) {
        vk.setShadeVar(`${prefix}${name}`, shade);
        if (args.half) vk.setShadeVar(`${prefix}${name}-half`, shade.getHalfShade());
        if (args.quarter) vk.setShadeVar(`${prefix}${name}-quarter`, shade.getQuarterShade());
        if (args.on) vk.setShadeVar(`${prefix}on-${name}`, shade.getOnShade());
    }

    private setPaletteVars(name: string, prefix: string, args: ShadeListenerArgs, shades: Shade[], vk: VariableKind) {
        shades.forEach(shade => {
            vk.setShadeVar(`${prefix}${name}-${shade.id}`, shade);
            if (args.on) vk.setShadeVar(`${prefix}on-${name}-${shade.id}`, shade.getOnShade());
        });
    }
    public setShadeVar(name: string, kind: VariableKind, shade?: Shade) {
        if (shade) {
            this.setVar(name, "", kind, shade.getHexOrRGBA());
        } else {
            this.setVar(name, "", kind);
        }
    }

    private defaultThemeListener(vc: EventValueChange<string>) {
        const name = vc.newValue;
        if (name !== undefined) {
            if (this.defaultTheme) this.defaultTheme.stop();
            this.defaultTheme = new CSSTheme(this.atoms.colorThemes.getTheme(name), this);
        }
    }

    public setCSSVarListener(name: string, cb?: VarListener) {
        if (cb) {
            this.cssVarListeners[name] = cb;
            Object.keys(this.cssVars).forEach(name => {
                cb(name, this.cssVars[name]);
            });
        } else {
            delete this.cssVarListeners[name];
        }
    }

    public setVar(name: string, unit: string, kind: VariableKind, value?: any) {
        const cssName = this.cssName(name);
        let cssValue: string | undefined = undefined;
        if (value !== undefined && value !== null) {
            cssValue = `${value}${unit}`;
        }
        log.debug(`CSS variable: ${cssName}: ${cssValue}`);
        // For each of the component keys (e.g. keys of individual atoms, molecules, or organisms),
        // set the variable in the appropriate groups, one group for each atom, molecule, or organism.
        kind.componentKeys.forEach(key => this.getVarGroup(key).setVar(cssName, cssValue));
        if (cssValue !== undefined) {
            this.cssVars[cssName] = cssValue;
        } else {
            // Delete CSS variable
            delete this.cssVars[cssName];
        }
        // Notify listeners of change
        Object.values(this.cssVarListeners).forEach((l) => l(cssName,cssValue));
    }

    public lkey(name: string): string {
        return `_tb.cssGenerator.${name}`
    }

    private cssName(name: string): string {
        return `--${name}`;
    }

    /**
     * Call this if there is a 1-1 relationship between an input property 'prop' 
     * and a generated output CSS variable (varName).
     * There must be no computation involved in order to generate the CSS
     * variable value from the value of the property.
     * Note: this means that the CSS variables are dynamically updated when the 'prop'
     * property is updated.
     * @param name The CSS variable name (without the leading --);
     * @param unit The unit that is appended to the value of the variable.
     * @param prop The input property from which the CSS variable value is derived
     */
    private addPropVar(name: string, unit: string, prop: Property<any>, cb?: (propVar: VariableKind) => void) {
        new DynamicVariableKind(name, unit, [prop], this, cb);
    }

    /**
     * Call this when there is a more complicated relationship between input properties
     * and output CSS variables.  The callback function
     * 
     * @param name A unique name.
     * @param props Any number of properties which are monitored for changes before calling 'cb'.
     * @param cb  The callback called each time all 'props' are initialized and any values change.
     */
    private addPropsVar(name: string, unit: string, props: Property<any>[], cb: (propVar: VariableKind) => void) {
        new DynamicVariableKind(name, unit, props, this, cb);
    }

}

class CSSColor {

    private color: IColor;
    private cssGenerator: CSSGenerator;
    private lname: string = '_tb.CssColor';
    private varKind: VariableKind;

    constructor(color: IColor, cssGenerator: CSSGenerator) {
        this.color = color;
        this.cssGenerator = cssGenerator;
        this.varKind = new VariableKind("color", "", [color.hex as Property<string>], cssGenerator);
        this.start();
    }

    public start() {
        this.color.hex.setListener(this.lname, this.listener.bind(this));
    }

    public stop() {
        this.color.hex.removeListener(this.lname);
    }

    private listener(vc: EventValueChange<string>): void {
        for (const shade of [...this.color.light.shades,...this.color.dark.shades]) {
            const name = getShadeVarName(shade);
            if (name) {
                this.cssGenerator.setShadeVar(name, this.varKind, shade);
                this.cssGenerator.setShadeVar(`on-${name}`, this.varKind, shade.getOnShade());
            } else {
                log.warn(`Unable to set CSS variable for shade ${shade.toString()} because no variable name can be determined`);
            }
        }
    }

}

class CSSTheme {

    public readonly theme: ColorTheme;
    public readonly cssGenerator: CSSGenerator;
    private readonly listenerSubscriptions: ListenerSubscription[] = [];

    constructor(theme: ColorTheme, cssGenerator: CSSGenerator) {
        this.theme = theme;
        this.cssGenerator = cssGenerator;
        this.start();
    }

    public start() {

        // Listen for changes to the primary, secondary, and tertiary shades
        this.setShadeListener({name: "primary", pcs: this.theme.primary, on: true, dm: true, palette: true, half: true, quarter: true});
        this.setShadeListener({name: "secondary", pcs: this.theme.secondary, on: true, dm: true, palette: true});
        this.setShadeListener({name: "tertiary", pcs: this.theme.tertiary, on: true, dm: true, palette: true});

        // light and dark mode backgrounds
        this.setBackgroundListener("lmbg", true, this.theme.lightModeBackground);
        this.setBackgroundListener("dmbg", false, this.theme.darkModeBackground);

        // gradients
        this.setShadeListener({name: "gradient1-a", pcs: this.theme.gradient1.from, on: true, dm: true});
        this.setShadeListener({name: "gradient1-b", pcs: this.theme.gradient1.to, on: true, dm: true});
        this.setShadeListener({name: "gradient2-a", pcs: this.theme.gradient2.from, on: true, dm: true});
        this.setShadeListener({name: "gradient2-b", pcs: this.theme.gradient2.to, on: true, dm: true});

        // button
        const ls = this.theme.button.setListener(this.lkey("button"), this.buttonListener.bind(this));
        this.listenerSubscriptions.push(ls);

        // icon
        this.setShadeListener({name: "icon", pcs: this.theme.icon, on: true, dm: true});

        // text gradient
        this.setShadeListener({name: "text-gradient-a", pcs: this.theme.gradientHeaderText.from, on: true, dm: true});
        this.setShadeListener({name: "text-gradient-b", pcs: this.theme.gradientHeaderText.to, on: true, dm: true});

        // accent
        this.setShadeListener({name: "accent", pcs: this.theme.accent, dm: true, dmPrefix: "dm"});

    }

    public stop() {
        // Cancel all of the listener subscriptions
        this.listenerSubscriptions.forEach(ls => ls.cancel());
    }

    private setShadeListener(args: ShadeListenerArgs) {
        const ls = this.cssGenerator.setShadeListener(args);
        this.listenerSubscriptions.push(ls);
    }

    private setBackgroundListener(name: string, lm: boolean, pcp: PropertyColorPair) {
        const ls = pcp.setListener(this.lkey(name), this.backgroundListener.bind(this, name, lm, pcp));
        this.listenerSubscriptions.push(ls);
    }

    private backgroundListener(name: string, lm: boolean, pcp: PropertyColorPair, _: EventValueChange<ColorPair>) {
        const vars = this.theme.getBackgroundVariables(pcp);
        if (!vars) return;
        log.debug(`backgroundListener entry - name=${name}`)
        const vk = new VariableKind(name,"", [pcp], this.cssGenerator);
        const prefix = lm ? "" : "dm-";
        vk.setShadeVar(`${prefix}background`, vars.primary);
        vk.setShadeVar(`${prefix}background-secondary`, vars.secondary);
        vk.setShadeVar(`${prefix}border`, vars.borderColor);
        vk.setShadeVar(`${prefix}chip`, vars.chip);
        vk.setShadeVar(`${prefix}color-drop`, vars.colorDrop);
        vk.setShadeVar(`${prefix}group-button-bg`, vars.groupButton);
        vk.setShadeVar(`${prefix}line-color`, vars.lineColor);
        vk.setShadeVar(`${prefix}surface`, vars.surface);
        // Set elevation backgrounds
        const lmeShades = this.theme.getElevationShades(lm);
        for (let i = 0; i < lmeShades.length; i++) {
            vk.setShadeVar(`${prefix}elevation-bg-${i}`, lmeShades[i]);
            vk.setShadeVar(`${prefix}on-elevation-bg-${i}`, lmeShades[i].getOnShade());
        }
        log.debug(`backgroundListener exit - ${name}`);
    }

    private buttonListener(vc: EventValueChange<Shade>): void {
        const shade = vc.newValue;
        if (!shade) return;
        log.debug("buttonListener entry")
        const vars = this.theme.getButtonShadeGroups(shade);
        const vk = new VariableKind("button", "", [this.theme.button], this.cssGenerator);
        // Set light and dark mode button CSS variables
        vk.setButtonModeVars(true, vars.lm);
        vk.setButtonModeVars(false, vars.dm);
        log.debug("buttonListener exit")
    }

    public setShadeVar(name: string, kind: VariableKind, shade: Shade) {
        this.cssGenerator.setShadeVar(name, kind, shade);
    }

    private lkey(name: string): string {
        return this.cssGenerator.lkey(`CSSTheme.${name}`);
    }

}

export class VariableKind {

    public readonly name: string;
    public readonly unit: string;
    public readonly props: Property<any>[] = [];
    public readonly cssGenerator: CSSGenerator;
    public readonly componentKeys: string[] = [];

    constructor(name: string, unit: string, props: Property<any>[], cssGenerator: CSSGenerator) {
        this.name = name;
        this.unit = unit;
        props.forEach(prop => this.addProp(prop));
        this.cssGenerator = cssGenerator;
    }

    public setVar(name: string, value?: any) {
        this.cssGenerator.setVar(name, this.unit, this, value);
    }

    public setVars(vars: {[name: string]: string}) {
        Object.keys(vars).forEach(key => this.setVar(key, vars[key]));
    }

    public setShadeVar(name: string, shade?: Shade) {
        if (shade) {
            this.setVar(name, shade.getHexOrRGBA());
        } else {
            this.setVar(name);
        }
    }

    public setButtonModeVars(lm: boolean, bmsg: ButtonModeShadeGroups) {
        this.setButtonGroupVars("White", lm, bmsg.white);
        this.setButtonGroupVars("Black", lm, bmsg.black);
        this.setButtonGroupVars("Tertiary", lm, bmsg.tertiary);
        this.setButtonGroupVars("Gradient1", lm, bmsg.gradient1);
        this.setButtonGroupVars("Gradient2", lm, bmsg.gradient2);
        this.setButtonGroupVars("Gradient3", lm, bmsg.gradient3);
        this.setButtonGroupVars("Default", lm, bmsg.default);
    }

    private setButtonGroupVars(name: string, lm: boolean, sg: ShadeGroup) {
        const prefix = lm ? "" : "dm";
        this.setButtonVarRef(`buttonOn${name}`, prefix, sg.shade);
        this.setButtonVarRef(`buttonHalfOn${name}`, prefix, sg.halfShade);
        this.setButtonVarRef(`onbuttonOn${name}`, prefix, sg.onShade);
    }

    private setButtonVarRef(name: string, prefix: string, shade: Shade) {
        const fullName = `${prefix}${name}`;
        const varName = getShadeVarName(shade);
        if (varName) {
            this.cssGenerator.setVar(fullName, "", this, `var(--${varName})`);
        } else {
            this.setShadeVar(fullName, shade);
        }
    }

    private addProp(prop: Property<any>) {
        this.props.push(prop);
        const p = prop.getParent();
        if (!p) throw new Error(`Property ${prop.name} has no parent`);
        if (this.componentKeys.indexOf(p.key) < 0) {
            this.componentKeys.push(p.key);
        }
    }

}

export class DynamicVariableKind extends VariableKind {

    private cb?: (propVar: VariableKind) => void;

    constructor(name: string, unit: string, props: Property<any>[], cssGenerator: CSSGenerator, cb?: (propVar: VariableKind) => void) {
        super(name, unit, props, cssGenerator);
        this.cb = cb;
        const listenerKey = cssGenerator.lkey(name);
        switch (props.length) {
            case 0:
                throw new Error('Empty property array');
            case 1:
                props[0].setListener(listenerKey, this.singlePropCallback.bind(this));
                break;
            default:
                if (!cb) throw new Error(`Multiple property variable requires a callback (${JSON.stringify(props)})`);
                new PropertyGroupListener(listenerKey, props, this.multiplePropCallback.bind(this));
                break;
        }
    }

    private singlePropCallback(vc: EventValueChange<any>): void {
        if (this.cb) {
            this.cb(this);
        } else {
            this.setValue(this.name, this.unit, vc.newValue);
        }
    }

    private multiplePropCallback(pgl: PropertyGroupListener): void {
        if (!this.cb) throw new Error('Multiple property variable requires a callback');
        this.cb(this);
    }

    private setValue(name: string, unit: string, value: any) {
        this.cssGenerator.setVar(name, unit, this, value);
    }

}

interface ShadeListenerArgs {
    name: string;
    pcs: PropertyColorShade;
    half?: boolean;
    quarter?: boolean;   
    on?: boolean;   
    dm?: boolean;
    dmPrefix?: string;
    palette?: boolean;
}

export class Variable {

    public name: string;
    public unit: string;
    public value?: any;
    public kind: VariableKind;

    constructor(name: string, unit: string, kind: VariableKind, value?: any) {
        this.name = name;
        this.unit = unit;
        this.value = value;
        this.kind = kind;
    }

}

export type VarGroupListener = (vg: VarGroup) => void;

export class VarGroup implements IVarGroup {

    public readonly name: string;
    public readonly vars: {[name: string]: string} = {};
    private listeners: {[key: string]: VarGroupListener} = {};

    constructor(name: string) {
        this.name = name;
    }

    public setListener(key: string, listener?: VarGroupListener) {
        if (listener) {
            this.listeners[key] = listener;
        } else {
            delete this.listeners[key];
        }
    }

    public setVar(name: string, value?: string): void {
        if (value !== undefined) {
            this.vars[name] = value;
        } else {
            delete this.vars[name];
        }
        // Notify the listeners that something has changed in this var group
        Object.values(this.listeners).forEach(listener => {
            try {
                listener(this);
            } catch(e) {
                console.log(`ERROR: failed calling VarGroup listener`, e);
            }
        })
    }
}

function getShadeVarName(shade: Shade): string | undefined {
    if (shade.hasMode() && shade.index >= 0) {
        const mode = shade.getMode();
        const prefix = mode.name === 'dm' ? 'dm-' : '';
        const color = mode.color;
        return `${prefix}color-${color.name}-${shade.index}`;
    }
    if (shade.key) {
        return `color-${shade.key}`;
    }
    log.debug(`There is no shade variable name for ${shade.toString()}`);
    return undefined;
}

function dropDownToCSS(vk: VariableKind) {
    const val = vk.props[0].getValue();
    if (val === "Full Color") {
        vk.setVar(vk.name, "100%");
    } else if (val === "Left border only") {
        vk.setVar(vk.name, "var(--spacing-half)");
    } else {
        throw new Error(`Invalid dropdown menu focus state: ${val}`);
    }
}

function elevationToCSS(vk: VariableKind) {
    const val = vk.props[0].getValue();
    if (val === "No Elevation") {
        vk.setVar(vk.name, "var(--elevation-0)");
    } else if (val.startsWith("Elevation-")) {
        const idx = parseInt(val.substring("Elevation-".length));
        vk.setVar(vk.name,`var(--elevation-${idx})`);
    } else if (val.startsWith("Reverse-Elevation-")) {
        const idx = parseInt(val.substring("Reverse-Elevation-".length));
        vk.setVar(vk.name, `var(--reverse-elevation-${idx})`);
    } else {
        throw new Error(`Invalid elevation: '${val}'`);
    }
}

function bevelToCSS(vk: VariableKind) {
    const val = vk.props[0].getValue();
    if (val === "No Bevel") {
        vk.setVar(vk.name, "var(--bevel-0)");
    } else if (val.startsWith("Bevel-")) {
        const idx = parseInt(val.substring("Bevel-".length));
        vk.setVar(vk.name,`var(--bevel-${idx})`);
    } else if (val.startsWith("Reverse-Bevel-")) {
        const idx = parseInt(val.substring("Reverse-Bevel-".length));
        vk.setVar(vk.name, `var(--reverse-bevel-${idx})`);
    } else {
        throw new Error(`Invalid bevel: '${val}'`);
    }
}