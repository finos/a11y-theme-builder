import React from 'react';
import { HeadingSection } from '../content/HeadingSection';
import { Button, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Tooltip } from '@mui/material';
import { ExampleSection } from '../content/ExampleSection';


interface Props {
}

export const RadioButtonsComponent: React.FC<Props> = ({ }) => {
    return (
        <div className="content">
            <HeadingSection title='Desktop' heading='Radio Buttons'></HeadingSection>
            <ExampleSection>
                <FormControl>
                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                        <FormControlLabel value="one" control={<Radio />} label="One" checked/>
                        <FormControlLabel value="two" control={<Radio />} label="Two"/>
                        <FormControlLabel value="three" control={<Radio />} label="Three" disabled/>
                        <FormControlLabel value="four" control={<Radio />} label="Four" disabled checked/>
                    </RadioGroup>
                </FormControl>
            </ExampleSection>

        </div>
    )
}
