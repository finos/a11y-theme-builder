/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { HeadingSection } from '../content/HeadingSection';
import { Button, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Tooltip } from '@mui/material';
import { ExampleSection } from '../content/ExampleSection';
import { ColorModeSelector } from '../content/ColorModeSelector';

interface Props {
}

export const RadioButtonsComponent: React.FC<Props> = () => {

    const [colorMode, setColorMode] = useState<string>("default");

    return (
        <div className="content">
            <HeadingSection title='Desktop' heading='Radio Buttons'></HeadingSection>
            <ExampleSection>
              <ColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
                <FormControl>
                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                        <FormControlLabel className={colorMode} value="one" control={<Radio />} label="One" checked/>
                        <FormControlLabel className={colorMode} value="two" control={<Radio />} label="Two"/>
                        <FormControlLabel className={colorMode} value="three" control={<Radio />} label="Three" disabled/>
                        <FormControlLabel className={colorMode} value="four" control={<Radio />} label="Four" disabled checked/>
                    </RadioGroup>
                </FormControl>
              </ColorModeSelector>
            </ExampleSection>

        </div>
    )
}
