/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useState, useEffect } from 'react';
import { Checkbox, FormControl, FormControlLabel, InputLabel, TextField } from '@mui/material';
import { FocusStates } from 'a11y-theme-builder-sdk';
import { GeneratedCodeSection } from '../content/GeneratedCodeSection';
import { ExampleSection } from '../content/ExampleSection';
import { SettingsSection } from '../content/SettingsSection';
import { HeadingSection } from '../content/HeadingSection';
import { LightModeSection } from '../content/LightModeSection';
import { DarkModeSection } from '../content/DarkModeSection';

interface Props {
    focusStates: FocusStates;
}

export const FocusStateAtom: React.FC<Props> = ({ focusStates }) => {

    const [_focusBlur, _setFocusBlur] = useState<boolean>(false);

    useEffect(() => {
        _setFocusBlur(focusStates.addFocusBlur.getValue() || false);
    }, []);

    // Called when user clicks on one of the state controls.
    //  Should set the picker to the color reflected by
    //  the selected State control
    const handleBlurChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(`handling blue change, value: ${event.target.checked}`);
        focusStates.addFocusBlur.setValue(event.target.checked);
        _setFocusBlur(event.target.checked)
    }

    return (
        <div>
            <HeadingSection item={focusStates} title="Focus States">
                <p>Settings that affect focus state for components such as textfields and cards</p>
                <p>Focus states need to have a contrast of 3.1 or higher against the selected background.</p>
            </HeadingSection>
            <ExampleSection>
                <LightModeSection>
                    <div className="row">
                        <div className="col-6">
                            <div className="form-row">
                                <InputLabel className="label-1" htmlFor="focusstate-lightmode-preview">Sample Input - Focus State</InputLabel>
                                <TextField id="focusstate-lightmode-preview" value="Sample input Field" />
                            </div>
                            <div className="form-row">
                                <InputLabel className="label-1" htmlFor="focusstate-disabled-lightmode-preview">Sample Input Disabled</InputLabel>
                                <TextField id="focusstate-disabled-lightmode-preview" value="Sample input Field" disabled />
                            </div>
                        </div>
                    </div>
                </LightModeSection>
                <DarkModeSection>
                    <div className="row">
                        <div className="col-6">
                            <div className="form-row">
                                <InputLabel className="label-1" htmlFor="focusstate-darkmode-preview">Sample Input - Focus State</InputLabel>
                                <TextField id="focusstate-darkmode-preview" value="Sample input Field" />
                            </div>
                            <div className="form-row">
                                <InputLabel className="label-1" htmlFor="focusstate-disabled-darkmode-preview">Sample Input Disabled</InputLabel>
                                <TextField id="focusstate-disabled-darkmode-preview" value="Sample input Field" disabled />
                            </div>
                        </div>
                    </div>
                </DarkModeSection>
            </ExampleSection>
            <SettingsSection>
                <FormControl>
                    <FormControlLabel
                        label="Add Focus Blur"
                        labelPlacement="top"
                        control={
                            <Checkbox
                                checked={_focusBlur}
                                onChange={handleBlurChange}
                            />
                        }
                    />
                </FormControl>
            </SettingsSection>
            <GeneratedCodeSection item={focusStates} />
        </div>
    )
}
