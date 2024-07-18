/**
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React from 'react';
import { HeadingSection } from '../content/HeadingSection';
import {
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
} from '@mui/material';
import { ExampleSection } from '../content/ExampleSection';

interface Props {}

export const RadioButtonsComponent: React.FC<Props> = () => {

    return (
        <div className="content">
            <HeadingSection
                title="Desktop"
                heading="Radio Buttons"
            ></HeadingSection>
            <ExampleSection>
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel
                            value="one"
                            control={<Radio />}
                            label="One"
                            checked
                        />
                        <FormControlLabel
                            value="two"
                            control={<Radio />}
                            label="Two"
                        />
                        <FormControlLabel
                            value="three"
                            control={<Radio />}
                            label="Three"
                            disabled
                        />
                        <FormControlLabel
                            value="four"
                            control={<Radio />}
                            label="Four"
                            disabled
                            checked
                        />
                    </RadioGroup>
                </FormControl>
            </ExampleSection>
        </div>
    );
};
