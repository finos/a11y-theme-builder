/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useEffect, useState } from "react";
import {Box, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { Event, EventType, PropertyColorShade, Shade } from 'a11y-theme-builder-sdk';
import { ColorShade } from '../components/ColorShade';
import './ColorSelect.css';

interface Props {
    value: PropertyColorShade;
    label?: string;
    defaultValue?: string;
}

class GridShade {
    column: number;
    row: number;
    shade: Shade;

    constructor(row: number, column: number, shade: Shade) {
      this.column = column;
      this.row = row;
      this.shade = shade;
    }
  }

export const ColorSelect: React.FC<Props> = ({value, label, defaultValue}) => {

    const [_selectableValues, _setSelectableValues] = useState<GridShade[]>([]);
    const [_selectableValuesGrid, _setSelectableValuesGrid] = useState<Shade[][]>();
    const [_longestRow, _setLongestRow] = useState<number>(0);
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

    // Create a flat array of Shades with row and column positioning remembered.
    //  Also determine the longest row in the grid so that we know how wide to
    //  make the grid template.
    const prepareFlatGridArray = (srcArray: Shade[][] | undefined): [GridShade[], number] => {
        if (!srcArray) {
            return [[],0];
        }
        // determine the longest row in the grid
        let longestRow = 0;
        for (let i=0; i<srcArray.length; i++) {
            if (srcArray[i].length > longestRow) {
                longestRow = srcArray[i].length;
            }
        }

        // determine where each element fits in the grid
        const flatGridArray: GridShade[] = []
        srcArray.map((row, i) => (
            row.map((shade, j) => (
                flatGridArray.push(new GridShade(i, j, shade))
            ))
        ))

        return [flatGridArray, longestRow];
    }

    // save off in state the selectable values that this ColorSelect will
    //  be displaying in both grid and flat modes
    const syncSelectableValues = (value: PropertyColorShade) => {
        try {
            const selectableValuesGrid: Shade[][] = value.getSelectableValues();
            _setSelectableValuesGrid(selectableValuesGrid);
            const [selectableValuesFlat, longestRow] = prepareFlatGridArray(selectableValuesGrid);
            _setLongestRow(longestRow);
            _setSelectableValues(selectableValuesFlat);
            _setSelectableValuesGrid(selectableValuesGrid);
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
            console.log(`ColorSelect initialization, error: ${message}`);
        }
    }

    const handleColorChange = (event: SelectChangeEvent) => {
        console.log(`handleColorChange`);
        const selectedValue = event.target.value;
        if (selectedValue && _selectableValues) {
            const indexOfSelectedItem = parseInt(selectedValue.split(';')[1]);
            value.setValue(_selectableValues[indexOfSelectedItem].shade);
            console.log(`Color changed by UI to ${value}`);
        }
    };

    // builds the style string for the grid-template-columns style rule
    const buildGridColumnValue = (): string => {
        if (_selectableValuesGrid && _selectableValuesGrid.length) {
            return `repeat(${_longestRow}, 1fr)`;
        }
        return "";
    }

    // return the Shade from the flat shade array that corresponds to the given index
    const getShadeByIndex = (index: string): Shade | undefined => {
        if (!index) {
            return;
        }
        return _selectableValues[parseInt(index)].shade;
    }

    // this code will turn the unordered list (<ul />) internally used by
    //  Mui Select into a grid.  Each menu item in the list will be positioned
    //  in the grid based on where that shade was in the selectableValuesGrid
    if (value) {
        return (
            <div>
                {label && <InputLabel className="caption" htmlFor="outlined-select">{label}</InputLabel>}
                <Select
                    onChange={handleColorChange}
                    displayEmpty={true}
                    defaultValue={defaultValue || ""}
                    disabled={_disabled}
                    renderValue={(selected) => (
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                            <ColorShade shade={selected ? getShadeByIndex(selected.split(';')[1]) : "" || ""} />
                        </Box>
                    )}
                    MenuProps={{
                        PaperProps: {
                          sx: {
                            '& .MuiList-root.MuiMenu-list': {
                              display: 'grid',
                              gridTemplateColumns: `${buildGridColumnValue()}`,
                            },
                          },
                        },
                      }}
                >
                    {_selectableValues && _selectableValues.map((gridShade, i) => {
                        return(
                            <MenuItem key={`shade${i}`} value={`${gridShade.shade.hex};${i}`} sx={{gridArea: `${gridShade.row+1}/${gridShade.column+1}`}}>
                                <ColorShade shade={gridShade.shade} />
                            </MenuItem>
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