/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { MouseEvent, useEffect, useState } from "react";
import { Alert, Box, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { Event, EventType, PropertyColorShade, PropertyTitledShade, Shade, TitledShade } from 'a11y-theme-builder-sdk';
import { ColorShade } from './ColorShade';
import './ColorSelectTitled.css';

interface Props {
    value: PropertyTitledShade;
    label?: string;
}

export const ColorSelectTitled: React.FC<Props> = ({value, label}) => {

    const [_selectableValues, _setSelectableValues] = useState<TitledShade[]>();
    const [_selectColorError, _setSelectColorError] = useState<boolean>(false);
    const [_selectColorErrorMessage, _setSelectColorErrorMessage] = useState<string>("");
    const [_disabled, _setDisabled] = useState<boolean>(false);

    useEffect(() => {
        if (value) {
            _setDisabled(!value.isEnabled());
            syncSelectableValues(value);
            const colorSelectListener = function (event: Event) {
                if (event.type === EventType.SelectablesChanged) {
                    console.log(`Notified of default color theme value changing, event: ${event}`);
                    syncSelectableValues(value);
                    return;
                }
                if (event.type === EventType.NodeEnabled) {
                    _setDisabled(!value.isEnabled());
                    return;
                }
            };
            value.setListener("colorSelect", colorSelectListener);
        }
    }, [])

    const syncSelectableValues = (value: PropertyTitledShade) => {
        try {
            if (value) {
                const selectableValues: TitledShade[] = value.getSelectableValues();
                _setSelectableValues(selectableValues);
            }
        } catch (error) {
            // It is possible that getSelectableValues may throw an error
            //  before there are selectable values.  Log the error in case
            //  it turns out to be important.
            let message = "";
            if (error instanceof Error){
                message = error.message;
            } else {
                message = String(error);
            }
            console.log(`ColorSelectTitled initialization, error: ${message}`);
        }
    }

    const handleColorChange = (event: SelectChangeEvent) => {
        const selectedValue = event.target.value;
        try {
            if (selectedValue && _selectableValues) {
                _setSelectColorError(false);
                const indexOfSelectedItem = parseInt(selectedValue.split(';')[1]);
                value.setValue(_selectableValues[indexOfSelectedItem]);
                console.log(`Color changed by UI to ${value}`);
            }
        } catch (error: any) {
            _setSelectColorErrorMessage(`${error.message}`);
            _setSelectColorError(true);
        }
    };

    // return the Shade from the flat shade array that corresponds to the given index
    const getTitledShadeByIndex = (index: string): TitledShade | undefined => {
        if (!index || !_selectableValues) {
            return;
        }
        return _selectableValues[parseInt(index)];
    }

    if (value) {
        return (
            <div>
                {label && <InputLabel className="caption" htmlFor="outlined-select">{label}</InputLabel>}
                <Select
                    label="Primary"
                    onChange={handleColorChange}
                    displayEmpty={true}
                    defaultValue=""
                    disabled={_disabled}
                    renderValue={(selected) => (
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                            <ColorShade shade={selected ? getTitledShadeByIndex(selected.split(';')[1])?.shade : "" || ""} />
                        </Box>
                    )}
                >
                    {_selectableValues && _selectableValues.map((shade, i) => {
                        return(
                            <MenuItem key={`shade${i}`} value={`${shade.shade.hex};${i}`}><ColorShade shade={shade.shade} /><span className="color-name">{shade.title}</span></MenuItem>
                        );
                    })}
                </Select>
                {_selectColorError && <Alert severity='error'>{_selectColorErrorMessage}</Alert>}
            </div >
        );

    } else {

    return (
        <div className="row">No ColorSelect available</div>
    );

}
}