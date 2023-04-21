/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { InputLabel, TextField, Slider } from '@mui/material';
import { ElevationSettings } from 'a11y-theme-builder-sdk';
import { ChromePicker, ColorResult } from 'react-color';
import { HeadingSection } from '../content/HeadingSection';
import { SettingsSection } from '../content/SettingsSection';
import { GeneratedCodeSection } from '../content/GeneratedCodeSection';
import { DarkModeSection } from '../content/DarkModeSection';
import { LightModeSection } from '../content/LightModeSection';

interface SampleProps {
    className: string;
    label: string;
}

const ExampleElevation: React.FC<SampleProps> = ({ className, label }) => {
    return (
        <div className="example">
            <div className="caption">{label}</div>
            <div className={"card " + className}></div>
        </div>
    );
}

interface Props {
    elevationSettings: ElevationSettings;
}

export const ElevationsAtom: React.FC<Props> = ({ elevationSettings }) => {

    const shadowColorProperty               = elevationSettings.shadowColor
    const baseBlurRadiusProperty            = elevationSettings.baseBlurRadius
    const baseSpreadRadiusProperty          = elevationSettings.baseSpreadRadius
    const baseColorOpacityProperty          = elevationSettings.baseColorOpacity
    const horizontalShadowLengthProperty    = elevationSettings.horizontalShadowLength
    const verticalShadowLengthProperty      = elevationSettings.verticalShadowLength
    const blurRadiusProperty                = elevationSettings.blurRadius
    const spreadRadiusProperty              = elevationSettings.spreadRadius
    const colorOpacityProperty              = elevationSettings.colorOpacity
    const percentChangeProperty             = elevationSettings.percentageChange

    const [_addColorInputErrorTriggered, _setAddColorInputErrorTriggered] = useState<boolean>(false)

    const [shadowColor,            setShadowColor           ] = useState<string>(shadowColorProperty.getValue()            || "#000000");
    const [baseBlurRadius,         setBaseBlurRadius        ] = useState<number>(baseBlurRadiusProperty.getValue()         || 0);
    const [baseSpreadRadius,       setBaseSpreadRadius      ] = useState<number>(baseSpreadRadiusProperty.getValue()       || 0);
    const [baseColorOpacity,       setBaseColorOpacity      ] = useState<number>(baseColorOpacityProperty.getValue()       || 0);
    const [horizontalShadowLength, setHorizontalShadowLength] = useState<number>(horizontalShadowLengthProperty.getValue() || 0);
    const [verticalShadowLength,   setVerticalShadowLength  ] = useState<number>(verticalShadowLengthProperty.getValue()   || 0);
    const [blurRadius,             setBlurRadius            ] = useState<number>(blurRadiusProperty.getValue()             || 0);
    const [spreadRadius,           setSpreadRadius          ] = useState<number>(spreadRadiusProperty.getValue()           || 0);
    const [colorOpacity,           setColorOpacity          ] = useState<number>(colorOpacityProperty.getValue()           || 0);
    const [percentChange,          setPercentChange         ] = useState<number>(percentChangeProperty.getValue()          || 0);

    const handleShadowColorChange = (event: any) => {
        if (!/^#[0-9A-F]{6}$/i.test(event.target.value) == true) {
            _setAddColorInputErrorTriggered(true);
            setShadowColor(event.target.value);
            return;
        }
        _setAddColorInputErrorTriggered(false);
        setShadowColor(event.target.value);
        shadowColorProperty.setValue(event.target.value)
    }
    const handleColorSelected = (color: ColorResult) => {
        setShadowColor(color.hex)
        shadowColorProperty.setValue(color.hex)
    }
    async function handleBaseBlurRadiusChange(event: any): Promise<void> {
        const value = Number(event.target.value);
        setBaseBlurRadius(value);
        baseBlurRadiusProperty.setValue(value)
    }
    async function handleBaseSpreadRadiusChange(event: any): Promise<void> {
        const value = Number(event.target.value);
        setBaseSpreadRadius(value);
        baseSpreadRadiusProperty.setValue(value)
    }
    async function handleBaseColorOpacityChange(event: any): Promise<void> {
        const value = Number(event.target.value);
        setBaseColorOpacity(value);
        baseColorOpacityProperty.setValue(value)
    }
    async function handleHorizontalShadowLengthChange(event: any): Promise<void> {
        const value = Number(event.target.value);
        setHorizontalShadowLength(value);
        horizontalShadowLengthProperty.setValue(value)
    }
    async function handleVerticalShadowLengthChange(event: any): Promise<void> {
        const value = Number(event.target.value);
        setVerticalShadowLength(value);
        verticalShadowLengthProperty.setValue(value)
    }
    async function handleBlurRadiusChange(event: any): Promise<void> {
        const value = Number(event.target.value);
        setBlurRadius(value);
        blurRadiusProperty.setValue(value)
    }
    async function handleSpreadRadiusChange(event: any): Promise<void> {
        const value = Number(event.target.value);
        setSpreadRadius(value);
        spreadRadiusProperty.setValue(value)
    }
    async function handleColorOpacityChange(event: any): Promise<void> {
        const value = Number(event.target.value);
        setColorOpacity(value);
        colorOpacityProperty.setValue(value)
    }
    async function handlePercentChangeChange(event: any): Promise<void> {
        const value = Number(event.target.value);
        setPercentChange(value);
        percentChangeProperty.setValue(value)
    }

    return (
        <div>
            <HeadingSection item={elevationSettings} title="Elevations">
                Elevations create a senses of depth and replicated items places along the z-axis farther and father away from the surface.
            </HeadingSection>
            <SettingsSection>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="subtitle1">Shadow Color</div>
                            <div className="form-row">
                            <InputLabel htmlFor='hexValue'>Hex Value</InputLabel>
                            <TextField
                            sx={{maxWidth: 300}}
                                id='hexValue'
                                error={_addColorInputErrorTriggered}
                                onChange={handleShadowColorChange}
                                helperText={_addColorInputErrorTriggered ? "Please provide a 6-digit hexadecimal value" : ""}
                                value={shadowColor}
                            />
                            <ChromePicker color={shadowColor} onChange={handleColorSelected} />
                            </div>
                            <div className="subtitle1">Based Shadow Settings</div>
                            <div className="form-row">
                                <label className="label-1">
                                    Base Blur Radius
                                </label>
                                <Slider
                                    aria-label="BaseBlurRadius"
                                    value={baseBlurRadius}
                                    sx={{maxWidth:600}}
                                    onChange={handleBaseBlurRadiusChange}
                                    valueLabelDisplay="auto"
                                    min={baseBlurRadiusProperty.min}
                                    max={baseBlurRadiusProperty.max}
                                />
                            </div>
                            <div className="form-row">
                                <label className="label-1">
                                    Base Spread Radius
                                </label>
                                <Slider
                                    aria-label="BaseSpreadRadius"
                                    value={baseSpreadRadius}
                                    sx={{maxWidth:600}}
                                    onChange={handleBaseSpreadRadiusChange}
                                    valueLabelDisplay="auto"
                                    min={baseSpreadRadiusProperty.min}
                                    max={baseSpreadRadiusProperty.max}
                                />
                            </div>
                            <div className="form-row">
                                <label className="label-1">
                                    Base Color Opacity
                                </label>
                                <Slider
                                    aria-label="BaseColorOpacity"
                                    value={baseColorOpacity}
                                    sx={{maxWidth:600}}
                                    onChange={handleBaseColorOpacityChange}
                                    valueLabelDisplay="auto"
                                    min={baseColorOpacityProperty.min}
                                    max={baseColorOpacityProperty.max}
                                />
                            </div>

                            <div className="subtitle1 top16">Angled Elevation Settings</div>
                            <div className="form-row">
                                <label className="label-1">
                                    Horizontal Shadow Length
                                </label>
                                <Slider
                                    aria-label="HorizontalShadowLength"
                                    value={horizontalShadowLength}
                                    sx={{maxWidth:600}}
                                    onChange={handleHorizontalShadowLengthChange}
                                    valueLabelDisplay="auto"
                                    min={horizontalShadowLengthProperty.min}
                                    max={horizontalShadowLengthProperty.max}
                                />
                            </div>
                            <div className="form-row">
                                <label className="label-1">
                                    Vertical Shadow Length
                                </label>
                                <Slider
                                    aria-label="VerticalShadowLength"
                                    value={verticalShadowLength}
                                    sx={{maxWidth:600}}
                                    onChange={handleVerticalShadowLengthChange}
                                    valueLabelDisplay="auto"
                                    min={verticalShadowLengthProperty.min}
                                    max={verticalShadowLengthProperty.max}
                                />
                            </div>
                            <div className="form-row">
                                <label className="label-1">
                                    Blur Radius
                                </label>
                                <Slider
                                    aria-label="BlurRadius"
                                    value={blurRadius}
                                    sx={{maxWidth:600}}
                                    onChange={handleBlurRadiusChange}
                                    valueLabelDisplay="auto"
                                    min={blurRadiusProperty.min}
                                    max={blurRadiusProperty.max}
                                />
                            </div>
                            <div className="form-row">
                                <label className="label-1">
                                    Spread Radius
                                </label>
                                <Slider
                                    aria-label="SpreadRadius"
                                    value={spreadRadius}
                                    sx={{maxWidth:600}}
                                    onChange={handleSpreadRadiusChange}
                                    valueLabelDisplay="auto"
                                    min={spreadRadiusProperty.min}
                                    max={spreadRadiusProperty.max}
                                />
                            </div>
                            <div className="form-row">
                                <label className="label-1">
                                    Color Opacity
                                </label>
                                <Slider
                                    aria-label="ColorOpacity"
                                    value={colorOpacity}
                                    sx={{maxWidth:600}}
                                    onChange={handleColorOpacityChange}
                                    valueLabelDisplay="auto"
                                    min={colorOpacityProperty.min}
                                    max={colorOpacityProperty.max}
                                />
                            </div>
                            <div className="subtitle1 top16">Percent change between elevations</div>
                            <div className="form-row">
                                <label className="label-1">
                                    Percent change
                                </label>
                                <Slider
                                    aria-label="PercentChange"
                                    value={percentChange}
                                    sx={{maxWidth:600}}
                                    onChange={handlePercentChangeChange}
                                    valueLabelDisplay="auto"
                                    min={percentChangeProperty.min}
                                    max={percentChangeProperty.max}
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <div style={{display:"flex", gap:"20px"}}>
                                <div style={{flex:"1 1 0", width:"0"}}>
                                    <LightModeSection>
                                        Light mode elvations are created by layering an angled shadow over a base shadow that becomes increasingly heavy as the elevation rises.
                                        <div className="subtitle1 top24">Sample Elevations</div>
                                        <div className="top24"/>
                                        <ExampleElevation className="elevation-0" label="Elevation 0" />
                                        <ExampleElevation className="elevation-1" label="Elevation 1" />
                                        <ExampleElevation className="elevation-2" label="Elevation 2" />
                                        <ExampleElevation className="elevation-3" label="Elevation 3" />
                                        <ExampleElevation className="elevation-4" label="Elevation 4" />
                                        <ExampleElevation className="elevation-5" label="Elevation 5" />
                                        <ExampleElevation className="elevation-6" label="Elevation 6" />
                                        <ExampleElevation className="elevation-7" label="Elevation 7" />
                                        <ExampleElevation className="elevation-8" label="Elevation 8" />
                                        <ExampleElevation className="elevation-9" label="Elevation 9" />
                                    </LightModeSection>
                                </div>
                                <div style={{flex:"1 1 0", width:"0"}}>
                                    <DarkModeSection>
                                        In darkmode elevations are represented by a backgrounds with increasingly brightness. Drop shadows are hard to see in darkmode.  All shadows in darkmode are converted to black.
                                        <div className="subtitle1 top24">Sample Elevations</div>
                                        <div className="top24"/>
                                        <ExampleElevation className="elevation-0" label="Elevation 0" />
                                        <ExampleElevation className="elevation-1" label="Elevation 1" />
                                        <ExampleElevation className="elevation-2" label="Elevation 2" />
                                        <ExampleElevation className="elevation-3" label="Elevation 3" />
                                        <ExampleElevation className="elevation-4" label="Elevation 4" />
                                        <ExampleElevation className="elevation-5" label="Elevation 5" />
                                        <ExampleElevation className="elevation-6" label="Elevation 6" />
                                        <ExampleElevation className="elevation-7" label="Elevation 7" />
                                        <ExampleElevation className="elevation-8" label="Elevation 8" />
                                        <ExampleElevation className="elevation-9" label="Elevation 9" />
                                    </DarkModeSection>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SettingsSection>
            <GeneratedCodeSection item={elevationSettings}/>
        </div>
    )

}
