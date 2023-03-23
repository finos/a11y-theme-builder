import React from 'react';
import { ColorThemes } from '../sdk';
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
                <HeadingSection title="Theme" heading="Default Theme" />
                <ExampleSection>
                    <div style={{ display: "flex", gap: "40px" }}>
                        <LightModeSection>
                            <h6 className="top16">Theme Colors</h6>
                            <div className="form-columns top16">
                                <ColorShade label="Primary" shade={colorTheme.primary.getValue()} />
                                <ColorShade label="Secondary" shade={colorTheme.secondary.getValue()} />
                                <ColorShade label="Tertiary" shade={colorTheme.tertiary.getValue()} />
                            </div>
                            <div className="formRow">
                                <h6 className="top16">Background Colors</h6>
                                <div className="form-columns top16">
                                    <ColorShade label="Primary" shade={colorTheme.lightModeBackground.getValue()?.primary} />
                                    <ColorShade label="Secondary" shade={colorTheme.lightModeBackground.getValue()?.secondary} />
                                </div>
                            </div>
                            <h6 className="top16">Gradients</h6>
                            <div className="formRow">
                                <ColorGradient value={colorTheme.gradient1} sampleLabel="Gradient 1" readonly />
                            </div>
                            <div className="formRow">
                                <ColorGradient value={colorTheme.gradient2} sampleLabel="Gradient 2" readonly />
                            </div>
                            <div className="formRow top16">
                                <div className="form-columns top16">
                                    <ColorShade shade={colorTheme.button.getValue()} label="Button Color" />
                                </div>
                            </div>
                            <div className="formRow top16">
                                <div className="form-columns top16">
                                    <ColorShade shade={colorTheme.icon.getValue()} label="Icon Color" />
                                </div>
                            </div>
                            <div className="formRow">
                                <ColorGradientHeader value={colorTheme.gradientHeaderText} sampleText="Sample Text" sampleLabel="Gradient Header Text:" readonly />
                            </div>
                            <div className="formRow">
                                <div className="form-columns top16">
                                    <ColorShade shade={colorTheme.accent.getValue()} label="Accent Color" />
                                </div>
                            </div>
                        </LightModeSection>
                        <DarkModeSection>
                            <h6 className="top16">Theme Colors</h6>
                            <div className="form-columns top16">
                                <ColorShade label="Primary" shade={colorTheme.primary.getValue()} />
                                <ColorShade label="Secondary" shade={colorTheme.secondary.getValue()} />
                                <ColorShade label="Tertiary" shade={colorTheme.tertiary.getValue()} />
                            </div>
                            <div className="formRow">
                                <h6 className="top16">Background Colors</h6>
                                <div className="form-columns top16">
                                    <ColorShade label="Primary" shade={colorTheme.darkModeBackground.getValue()?.primary} />
                                    <ColorShade label="Secondary" shade={colorTheme.darkModeBackground.getValue()?.secondary} />
                                </div>
                            </div>
                            <h6 className="top16">Gradients</h6>
                            <div className="formRow">
                                <ColorGradient value={colorTheme.gradient1} sampleLabel="Gradient 1" readonly />
                            </div>
                            <div className="formRow">
                                <ColorGradient value={colorTheme.gradient2} sampleLabel="Gradient 2" readonly />
                            </div>
                            <div className="formRow top16">
                                <div className="form-columns top16">
                                    <ColorShade shade={colorTheme.button.getValue()} label="Button Color" />
                                </div>
                            </div>
                            <div className="formRow top16">
                                <div className="form-columns top16">
                                    <ColorShade shade={colorTheme.icon.getValue()} label="Icon Color" />
                                </div>
                            </div>
                            <div className="formRow">
                                <ColorGradientHeader value={colorTheme.gradientHeaderText} sampleText="Sample Text" sampleLabel="Gradient Header Text:" readonly />
                            </div>
                            <div className="formRow">
                                <div className="form-columns top16">
                                    <ColorShade shade={colorTheme.accent.getValue()} label="Accent Color" />
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

