/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React from "react";
import { ElevationSettings, Util } from 'a11y-theme-builder-sdk';


interface Props {
    elevationSettings: ElevationSettings
    elevationNumber: number
}

export const ExampleElevation: React.FC<Props> = ({ elevationSettings, elevationNumber }) => {

    const elevationChange = elevationSettings.percentageChange.getValue() as number /100;
    const change = 1 + elevationChange * elevationNumber;

    const colorAsRgb = Util.hexToRgbArray(elevationSettings.shadowColor.getValue() || '#ffffff')

    const horizontalOffset = (elevationSettings.horizontalShadowLength.getValue() as number)  * change
    const verticalOffset = (elevationSettings.verticalShadowLength.getValue() as number)  * change
    const blurRadius = (elevationSettings.blurRadius.getValue() as number)  * change
    const spreadRadius = (elevationSettings.spreadRadius.getValue() as number)  * change
    const color = "rgba("+colorAsRgb[0]+","+colorAsRgb[1]+","+colorAsRgb[2]+", "+(elevationSettings.colorOpacity.getValue() as number)*change/28 + ")"
    const parm6 = 0
    const parm7 = 0
    const parm8 = (elevationSettings.baseBlurRadius.getValue() as number)  * change
    const parm9 = (elevationSettings.baseSpreadRadius.getValue() as number)  * change
    const parm10 = "rgba("+colorAsRgb[0]+","+colorAsRgb[1]+","+colorAsRgb[2]+", "+(elevationSettings.baseColorOpacity.getValue() as number)*change/28 + ")"
    
    const boxShadowString = horizontalOffset+"px "+verticalOffset+"px "+blurRadius+"px "+spreadRadius+"px "+color
        +", "+parm6+" "+parm7+" "+parm8+"px "+parm9+"px "+parm10

    const cardStyles = {boxShadow: boxShadowString, margin: "24px"}

    return (
        <div className="example">
            <div className="caption">Elevation {elevationNumber}</div>
            <div className="card" style={cardStyles}></div>
        </div>
    );
}
export default ExampleElevation;