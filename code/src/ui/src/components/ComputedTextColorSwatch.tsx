/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useRef, useEffect, useState } from "react";
import { colord } from "colord";

interface Props {
    // classname to use for background and on colors to display
    //  to the user in this swatch.  E.g. ".primary-050-bg"
    sampleText: string;
    colorSampleClassName?: string;
    textSampleClassName?: string;
    label?: string;
    showId?: boolean;
    showDetails?: boolean;
    style?: any;
    containerClassName?: string;
    showHex?: boolean;
}

export const ComputedTextColorSwatch: React.FC<Props> = ({sampleText, colorSampleClassName, textSampleClassName, label, style, containerClassName, showHex}) => {

    const colorTextRef = useRef<HTMLDivElement>(null);

    const [_backgroundColorHex, _setBackgroundColorHex] = useState<string>("");
    const [_backgroundColorRGB, _setBackgroundColorRGB] = useState<string>("");
    const [_opacity, _setOpacity] = useState<string>("1");

    useEffect(() => {
        if (!sampleText) return;
        const displayTextDiv = colorTextRef.current;
        if (!displayTextDiv) {
            throw new Error("color swatch missing DOM information");
        }
        const cssObj = window.getComputedStyle(displayTextDiv, null);
        if (!showHex) {
            const colorRGBA = processColorIntoRGBA(cssObj.color, cssObj.opacity);
            _setBackgroundColorRGB(colorRGBA);
        } else {
            const colorObj = processColorIntoHexRGB(cssObj.color);
            _setBackgroundColorHex(colorObj.hex);
            _setBackgroundColorRGB(colorObj.RGB);
        }
        _setOpacity(cssObj.opacity);
    }, [sampleText])

    const processColorIntoRGBA = (color: string, opacity: string) : string => {
        if (!color) return "";
        const colorObj = colord(color);
        let retStr = "";
        if (colorObj) {
            const rgbObj = colorObj.toRgb();
            retStr = `rgba(${rgbObj.r},${rgbObj.g},${rgbObj.b},${opacity})`;
        }
        return retStr;
    }

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

    if (sampleText) {
    return (
        <div className={`color-swatch ${containerClassName || ""} text-swatch`} >
            {label && <div className="small-semibold">{label}</div>}
            <div className="color-box" style={{backgroundColor: `${_backgroundColorRGB}`}} />
            <div>
                <div className="small-semibold">Sample: </div>
                <div className={`color-title ${textSampleClassName || ""}`}  ref={colorTextRef}>{sampleText}</div>
            </div>
            <div>
                {showHex && <div className="small-semibold">Hex: </div>}
                {showHex && <div className="color-title small">{_backgroundColorHex}</div>}
            </div>
            <div>
                {!showHex && <div className="small-semibold">RGBA: </div>}
                {showHex && <div className="small-semibold">RGB: </div>}
                <div className="color-title small">{_backgroundColorRGB}</div>
            </div>
            <div>
                <div className="small-semibold">Opacity: </div>
                <div className="color-title small">{_opacity}</div>
            </div>
        </div>
    );

    } else {

    return (
        <div>Missing ColorShade information</div>
    );

    }
}
