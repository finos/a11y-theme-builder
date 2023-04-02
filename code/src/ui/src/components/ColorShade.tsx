/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useState, useEffect } from "react";
import { Shade } from 'a11y-theme-builder-sdk';
import './ColorShade.css';

interface Props {
    className?: string;
    shade?: Shade | string | undefined;
    label?: string;
    showId?: boolean;
    showDetails?: boolean;
}

export const ColorShade: React.FC<Props> = ({className, shade, label, showId, showDetails}) => {

    const [_shade, _setShade] = useState<Shade>();

    useEffect(() => {
        if (shade) {
            if (typeof shade === 'string') {
                const hexShade = Shade.fromHex(shade);
                _setShade(hexShade);
            } else {
                _setShade(shade);
            }
        } else {
            const hexShade = Shade.fromHex("#ffffff");
            _setShade(hexShade);
        }
    }, [])

    useEffect(() => {
        if (shade) {
            if (typeof shade === 'string') {
                const hexShade = Shade.fromHex(shade);
                _setShade(hexShade);
            } else {
                _setShade(shade);
            }
        } else {
            const hexShade = Shade.fromHex("#ffffff");
            _setShade(hexShade);
        }
    }, [shade])

    //TODO: we should be using the colors from the color palette once
    //  we have listener support there
    if (_shade) {
    return (
        <div className={className ?? ""}>
            {label && <div className="caption text-center">{label}</div>}
            {showId && <div className="subtitle1 text-center">{_shade.id}</div>}
            {/* TODO: we need to determine which foreground color to use for the text */}
            <div className="Hex" style={{ background: _shade.getHexOrRGBA(), color: _shade.getOnShade().getHexOrRGBA() }}>Aa</div>
            {showDetails && <div className="swatch-details active">
                Color:
                <span>{_shade.getHexOrRGBA()}</span>
            </div>}
            {showDetails && <div className="swatch-details active">
                On Color:
                <span>{_shade.getOnShade().getHexOrRGBA()}</span>
            </div>}
            {showDetails && <div className="swatch-details active">
                Contrast:
                <span>{_shade.getContrast()}</span>
            </div>}
        </div>
    );

    } else {

    return (
        <div>Missing ColorShade information</div>
    );
    
    }
}