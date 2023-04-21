/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React from 'react';
import { ColorThemes } from 'a11y-theme-builder-sdk';
import { ColorShade } from './ColorShade';
import { ColorGradient } from './ColorGradient';
import { ColorGradientHeader } from './ColorGradientHeader';
import './DisplayColorTheme.css';
import { GeneratedCodeSection } from '../pages/content/GeneratedCodeSection'
import { ExampleSection } from '../pages/content/ExampleSection';
import { HeadingSection } from '../pages/content/HeadingSection';
import { LightModeSection } from '../pages/content/LightModeSection';
import { DarkModeSection } from '../pages/content/DarkModeSection';


interface Props {
    atom: ColorThemes;
}

export const DisplayColorTheme: React.FC<Props> = ({ atom }) => {
    const colorTheme = atom.getDefaultTheme();
    if (colorTheme) {
        return (
            <div className="content theme-page active" id="buildThemes">
                <HeadingSection title="Theme" heading="Default Theme">
                    <p>Read-only representation of the colors in the default color theme for the currently selected design system.</p>
                </HeadingSection>
                <ExampleSection>
                    <div style={{ display: "flex", gap: "40px" }}>
                        <LightModeSection>
                            <h6 className="top16">Theme Colors</h6>
                            <div className="form-columns top16">
                                <div className="input-col">
                                    <div className="caption text-center">Primary</div>
                                    <div className="Hex theme-primary">Aa</div>
                                </div>
                                <div className="input-col">
                                    <div className="caption">Secondary</div>
                                    <div className="Hex theme-secondary">Aa</div>
                                </div>
                                <div className="input-col">
                                    <div className="caption">Tertiary</div>
                                    <div className="Hex theme-tertiary">Aa</div>
                                </div>
                            </div>
                            <div className="formRow">
                                <h6 className="top16">Background Colors</h6>
                                <div className="form-columns top16">
                                    <div className="input-col">
                                        <div className="caption">Primary</div>
                                        <div className="Hex background">Aa</div>
                                    </div>
                                    <div className="input-col">
                                        <div className="caption">Secondary</div>
                                        <div className="Hex background-secondary">Aa</div>
                                    </div>
                                </div>
                            </div>
                            <h6 className="top16">Gradients</h6>
                            <div className="formRow">
                                <div className="subtitle1">Gradient 1</div>
                                <div className="default-gradient gradient-1">Aa</div>
                            </div>
                            <div className="formRow">
                                <div className="subtitle1">Gradient 2</div>
                                    <div className="default-gradient gradient-2">Aa</div>
                                </div>
                            <div className="formRow top16">
                                <div className="form-columns top16">
                                    <div className="input-col">
                                        <div className="caption">Button Color</div>
                                        <div className="Hex button">Aa</div>
                                    </div>
                                </div>
                            </div>
                            <div className="formRow top16">
                                <div className="form-columns top16">
                                    <div className="input-col">
                                        <div className="caption">Icon Color</div>
                                        <div className="Hex icon"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="formRow">
                                <div className="subtitle1">Gradient Header Text</div>
                                <h2 className="gradient-title">Sample Header</h2>
                            </div>
                            <div className="formRow">
                                <div className="form-columns top16">
                                    <div className="input-col">
                                        <div className="caption">Accent Color</div>
                                        <div className="Hex accent"></div>
                                    </div>
                                </div>
                            </div>
                        </LightModeSection>
                        <DarkModeSection>
                            <h6 className="top16">Theme Colors</h6>
                            <div className="form-columns top16">
                                <div className="input-col">
                                    <div className="caption text-center">Primary</div>
                                    <div className="Hex theme-primary">Aa</div>
                                </div>
                                <div className="input-col">
                                    <div className="caption">Secondary</div>
                                    <div className="Hex theme-secondary">Aa</div>
                                </div>
                                <div className="input-col">
                                    <div className="caption">Tertiary</div>
                                    <div className="Hex theme-tertiary">Aa</div>
                                </div>
                            </div>
                            <div className="formRow">
                                <h6 className="top16">Background Colors</h6>
                                <div className="form-columns top16">
                                    <div className="input-col">
                                        <div className="caption">Primary</div>
                                        <div className="Hex background">Aa</div>
                                    </div>
                                    <div className="input-col">
                                        <div className="caption">Secondary</div>
                                        <div className="Hex background-secondary">Aa</div>
                                    </div>
                                </div>
                            </div>
                            <h6 className="top16">Gradients</h6>
                            <div className="formRow">
                                <div className="subtitle1">Gradient 1</div>
                                <div className="default-gradient gradient-1">Aa</div>
                            </div>
                            <div className="formRow">
                                <div className="subtitle1">Gradient 2</div>
                                    <div className="default-gradient gradient-2">Aa</div>
                                </div>
                            <div className="formRow top16">
                                <div className="form-columns top16">
                                    <div className="input-col">
                                        <div className="caption">Button Color</div>
                                        <div className="Hex button">Aa</div>
                                    </div>
                                </div>
                            </div>
                            <div className="formRow top16">
                                <div className="form-columns top16">
                                    <div className="input-col">
                                        <div className="caption">Icon Color</div>
                                        <div className="Hex icon"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="formRow">
                                <div className="subtitle1">Gradient Header Text</div>
                                <h2 className="default-gradient-title gradient-title">Sample Header</h2>
                            </div>
                            <div className="formRow">
                                <div className="form-columns top16">
                                    <div className="input-col">
                                        <div className="caption">Accent Color</div>
                                        <div className="Hex accent"></div>
                                    </div>
                                </div>
                            </div>
                        </DarkModeSection>
                    </div>
                </ExampleSection>
                <GeneratedCodeSection item={atom} />
            </div>
        );
    }
    else {
        return (
            <div className="content theme-page active" id="buildThemes">
                <HeadingSection title="Theme" heading="Default Theme" />
                <div style={{ display: "flex", gap: "40px" }}>
                    No default color theme
                </div>
            </div>
        );
    }
}
