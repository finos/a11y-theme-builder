/**
 * SPDX-License-Identifier: Apache-2.0
 * Copyright 2024 FINOS A11y Theme Builder contributors - see NOTICE file
 */
import React from 'react';
import { Alert, Button, InputLabel, TextField, Grid, Checkbox, Link } from '@mui/material';
import { ChangeEvent, FocusEvent, useEffect, useState } from 'react';
import { Atom, Color, ColorPalette, DesignSystem, Shade } from '@finos/a11y-theme-builder-sdk';
import { ChromePicker, ColorResult } from "react-color";
import { DisplayColorPalette } from '../../components/DisplayColorPalette';
import './ColorPaletteAtom.css';
import { HeadingSection } from '../../pages/content/HeadingSection';
import { ExampleSection } from '../../pages/content/ExampleSection';
import { SettingsSection } from '../../pages/content/SettingsSection';
import { ProgressBarSection } from '../../pages/content/ProgressBarSection';
import { GeneratedCodeSection } from '../../pages/content/GeneratedCodeSection';
import { BottomStrip } from '../../components/BottomStrip';
import { Preferences } from '../../Preferences';



interface Props {
    atom: ColorPalette;
    defaultColor?: string;
    changeTab(newTabIndex: string): void;
    saveDesignSystem(): void;
}

