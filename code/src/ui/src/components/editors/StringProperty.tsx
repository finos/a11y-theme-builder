/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useState, useEffect } from 'react';
import { InputLabel, TextField, InputAdornment } from '@mui/material';
import { Property } from 'a11y-theme-builder-sdk';

export interface NumberProps {
    property: Property<string>;
    defaultValue?: string;
    children?: React.ReactNode;
    units?: string;
    style?: any;
    customHandleChange?: any;
    description?: React.ReactNode;
	onChange?: (event:any) => Promise<void>;
}

let timeOutId:any;

export const StringProperty: React.FC<NumberProps> = ({ property, defaultValue, children, units, style, customHandleChange, description, onChange }) => {
    const [value, setValue] = useState<string>(property.getValue() || property.getDefaultValue() || defaultValue || "");
    async function handleChange(event: any): Promise<void> {
        const _value = event.target.value;
        setValue(_value);
    }
    useEffect(()=> {
		if (timeOutId) clearTimeout(timeOutId);
        timeOutId = setTimeout(() => {
			timeOutId = null;
            property.setValue(value);
			if (onChange) {
				onChange({target: {value: value}});
			}
        }, 1000);
    },[value]);

    const _onChange = customHandleChange || handleChange

    return (
        <div>
            <InputLabel htmlFor="stringPropertyTextField" id="stringPropertyLabel">{children || property.name}
            {description && <div style={{fontWeight:"normal"}}>{description}</div>}
            </InputLabel>            <TextField 
                id="stringPropertyTextField"
                InputProps={units ? {endAdornment: <InputAdornment position="end">{units}</InputAdornment>} : {}}
                value={value }
                onChange={_onChange}
                sx={{width:300, ...style}}
            />
        </div>
    )
}