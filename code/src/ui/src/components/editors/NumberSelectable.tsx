import React, { useState } from 'react';
import { InputLabel, MenuItem, Select } from '@mui/material';
import { PropertyPixelSelectable } from '../../sdk';

export interface PixelProps {
    property: PropertyPixelSelectable;
    defaultValue?: number;
    children?: React.ReactNode;
    units?: string;
    style?: any;
    description?: React.ReactNode;
}

export const NumberSelectable: React.FC<PixelProps> = ({ property, defaultValue, children, units, style, description }) => {
    const [value, setValue] = useState<number>((property.getValue() || property.getDefaultValue() || defaultValue || 0));
    async function handleChange(event: any): Promise<void> {
        const _value = parseInt(event.target.value);
        setValue(_value);
        property.setValue(_value ? _value : undefined);
    }
    var r = [];
    var selectables = property.getSelectableValues();
    for (var i=0; i<selectables.length; i++) {
        const s = selectables[i].toString() + (units || "");
        r.push(<MenuItem key={s} value={selectables[i]}> {s} </MenuItem>)
    }
    return (
        <div>
            <InputLabel id="pixelSelectLabel">{children || property.name}</InputLabel>
            {description && <div style={{fontWeight:"normal"}}>{description}</div>}
            <Select id="pixelSelect" labelId="pixelSelectLabel" value={value} onChange={handleChange} autoWidth>
                {r}
            </Select>
        </div>
    )
}