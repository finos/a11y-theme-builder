/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { InputLabel, TextField, Slider } from '@mui/material';
import { GlowSettings } from '@finos/a11y-theme-builder-sdk';
import { ChromePicker, ColorResult } from 'react-color';
import { HeadingSection } from '../content/HeadingSection';
import { ExampleSection } from '../content/ExampleSection';
import { GeneratedCodeSection } from '../content/GeneratedCodeSection';

interface SampleProps {
    className: string;
    label: string;
}

const ExampleGlow: React.FC<SampleProps> = ({ className, label }) => {
    return (
        <div className="example top16">
            <div className="caption">{label}</div>
            <div className={'card ' + className}></div>
        </div>
    );
};

interface Props {
    glowSettings: GlowSettings;
}

export const GlowAtom: React.FC<Props> = ({ glowSettings }) => {
    const colorProperty = glowSettings.color;
    const blurRadiusProperty = glowSettings.blurRadius;
    const spreadRadiusProperty = glowSettings.spreadRadius;
    const glowOpacityProperty = glowSettings.colorOpacity;
    const percentChangeProperty = glowSettings.percentageChange;

    const [color, setColor] = useState<string>(
        colorProperty.getValue() || '#000000'
    );
    const [blurRadius, setBlurRadius] = useState<number>(
        blurRadiusProperty.getValue() || 0
    );
    const [spreadRadius, setSpreadRadius] = useState<number>(
        spreadRadiusProperty.getValue() || 0
    );
    const [glowOpacity, setGlowOpacity] = useState<number>(
        glowOpacityProperty.getValue() || 0
    );
    const [percentChange, setPercentChange] = useState<number>(
        percentChangeProperty.getValue() || 0
    );

    const [_addColorInputErrorTriggered, _setAddColorInputErrorTriggered] =
        useState<boolean>(false);

    const handleColorChange = (event: any) => {
        if (!/^#[0-9A-F]{6}$/i.test(event.target.value) == true) {
            _setAddColorInputErrorTriggered(true);
            setColor(event.target.value);
            return;
        }
        _setAddColorInputErrorTriggered(false);
        setColor(event.target.value);
        colorProperty.setValue(event.target.value);
    };
    const handleColorSelected = (color: ColorResult) => {
        setColor(color.hex);
        colorProperty.setValue(color.hex);
    };
    async function handleBlurRadiusChange(event: any): Promise<void> {
        const value = Number(event.target.value);
        setBlurRadius(value);
        blurRadiusProperty.setValue(value);
    }
    async function handleSpreadRadiusChange(event: any): Promise<void> {
        const value = Number(event.target.value);
        setSpreadRadius(value);
        spreadRadiusProperty.setValue(value);
    }
    async function handleGlowOpacityChange(event: any): Promise<void> {
        const value = Number(event.target.value);
        setGlowOpacity(value);
        glowOpacityProperty.setValue(value);
    }
    async function handlePercentChangeChange(event: any): Promise<void> {
        const value = Number(event.target.value);
        setPercentChange(value);
        percentChangeProperty.setValue(value);
    }

    return (
        <div>
            <HeadingSection item={glowSettings} title="Glows">
                Add the effect of back lighting to elements.
            </HeadingSection>
            <ExampleSection title="Glow Settings">
                <div className="row">
                    <div className="col-6">
                        <div className="subtitle1">Shadow Color</div>
                        <div className="form-row">
                            <InputLabel htmlFor="hexValue">
                                Hex Value
                            </InputLabel>
                            <TextField
                                sx={{ maxWidth: 300 }}
                                id="hexValue"
                                error={_addColorInputErrorTriggered}
                                onChange={handleColorChange}
                                helperText={
                                    _addColorInputErrorTriggered
                                        ? 'Please provide a 6-digit hexadecimal value'
                                        : ''
                                }
                                value={color}
                            />
                            <ChromePicker
                                color={color}
                                onChange={handleColorSelected}
                            />
                        </div>
                        <div className="form-row">
                            <label className="label-1">Blur Radius</label>
                            <Slider
                                aria-label="BlurRadius"
                                value={blurRadius}
                                sx={{ maxWidth: 600 }}
                                onChange={handleBlurRadiusChange}
                                valueLabelDisplay="auto"
                                min={blurRadiusProperty.min}
                                max={blurRadiusProperty.max}
                            />
                        </div>
                        <div className="form-row">
                            <label className="label-1">Spread Radius</label>
                            <Slider
                                aria-label="SpreadRadius"
                                value={spreadRadius}
                                sx={{ maxWidth: 600 }}
                                onChange={handleSpreadRadiusChange}
                                valueLabelDisplay="auto"
                                min={spreadRadiusProperty.min}
                                max={spreadRadiusProperty.max}
                            />
                        </div>
                        <div className="form-row">
                            <label className="label-1">Glow Opacity</label>
                            <Slider
                                aria-label="LightGlowOpacity"
                                value={glowOpacity}
                                sx={{ maxWidth: 600 }}
                                onChange={handleGlowOpacityChange}
                                valueLabelDisplay="auto"
                                min={glowOpacityProperty.min}
                                max={glowOpacityProperty.max}
                            />
                        </div>
                        <div className="form-row">
                            <label className="label-1">Percentage Change</label>
                            <Slider
                                aria-label="PercentageChange"
                                value={percentChange}
                                sx={{ maxWidth: 600 }}
                                onChange={handlePercentChangeChange}
                                valueLabelDisplay="auto"
                                min={percentChangeProperty.min}
                                max={percentChangeProperty.max}
                            />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="subtitle1">Sample Glows</div>
                        <ExampleGlow className="glow-1" label="Glow 1" />
                        <ExampleGlow className="glow-2" label="Glow 2" />
                        <ExampleGlow className="glow-3" label="Glow 3" />
                        <ExampleGlow className="glow-4" label="Glow 4" />
                        <ExampleGlow className="glow-5" label="Glow 5" />
                        <ExampleGlow className="glow-6" label="Glow 6" />
                        <ExampleGlow className="glow-7" label="Glow 7" />
                        <ExampleGlow className="glow-8" label="Glow 8" />
                        <ExampleGlow className="glow-9" label="Glow 9" />
                    </div>
                </div>
                <GeneratedCodeSection item={glowSettings} />
            </ExampleSection>
        </div>
    );
};
