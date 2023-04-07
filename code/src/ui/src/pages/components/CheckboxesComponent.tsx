/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel } from '@mui/material';
import { HeadingSection } from '../content/HeadingSection';
import { ExampleSection } from '../content/ExampleSection';
import { ColorModeSelector } from '../content/ColorModeSelector';

interface Props {
}

export const CheckboxesComponent: React.FC<Props> = ({ }) => {

    const [colorMode, setColorMode] = useState<string>("default");

    return (
        <div>
            <HeadingSection title="Desktop" heading="Checkboxes">
                Checkboxes and all form elements should only ever be placed on the
                primary or secondary background, on a standard card or modal. Therefore
                they are only available on one color.
            </HeadingSection>
            <ExampleSection>
              <ColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
                <FormControl component="fieldset">
                    <h6>Small Checkboxes</h6>
                    <FormGroup aria-label="sample small checkbox group">
                        <FormControlLabel
                            value="One"
                            control={<Checkbox size="small" defaultChecked/>}
                            label="One"
                            labelPlacement="end"
                            className={colorMode}
                        />
                        <FormControlLabel
                            value="Two"
                            control={<Checkbox size="small" />}
                            label="Two"
                            labelPlacement="end"
                            className={colorMode}
                        />
                        <FormControlLabel
                            value="Three"
                            control={<Checkbox size="small" />}
                            label="Three"
                            labelPlacement="end"
                            disabled
                            className={colorMode}
                        />
                        <FormControlLabel
                            value="Four"
                            control={<Checkbox size="small" defaultChecked/>}
                            label="Three"
                            labelPlacement="end"
                            disabled
                            className={colorMode}
                        />
                    </FormGroup>
                    <FormHelperText>Note: the small checkboxes DO have a target area that meets your selected minimum target area.</FormHelperText>
                </FormControl>
                <div className="top40"></div>
                <FormControl component="fieldset">
                    <h6>Standard Checkboxes</h6>
                    <FormGroup aria-label="sample standard checkbox group">
                        <FormControlLabel
                            value="One"
                            control={<Checkbox defaultChecked/>}
                            label="One"
                            labelPlacement="end"
                            className={colorMode}
                        />
                        <FormControlLabel
                            value="Two"
                            control={<Checkbox />}
                            label="Two"
                            labelPlacement="end"
                            className={colorMode}
                        />
                        <FormControlLabel
                            value="Three"
                            control={<Checkbox />}
                            label="Three"
                            labelPlacement="end"
                            disabled
                            className={colorMode}
                        />
                        <FormControlLabel
                            value="Four"
                            control={<Checkbox defaultChecked/>}
                            label="Three"
                            labelPlacement="end"
                            disabled
                            className={colorMode}
                        />
                    </FormGroup>
                </FormControl>
              </ColorModeSelector>
            </ExampleSection>
        </div>
    )
}
