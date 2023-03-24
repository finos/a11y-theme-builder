import React, { useState } from 'react';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel } from '@mui/material';
import { HeadingSection } from '../content/HeadingSection';

interface Props {
}

export const CheckboxesComponent: React.FC<Props> = ({ }) => {


    return (
        <div>
            <HeadingSection title="" heading="Cards with Images">
                Checkboxes and all form elements should only ever be placed on the
                primary or secondary background, on a standard card or modal. Therefore
                they are only available on one color.
            </HeadingSection>
            <div className="top40"></div>
            <FormControl component="fieldset">
                <FormLabel component="legend">Small Checkboxes</FormLabel>
                <FormGroup aria-label="sample small checkbox group">
                    <FormControlLabel
                        value="One"
                        control={<Checkbox size="small" defaultChecked/>}
                        label="One"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="Two"
                        control={<Checkbox size="small" />}
                        label="Two"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="Three"
                        control={<Checkbox size="small" />}
                        label="Three"
                        labelPlacement="end"
                        disabled
                    />
                </FormGroup>
                <FormHelperText>Note: the small checkboxes DO have a target area that meets your selected minimum target area.</FormHelperText>
            </FormControl>
            <div className="top40"></div>
            <FormControl component="fieldset">
                <FormLabel component="legend">Standard Checkboxes</FormLabel>
                <FormGroup aria-label="sample standard checkbox group">
                    <FormControlLabel
                        value="One"
                        control={<Checkbox defaultChecked/>}
                        label="One"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="Two"
                        control={<Checkbox />}
                        label="Two"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="Three"
                        control={<Checkbox />}
                        label="Three"
                        labelPlacement="end"
                        disabled
                    />
                </FormGroup>
            </FormControl>
        </div>
    )
}
