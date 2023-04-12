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
    sampleText: string;
    label?: string;
    showId?: boolean;
    showDetails?: boolean;
    style?: any;
    containerClassName?: string;
}

export const ComputedHotlinkColorSwatch: React.FC<Props> = ({className, sampleText, label, style, containerClassName}) => {

    const colorDisplayRef = useRef<HTMLDivElement>(null);

    const [_backgroundColorRGB, _setBackgroundColorRGB] = useState<string>("");
    const [_opacity, _setOpacity] = useState<string>("1");

    useEffect(() => {
        if (!className) return;
        const displayDiv = colorDisplayRef.current;
        if (!displayDiv) {
            throw new Error("color swatch missing DOM information");
        }
        const cssObj = window.getComputedStyle(displayDiv, null);
        const colorRGBA = processColorIntoRGBA(cssObj.backgroundColor, cssObj.opacity);
        _setBackgroundColorRGB(colorRGBA);
        _setOpacity(cssObj.opacity);
    }, [className])

    const processColorIntoRGBA = (color: string, opacity: string) : string => {
        if (!color) return "";
        const colorObj = colord(color);
        let retStr = "";
        if (colorObj) {
            const rgbObj = colorObj.toRgb();
            retStr = `rgba:(${rgbObj.r},${rgbObj.g},${rgbObj.b},${opacity})`
        }
        return retStr;
    }

    if (className) {
    return (
        <div className={`color-swatch ${containerClassName} text-swatch`} style={style}>
            {label && <div className="small-semibold">{label}</div>}
            <div ref={colorDisplayRef} className={`color-box ${className}`} />
            <div>
                <div className="small-semibold">Sample: </div>
                <div className={`color-title ${className}`}>{sampleText}</div>
            </div>
            <div>
                <div className="small-semibold">RGBA: </div>
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