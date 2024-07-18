/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React from 'react';
import { Alert, Button, InputLabel, TextField, Grid } from '@mui/material';
import { ChangeEvent, FocusEvent, useEffect, useState } from 'react';
import { Color, ColorPalette, DesignSystem, Shade } from '@finos/a11y-theme-builder-sdk';
import { ChromePicker, ColorResult } from "react-color";
import { DisplayColorPalette } from '../../components/DisplayColorPalette';
import './ColorPaletteAtom.css';
import { HeadingSection } from '../../pages/content/HeadingSection';
import { ExampleSection } from '../../pages/content/ExampleSection';
import { SettingsSection } from '../../pages/content/SettingsSection';
import { ProgressBarSection } from '../../pages/content/ProgressBarSection';
import { GeneratedCodeSection } from '../../pages/content/GeneratedCodeSection';
import { BottomStrip } from '../../components/BottomStrip'

interface Props {
    atom: DesignSystem;
    defaultColor?: string;
    changeTab(newTabIndex: string): void;
}

export const CoreSettings: React.FC<Props> = ({ atom, defaultColor, changeTab }) => {
    const [systemName, setSystemName] = useState(atom.key);
    const [_defaultColor, _setDefaultColor] = useState<string>("#ffffff");
    const [_blockPickerColor, _setBlockPickerColor] = useState(_defaultColor);
    const [_blockPickerOnColor, _setBlockPickerOnColor] = useState(_defaultColor);
    const [_colorName, _setColorName] = useState("");
    const [_colors, _setColors] = useState<Color[]>([]);
    const [_addColorErrorTriggered, _setAddColorErrorTriggered] = useState<boolean>(false)
    const [_addColorInputErrorTriggered, _setAddColorInputErrorTriggered] = useState<boolean>(false)
    const [_addColorError, _setAddColorError] = useState<boolean>(false)
    const [_addColorErrorMessage, _setAddColorErrorMessage] = useState<string>("")

    useEffect(() => {
       
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

    return (
        <div className="container color-palette-right-content" style={{ display: "flex", flexDirection: "column" }}>
            <HeadingSection heading="Build Theme/s">
                <ProgressBarSection activeStep={0} ></ProgressBarSection>
            </HeadingSection>
            <HeadingSection heading="Step 1. Core Settings">
                <p>These setting  lay the foundation for the rest of your Design System.</p>
            </HeadingSection>


            <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-3)", paddingLeft: "32px", flexWrap: "wrap" }}>
                <div className="input-col">
                    <InputLabel htmlFor='designSystemName'>Design System Name</InputLabel>
                    <TextField
                        type="text"
                        id='new-name'
                        placeholder={atom.key}
                        // className='input-1'
                        required
                        value={systemName}
                        sx={{ pb: 2 }}
                        // style={{
                        //     width: "100%",
                        //     boxSizing: "border-box",
                        // }}
                        onChange={(e) => setSystemName(e.target.value)}
                    />
                    <InputLabel htmlFor='darkTextColor'>Dark Text Color</InputLabel>
                    <TextField
                        id='darkTextColor'
                        placeholder='#121212'
                        error={_addColorErrorTriggered}
                        onChange={handleColorChange}
                        helperText={_addColorErrorTriggered ? "Please provide a name for your Design System" : ""}
                        value={_colorName}
                        defaultValue='#121212'
                        sx={{ pb: 2 }}
                    />
                    <InputLabel htmlFor='lightTextColor'>Light Text Color</InputLabel>
                    <div>
                        <TextField
                            id='lightTextColor'
                            placeholder='#FFFFFF'
                            error={_addColorErrorTriggered}
                            onChange={handleColorChange}
                            helperText="we recommend pure white"
                            value={_colorName}
                            defaultValue='#FFFFFF'
                        />
                    </div>
                    <InputLabel htmlFor='darkModeLightTextOpacity'>Dark Mode Light Text Opacity</InputLabel>
                    <div>
                        <TextField
                            id='darkModeLightTextOpacity'
                            placeholder='.6'
                            error={_addColorErrorTriggered}
                            onChange={handleColorChange}
                            helperText="We recommend a number between .6 and .7"
                            value={_colorName}
                            defaultValue='.6'
                        />
                    </div>
                </div>

            </div>
            <div
                style={{
                    position: 'sticky',
                    bottom: 0,
                    width: '100%',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'flex',
                    gap: "8px",
                    // justifyContent: 'space-between',
                    padding: '8px',
                    backgroundColor: '#fff',
                    boxShadow: '0 -2px 5px rgba(0,0,0,0.1)',
                    zIndex: 1300, // Ensure it stays on top of other content
                }}
            >


                <Button variant="outlined" color="primary" onClick={() => {
                    console.log("Creating new Design System:", systemName);
                    // TODO: Check for if name already exist
                    console.log(atom);
                    // changeTab("CoreSettings")
                    // window.location.href = `/designSystem/${systemName}`;
                }} style={{ marginRight: '8px' }}>
                    Save
                </Button>
                <Button variant="contained" color="secondary" onClick={() => {
                    console.log("Creating new Design System:", systemName);
                    // TODO: Check for if name already exist
                    const handleAsyncOperation = async () => {
                        changeTab("BuildColorPalette");
                        window.location.href = `/designSystem/${systemName}`;
                        // The line above will navigate away from the current page, so the line below may not execute
                      };
                      handleAsyncOperation();
                }}>
                    SAVE & CONTINUE
                </Button>

            </div>


        </div >
    )
}
