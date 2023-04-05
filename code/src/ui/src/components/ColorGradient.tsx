/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useState, useEffect } from "react";
import { Event, EventListener, EventType, EventValueChange, GradientColors, Shade } from 'a11y-theme-builder-sdk';
import { ColorSelect } from './ColorSelect';
import './ColorGradient.css';

interface Props {
    className?: string;
    value: GradientColors;
    fromLabel?: string;
    toLabel?: string;
    sampleLabel?: string;
    readonly?: boolean;
}

export const ColorGradient: React.FC<Props> = ({className, value, fromLabel, toLabel, sampleLabel, readonly}) => {

    const [_fromShade, _setFromShade] = useState<Shade>();
    const [_toShade, _setToShade] = useState<Shade>();
    useEffect(() => {
        if (value) {
            _setFromShade(value.from.getValue());
            _setToShade(value.to.getValue());
            const fromListener = function (event: EventValueChange<Shade>) {
                console.log(`Notified of gradientFrom value changing, event: ${event}`);
                if (event.newValue !== undefined) {
                    _setFromShade(event.newValue);
                }
            };
            value.from.setPropertyListener("fromListener", fromListener);
            const toListener = function (event: EventValueChange<Shade>) {
                console.log(`Notified of gradientTo value changing, event: ${event}`);
                if (event.newValue !== undefined) {
                    _setToShade(event.newValue);
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
                {_fromShade && _toShade && <div className="caption">{sampleLabel ?? "Sample Gradient:"}<div className="sample-gradient" style={{color: `${_fromShade.onHex}`, background: `linear-gradient(90deg, ${_fromShade.hex}, ${_toShade.hex})`}}>Aa</div></div>}
            </div >
        );

    } else {
        return (
            <div className="row">No ColorGradient available</div>
        );
    }
}