/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useState, useEffect } from "react";
import { Shade, Util } from 'a11y-theme-builder-sdk';
import './ColorShade.css';
import { getCssValue } from "../mui-a11y-tb/themes/Theme";


function luminance(rgb:Array<number>): number {
    const a = [rgb[0], rgb[1], rgb[2]].map(function(v) {
        v /= 255;
        return v <= 0.03928 ?  v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function contrast(rgb1:Array<number>, rgb2:Array<number>) {
  var lum1 = luminance(rgb1);
  var lum2 = luminance(rgb2);
  var brightest = Math.max(lum1, lum2);
  var darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

function parseColor(color:string): Array<number> {
    console.log("parseColor ", color)
    let r = [0,0,0]
    if (color.indexOf("#") > -1) {
        r = Util.hexToRgbArray(color);
    }
    else if (color.indexOf("rgb") > -1) {
        const parts = color.split("(")[1].split(")")[0].split(",");
        console.log("parts=",parts);
        let mult = 1;
        let add = 0;
        if (parts[3]) {
            const opacity = parseFloat(parts[3]);
            mult = 1-opacity;
            add = 255 * opacity;
        }
        r = [
            Math.floor(parseInt(parts[0])*mult+add), 
            Math.floor(parseInt(parts[1])*mult+add), 
            Math.floor(parseInt(parts[2])*mult+add)
        ]
        console.log("r=",r);
    }
    return r;
}


interface Props {
    className?: string;
    name: string;
    id: string;
    lm: boolean;
    label?: string;
    showId?: boolean;
    showDetails?: boolean;

}

export const ColorShadeCss: React.FC<Props> = ({className, name, id, lm, label, showId, showDetails}) => {

    const [_shade, _setShade] = useState<Shade>();
    let base = name+"-"+id;
    const background = lm ? `--${base}` : `--dm-${base}`
    const color = lm ? `--on-${base}` : `--dm-on-${base}`

    const style = {
        color: `var(${color})`,
        backgroundColor: `var(${background})`,
    }

    const [colorValue, setColorValue] = useState<string>();
    const [backgroundValue, setBackgroundValue] = useState<string>();
    const [contrastValue, setContrastValue] = useState<number>();

    useEffect(() => {
        const cv = getCssValue(color);
        setColorValue(cv.replace("rgb(", "").replace("rgba(","").replace(")",""));
        const bv = getCssValue(background);
        setBackgroundValue(bv)

        let cva = [0,0,0];
        if (cv.indexOf("#") > -1) {
            cva = Util.hexToRgbArray(cv);
        }
        else if (cv.indexOf("rgb") > -1) {
            cva = parseColor(cv)
        }
        let bva = [0,0,0];
        if (bv.indexOf("#") > -1) {
            bva = Util.hexToRgbArray(bv);
        }
        else if (cv.indexOf("rgb") > -1) {
            bva = parseColor(bv)
        }
        setContrastValue(contrast(cva, bva))
    }, []);

    return (
        <div className={className ?? ""}>
            {label && <div className="caption text-center">{label}</div>}
            {showId && <div className="subtitle1 text-center">{id}</div>}
            <div className="Hex" style={style}>Aa</div>
            {showDetails && <div className="swatch-details active">
                Color: <span>{backgroundValue}</span>
            </div>}
            {showDetails && <div className="swatch-details active">
                On Color: <span>{colorValue}</span>
            </div>}
            {showDetails && <div className="swatch-details active">
                Contrast: <span>{contrastValue?.toFixed(1)}</span>
            </div>}
        </div>
    );

}