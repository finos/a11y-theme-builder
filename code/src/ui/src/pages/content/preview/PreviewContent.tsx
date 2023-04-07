/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React from 'react';
import { useEffect, useState } from 'react';
import { DesignSystem} from 'a11y-theme-builder-sdk';
import { List, Collapse, RadioGroup, Radio, FormControlLabel, Checkbox, FormGroup } from '@mui/material';
import { LeftNavHeader, LeftNavItem, LeftNavText } from '../../../components/LeftNavTabs';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { NavSwitch } from '../../../components/NavSwitch';

interface Props {
    user: any;
    designSystem: DesignSystem;
}

export const PreviewContent: React.FC<Props> = ({ user, designSystem }) => {

    let desktopPreviewSelected = false;
    if (localStorage.getItem("themebuilder-preview-desktopPreview-selected") == "true") {
        desktopPreviewSelected = true;
    }
    const [displayDesktopPreview, setDisplayDesktopPreview] = useState<boolean>(desktopPreviewSelected);
    useEffect(() => {
        console.log("displayDesktopPreview=",displayDesktopPreview)
        localStorage.setItem("themebuilder-preview-desktopPreview-selected", ""+displayDesktopPreview)
    }, [displayDesktopPreview])

    let mobilePreviewSelected = false;
    if (localStorage.getItem("themebuilder-preview-mobilePreview-selected") == "true") {
        mobilePreviewSelected = true;
    }
    const [displayMobilePreview, setDisplayMobilePreview] = useState<boolean>(mobilePreviewSelected);
    useEffect(() => {
        console.log("displayMobilePreview=",displayMobilePreview)
        localStorage.setItem("themebuilder-preview-mobilePreview-selected", ""+displayMobilePreview)
    }, [displayMobilePreview])

    const divStyle = {
        paddingLeft: "30px"
    }

    const divLabelStyle = {
        //textTransform: "uppercase"
        fontWeight: "bold",
    }

    return (
        <React.Fragment>
            <div className="design-system-editor-left-nav">
            <div className="design-system-editor-left-nav-scrollable">
                <List 
                    sx={{
                        '& ul': {padding:0},
                        paddingTop: "0px",
                    }}
                >
                    <LeftNavHeader>Settings</LeftNavHeader>
                    <LeftNavText>Select Colors Palette</LeftNavText>
                    <div style={divStyle}>
                        Add selector
                    </div>
                    <LeftNavText>Device</LeftNavText>
                    <div style={divStyle}>
                        <NavSwitch leftLabel="Desktop" rightLabel="Mobile" inputProps={{ 'aria-label': '' }} />
                    </div>
                    <LeftNavText>Mode</LeftNavText>
                    <div style={divStyle}>
                        <NavSwitch leftLabel="Light" rightLabel="Dark" inputProps={{ 'aria-label': '' }} />
                    </div>
                    <LeftNavItem text={"Desktop Preview Settings"} value="desktopPreview" indent={0} onClick={()=> {setDisplayDesktopPreview(!displayDesktopPreview)}}>
                        {displayDesktopPreview ? <ExpandLess /> : <ExpandMore />}
                    </LeftNavItem>
                    <Collapse in={displayDesktopPreview} timeout="auto" unmountOnExit>
                        <div style={divStyle}>
                            <div style={divLabelStyle}>Desktop Top Nav:</div>
                            <RadioGroup>
                                <FormControlLabel value="white" control={<Radio size="small"/>} label="White"/>
                                <FormControlLabel value="black" control={<Radio size="small"/>} label="Black"/>
                                <FormControlLabel value="colored" control={<Radio size="small"/>} label="Colored"/>
                            </RadioGroup>
                            <div style={divLabelStyle}>Secondary Top Nav:</div>
                            <RadioGroup>
                                <FormControlLabel value="white" control={<Radio size="small"/>} label="White"/>
                                <FormControlLabel value="black" control={<Radio size="small"/>} label="Black"/>
                                <FormControlLabel value="colored" control={<Radio size="small"/>} label="Colored"/>
                            </RadioGroup>
                            <div style={divLabelStyle}>Hero Coloring:</div>
                            <RadioGroup>
                                <FormControlLabel value="white" control={<Radio size="small"/>} label="White"/>
                                <FormControlLabel value="black" control={<Radio size="small"/>} label="Black"/>
                                <FormControlLabel value="colored" control={<Radio size="small"/>} label="Colored"/>
                                <FormControlLabel value="gradient" control={<Radio size="small"/>} label="gradient"/>
                            </RadioGroup>
                            <div style={divLabelStyle}>Hero Style:</div>
                            <RadioGroup>
                                <FormControlLabel value="default" control={<Radio size="small"/>} label="Default"/>
                                <FormControlLabel value="backgroundImage" control={<Radio size="small"/>} label="BackgroundImage"/>
                                <FormControlLabel value="video" control={<Radio size="small"/>} label="Video"/>
                                <FormControlLabel value="rightAlignImage" control={<Radio size="small"/>} label="Right Align Image"/>
                            </RadioGroup>
                            <div style={divLabelStyle}>Hero Elements:</div>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox name="eventDate" size="small"/>} label="Event Date"/>
                                <FormControlLabel control={<Checkbox name="icon" size="small"/>} label="Icon"/>
                                <FormControlLabel control={<Checkbox name="primaryButton" size="small"/>} label="Primary Button"/>
                                <FormControlLabel control={<Checkbox name="secondaryButtons" size="small"/>} label="Secondary Buttons"/>
                            </FormGroup>
                            <div style={divLabelStyle}>Hero Alignment:</div>
                            <RadioGroup>
                                <FormControlLabel value="left" control={<Radio size="small"/>} label="Left"/>
                                <FormControlLabel value="centered" control={<Radio size="small"/>} label="Centered"/>
                            </RadioGroup>
                        </div>
                    </Collapse>
                    <LeftNavItem text={"Mobile Preview Settings"} value="mobilePreview" indent={0} onClick={()=> {setDisplayMobilePreview(!displayMobilePreview)}}>
                        {displayMobilePreview ? <ExpandLess /> : <ExpandMore />}
                    </LeftNavItem>
                    <Collapse in={displayMobilePreview} timeout="auto" unmountOnExit>
                        <div style={divStyle}>
                            <div style={divLabelStyle}>Top Nav:</div>
                            <FormControlLabel control={<Checkbox name="showTopNav" size="small"/>} label="Show top nav"/>
                            <RadioGroup>
                                <FormControlLabel value="white" control={<Radio size="small"/>} label="White"/>
                                <FormControlLabel value="black" control={<Radio size="small"/>} label="Black"/>
                                <FormControlLabel value="colored" control={<Radio size="small"/>} label="Colored"/>
                            </RadioGroup>
                            <div style={divLabelStyle}>Top Nav Tabs:</div>
                            <FormControlLabel control={<Checkbox name="showTopNav" size="small"/>} label="Show top tabs"/>
                            <RadioGroup>
                                <FormControlLabel value="white" control={<Radio size="small"/>} label="White"/>
                                <FormControlLabel value="black" control={<Radio size="small"/>} label="Black"/>
                                <FormControlLabel value="colored" control={<Radio size="small"/>} label="Colored"/>
                            </RadioGroup>
                            <div style={divLabelStyle}>Mobile Bottom Nav:</div>
                            <FormControlLabel control={<Checkbox name="showTopNav" size="small"/>} label="Show bottom nav"/>
                            <RadioGroup>
                                <FormControlLabel value="white" control={<Radio size="small"/>} label="White"/>
                                <FormControlLabel value="black" control={<Radio size="small"/>} label="Black"/>
                                <FormControlLabel value="colored" control={<Radio size="small"/>} label="Colored"/>
                            </RadioGroup>
                            <div style={divLabelStyle}>Primary Background:</div>
                            <RadioGroup>
                                <FormControlLabel value="white" control={<Radio size="small"/>} label="White"/>
                                <FormControlLabel value="black" control={<Radio size="small"/>} label="Black"/>
                                <FormControlLabel value="colored" control={<Radio size="small"/>} label="Colored"/>
                            </RadioGroup>
                        </div>
                    </Collapse>
                </List>
            </div>
            </div>
            <div className="design-system-editor-right-content">
                <div className="design-system-editor-right-content-scrollable">
                TODO
                </div>
            </div>
        </React.Fragment>
    );
}

