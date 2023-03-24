import React from 'react';
import { } from '@mui/material';
import { useState } from 'react';
import { Tab, Tabs } from "@mui/material";
import { styled } from '@mui/material';
import { Box } from '@mui/system';
import Welcome from './Welcome';
import JumpStart from './JumpStart';
import GetStarted from './GetStarted';
import './WelcomePage.css';
import WelcomeNavbar from '../components/WelcomeNavbar';
import { themes } from "../mui-a11y-tb/themes/Theme";
import { ThemeProvider } from '@mui/material';

interface Props {
    user: any;
    themeName: string;
}

const LeftTab = styled(Tab)(({ theme }) => ({
    alignSelf: "start",
    left: "20px",
}));

const WelcomePage: React.FC<Props> = ({ user, themeName }) => {

    const [tabIndex, setTabIndex] = useState<string>(localStorage.getItem("themebuilder-welcome-selected") || "welcome");
    const handleTabChange = (event: any, newTabIndex: string) => {
        setTabIndex(newTabIndex);
        localStorage.setItem("themebuilder-welcome-selected", newTabIndex)
    };

    return (
        <>
        <ThemeProvider theme={(themes as any)[themeName]}>
            <WelcomeNavbar />
            <div>
                <div className="welcome-content">
                    <div className="welcome-left-nav">
                        <Tab label="Design Systems" />
                        <Tabs
                            value={tabIndex}
                            onChange={handleTabChange}
                            orientation="vertical"
                            sx={{
                                '.MuiTabs-indicator': {
                                    left: 0,
                                    backgroundColor: "#000"
                                },
                            }}
                        >
                            <LeftTab label="Welcome" value="welcome"/>
                            <LeftTab label={<div style={{ textAlign: "left" }}>Sample and Template<br/>Design Systems</div>} value="jumpStart"/>
                            <LeftTab label="Your Design Systems" value="getStarted"/>
                        </Tabs>
                    </div>
                    <div className="welcome-right-content">
                        {tabIndex === "welcome" && (
                            <Welcome user={user} changeTab={handleTabChange}/>
                        )}
                        {tabIndex === "jumpStart" && (
                            <JumpStart user={user} />
                        )}
                        {tabIndex === "getStarted" && (
                            <GetStarted user={user} />
                        )}
                    </div>
                </div>
            </div>
        </ThemeProvider>
        </>
    );
}

export default WelcomePage;
