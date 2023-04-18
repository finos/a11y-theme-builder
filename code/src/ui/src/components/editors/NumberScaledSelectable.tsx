/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { InputLabel, MenuItem, Select } from '@mui/material';
import { PropertyPixelSelectable } from 'a11y-theme-builder-sdk';

export interface PixelProps {
    property: PropertyPixelSelectable;
    defaultValue?: number;
    children?: React.ReactNode;
    units?: string;
    style?: any;
    description?: React.ReactNode;
    scale?: number;
}

export const NumberScaledSelectable: React.FC<PixelProps> = ({ property, defaultValue=0, children, units, style, description, scale=1 }) => {
    let initValue = property.getValue();
    if (initValue === undefined) {
        initValue = property.getDefaultValue();
    }
    if (initValue === undefined) {
        initValue = defaultValue;
    }
    const [value, setValue] = useState<number>(initValue);
    async function handleChange(event: any): Promise<void> {
        const _value = event.target.value;
        setValue(_value);
        property.setValue(_value);
    }
    var r = [];
    var selectables = property.getSelectableValues();
    for (var i=0; i<selectables.length; i++) {
        const s = (selectables[i]*scale).toString() + (units || "");
        r.push(<MenuItem key={s} value={selectables[i]}> {s} </MenuItem>)
    }
    return (
        <div>
            <InputLabel id="pixelSelectLabel">{children || property.name}</InputLabel>
            {description && <div style={{fontWeight:"normal"}}>{description}</div>}
            <Select id="pixelSelect" labelId="pixelSelectLabel" value={value} onChange={handleChange}>
                {r}
            </Select>
        </div>
    )
}