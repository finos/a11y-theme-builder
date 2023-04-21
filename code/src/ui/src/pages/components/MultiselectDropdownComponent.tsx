/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React from 'react';
import { HeadingSection } from '../content/HeadingSection';
import { ExampleSection } from '../content/ExampleSection';
import { Checkbox, FormControl, ListItemText, MenuItem, OutlinedInput } from '@mui/material';
import { Dropdown } from '../../mui-a11y-tb/components/Dropdown';

interface Props {
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const toppings = [
    'Cheese',
    'Tomatoes',
    'Mozzarella',
    'Mushrooms',
    'Pepperoni',
    'Onions',
    ];

export const MultiselectDropdownComponent: React.FC<Props> = () => {

    const [topping, setTopping] = React.useState<string[]>([]);

    const handleChange = (event: any) => {
        const { target: { value }} = event;
        setTopping( typeof value === 'string' ? value.split(',') : value );
    };

    return (
        <div className="content">
            <HeadingSection title='Desktop' heading='Multiselect Dropdown'></HeadingSection>
            <ExampleSection>
                <FormControl sx={{ m: 1, width: 300 }}>
                    <Dropdown
                        labelId="multiselect-dropdown-label"
                        id="multiselect-dropdown-checkbox"
                        multiple
                        displayEmpty
                        value={topping}
                        onChange={handleChange}
                        input={<OutlinedInput/>}
                        renderValue={(selected:any) => {
                            if (selected.length === 0) {
                                return <em>None Selected</em>;
                            }
                            return selected.join(', ');
                        }}
                        MenuProps={MenuProps}
                    >
                        <MenuItem disabled value="">
                            <em>Select Topping</em>
                        </MenuItem>
                        {toppings.map((top) => (
                            <MenuItem key={top} value={top}>
                                <Checkbox checked={topping.indexOf(top) > -1} />
                                <ListItemText primary={top} />
                            </MenuItem>
                        ))}
                    </Dropdown>
                </FormControl>
            </ExampleSection>
        </div>
    )
}
