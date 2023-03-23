import React, { useState, useEffect } from 'react';
import { InputLabel, TextField, InputAdornment } from '@mui/material';
import { Property } from 'a11y-theme-builder-sdk';

export interface NumberProps {
    property: Property<string>;
    defaultValue?: string;
    children?: React.ReactNode;
    units?: string;
    style?: any;
    description?: React.ReactNode;
}

export const StringProperty: React.FC<NumberProps> = ({ property, defaultValue, children, units, style, description }) => {
    const [value, setValue] = useState<string>(property.getValue() || property.getDefaultValue() || defaultValue || "");
    async function handleChange(event: any): Promise<void> {
        const _value = event.target.value;
        setValue(_value);
    }
    useEffect(()=> {
        const timeOutId = setTimeout(() => {
            property.setValue(value);
        }, 1000);
        return () => clearTimeout(timeOutId);
    },[value]);

    return (
        <div>
            <InputLabel htmlFor="stringPropertyTextField" id="stringPropertyLabel">{children || property.name}
            {description && <div style={{fontWeight:"normal"}}>{description}</div>}
            </InputLabel>            <TextField 
                id="stringPropertyTextField"
                InputProps={units ? {endAdornment: <InputAdornment position="end">{units}</InputAdornment>} : {}}
                value={value }
                onChange={handleChange}
                sx={{width:300, ...style}}
            />
        </div>
    )
}