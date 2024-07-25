/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { ChangeEvent, useState } from "react";
import { InputLabel, Switch, Accordion, AccordionSummary, AccordionDetails, Typography, Box, SxProps, Button, Menu, MenuItem, IconButton } from "@mui/material";
import { Color, ColorPalette } from '@finos/a11y-theme-builder-sdk';
import { ColorShadeCss } from './ColorShadeCss';
import { LightModeSection } from "../pages/content/LightModeSection";
import { DarkModeSection } from "../pages/content/DarkModeSection";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { ColorPaletteSummary } from '../pages/content/ColorPaletteSummary';
import { grey } from "@mui/material/colors";
import ModalConfirmation from './modals/ModalConfirmation';

interface Props {
    colorPalette: ColorPalette;
    colors: Color[];
    lightLabel: string;
    darkLabel: string;
}

export const DisplayColorPalette: React.FC<Props> = ({ colorPalette, colors, lightLabel, darkLabel }) => {

    const [_showDetails, _setShowDetails] = useState<boolean>(false);
    const [_expandPalette, _setExpandPalette] = useState<boolean>(false);
    const [_anchorEl, _setAnchorEl] = useState<null | HTMLElement>(null);
    const [_deleteColorConfirmationModalIsOpen, _setDeleteColorConfirmationModalIsOpen] = useState<boolean>(false);
    const [_currentBaseColor, _setCurrentBaseColor] = useState<string>("");
    const openMenu = Boolean(_anchorEl);

    const handleMenuButtonClick = (event: any,color : string) => {
        _setAnchorEl(event.currentTarget);
        _setCurrentBaseColor(color);
    };

    const handleMenuButtonClose = (event: any) => {
        // colorPalette.removeColor(colorName);
        _setAnchorEl(null);
    };
    const handleMenuButtonDeleteColor = (colorName: string) => {
        if (colorPalette.getColors().length >= 2) {
            _setDeleteColorConfirmationModalIsOpen(true);
            console.log(colorPalette.removeColor(colorName), `deleting color ${colorName}`);
        }
        else {
            console.log("this is the only color you have cannot delete it");
        }
        _setAnchorEl(null);
    };
    const handleShowDetailsChange = (event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
        _setShowDetails(checked);
    }
    const handleRenameBaseColor = (event: any) => {
        _setAnchorEl(null);

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
                        <div className="input-col">
                            <p style={{ fontSize: "18px", fontWeight: "700", margin: "0px", padding: "0px", paddingBottom: "8px" }}>Your Color Palette</p>

                            <ColorPaletteSummary colorPalette={colorPalette} />
                        </div>

                    </AccordionSummary>
                    <AccordionDetails>

                        {/* <div style={{ paddingLeft: "36px", width: '100%' }}>
                            <div >
                                <Tabs value={_tabNumber} onChange={(event, value) => { _setTabNumber(value) }} aria-label="WCAG tabs">
                                    <Tab label="WCAG AA (6)" {...a11yProps(0)} />
                                    <Tab label="WCAG AAA (6) " {...a11yProps(1)} />
                                </Tabs>
                            </div>
                            <TabPanel value={_tabNumber} index={0}>
                                <ColorThemeAtom atom={colorThemes} colorPalette={atom} ></ColorThemeAtom>
                            </TabPanel>
                            <TabPanel value={_tabNumber} index={1}>
                                Content for WCAG AAA
                            </TabPanel>
                        </div> */}
                        <div style={{ padding: "0px" }}>

                            {/* <p style={{ fontSize: "18px", fontWeight: "700", margin: "0px", padding: "0px" }}>Your Color Palette</p> */}

                            <div className="detail-info">
                                <InputLabel htmlFor='showPaletteDetails'>Show Details</InputLabel>
                                <Switch id="showPaletteDetails" checked={_showDetails} onChange={handleShowDetailsChange} />
                            </div>
                            <div className="top40"></div>
                            <h4>Light Mode Colors:</h4>
                            {colorPalette.getColors().map((color, i) => {
                                return (
                                    <div key={i}>
                                        <ModalConfirmation title={`${_currentBaseColor} Color Deleted`} isOpen={_deleteColorConfirmationModalIsOpen} onClose={() => _setDeleteColorConfirmationModalIsOpen(false)} >The {_currentBaseColor} Color has been deleted</ModalConfirmation>
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "8px", paddingTop: "4px" }}>
                                            <div className="subtitle1" style={{ fontSize: "24px" }}>{color.name}</div>
                                            <div style={{ borderRadius: "4px" }}>
                                                
                                                <IconButton

                                                    sx={{
                                                        borderRadius: 4,
                                                        border: "2px solid grey",
                                                        color: "grey"
                                                    }}
                                                    aria-controls={openMenu ? 'simple-menu' : undefined}
                                                    aria-haspopup="true"
                                                    onClick={(e)=>{handleMenuButtonClick (e,color.name)}} aria-label="delete" size="large">
                                                    <ArrowDropDownIcon />
                                                </IconButton>

                                                <Menu
                                                    id="simple-menu"
                                                    anchorEl={_anchorEl}
                                                    open={openMenu}
                                                    onClose={handleMenuButtonClose}
                                                    anchorOrigin={{
                                                        vertical: 'bottom',
                                                        horizontal: 'right',
                                                    }}
                                                    transformOrigin={{
                                                        vertical: 'top',
                                                        horizontal: 'right',
                                                    }}
                                                    sx={{ minWidth: 400 }}
                                                >
                                                    <MenuItem sx={{ minWidth: 400 }} onClick={handleMenuButtonClose}>Edit {_currentBaseColor} Base Color</MenuItem>
                                                    <MenuItem onClick={handleRenameBaseColor}>Rename Base Color</MenuItem>
                                                    <MenuItem onClick={() => handleMenuButtonDeleteColor(_currentBaseColor)}>Delete {_currentBaseColor} Color (all shades, light and dark)</MenuItem>
                                                </Menu>
                                            </div>
                                        </div>
                                        <div className="colorRow">
                                            {color.light.shades.map((shade, i) => {
                                                if (shade.hex.toLowerCase() == color.hex.getValue()) {
                                                    console.log("found base color", color.name);
                                                    return (
                                                        <ColorShadeCss className="color-block" key={"ColorShade" + i} name={color.name} id={shade.id} lm={true} showDetails={_showDetails} showId isBaseColor={true} />
                                                    )
                                                }
                                                return (
                                                    <ColorShadeCss className="color-block" key={"ColorShade" + i} name={color.name} id={shade.id} lm={true} showDetails={_showDetails} showId />
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            })}

                            <h4>Dark Mode Colors:</h4>
                            {colorPalette.getColors().map((color, i) => {
                                //console.log("comment=",comment)
                                return (
                                    <div key={color.name}>
                                        <div className="subtitle1">{color.name}</div>
                                        <div className="colorRow">
                                            {color.dark.shades.map((shade, i) => {
                                                if (shade.hex.toLowerCase() == color.hex.getValue()) {
                                                    console.log("found base color");
                                                    return (
                                                        <ColorShadeCss className="color-block" key={"ColorShade" + i} name={color.name} id={shade.id} lm={true} showDetails={_showDetails} showId isBaseColor={true} />
                                                    )
                                                }
                                                return (
                                                    <ColorShadeCss className="color-block" key={"ColorShade" + i} name={color.name} id={shade.id} lm={false} showDetails={_showDetails} showId />
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            })}


                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
        )
    }
    else {
        return (
            <div className="row">
                <p style={{ fontSize: "18px", fontWeight: "700", marginLeft: "32px" }}>Your Color Palette</p>
            </div>
        )
    }
}