export const BuildColorPalette: React.FC<Props> = ({ atom, defaultColor, changeTab,saveDesignSystem }) => {
    const pref = new Preferences(atom.getDesignSystem().key);
    const [_defaultColor, _setDefaultColor] = useState<string>("#ffffff");
    const [_blockPickerColor, _setBlockPickerColor] = useState(_defaultColor);
    const [_blockPickerOnColor, _setBlockPickerOnColor] = useState(_defaultColor);
    const [_colorName, _setColorName] = useState("");
    const [_colors, _setColors] = useState<Color[]>([]);
    const [_addColorErrorTriggered, _setAddColorErrorTriggered] = useState<boolean>(false)
    const [_addColorInputErrorTriggered, _setAddColorInputErrorTriggered] = useState<boolean>(false)
    const [_addColorError, _setAddColorError] = useState<boolean>(false)
    const [_addColorErrorMessage, _setAddColorErrorMessage] = useState<string>("")
    const [_chromaLevelCheck, _setChromaLevelCheck] = useState<boolean>(true);
    const [_lightModeMaxChroma, _setLightModeMaxChroma] = useState("80");
    const [_darkModeMaxChroma, _setDarkModeMaxChroma] = useState("40");
    const [_addDarkModeMaxChromaErrorTriggered, _setAddDarkModeMaxChromaErrorTriggered ]= useState<boolean> (false);
    const [_addLightModeMaxChromaErrorTriggered, _setAddLightModeMaxChromaErrorTriggered ]= useState<boolean> (false);

    useEffect(() => {
        if (defaultColor && defaultColor.length > 0) {
            _setDefaultColor(defaultColor);
            reflectColorPickerChangeInUI(defaultColor);
        }
        _setColors(atom.getColors());
    }, [])

    const resetUI = () => {
        _setColorName("");
        _setBlockPickerColor(_defaultColor);
    }

    // update color picker states to which other UI
    //  on the page is bound to, include "on" color
    //  in updates
    const reflectColorPickerChangeInUI = (color: string) => {
        // update the _blockPickerColor in case user is manually
        //  entering a new value, we need the field to update
        //  as the user types.  Even in an error condition.
        _setBlockPickerColor(color);
        if (!_addColorInputErrorTriggered) {
            const shadeForColor = Shade.fromHex(color);
            const shadeForOnColor = shadeForColor.getOnShade()
            _setBlockPickerOnColor(shadeForOnColor.hex);
        }
    }

    const handleAddColor = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(`add color name: ${_colorName} hex value: ${_blockPickerColor}`);
        if (_colorName === "") {
            _setAddColorErrorTriggered(true);
            return;
        }
        //TODO: we need to switch this to use a listener (from the SDK)
        //  to handle changes to the color palette rather than the
        //  _colors state.
        try {
            const newColor = atom.addColor(_colorName, _blockPickerColor);
            _setAddColorError(false);
            console.log(`created new color: `, newColor); //${JSON.stringify(newColor)}`);
            console.log(`resulting color palette:`, atom.getColors()); // ${JSON.stringify(designSystem.atoms.colorPalette.getColors())}`);
            const colors = _colors;
            colors.push(newColor);
            _setColors(colors);
            // reset the color input field
            resetUI();
        } catch (error: any) {
            _setAddColorErrorMessage(`${error.message}`);
            _setAddColorError(true);
        }
    }

    const handleColorNameBlur = (event: FocusEvent<HTMLInputElement>) => {
        if (event.target.value === "") {
            _setAddColorErrorTriggered(true);
            return;
        }
        _setAddColorErrorTriggered(false);
        _setColorName(event.target.value)
    }

    const handleColorValueInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (!/^#[0-9A-F]{6}$/i.test(event.target.value) == true) {
            _setAddColorInputErrorTriggered(true);
            // need to set _blockPickerColor since UI is tied to
            //  it, so it needs to update so value in field can
            //  update as user types
            _setBlockPickerColor(event.target.value);
            return;
        }
        _setAddColorInputErrorTriggered(false);
        reflectColorPickerChangeInUI(event.target.value);
    }

    const handleColorSelected = (color: ColorResult) => {
        console.log(`color selected, event: ${JSON.stringify(color)}`);
        reflectColorPickerChangeInUI(color.hex)
    }

    const handleColorChange = (event: any) => {
        const value = event.target.value;
        if (value.match(/^[a-zA-Z0-9\-]*$/)) {
            _setColorName(value);
        }
    }

    const handleLightModeMaxChromaChange =(event:any)=>{
        const value =event.target.value;
        if (value===""||(/^\d+$/.test(value) && parseInt(value) >= 0 && parseInt(value) <= 100)) {
            _setLightModeMaxChroma(value);
        }else{
            _setAddLightModeMaxChromaErrorTriggered(!_setAddLightModeMaxChromaErrorTriggered);
        }

    }

    const handleDarkModeMaxChromaChange =(event:any)=>{
        const value =event.target.value;
        if (value===""||/^\d+$/.test(value) && parseInt(value) >= 0 && parseInt(value) <= 100 ) {
            _setDarkModeMaxChroma(value);
        }else{
            _setAddDarkModeMaxChromaErrorTriggered(!_setAddDarkModeMaxChromaErrorTriggered);
        }


    }

    return (
        <div className="container color-palette-right-content">
            <HeadingSection heading="Build Theme/s">
                <ProgressBarSection activeStep={1} ></ProgressBarSection>
            </HeadingSection>
            <HeadingSection heading="Step 2. Build Color Palette">
            </HeadingSection>


            <div style={{ display: "flex", flexDirection: "row", gap: "var(--spacing-3)", paddingLeft: "32px", flexWrap: "wrap" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-3)", flexWrap: "wrap" }}>
                    <div className="input-col">
                        <InputLabel htmlFor='colorName'>Color Name</InputLabel>
                        <TextField
                            id='colorName'
                            error={_addColorErrorTriggered}
                            onChange={handleColorChange}
                            onBlur={handleColorNameBlur}
                            helperText={_addColorErrorTriggered ? "Please provide a name for your color" : ""}
                            value={_colorName}
                        />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'top' }}>
                        <Checkbox
                            checked={_chromaLevelCheck}
                            onChange={() => {
                                console.log("hello",_setChromaLevelCheck);
                                return _setChromaLevelCheck(!_chromaLevelCheck)}}
                            size='small'
                        />
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <p style={{ fontSize: '12px', fontWeight: '700', margin: '0px', padding: '0px',paddingTop:'8px', paddingBottom: '0px' }}>
                                Set a max Chroma level.
                            </p>
                            <p style={{ fontSize: '12px', fontWeight: '700', margin: '0px', padding: '0px', paddingBottom: '0px' }}>
                                Learn more about <Link href='https://sites.harding.edu/gclayton/Color/Topics/001_HueValueChroma.html'>Chroma</Link>
                            </p>
                        </div>
                    </div>



                    {_chromaLevelCheck && <div className="input-col">
                        <InputLabel htmlFor='lightModeMaxChroma'>Light Mode Max Chroma:</InputLabel>
                        <TextField
                            id='lightModeMaxChroma'
                            error={_addColorErrorTriggered}
                            onChange={handleLightModeMaxChromaChange}
                            // onBlur={handleColorNameBlur}
                            helperText="Recommend between 70-85"
                            value={_lightModeMaxChroma}
                        />
                    </div>
                    }
                    {_chromaLevelCheck&&<div className="input-col">
                        <InputLabel htmlFor='darkModeMaxChroma'>Dark Mode Max Chroma</InputLabel>
                        <TextField
                            id='darkModeMaxChroma'
                            error={_addColorErrorTriggered}
                            onChange={handleDarkModeMaxChromaChange}
                            // onBlur={handleColorNameBlur}
                            helperText="Recommend between 30-60"
                            value={_darkModeMaxChroma}
                        />
                    </div>}
                </div>
                <div className="input-col hexValue">
                    <InputLabel htmlFor='hexValue'>Hex Value</InputLabel>
                    <TextField
                        id='hexValue'
                        error={_addColorInputErrorTriggered}
                        onChange={handleColorValueInputChange}
                        helperText={_addColorInputErrorTriggered ? "Please provide a 6-digit hexadecimal value" : ""}
                        value={_blockPickerColor}
                        sx={{
                            backgroundColor: `${_blockPickerColor}`,
                            input: {
                                color: `${_blockPickerOnColor}`
                            }
                        }}
                    />
                    <ChromePicker color={_blockPickerColor} onChange={handleColorSelected} />
                </div>

                <div className="input-col">
                    <Button className="top32" onClick={handleAddColor} disabled={_addColorErrorTriggered || _addColorInputErrorTriggered}>Add Color</Button>
                    {_addColorError && <Alert severity='error'>{_addColorErrorMessage}</Alert>}
                </div>
            </div>


            <DisplayColorPalette colorPalette={atom} colors={_colors} lightLabel="Light Mode Colors" darkLabel="Dark Mode Colors" />
            <BottomStrip onBack={()=>{changeTab("CoreSettings");localStorage.setItem( "step" ,"1");}} onSave={()=>{saveDesignSystem()}} onSaveAndContinue={()=>{
                console.log("hello"); changeTab("LightAndDarkModes"); 
                pref.set( "step" ,"3");
                }}></BottomStrip>
        </div>
    )
}
