/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useState, useEffect } from "react";
import { Shade } from 'a11y-theme-builder-sdk';

interface Props {
    className?: string;
    shade?: Shade | string | undefined;
    label?: string;
    showId?: boolean;
    showDetails?: boolean;
    style?: any;
}

export const ColorSwatch: React.FC<Props> = ({shade, label, style}) => {

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
    }, [shade])

    if (_shade) {
    return (
        <div className="color-swatch white" style={style}>
            {label && <div className="small-semibold">{label}</div>}
            <div className="color-box" style={{ background: _shade.getHexOrRGBA(), color: _shade.getOnShade().getHexOrRGBA() }}>Aa</div>
            <div>
                <div className="small-semibold">Hex: </div>
                <div className="color-title small">{_shade.hex}</div>
            </div>
            <div>
                <div className="small-semibold">RGB: </div>
                <div className="color-title small">{`rgb(${_shade.R},${_shade.G},${_shade.B})`}</div>
            </div>
            <div>
                <div className="small-semibold">On-Color: </div>
                <div className="color-title small">{_shade.getOnShade().hex}</div>
            </div>
        </div>
    );

    } else {

    return (
        <div>Missing ColorShade information</div>
    );
    
    }
}