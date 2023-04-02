/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React from 'react';
import { Alert, Button, InputLabel, TextField } from '@mui/material';
import { ChangeEvent, FocusEvent, useEffect, useState } from 'react';
import { Color, ColorPalette } from 'a11y-theme-builder-sdk';
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
}

export const ColorPaletteAtom: React.FC<Props> = ({atom, defaultColor}) => {

    const [_defaultColor, _setDefaultColor] =  useState<string>("#ffffff");
    const [_blockPickerColor, _setBlockPickerColor] = useState(_defaultColor);
    const [_colorName, _setColorName] = useState("");
    const [_colors, _setColors] = useState<Color[]>([]);
    const [_addColorErrorTriggered, _setAddColorErrorTriggered] = useState<boolean>(false)
    const [_addColorInputErrorTriggered, _setAddColorInputErrorTriggered] = useState<boolean>(false)
    const [_addColorError, _setAddColorError] = useState<boolean>(false)
    const [_addColorErrorMessage, _setAddColorErrorMessage] = useState<string>("")

    useEffect(() => {
        if (defaultColor && defaultColor.length > 0) {
            _setDefaultColor(defaultColor);
            _setBlockPickerColor(defaultColor); 
        }
        _setColors(atom.getColors());
    }, [])

    const resetUI = () => {
        _setColorName("");
        _setBlockPickerColor(_defaultColor);
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
            const newColor = new Color(_colorName, _blockPickerColor, atom);
            atom.addColor(_colorName, _blockPickerColor);
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
            _setBlockPickerColor(event.target.value);
            return;
        }
        _setAddColorInputErrorTriggered(false);
        _setBlockPickerColor(event.target.value);
    }

    const handleColorSelected = (color: ColorResult) => {
        console.log(`color selected, event: ${JSON.stringify(color)}`);
        _setBlockPickerColor(color.hex)
    }

    return (
        <div className="container color-palette-right-content">
            <HeadingSection title="Palette" heading="Add Colors to Palette">
                Build your extended color palette.  Add as many colors as you want.
                Next, you will create themes.  You can also load our
                <a>color blind palette</a>.  Learn more about our color blind theme.
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
                            defaultValue={_colorName}
                            value={_colorName}
                        />
                    </div>
                    <div className="input-col">
                        <InputLabel htmlFor='hexValue'>Hex Value</InputLabel>
                        <TextField
                            id='hexValue'
                            error={_addColorInputErrorTriggered}
                            onChange={handleColorValueInputChange}
                            helperText={_addColorInputErrorTriggered ? "Please provide a 6-digit hexadecimal value" : ""}
                            value={_blockPickerColor}
                        />
                        <ChromePicker color={_blockPickerColor} onChange={handleColorSelected} />
                    </div>
                    <div className="input-col">
                        <Button className="top24" onClick={handleAddColor} disabled={_addColorErrorTriggered || _addColorInputErrorTriggered}>Add Color</Button>
                        {_addColorError && <Alert severity='error'>{_addColorErrorMessage}</Alert>}
                    </div>
                </div>
            </SettingsSection>
            <GeneratedCodeSection item={atom}/>
        </div>
    )
}
