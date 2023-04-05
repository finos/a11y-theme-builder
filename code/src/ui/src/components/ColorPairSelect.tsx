/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useState, useEffect } from "react";
import {Box, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import { ColorPair, Event, EventType, PropertyColorPair } from 'a11y-theme-builder-sdk';
import { ColorShade } from './ColorShade';
import './ColorPairSelect.css';

interface Props {
    value: PropertyColorPair;
    label?: string;
}

export const ColorPairSelect: React.FC<Props> = ({value, label}) => {

    const [_selectableValues, _setSelectableValues] = useState<ColorPair[]>(value.getSelectableValues());
    const [_disabled, _setDisabled] = useState<boolean>(!value.isEnabled());

    useEffect(() => {
        if (value) {
            _setDisabled(!value.isEnabled());
            // the select options need to be able to reflect the
            //  current selectable values as managed by the sdk
            _setSelectableValues(value.getSelectableValues());
            const colorPairListener = function (event: Event) {
                if (event.type === EventType.SelectablesChanged) {
                    _setSelectableValues(value.getSelectableValues());
                    return;
                }
                if (event.type === EventType.NodeEnabled) {
                    _setDisabled(!value.isEnabled());
                    return;
                }
            };
            value.setListener("colorPairSelect", colorPairListener);
        }
    }, []);

    // return the ColorPair from the array of selectable values that corresponds to the given index
    const getColorPairByIndex = (index: string): ColorPair | undefined => {
        if (!index) {
            return;
        }
        return _selectableValues[parseInt(index)];
    }

    const handleColorChange = (event: SelectChangeEvent) => {
        // selected value is of the format 
        //  "colorPair.primary.hex;colorPair.secondary.hex;index of selected ColorPair"
        if (_selectableValues) {
            const selectedValue = event.target.value;
            const values: string[] = selectedValue.split(';');
            if (values.length !== 3) {
                console.error("unexpected selected value");
                return;
            }
            const selectedColorPair = getColorPairByIndex(values[2]);
            if (!selectedColorPair) {
                console.error("unable to find colors");
                return;
            }
            value.setValue(selectedColorPair);
        }
    };

    if (value) {
        return (
            <div>
                {label && <InputLabel className="caption" htmlFor="outlined-select">{label}</InputLabel>}
                <Select
                    label=""
                    onChange={handleColorChange}
                    displayEmpty={true}
                    defaultValue=""
                    disabled={_disabled}
                    renderValue={(selected) => (
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                            <ColorShade shade={selected ? getColorPairByIndex(selected.split(';')[2])?.primary : "" || ""} />
                            <ColorShade shade={selected ? getColorPairByIndex(selected.split(';')[2])?.secondary : "" || ""} />
                        </Box>
                    )}
                >
                    {_selectableValues && _selectableValues.map((colorPair, i) => {
                        return (
                            <MenuItem key={`shade${i}`} value={`${colorPair.primary.hex};${colorPair.secondary.hex};${i}`}><ColorShade key={"ColorShadePrimary"+i} shade={colorPair.primary} /><ColorShade key={"ColorShadeSecondary"+i} shade={colorPair.secondary} /><span className="color-name label-1">{colorPair.title}</span></MenuItem>
                        );
                    })}
                </Select>
            </div >
        );

    } else {

    return (
        <div className="row">No ColorSelect available</div>
    );

}
}