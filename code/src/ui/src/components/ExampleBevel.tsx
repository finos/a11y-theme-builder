/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React from "react";
import { BevelSettings } from 'a11y-theme-builder-sdk';


interface Props {
    bevelSettings: BevelSettings
    bevelNumber: number
    preText?: string
    isInverse?: boolean
}

export const ExampleBevel: React.FC<Props> = ({ bevelSettings, bevelNumber, preText, isInverse }) => {
    if (!preText) preText = ""
    let numberText = ""
    if (bevelNumber!=0) numberText += bevelNumber

    // TODO: Remove these calulations when bevels is confirmed working in the CSS variables
    // const bevelChange = bevelSettings.standard.percentageChange.getValue() as number /100;
    // const change = 1 + bevelChange * bevelNumber;
    // const horizontalOffset = (bevelSettings.standard.horizontalShadowLength.getValue() as number)  * change
    // const verticalOffset = (bevelSettings.standard.verticalShadowLength.getValue() as number)  * change
    // const blurRadius = (bevelSettings.standard.blurRadius.getValue() as number)  * change
    // const spreadRadius = (bevelSettings.standard.spreadRadius.getValue() as number)  * change
    // const color = "rgba(0, 0, 0, " + (bevelSettings.standard.lightGlowOpacity.getValue() as number) /10 + ")"
    // const parm6 = 0 - horizontalOffset
    // const parm7 = 0 - verticalOffset
    // const parm8 = (bevelSettings.standard.blurRadius.getValue() as number)  * change
    // const parm9 = (bevelSettings.standard.spreadRadius.getValue() as number)  * change
    // const parm10 = "rgba(0, 0, 0, " + (bevelSettings.standard.darkShadowOpacity.getValue() as number) /10 + ")"

    // const boxShadowString = "inset "+horizontalOffset+"px "+verticalOffset+"px "+blurRadius+"px "+spreadRadius+"px "+color
    //     +", inset "+parm6+"px "+parm7+"px "+parm8+"px "+parm9+"px "+parm10

    const boxShadowString = "var(--" + (isInverse ? "reverse-" : "") + "bevel-" + bevelNumber + ")"

    const cardStyles = {
        boxShadow: boxShadowString,
        webkitBoxShadow: boxShadowString,
        mozBoxShadow: boxShadowString,
        margin: "24px",
    }

    return (
        <div className="example">
            <div className="caption">{preText} {isInverse ? "Inverse " : ""} Bevel {numberText}</div>
            <div className="card" style={cardStyles}></div>
        </div>
        );
    }

export default ExampleBevel;