import { ThemeBuilder, EventType, Event, PropertyColorShade, PropertyColorPair, PropertyTitledShade, VarGroup } from "../index";

let errCnt = 0;
let buttonSelectablesChangedCount = 0;
let themeInitializedCount = 0;

async function test() {

    console.log("Create the theme builder");
    const themeBuilder = await ThemeBuilder.create();

    console.log("TEST: Add a new design system");
    let ds = await themeBuilder.addDesignSystem("ds1");

    let dsObj = ds.serialize();
    console.log("TEST: EMPTY DESIGN SYSTEM: ", dsObj);
    console.log("TEST: EMPTY DESIGN SYSTEM JSON: ", JSON.stringify(dsObj,null,4));

    console.log("TEST: Getting design system");
    ds = await themeBuilder.getDesignSystem("ds1");

    ds.atoms.colorThemes.setListener(`testListener`, notify);
    ds.atoms.fontsSettings.setListener(`testListener`, notify);
    ds.atoms.stateSettings.setListener(`testListener`, notify);

    const prop = ds.atoms.gridSettings.grid;
    const prop2 = ds.getNode(prop.key);
    assert(prop === prop2, "DesignSystem.getNode failed");

    const designSystemNames = await themeBuilder.listDesignSystemNames();
    assert(designSystemNames.length === 1, "Number of design system names should be 1");
    assert(designSystemNames[0] === "ds1", "Design system name mismatch");

    console.log("TEST: Testing disablement");
    const colorPalette = ds.atoms.colorPalette;
    const colorThemes = ds.atoms.colorThemes;
    const states = ds.atoms.stateSettings;
    assert(colorPalette.isEnabled(), "ColorPalette atom is not editable");
    assert(!colorThemes.isEnabled(), "ColorTheme atom is editable");
    assert(!states.isEnabled(), "States atom is editable");
    
    console.log("TEST: Add a color to the color palette");
    const blue = colorPalette.addColor("blue","#E2F3FF");
    const red = colorPalette.addColor("red","#EE3A3A");
    assert(colorPalette.isInitialized(), "The color palette atom is not initialized");
    assert(red.light.shades.length === 10, `Incorrect number of light color shades: ${red.light.shades.length}`);
    assert(blue.dark.shades.length === 10, `Incorrect number of dark color shades: ${blue.dark.shades.length}`);
    assert(colorThemes.isEnabled(), "The color themes atom is not editable");
    assert(!states.isEnabled(), "States atom is editable");

    console.log("TEST: Initialize color themes");
    const ct = colorThemes.createTheme("colorTheme1");
    ct.setListener("ctNotify", notify);
    ct.button.setListener("colorTheme", buttonEventListener);
    ct.addTheme.setListener("colorThemeInitialized", themeInitializedEventListener);
    assert(!ct.isInitialized(), "Color theme should not be initialized");
    selectColorShade(ct.primary, 5);
    selectColorShade(ct.secondary, 3);
    selectColorShade(ct.tertiary, 6);
    assert(buttonSelectablesChangedCount === 0, `Button selectables should be 0 but is ${buttonSelectablesChangedCount}`);
    selectColorPair(ct.lightModeBackground, 0);
    assert(buttonSelectablesChangedCount === 1, `Button selectables should be 1 but is ${buttonSelectablesChangedCount}`);
    selectColorPair(ct.darkModeBackground, 0);
    selectColorShade(ct.gradient1.from, 6);
    selectColorShade(ct.gradient1.to, 1);
    selectColorShade(ct.gradient2.from, 7);
    selectColorShade(ct.gradient2.to, 2);
    selectColorShade(ct.button, 5);
    selectColorShade(ct.icon, 2);
    selectColorShade(ct.gradientHeaderText.from, 4);
    selectColorShade(ct.gradientHeaderText.to, 0);
    selectColorShade(ct.accent, 3);
    assert(ct.isInitialized(), "Color theme should be initialized");
    assert(states.isEnabled(), "States atom should be editable");
    assert(themeInitializedCount === 1, "Theme initialized should be one");
    const bgVars = ct.getBackgroundVariables(ct.lightModeBackground);
    console.log(`TEST: Background variables: ${JSON.stringify(bgVars)}`);
    selectTitledShade(ds.atoms.inputBackground.overlayColor, 1);
    const bgVars2 = ct.getBackgroundVariables(ct.lightModeBackground);
    console.log(`TEST: Background variables: ${JSON.stringify(bgVars2)}`);
    selectColorShade(ds.molecules.modal.color, 0);

    ds.atoms.gridSettings.grid.setValue(10);

    ds.atoms.minimumTarget.minHeight.setValue(9);
    ds.molecules.avatars.mediumBorder.setValue(8);
    assert(ds.molecules.avatars.mediumBorder.getValue() === 8, "Avatar medium border is not 8");

    // test var groups
    console.log(`TEST: VarGroupKeys: ${JSON.stringify(ds.code.getCSSVarGroupKeys())}`);
    const bsg = ds.code.getCSSVarGroup(ds.atoms.borderSettings);
    let bsCount = 0;
    bsg.setListener("test", function(vg: VarGroup) {
        console.log("TEST: BSG listener")
        bsCount++; 
    });
    ds.atoms.borderSettings.baseBorderWidth.setValue(10);
    assert(bsCount === 1, "bsCount should be 1");
    console.log(`TEST: Border settings: ${JSON.stringify(bsg)}`);

    dsObj = ds.serialize();
    let dsStr = JSON.stringify(dsObj,null,4);
    console.log(`TEST: create design system from string: ${dsStr}`);
    const ds2 = themeBuilder.designSystemFromString("ds1", dsStr);
    console.log(`TEST: deserializing design system 2`);
    dsStr = JSON.stringify(ds2.serialize(),null,4);
    console.log(`TEST: finished deserializing design system 2: ${dsStr}`);
    assert(ds2.molecules.avatars.mediumBorder.getValue() !== undefined, "Deserialized avatar border");
    const num: any = ds2.molecules.avatars.mediumBorder.getValue();
    console.log("TEST: avatar border", typeof num, num.constructor.name, num, num.toString());

    const p1 = ds.atoms.colorThemes.getDefaultTheme()?.primary.getValue();
    const p2 = ds2.atoms.colorThemes.getDefaultTheme()?.primary.getValue();
    if (!p1) {
        console.log(`ERROR: serialization failure (no p1)`);
        errCnt++;
    } else if (!p2) {
        console.log(`ERROR: serialization failure (no p2)`);
        errCnt++;
    } else if (!p1 || !p2 || p1.hex !== p2.hex) {
        console.log(`ERROR: serialization failure: p1=${p1.hex}, p2=${p2.hex}`);
        errCnt++;
    }

    console.log("TEST: BEGIN CSS VARIABLES")
    ds2.code.setCSSVarListener("test", cssVar);
    console.log("TEST: END CSS VARIABLES")

    console.log("TEST: delete design system ds1")
    await themeBuilder.deleteDesignSystem("ds1");

    if (errCnt > 0) {
        console.log(`FAILED: ${errCnt} errors`);
    } else {
        console.log("PASSED");
    }
}

