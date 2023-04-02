/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, {useState, useEffect } from 'react';
import { Checkbox, FormControl, InputLabel, 
    ListItemText, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { DesignSystem } from 'a11y-theme-builder-sdk';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './AccessibilityLayersButton.css';

const name = "AccessibilityLayersButton";

interface Props {
    designSystem: DesignSystem;
};

export const AccessibilityLayersButton: React.FC<Props> = ({ designSystem}) => {

    const layersProperty = (designSystem.layers).properties;
    const getValueFromLayersProperty = () => {
        let r = [];
        for (var i=0; i<layersProperty.length; i++) {
            let v = layersProperty[i].getValue();
            if (v === undefined) {
                v = layersProperty[i].getDefaultValue();
            }
            if (v) {
                r.push(layersProperty[i].name);
            }
        }
        return r;
    }
    const [a11yLayers, setA11yLayers] = useState<string[]>(["None", ...getValueFromLayersProperty()]);

    const handleChange = async (event: SelectChangeEvent<string[]>) => {
        const value = event.target.value as string[];
        console.log(`${name} - Changed by UI to ${value}`);
        for (var i=0; i<layersProperty.length; i++) {
            const p = layersProperty[i];
            const selectedValue = value.indexOf(p.name) > -1;
            const propValue = p.getValue();
            if (propValue != selectedValue || propValue == undefined) {
                console.log(`${name} - Setting value for ${p.name}: current=${propValue} new=${selectedValue}`)
                p.setValue(selectedValue);
            }
        }
        setA11yLayers(value);
    }
 
    return (
        <>
            <div id="a11y-layers-multiple-checkbox-label" className="label">Accessibility Layers:</div>
            <div>
                <Select
                    labelId="a11y-layers-multiple-checkbox-label"
                    id="a11y-layers-multiple-checkbox"
                    size="small"
                    multiple
                    value={a11yLayers}
                    onChange={handleChange}
                    renderValue={(selected:string[]) => {
                        var s = selected.join(', ');
                        if (selected.length > 1) {
                            s = s.replace("None, ", "");
                        }
                        return (<div style={{paddingTop:"0px"}}>{s}</div>)
                    }}
                    sx={{
                        width: "300px",
                    }}
                >
                    {layersProperty.map((prop:any) => (
                        <MenuItem key={prop.name} value={prop.name}>
                            <Checkbox checked={a11yLayers.indexOf(prop.name) > -1} />
                            <ListItemText primary={prop.name} />
                        </MenuItem>
                    ))}
                </Select>
            </div>
        </>
    )
}