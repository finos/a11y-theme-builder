/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { InputLabel, ListSubheader, MenuItem, Select } from '@mui/material';
import { PropertyStringCategorySelectable } from 'a11y-theme-builder-sdk';

export interface StringProps {
    property: PropertyStringCategorySelectable;
    defaultValue: string;
    variant?: "dropdown"; // | "radio";
    description?: React.ReactNode;
}

// Builds a Select component with ListSubheaders for category labels
//  and MenuItems for each item in each category.  This code will also
//  create a "None" MenuItem at the beginning of the menu with the
//  value "None".  When the user selects an item on the menu, this
//  code will submit that value back to the incoming property.  It
//  will send "None" if the "None" menu item is selected.
export const StringCategorySelectable: React.FC<StringProps> = ({ property, defaultValue, variant, description }) => {
    const [title, setTitle] = useState<string>((property.getValue() || property.getDefaultValue() || defaultValue || "None"));
    async function handleChange(event: any): Promise<void> {
        const _value = event.target.value;
        setTitle(_value);
        property.setValue(_value);
    }

    const renderSelectComponent = (property: PropertyStringCategorySelectable, label: string) => {
        return (
            <div>
                <InputLabel id="stringSelectLabel">{label}</InputLabel>
                <Select id="stringSelect" labelId="stringSelectLabel" value={title} onChange={handleChange}>
                    {renderCategories(property)}
                </Select>
            </div>
        );
    }

    const renderCategories = (property: PropertyStringCategorySelectable, variant?: string) => {
        var r = [];
        var selectables = property.getSelectableValues();
        for (var i=0; i<selectables.length; i++) {
            const s = selectables[i];
            if (!variant || variant === "dropdown") {
                if (s.display === "None" && (!s.members || s.members.length === 0)) {
                    // None supported, add a None menu item
                    r.push(<MenuItem value="None"><em>None</em></MenuItem>);
                } else {
                    r.push(<ListSubheader key={"label-"+s} inset={true}>{s.display}</ListSubheader>)
                    r.push(renderSelectableItems(s.members, variant))
                }
            } else {
                r.push(<div>Unknown Values</div>)
            }
        }
        return r;
    }

    const renderSelectableItems = (items: string[], variant?: string) => {
        var r = [];
        for (var i=0; i<items.length; i++) {
            const s = items[i];
            if (!variant || variant === "dropdown") {
                r.push(<MenuItem key={s} value={s}> {s} </MenuItem>)
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
        </div>
    )
}