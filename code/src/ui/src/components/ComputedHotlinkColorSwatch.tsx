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

// This component displays a sample hotlink, a color sample, and
//  color information in a ColorSwatch.  It pulls this information
//  from the computed styling of the reference HTML element.  In
//  this specific component, that is a HTMLAnchorElement that
//  acts as the sample hotlink.
export const ComputedHotlinkColorSwatch: React.FC<Props> = ({className, sampleText, label, style, containerClassName}) => {

    const colorLinkRef = useRef<HTMLAnchorElement>(null);

    const [_colorRGB, _setColorRGB] = useState<string>("");
    const [_opacity, _setOpacity] = useState<string>("1");
    const [_underline, _setUnderline] = useState<boolean>(true);

    useEffect(() => {
        if (!className) return;
        const displayAnchor = colorLinkRef.current;
        if (!displayAnchor) {
            throw new Error("color swatch missing DOM information");
        }
        const cssObj = window.getComputedStyle(displayAnchor, null);
        const colorRGBA = processColorIntoRGBA(cssObj.color, cssObj.opacity);
        // store off the RGB color, opacity and underline information
        //  so that they can be used to display these details
        //  in the color swatch
        _setColorRGB(colorRGBA);
        _setOpacity(cssObj.opacity);
        _setUnderline(cssObj.textDecorationLine === "underline")
    }, [className])

    // Pulls the RGB values from the given color, uses the given
    //  opacity value for alpha, and then builds a string from
    //  these values in the format of 'rgba(r,g,b,a)'
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
            <div className={`color-box ${className}`} />
            <div>
                <div className="small-semibold">Sample: </div>
                <div className={`color-title`}><a ref={colorLinkRef}  className={className} href="#">{sampleText}</a></div>
            </div>
            <div>
                <div className="small-semibold">Underline: </div>
                <div className="color-title small">{_underline ? "YES" : "NO"}</div>
            </div>
            <div>
                <div className="small-semibold">RGBA: </div>
                <div className="color-title small">{_colorRGB}</div>
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