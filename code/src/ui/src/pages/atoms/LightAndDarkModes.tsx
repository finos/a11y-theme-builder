/**
 * SPDX-License-Identifier: Apache-2.0
 * Copyright 2024 FINOS A11y Theme Builder contributors - see NOTICE file
 */
import React from 'react';
import { Alert, Button, InputLabel, TextField, Grid, Checkbox, Tabs, Tab } from '@mui/material';
import { ChangeEvent, FocusEvent, useEffect, useState } from 'react';
import { Color, ColorPalette, ColorThemes, Shade } from '@finos/a11y-theme-builder-sdk';
import { ChromePicker, ColorResult } from "react-color";
import { DisplayColorPalette } from '../../components/DisplayColorPalette';
import './ColorPaletteAtom.css';
import { HeadingSection } from '../../pages/content/HeadingSection';
import { ExampleSection } from '../../pages/content/ExampleSection';
import { SettingsSection } from '../../pages/content/SettingsSection';
import { ProgressBarSection } from '../../pages/content/ProgressBarSection';
import { GeneratedCodeSection } from '../../pages/content/GeneratedCodeSection';
import { ColorThemeAtom } from './ColorThemeAtom';
import { Preferences } from '../../Preferences';


interface Props {
    atom: ColorPalette;
    colorThemes: ColorThemes;
    defaultColor?: string;
    changeTab(newTabIndex: string): void;
    saveDesignSystem(): void;
}
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <div style={{ padding: '16px' }}>
            <p>{children}</p>
          </div>
        )}
      </div>
    );
  }

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
export const LightAndDarkModes: React.FC<Props> = ({ atom,colorThemes, defaultColor, changeTab, saveDesignSystem }) => {

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
    const [_tabNumber,_setTabNumber]= useState<number>(0);

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

    return (
        <div className="container color-palette-right-content" style={{ marginBottom:"80px" }}>
            <HeadingSection heading="Build Theme/s">
                <ProgressBarSection activeStep={2} ></ProgressBarSection>
            </HeadingSection>
            <HeadingSection heading="Step 3. Light And Dark Modes">
            </HeadingSection>


            <div style={{ paddingLeft:"36px" ,width: '100%' }}>
                <div >
                    <Tabs value={_tabNumber} onChange={(event,value)=>{_setTabNumber(value)}} aria-label="WCAG tabs">
                        <Tab label="WCAG AA" {...a11yProps(0)} />
                        <Tab label="WCAG AAA" {...a11yProps(1)} />
                    </Tabs>
                </div>
                <TabPanel value={_tabNumber} index={0}>
                    <ColorThemeAtom atom={colorThemes} colorPalette={atom} ></ColorThemeAtom>
                </TabPanel>
                <TabPanel value={_tabNumber} index={1}>
                    Content for WCAG AAA
                </TabPanel>
            </div>






            
            <div
                style={{
                    position: 'fixed',
                    bottom: 0,
                    width: '100%',
                    maxWidth: '100%',
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


                <Button variant="outlined" color="primary" onClick={() => {changeTab("BuildColorPalette") ;pref.set( "step" ,"2");}} style={{ marginRight: '8px' }}>
                    BACK
                </Button>
                <Button variant="contained" color="secondary" onClick={() => { saveDesignSystem();}}>
                    SAVE
                </Button>

            </div>



        </div>
    )
}
