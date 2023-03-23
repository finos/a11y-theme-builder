import React, { useState, useEffect } from 'react';
import { InputLabel, TextField, InputAdornment } from '@mui/material';
import { PropertyPixel, PropertyTime } from '../../sdk';

export interface NumberProps {
    property: PropertyTime | PropertyPixel;
    defaultValue?: number;
    children?: React.ReactNode;
    units?: string;
    style?: any;
    customHandleChange?: any;
    description?: React.ReactNode;
}

export const NumberProperty: React.FC<NumberProps> = ({ property, defaultValue=0, children, units, style, customHandleChange, description }) => {
    let initValue = property.getValue();
    if (initValue === undefined) {
        initValue = property.getDefaultValue();
    }
    if (initValue === undefined) {
        initValue = defaultValue;
    }
    const [value, setValue] = useState<number>(initValue);
    async function handleChange(event: any): Promise<void> {
        const _value = parseInt(event.target.value);
        setValue(_value);
    }
    useEffect(()=> {
        const timeOutId = setTimeout(() => {
            property.setValue(value ? value : undefined);
        }, 1000);
        return () => clearTimeout(timeOutId);
    },[value]);

    const onChange = customHandleChange || handleChange

    return (
        <div>
            <InputLabel htmlFor="numberPropertyTextField" id="numberPropertyLabel">{children || property.name}</InputLabel>
            {description && <div style={{fontWeight:"normal"}}>{description}</div>}
            <TextField 
                id="numberPropertyTextField"
                InputProps={units ? {endAdornment: <InputAdornment position="end">{units}</InputAdornment>} : {}}
                value={isNaN(value) ? "" : ""+value }
                onChange={onChange}
                sx={{width:300, ...style}}
            />
        </div>
    )
}