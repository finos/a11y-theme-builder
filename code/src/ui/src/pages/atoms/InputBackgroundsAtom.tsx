/**
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useEffect } from 'react';
import { InputLabel, TextField } from '@mui/material';
import { InputBackground } from '@finos/a11y-theme-builder-sdk';
import { ColorSelectTitled } from '../../components/ColorSelectTitled';
import './BordersAtom.css';
import { GeneratedCodeSection } from '../content/GeneratedCodeSection';
import { ExampleSection } from '../content/ExampleSection';
import { SettingsSection } from '../content/SettingsSection';
import { HeadingSection } from '../content/HeadingSection';
import { LightModeSection } from '../content/LightModeSection';
import { DarkModeSection } from '../content/DarkModeSection';

interface Props {
    inputBackground: InputBackground;
}

export const InputBackgroundsAtom: React.FC<Props> = ({ inputBackground }) => {
    const defaultText = 'Sample input field';

    useEffect(() => {
        if (inputBackground && inputBackground.overlayColor) {
            //inputBackground.background.getSelectableValues()
        }
    }, []);

    return (
        <div>
            <HeadingSection item={inputBackground} title="Surfaces">
                Input field's backgrounds colors distinguish them from your
                selected background in a subtle and non-obtrusive way.
            </HeadingSection>
            <ExampleSection>
                <LightModeSection>
                    <div className="form-row">
                        <InputLabel
                            className="label-1"
                            htmlFor="input-background-lightmode"
                        >
                            Sample Input
                        </InputLabel>
                        <TextField
                            id="input-background-lightmode"
                            defaultValue={defaultText}
                            sx={{ width: 300 }}
                        />
                    </div>
                    <div className="form-row">
                        <InputLabel
                            className="label-1"
                            htmlFor="input-background-lightmode-disabled"
                        >
                            Sample Input Disabled
                        </InputLabel>
                        <TextField
                            id="input-background-lightmode-disabled"
                            defaultValue={defaultText}
                            sx={{ width: 300 }}
                            disabled={true}
                        />
                    </div>
                </LightModeSection>
                <DarkModeSection>
                    <div className="row">
                        <div className="col-6">
                            <div className="form-row">
                                <InputLabel
                                    className="label-1"
                                    htmlFor="input-background-darkmode"
                                >
                                    Sample Input
                                </InputLabel>
                                <TextField
                                    id="input-background-darkmode"
                                    defaultValue={defaultText}
                                    sx={{ width: 300 }}
                                    variant="outlined"
                                />
                            </div>
                            <div className="form-row">
                                <InputLabel
                                    className="label-1"
                                    htmlFor="input-background-darkmode-disabled"
                                >
                                    Sample Input Disabled
                                </InputLabel>
                                <TextField
                                    id="input-background-darkmode-disabled"
                                    defaultValue={defaultText}
                                    sx={{ width: 300 }}
                                    variant="outlined"
                                    disabled={true}
                                />
                            </div>
                        </div>
                    </div>
                </DarkModeSection>
                <SettingsSection>
                    <ColorSelectTitled
                        value={inputBackground.overlayColor}
                        label="Overlay Color:"
                    ></ColorSelectTitled>
                </SettingsSection>
                <GeneratedCodeSection item={inputBackground} />
            </ExampleSection>
        </div>
    );
};
