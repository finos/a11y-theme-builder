/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React from 'react';
import { Alert, Button, InputLabel, TextField } from '@mui/material';
import { ChangeEvent, FocusEvent, useEffect, useState } from 'react';
import { Color, ColorPalette, Shade } from 'a11y-theme-builder-sdk';
import { ChromePicker, ColorResult } from "react-color";
import { DisplayColorPalette } from '../../components/DisplayColorPalette';
import './ColorPaletteAtom.css';
import { HeadingSection } from '../../pages/content/HeadingSection';
import { ExampleSection } from '../../pages/content/ExampleSection';
import { SettingsSection } from '../../pages/content/SettingsSection';
import { GeneratedCodeSection } from '../../pages/content/GeneratedCodeSection';

interface Props {
    atom: ColorPalette;
    defaultColor?: string;
    changeTab(newTabIndex: string): void;
}

export const ColorPaletteAtom: React.FC<Props> = ({atom, defaultColor, changeTab}) => {

    const [_defaultColor, _setDefaultColor] =  useState<string>("#ffffff");
    const [_blockPickerColor, _setBlockPickerColor] = useState(_defaultColor);
    const [_blockPickerOnColor, _setBlockPickerOnColor] = useState(_defaultColor);
    const [_colorName, _setColorName] = useState("");
    const [_colors, _setColors] = useState<Color[]>([]);
    const [_addColorErrorTriggered, _setAddColorErrorTriggered] = useState<boolean>(false)
    const [_addColorInputErrorTriggered, _setAddColorInputErrorTriggered] = useState<boolean>(false)
    const [_addColorError, _setAddColorError] = useState<boolean>(false)
    const [_addColorErrorMessage, _setAddColorErrorMessage] = useState<string>("")

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

    return (
        <div className="container color-palette-right-content">
            <HeadingSection title="Palette" heading="Add Colors to Palette">
                <p>Build your extended color palette.  Add as many colors as you want.</p>
                <p>Next, you will create themes under the <a onClick={(event) => changeTab("colorThemes")}>Color Theme</a> settings.</p>
            </HeadingSection>
            <ExampleSection>
                <DisplayColorPalette colorPalette={atom} colors={_colors} lightLabel="Light Mode Colors" darkLabel="Dark Mode Colors" />
            </ExampleSection>
            <SettingsSection>
                <div style={{display:"flex", gap:"40px"}}>
                    <div className="input-col">
                        <InputLabel htmlFor='colorName'>Color Name</InputLabel>
                        <TextField
                            id='colorName'
                            error={_addColorErrorTriggered}
                            onChange={(e)=>{_setColorName(e.target.value)}}
                            onBlur={handleColorNameBlur}
                            helperText={_addColorErrorTriggered ? "Please provide a name for your color" : ""}
                            value={_colorName}
                        />
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
            </SettingsSection>
            <GeneratedCodeSection item={atom}/>
        </div>
    )
}
