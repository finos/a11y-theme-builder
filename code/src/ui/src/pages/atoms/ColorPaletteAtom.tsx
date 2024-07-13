/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useEffect, useState, ChangeEvent, FocusEvent } from 'react';
import { Alert, Button, InputLabel, TextField } from '@mui/material';
import { ChromePicker, ColorResult } from 'react-color';
import { Color, ColorPalette, Shade } from '@finos/a11y-theme-builder-sdk';
import { DisplayColorPalette } from '../../components/DisplayColorPalette';
import { HeadingSection } from '../../pages/content/HeadingSection';
import { ExampleSection } from '../../pages/content/ExampleSection';
import { SettingsSection } from '../../pages/content/SettingsSection';
import { GeneratedCodeSection } from '../../pages/content/GeneratedCodeSection';
import namer from 'color-namer';
import './ColorPaletteAtom.css';

// Utility function to determine the text color based on the brightness of the background color
const getTextColor = (hex: string): string => {
  hex = hex.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? '#000000' : '#FFFFFF';
};

// Utility function to get color name from hex value
const getColorName = (hex: string): string => {
  const names = namer(hex);
  return names.basic[0].name;
};

interface Props {
  atom: ColorPalette;
  defaultColor?: string;
  changeTab: (newTabIndex: string) => void;
}

export const ColorPaletteAtom: React.FC<Props> = ({ atom, defaultColor = "#ffffff", changeTab }) => {
  const [_blockPickerColor, _setBlockPickerColor] = useState<string>(defaultColor);
  const [_blockPickerOnColor, _setBlockPickerOnColor] = useState<string>(getTextColor(defaultColor));
  const [_colorName, _setColorName] = useState<string>(getColorName(defaultColor));
  const [_colors, _setColors] = useState<Color[]>([]);
  const [_addColorErrorTriggered, _setAddColorErrorTriggered] = useState<boolean>(false);
  const [_addColorInputErrorTriggered, _setAddColorInputErrorTriggered] = useState<boolean>(false);
  const [_addColorError, _setAddColorError] = useState<boolean>(false);
  const [_addColorErrorMessage, _setAddColorErrorMessage] = useState<string>("");

  useEffect(() => {
    _setColors(atom.getColors());
    if (defaultColor) {
      reflectColorPickerChangeInUI(defaultColor);
    }
  }, [defaultColor, atom]);

  const resetUI = () => {
    _setColorName("");
    _setBlockPickerColor(defaultColor);
    _setBlockPickerOnColor(getTextColor(defaultColor));
  };

  const reflectColorPickerChangeInUI = (color: string) => {
    _setBlockPickerColor(color);
    if (!_addColorInputErrorTriggered) {
      const shadeForColor = Shade.fromHex(color);
      const shadeForOnColor = shadeForColor.getOnShade();
      _setBlockPickerOnColor(shadeForOnColor.hex);
      const colorName = getColorName(color);
      _setColorName(colorName);
    }
  };

  const handleAddColor = () => {
    if (_colorName.trim() === "") {
      _setAddColorErrorTriggered(true);
      return;
    }

    try {
      const newColor = atom.addColor(_colorName, _blockPickerColor);
      _setAddColorError(false);
      _setColors([..._colors, newColor]);
      resetUI();
    } catch (error: any) {
      _setAddColorErrorMessage(`${error.message}`);
      _setAddColorError(true);
    }
  };

  const handleColorNameBlur = (event: FocusEvent<HTMLInputElement>) => {
    const value = event.target.value.trim();
    if (value === "") {
      _setAddColorErrorTriggered(true);
    } else {
      _setAddColorErrorTriggered(false);
      _setColorName(value);
    }
  };

  const handleColorValueInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (!/^#[0-9A-F]{6}$/i.test(value)) {
      _setAddColorInputErrorTriggered(true);
      _setBlockPickerColor(value);
    } else {
      _setAddColorInputErrorTriggered(false);
      reflectColorPickerChangeInUI(value);
    }
  };

  const handleColorSelected = (color: ColorResult) => {
    reflectColorPickerChangeInUI(color.hex);
  };

  const handleColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value.match(/^[a-zA-Z0-9\-]*$/)) {
      _setColorName(value);
    }
  };

  return (
    <div className="container color-palette-right-content">
      <HeadingSection title="Palette" heading="Add Colors to Palette">
        <p>Build your extended color palette. Add as many colors as you want.</p>
        <p>Next, you will create themes under the <a onClick={() => changeTab("colorThemes")}>Color Theme</a> settings.</p>
      </HeadingSection>
      <ExampleSection>
        <DisplayColorPalette colorPalette={atom} colors={_colors} lightLabel="Light Mode Colors" darkLabel="Dark Mode Colors" />

        <SettingsSection>
          <div style={{ display: "flex", gap: "var(--spacing-3)", flexWrap: "wrap" }}>
            <div className="input-col">
              <InputLabel htmlFor="colorName">Color Name</InputLabel>
              <TextField
                id="colorName"
                error={_addColorErrorTriggered}
                onChange={handleColorChange}
                onBlur={handleColorNameBlur}
                helperText={_addColorErrorTriggered ? "Please provide a name for your color" : ""}
                value={_colorName}
              />
            </div>
            <div className="input-col hexValue">
              <InputLabel htmlFor="hexValue">Hex Value</InputLabel>
              <TextField
                id="hexValue"
                error={_addColorInputErrorTriggered}
                onChange={handleColorValueInputChange}
                helperText={_addColorInputErrorTriggered ? "Please provide a 6-digit hexadecimal value" : ""}
                value={_blockPickerColor}
              />
              <ChromePicker color={_blockPickerColor} onChange={handleColorSelected} />
            </div>
            <div className="input-col">
              <InputLabel htmlFor="colorDisplay">Selected Color</InputLabel>
              <div
                id="colorDisplay"
                style={{
                  width: '100px',
                  height: '50px',
                  backgroundColor: _blockPickerColor,
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  marginTop: '8px'
                }}
              />
            </div>
            <div className="input-col">
              <Button
                className="top32"
                onClick={handleAddColor}
                disabled={_addColorErrorTriggered || _addColorInputErrorTriggered}
              >
                Add Color
              </Button>
              {_addColorError && <Alert severity="error">{_addColorErrorMessage}</Alert>}
            </div>
          </div>
        </SettingsSection>
        <GeneratedCodeSection item={atom} />
      </ExampleSection>
    </div>
  );
};
