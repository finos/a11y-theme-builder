/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useState, useEffect } from 'react';
import { InputLabel, TextField, InputAdornment } from '@mui/material';
import { PropertyPixel, PropertyTime } from 'a11y-theme-builder-sdk';

export interface NumberProps {
    property: PropertyTime | PropertyPixel;
    defaultValue?: number;
    children?: React.ReactNode;
    units?: string;
    style?: any;
    customHandleChange?: any;
    description?: React.ReactNode;
	onChange?: (event:any) => Promise<void>;
}

let timeOutId:any;

export const NumberProperty: React.FC<NumberProps> = ({ property, defaultValue=0, children, units, style, customHandleChange, description, onChange }) => {
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
		if (timeOutId) clearTimeout(timeOutId);
        timeOutId = setTimeout(() => {
			timeOutId = null;
            property.setValue(value ? value : undefined);
			if (onChange) {
				onChange({target: {value: value}});
			}
        }, 1000);
    },[value]);

    const _onChange = customHandleChange || handleChange

    return (
        <div>
            <InputLabel htmlFor="numberPropertyTextField" id="numberPropertyLabel">{children || property.name}</InputLabel>
            {description && <div style={{fontWeight:"normal"}}>{description}</div>}
            <TextField 
                id="numberPropertyTextField"
                InputProps={units ? {endAdornment: <InputAdornment position="end">{units}</InputAdornment>} : {}}
                value={isNaN(value) ? "" : ""+value }
                onChange={_onChange}
                sx={{width:300, ...style}}
            />
        </div>
    )
}