function notify(event: Event) {
    console.log(`TEST: Received ${event.type} notification for node ${event.node.key}`);
}

function selectColorShade(prop: PropertyColorShade, idx: number) {
    const sels = prop.getSelectableValues();
    if (sels.length === 0) throw new Error(`No selectables`);
    const row = sels[0];
    if (row.length === 0) throw new Error(`No first row selectables`);
    idx = Math.min(idx, row.length-1);
    const val = row[idx];
    if (val === undefined) throw new Error(`Value not found at index ${idx}: ${JSON.stringify(row)}`);
    console.log(`TEST: begin setting value for ${prop.key}`);
    prop.setValue(val);
    console.log(`TEST: end setting value for ${prop.key}`);
}

function selectColorPair(prop: PropertyColorPair, idx: number) {
    prop.setValue(prop.getSelectableValues()[idx]);
}

function selectTitledShade(prop: PropertyTitledShade, idx: number) {
    prop.setValue(prop.getSelectableValues()[idx]);
}

function cssVar(name: string, value?: string) {
    console.log(`${name}: ${value};`);
}

function buttonEventListener(event: Event) {
    if (event.type === EventType.SelectablesChanged) {
        buttonSelectablesChangedCount++;
        console.log(`TEST: button selectables changed for ${event.node.key}`);
    }
}

function themeInitializedEventListener(event: Event) {
    if (event.type === EventType.NodeEnabled) {
        console.log(`AKR Theme addTheme enabled changed`);
        themeInitializedCount++;
    }
}

function assert(cond: boolean, msg: string) {
    if (!cond) {
        console.log(`TEST ERROR: ${msg}`);
        errCnt++;
    }
}

test();
