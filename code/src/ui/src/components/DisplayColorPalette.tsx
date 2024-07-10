/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { ChangeEvent, useState } from "react";
import { InputLabel, Switch, Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import { Color, ColorPalette } from '@finos/a11y-theme-builder-sdk';
import { ColorShadeCss } from './ColorShadeCss';
import { LightModeSection } from "../pages/content/LightModeSection";
import { DarkModeSection } from "../pages/content/DarkModeSection";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Props {
    colorPalette: ColorPalette;
    colors: Color[];
    lightLabel: string;
    darkLabel: string;
}

export const DisplayColorPalette: React.FC<Props> = ({ colorPalette, colors, lightLabel, darkLabel }) => {

    const [_showDetails, _setShowDetails] = useState<boolean>(false);
    const [_expandPalette, _setExpandPalette] = useState<boolean>(false);

    const handleShowDetailsChange = (event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
        _setShowDetails(checked);
    }

    //TODO: we should be using the colors from the color palette once
    //  we have listener support there
    if (colors && colors.length > 0) {
        return (
            <div className="collapsable-Container">
                <Accordion >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <p style={{ fontSize: "18px", fontWeight: "700", margin: "0px", padding: "0px" }}>Your Color Palette</p>
                        {colorPalette.getColors().map((color, i) => {
                                
                                    return (
                                        <div key={color.name}>
                                             
                                            <div className="subtitle1">{color.name}</div>
                                            <div className="colorRow">
                                                {color.light.shades.map((shade, i) => {
                                                    return (
                                                        <ColorShadeCss className="color-block" key={"ColorShade" + i} name={color.name} id={shade.id} lm={true} showDetails={_showDetails} showId />
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    );
                                })}
                    </AccordionSummary>
                    <AccordionDetails>
                        <div style={{ padding: "0px" }}>

                            {/* <p style={{ fontSize: "18px", fontWeight: "700", margin: "0px", padding: "0px" }}>Your Color Palette</p> */}

                            <div className="detail-info">
                                <InputLabel htmlFor='showPaletteDetails'>Show Details</InputLabel>
                                <Switch id="showPaletteDetails" checked={_showDetails} onChange={handleShowDetailsChange} />
                            </div>
                            <div className="top40"></div>
                            <LightModeSection title={lightLabel}>
                                {colorPalette.getColors().map((color, i) => {
                                    return (
                                        <div key={color.name}>
                                            <div className="subtitle1">{color.name}</div>
                                            <div className="colorRow">
                                                {color.light.shades.map((shade, i) => {
                                                    return (
                                                        <ColorShadeCss className="color-block" key={"ColorShade" + i} name={color.name} id={shade.id} lm={true} showDetails={_showDetails} showId />
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    );
                                })}
                            </LightModeSection>
                            <DarkModeSection title={darkLabel}>
                                {colorPalette.getColors().map((color, i) => {
                                    //console.log("comment=",comment)
                                    return (
                                        <div key={color.name}>
                                            <div className="subtitle1">{color.name}</div>
                                            <div className="colorRow">
                                                {color.dark.shades.map((shade, i) => {
                                                    return (
                                                        <ColorShadeCss className="color-block" key={"ColorShade" + i} name={color.name} id={shade.id} lm={false} showDetails={_showDetails} showId />
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    );
                                })}
                            </DarkModeSection>

                        </div>
                    </AccordionDetails>
                </Accordion>

            </div>
        )
    }
    else {
        return (
            <div className="row">
                <p style={{ fontSize: "18px", fontWeight: "700" }}>Your Color Palette</p>
            </div>
        )
    }
}
