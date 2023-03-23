import React, { useState, useEffect } from 'react';
import { MenuItem, Select, FormControl, InputLabel, TextField, Slider } from '@mui/material';
import { BevelSettings, DesignSystem, ElevationSettings } from '../../sdk';
import { ExampleElevation } from '../../components/ExampleElevation';
import ExampleBevel from '../../components/ExampleBevel';


const name = "BevelsAtom";

interface Props {
    bevelSettings: BevelSettings;
}

export const BevelsAtom: React.FC<Props> = ({ bevelSettings }) => {
    // console.log(`${name} - >>> enter()`)

    const horizontalShadowLengthProperty    = bevelSettings.standard.horizontalShadowLength
    const verticalShadowLengthProperty      = bevelSettings.standard.verticalShadowLength
    const blurRadiusProperty                = bevelSettings.standard.blurRadius
    const spreadRadiusProperty              = bevelSettings.standard.spreadRadius
    const lightGlowOpacityProperty          = bevelSettings.standard.lightGlowOpacity
    const darkShadowOpacityProperty         = bevelSettings.standard.darkShadowOpacity
    const percentChangeProperty             = bevelSettings.standard.percentageChange

    const [horizontalShadowLength, setHorizontalShadowLength] = useState<number>(horizontalShadowLengthProperty.getValue() || 0);
    const [verticalShadowLength,   setVerticalShadowLength  ] = useState<number>(verticalShadowLengthProperty.getValue()   || 0);
    const [blurRadius,             setBlurRadius            ] = useState<number>(blurRadiusProperty.getValue()             || 0);
    const [spreadRadius,           setSpreadRadius          ] = useState<number>(spreadRadiusProperty.getValue()           || 0);
    const [lightGlowOpacity,       setLightGlowOpacity      ] = useState<number>(lightGlowOpacityProperty.getValue()       || 0);
    const [darkShadowOpacity,      setDarkShadowOpacity     ] = useState<number>(darkShadowOpacityProperty.getValue()      || 0);
    const [percentChange,          sertPercentChange        ] = useState<number>(percentChangeProperty.getValue()          || 0);

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
    async function handleLightGlowOpacityChange(event: any): Promise<void> {
        const value = Number(event.target.value);
        setLightGlowOpacity(value);
        lightGlowOpacityProperty.setValue(value)
    }
    async function handleDarkShadowOpacityChange(event: any): Promise<void> {
        const value = Number(event.target.value);
        setDarkShadowOpacity(value);
        darkShadowOpacityProperty.setValue(value)
    }
    async function handlePercentChangeChange(event: any): Promise<void> {
        const value = Number(event.target.value);
        sertPercentChange(value);
        percentChangeProperty.setValue(value)
    }

    const inverseHorizontalShadowLengthProperty    = bevelSettings.inverse.horizontalShadowLength
    const inverseVerticalShadowLengthProperty      = bevelSettings.inverse.verticalShadowLength
    const inverseBlurRadiusProperty                = bevelSettings.inverse.blurRadius
    const inverseSpreadRadiusProperty              = bevelSettings.inverse.spreadRadius
    const inverseLightGlowOpacityProperty          = bevelSettings.inverse.lightGlowOpacity
    const inverseDarkShadowOpacityProperty         = bevelSettings.inverse.darkShadowOpacity
    const inversePercentChangeProperty             = bevelSettings.inverse.percentageChange

    const [inverseHorizontalShadowLength, setInverseHorizontalShadowLength] = useState<number>(inverseHorizontalShadowLengthProperty.getValue() || 0);
    const [inverseVerticalShadowLength,   setInverseVerticalShadowLength  ] = useState<number>(inverseVerticalShadowLengthProperty.getValue()   || 0);
    const [inverseBlurRadius,             setInverseBlurRadius            ] = useState<number>(inverseBlurRadiusProperty.getValue()             || 0);
    const [inverseSpreadRadius,           setInverseSpreadRadius          ] = useState<number>(inverseSpreadRadiusProperty.getValue()           || 0);
    const [inverseLightGlowOpacity,       setInverseLightGlowOpacity      ] = useState<number>(inverseLightGlowOpacityProperty.getValue()       || 0);
    const [inverseDarkShadowOpacity,      setInverseDarkShadowOpacity     ] = useState<number>(inverseDarkShadowOpacityProperty.getValue()      || 0);
    const [inversePercentChange,          sertInversePercentChange        ] = useState<number>(inversePercentChangeProperty.getValue()          || 0);

    async function handleInverseHorizontalShadowLengthChange(event: any): Promise<void> {
        const value = Number(event.target.value);
        setInverseHorizontalShadowLength(value);
        inverseHorizontalShadowLengthProperty.setValue(value)
    }
    async function handleInverseVerticalShadowLengthChange(event: any): Promise<void> {
        const value = Number(event.target.value);
        setInverseVerticalShadowLength(value);
        inverseVerticalShadowLengthProperty.setValue(value)
    }
    async function handleInverseBlurRadiusChange(event: any): Promise<void> {
        const value = Number(event.target.value);
        setInverseBlurRadius(value);
        inverseBlurRadiusProperty.setValue(value)
    }
    async function handleInverseSpreadRadiusChange(event: any): Promise<void> {
        const value = Number(event.target.value);
        setInverseSpreadRadius(value);
        inverseSpreadRadiusProperty.setValue(value)
    }
    async function handleInverseLightGlowOpacityChange(event: any): Promise<void> {
        const value = Number(event.target.value);
        setInverseLightGlowOpacity(value);
        inverseLightGlowOpacityProperty.setValue(value)
    }
    async function handleInverseDarkShadowOpacityChange(event: any): Promise<void> {
        const value = Number(event.target.value);
        setInverseDarkShadowOpacity(value);
        inverseDarkShadowOpacityProperty.setValue(value)
    }
    async function handleInversePercentChangeChange(event: any): Promise<void> {
        const value = Number(event.target.value);
        sertInversePercentChange(value);
        inversePercentChangeProperty.setValue(value)
    }

    return (
        <div className="content">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="overline-large">Bevels &amp; Inverse Bevels</div>
                        <h1>Bevel Shadow Settings</h1>
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
                                Light Glow Opacity
                            </label>
                            <Slider
                                aria-label="LightGlowOpacity"
                                value={lightGlowOpacity}
                                sx={{maxWidth:600}}
                                onChange={handleLightGlowOpacityChange}
                                valueLabelDisplay="auto"
                                min={lightGlowOpacityProperty.min}
                                max={lightGlowOpacityProperty.max}
                            />
                        </div>
                        <div className="form-row">
                            <label className="label-1">
                                Dark Glow Opacity
                            </label>
                            <Slider
                                aria-label="Dark Glow Opacity"
                                value={darkShadowOpacity}
                                sx={{maxWidth:600}}
                                onChange={handleDarkShadowOpacityChange}
                                valueLabelDisplay="auto"
                                min={darkShadowOpacityProperty.min}
                                max={darkShadowOpacityProperty.max}
                            />
                        </div>
                        <div className="form-row">
                            <label className="label-1">
                                Percentage Change
                            </label>
                            <Slider
                                aria-label="PercentageChange"
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
                        <div className="subtitle1">Sample Bevels</div>
                        <ExampleBevel bevelSettings={bevelSettings} bevelNumber={0} preText={"Non "}/>
                        <ExampleBevel bevelSettings={bevelSettings} bevelNumber={1}/>
                        <ExampleBevel bevelSettings={bevelSettings} bevelNumber={2}/>
                        <ExampleBevel bevelSettings={bevelSettings} bevelNumber={3}/>
                        <ExampleBevel bevelSettings={bevelSettings} bevelNumber={4}/>
                        <ExampleBevel bevelSettings={bevelSettings} bevelNumber={5}/>
                        <ExampleBevel bevelSettings={bevelSettings} bevelNumber={6}/>
                        <ExampleBevel bevelSettings={bevelSettings} bevelNumber={7}/>
                        <ExampleBevel bevelSettings={bevelSettings} bevelNumber={8}/>
                        <ExampleBevel bevelSettings={bevelSettings} bevelNumber={9}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <h1>Inverse Bevel Shadow Settings</h1>
                        <div className="form-row">
                            <label className="label-1">
                                Horizontal Shadow Length
                            </label>
                            <Slider
                                aria-label="InverseHorizontalShadowLength"
                                value={inverseHorizontalShadowLength}
                                sx={{maxWidth:600}}
                                onChange={handleInverseHorizontalShadowLengthChange}
                                valueLabelDisplay="auto"
                                min={inverseHorizontalShadowLengthProperty.min}
                                max={inverseHorizontalShadowLengthProperty.max}
                            />
                        </div>
                        <div className="form-row">
                            <label className="label-1">
                                Vertical Shadow Length
                            </label>
                            <Slider
                                aria-label="InverseVerticalShadowLength"
                                value={inverseVerticalShadowLength}
                                sx={{maxWidth:600}}
                                onChange={handleInverseVerticalShadowLengthChange}
                                valueLabelDisplay="auto"
                                min={inverseVerticalShadowLengthProperty.min}
                                max={inverseVerticalShadowLengthProperty.max}
                            />
                        </div>
                        <div className="form-row">
                            <label className="label-1">
                                Blur Radius
                            </label>
                            <Slider
                                aria-label="InverseBlurRadius"
                                value={inverseBlurRadius}
                                sx={{maxWidth:600}}
                                onChange={handleInverseBlurRadiusChange}
                                valueLabelDisplay="auto"
                                min={inverseBlurRadiusProperty.min}
                                max={inverseBlurRadiusProperty.max}
                            />
                        </div>
                        <div className="form-row">
                            <label className="label-1">
                                Spread Radius
                            </label>
                            <Slider
                                aria-label="InverseSpreadRadius"
                                value={inverseSpreadRadius}
                                sx={{maxWidth:600}}
                                onChange={handleInverseSpreadRadiusChange}
                                valueLabelDisplay="auto"
                                min={inverseSpreadRadiusProperty.min}
                                max={inverseSpreadRadiusProperty.max}
                            />
                        </div>
                        <div className="form-row">
                            <label className="label-1">
                                Light Glow Opacity
                            </label>
                            <Slider
                                aria-label="InverseLightGlowOpacity"
                                value={inverseLightGlowOpacity}
                                sx={{maxWidth:600}}
                                onChange={handleInverseLightGlowOpacityChange}
                                valueLabelDisplay="auto"
                                min={inverseLightGlowOpacityProperty.min}
                                max={inverseLightGlowOpacityProperty.max}
                            />
                        </div>
                        <div className="form-row">
                            <label className="label-1">
                                Dark Glow Opacity
                            </label>
                            <Slider
                                aria-label="InverseDarkGlowOpacity"
                                value={inverseDarkShadowOpacity}
                                sx={{maxWidth:600}}
                                onChange={handleInverseDarkShadowOpacityChange}
                                valueLabelDisplay="auto"
                                min={inverseDarkShadowOpacityProperty.min}
                                max={inverseDarkShadowOpacityProperty.max}
                            />
                        </div>
                        <div className="form-row">
                            <label className="label-1">
                                Percentage Change
                            </label>
                            <Slider
                                aria-label="InversePercentageChange"
                                value={inversePercentChange}
                                sx={{maxWidth:600}}
                                onChange={handleInversePercentChangeChange}
                                valueLabelDisplay="auto"
                                min={inversePercentChangeProperty.min}
                                max={inversePercentChangeProperty.max}
                            />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="subtitle1">Sample Inverse Bevels</div>
                        <ExampleBevel bevelSettings={bevelSettings} bevelNumber={1} isInverse/>
                        <ExampleBevel bevelSettings={bevelSettings} bevelNumber={2} isInverse/>
                        <ExampleBevel bevelSettings={bevelSettings} bevelNumber={3} isInverse/>
                        <ExampleBevel bevelSettings={bevelSettings} bevelNumber={4} isInverse/>
                        <ExampleBevel bevelSettings={bevelSettings} bevelNumber={5} isInverse/>
                        <ExampleBevel bevelSettings={bevelSettings} bevelNumber={6} isInverse/>
                        <ExampleBevel bevelSettings={bevelSettings} bevelNumber={7} isInverse/>
                        <ExampleBevel bevelSettings={bevelSettings} bevelNumber={8} isInverse/>
                        <ExampleBevel bevelSettings={bevelSettings} bevelNumber={9} isInverse/>
                    </div>
                </div>
            </div>
        </div>
    )

}
