/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useEffect, useState } from 'react';
import { Tab, Tabs, List } from "@mui/material";
import { styled } from '@mui/material';
import Welcome from './Welcome';
import JumpStart from './JumpStart';
import GetStarted from './GetStarted';
import './WelcomePage.css';
import WelcomeNavbar from '../components/WelcomeNavbar';
import { themes } from "../mui-a11y-tb/themes/Theme";
import { ThemeProvider } from '@mui/material';
import { LeftNavHeader, LeftNavItem } from '../components/LeftNavTabs';
import { MeasureDiv } from './MeasureDiv';
import { Storage } from 'a11y-theme-builder-sdk';

interface Props {
    user: any;
    storage: Storage;
    themeName: string;
}

const WelcomePage: React.FC<Props> = ({ user, storage, themeName }) => {

    const [showItem, setShowItem] = useState<string>(localStorage.getItem("themebuilder-welcome-selected") || "welcome");
    useEffect(() => {
        localStorage.setItem("themebuilder-welcome-selected", showItem)
    }, [showItem])
    const handleTabChange = (event: any, newShowItem: string) => {
        setShowItem(newShowItem);
    };

    const [size, setSize] = useState<number>(window.innerHeight);
    window.addEventListener("resize", (event) => {
        setSize(window.innerHeight);
    });
    const [divHeight, setDivHeight] = useState<number>(0);
    const divStyle = {
        height: (size - divHeight - 4) + "px",
    }

    return (
        <ThemeProvider theme={(themes as any)[themeName]}>
            <div className="design-system-container">
                <MeasureDiv setHeight={setDivHeight}>
                    <WelcomeNavbar />
                </MeasureDiv>
                <div className="design-system-editor-content" style={divStyle}>
                    <div className="design-system-editor-left-nav">
                    <div className="design-system-editor-left-nav-scrollable">
                        <List
                            sx={{
                                '& ul': { padding: 0 },
                                paddingTop: "0px",
                            }}
                        >
                            <LeftNavHeader>Design Systems</LeftNavHeader>
                            <LeftNavItem text={"Welcome"} value="welcome" indent={1} selected={showItem} onClick={() => { setShowItem("welcome") }} />
                            <LeftNavItem text={"Sample and Template Design Systems"} value="jumpStart" indent={1} selected={showItem} onClick={() => { setShowItem("jumpStart") }} />
                            <LeftNavItem text={"Your Design Systems"} value="getStarted" indent={1} selected={showItem} onClick={() => { setShowItem("getStarted") }} />
                        </List>
                    </div>
                    </div>
                    <div className="design-system-editor-right-content">
                    <div className="design-system-editor-right-content-scrollable">
                        {showItem === "welcome" && (
                            <Welcome user={user} changeTab={handleTabChange} />
                        )}
                        {showItem === "jumpStart" && (
                            <JumpStart user={user} storage={storage}/>
                        )}
                        {showItem === "getStarted" && (
                            <GetStarted user={user} storage={storage}/>
                        )}
                    </div>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default WelcomePage;
