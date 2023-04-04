import React from 'react';
import { HeadingSection } from '../content/HeadingSection';
import { ExampleSection } from '../content/ExampleSection';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';


interface Props {
}

export const DropdownComponent: React.FC<Props> = () => {

    const [age, setAge] = React.useState('');
    const handleChange = (event: any) => {
        setAge(event.target.value as string);
    };

    return (
        <div className="content">
            <HeadingSection title='Desktop' heading='Dropdown'></HeadingSection>
            <ExampleSection>
                <FormControl sx={{ m: 2, minWidth: 80 }}>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    >
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                    </Select>
                </FormControl>
            </ExampleSection>
        </div>
    )
}
