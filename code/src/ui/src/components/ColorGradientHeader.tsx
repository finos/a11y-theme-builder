/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useState, useEffect } from "react";
import { EventValueChange, GradientColors2, Shade } from 'a11y-theme-builder-sdk';
import { ColorSelect } from './ColorSelect';
import './ColorGradientHeader.css';

interface Props {
    className?: string;
    value: GradientColors2;
    fromLabel?: string;
    toLabel?: string;
    sampleLabel?: string;
    sampleText: string;
    readonly?: boolean;
}

export const ColorGradientHeader: React.FC<Props> = ({className, value, fromLabel, toLabel, sampleLabel, sampleText, readonly}) => {

    const [_fromShade, _setFromShade] = useState<Shade>();
    const [_toShade, _setToShade] = useState<Shade>();
    useEffect(() => {
        if (value) {
            _setFromShade(value.from.getValue());
            _setToShade(value.to.getValue());
            const fromListener = function (event: EventValueChange<Shade>) {
                if (event.newValue !== undefined) {
                    _setFromShade(event.newValue);
                }
            };
            value.from.setPropertyListener("fromListener", fromListener);
            const toListener = function (event: EventValueChange<Shade>) {
                if (event.newValue !== undefined) {
                    _setToShade(event.newValue);
                    console.log(`toShade: ${event.newValue.hex}`);
                }
            };
            value.to.setPropertyListener("toListener", toListener);
        }
    }, [])

    if (value && value.from && value.to) {
        return (
            <div className={className}>
                {!readonly && <ColorSelect value={value.from} label={fromLabel ?? "From Color:"}></ColorSelect>}
                {!readonly && <ColorSelect value={value.to} label={toLabel ?? "To Color:"}></ColorSelect>}
                {_fromShade && _toShade && <div className="caption">{sampleLabel ?? "Sample Gradient:"}<h1 className="gradient-title" style={{backgroundImage: `linear-gradient(15deg, ${_fromShade.hex}, ${_toShade.hex})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>{sampleText}</h1></div>}
            </div >
        );

    } else {

    return (
        <div className="row">No ColorGradientHeader available</div>
    );

}
}
