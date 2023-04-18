/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select } from '@mui/material';
import { PropertyStringSelectable } from 'a11y-theme-builder-sdk';

export interface StringProps {
    property: PropertyStringSelectable;
    defaultValue: string;
    variant?: "dropdown" | "radio";
    description?: React.ReactNode;
}

export const StringSelectable: React.FC<StringProps> = ({ property, defaultValue, variant, description }) => {
    const [title, setTitle] = useState<string>((property.getValue() || property.getDefaultValue() || defaultValue));
    async function handleChange(event: any): Promise<void> {
        const _value = event.target.value;
        setTitle(_value);
        property.setValue(_value);
    }

    const renderSelectComponent = (property: PropertyStringSelectable, label: string) => {
        return (
            <div>
                <InputLabel id="stringSelectLabel">{label}</InputLabel>
                <Select id="stringSelect" labelId="stringSelectLabel" value={title} onChange={handleChange}>
                    {renderSelectableItems(property)}
                </Select>
            </div>
        );
    }

    const renderRadioComponent = (property: PropertyStringSelectable, label: string) => {
        return (
            <FormControl>
                <FormLabel id="underline-hotlinks-lightmode-radio-buttons-group">{label}</FormLabel>
                <RadioGroup
                    aria-labelledby="hotlinks-lightmode-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={title}
                    onChange={handleChange}
                >
                    {renderSelectableItems(property, variant)}
                </RadioGroup>
            </FormControl>
        );
    }

    const renderSelectableItems = (property: PropertyStringSelectable, variant?: string) => {
        var r = [];
        var selectables = property.getSelectableValues();
        for (var i=0; i<selectables.length; i++) {
            const s = selectables[i];
            if (!variant || variant === "dropdown") {
                r.push(<MenuItem key={s} value={s}> {s} </MenuItem>)
            } else if (variant === "radio") {
                r.push(<FormControlLabel value={s} control={<Radio />} label={s} />)
            } else {
                r.push(<div>Unknown Values</div>)
            }
        }
        return r;
    }



    const label = property.name;
    return (
        <div>
            {(!variant || variant === "dropdown") && renderSelectComponent(property, label)}
            {description && <div style={{fontWeight:"normal"}}>{description}</div>}
            {(variant === "radio") && renderRadioComponent(property, label)}
        </div>
    )
}