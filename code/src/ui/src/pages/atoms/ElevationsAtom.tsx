import React, { useState, useEffect, ChangeEvent } from 'react';
import { MenuItem, Select, FormControl, InputLabel, TextField, Slider } from '@mui/material';
import { DesignSystem, ElevationSettings } from 'a11y-theme-builder-sdk';
import { ExampleElevation } from '../../components/ExampleElevation';
import { ChromePicker, ColorResult } from 'react-color';


const name = "ElevationsAtom";

interface Props {
    elevationSettings: ElevationSettings;
}

export const ElevationsAtom: React.FC<Props> = ({ elevationSettings }) => {
    // console.log(`${name} - >>> enter()`)

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
    const [percentChange,          sertPercentChange        ] = useState<number>(percentChangeProperty.getValue()          || 0);

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
        sertPercentChange(value);
        percentChangeProperty.setValue(value)
    }

    return (
        <div className="content">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="overline-large">
                            Elevations
                        </div>
                        <h1>Elevation Settings</h1>
                        <p>
                            Elevations create a senses of depth and replicated items 
                            places along the z-axis farther and father away from the surface.
                        </p>
                    </div>
                </div>
            </div>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h4>Light Mode</h4>
                            <p>
                                Light mode elvations are created by layering an angled shadow over a base shadowthat 
                                becomes increasingly heavy as the elevation rises.
                            </p>
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
                            <div className="subtitle1">
                                Sample Elevations
                            </div>
                            <ExampleElevation elevationSettings={elevationSettings} elevationNumber={0}/>
                            <ExampleElevation elevationSettings={elevationSettings} elevationNumber={1}/>
                            <ExampleElevation elevationSettings={elevationSettings} elevationNumber={2}/>
                            <ExampleElevation elevationSettings={elevationSettings} elevationNumber={3}/>
                            <ExampleElevation elevationSettings={elevationSettings} elevationNumber={4}/>
                            <ExampleElevation elevationSettings={elevationSettings} elevationNumber={5}/>
                            <ExampleElevation elevationSettings={elevationSettings} elevationNumber={6}/>
                            <ExampleElevation elevationSettings={elevationSettings} elevationNumber={7}/>
                            <ExampleElevation elevationSettings={elevationSettings} elevationNumber={8}/>
                            <ExampleElevation elevationSettings={elevationSettings} elevationNumber={9}/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="darkmode background">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                            <h4>Dark Mode</h4>
                            <p>
                                In darkmode elevations are represented by a backgrounds with 
                                increasingly brightness. Drop shadows are hard to see in darkmode. 
                                All shadows in darkmode are converted to black.
                            </p>
                            </div>
                            <div className="col-6">
                            <div className="subtitle1">Sample Elevations</div>
                                <ExampleElevation elevationSettings={elevationSettings} elevationNumber={0}/>
                                <ExampleElevation elevationSettings={elevationSettings} elevationNumber={1}/>
                                <ExampleElevation elevationSettings={elevationSettings} elevationNumber={2}/>
                                <ExampleElevation elevationSettings={elevationSettings} elevationNumber={3}/>
                                <ExampleElevation elevationSettings={elevationSettings} elevationNumber={4}/>
                                <ExampleElevation elevationSettings={elevationSettings} elevationNumber={5}/>
                                <ExampleElevation elevationSettings={elevationSettings} elevationNumber={6}/>
                                <ExampleElevation elevationSettings={elevationSettings} elevationNumber={7}/>
                                <ExampleElevation elevationSettings={elevationSettings} elevationNumber={8}/>
                                <ExampleElevation elevationSettings={elevationSettings} elevationNumber={9}/>
                            </div>
                        </div>
                    </div>
            </section>
        </div>
    )

}
