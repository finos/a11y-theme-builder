/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useRef, useEffect, useState } from "react";
import { colord } from "colord";

interface Props {
    // classname to use for background and on colors to display
    //  to the user in this swatch.  E.g. ".primary-050-bg"
    className: string;
    label?: string;
    showId?: boolean;
    showDetails?: boolean;
    style?: any;
}

// This component displays a color sample, and color
//  information in a ColorSwatch.  It pulls this information
//  from the computed styling of the reference HTML element.  In
//  this specific component, that is a HTMLDivElement that
//  acts as the color sample.
export const ComputedColorSwatch: React.FC<Props> = ({className, label, style}) => {

    const colorDisplayRef = useRef<HTMLDivElement>(null);

    const [_backgroundColorHex, _setBackgroundColorHex] = useState<string>("");
    const [_backgroundColorRGB, _setBackgroundColorRGB] = useState<string>("");
    const [_onColor, _setOnColor] = useState<string>("");

    useEffect(() => {
        if (!className) return;
        const displayDiv = colorDisplayRef.current;
        if (!displayDiv) {
            throw new Error("color swatch missing DOM information");
        }
        const cssObj = window.getComputedStyle(displayDiv, null);
        const colorObj = processColorIntoHexRGB(cssObj.backgroundColor);
        // store off the background hex and RGB color values, as well
        //  as the forground color information, so that they can be
        //  used to display these details in the color swatch
        _setBackgroundColorHex(colorObj.hex);
        _setBackgroundColorRGB(colorObj.RGB);
        _setOnColor(cssObj.color);
    }, [className])

    // returns the hex and rgb value strings from the given color
    const processColorIntoHexRGB = (color: string) : {hex: string, RGB: string} => {
        let retArray = {hex: "", RGB: ""};
        if (!color) return retArray;
        const colorObj = colord(color);
        if (colorObj) {
            retArray.RGB = colorObj.toRgbString();
            retArray.hex = colorObj.toHex();
        }
        return retArray;
    }

    if (className) {
    return (
        <div className="color-swatch white" style={style}>
            {label && <div className="small-semibold">{label}</div>}
            <div ref={colorDisplayRef} className={`color-box ${className}`}>Aa</div>
            <div>
                <div className="small-semibold">Hex: </div>
                <div className="color-title small">{_backgroundColorHex}</div>
            </div>
            <div>
                <div className="small-semibold">RGB: </div>
                <div className="color-title small">{_backgroundColorRGB}</div>
            </div>
            <div>
                <div className="small-semibold">On-Color: </div>
                <div className="color-title small">{_onColor}</div>
            </div>
        </div>
    );

    } else {

    return (
        <div>Missing ColorShade information</div>
    );
    
    }
}