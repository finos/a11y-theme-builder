import React, { useEffect, useState } from 'react';
import { List, Drawer, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Welcome from './Welcome';
import JumpStart from './JumpStart';
import GetStarted from './GetStarted';
import './WelcomePage.css';
import WelcomeNavbar from '../components/WelcomeNavbar';
import { themes } from "../mui-a11y-tb/themes/Theme";
import { ThemeProvider } from '@mui/material';
import { LeftNavHeader, LeftNavItem } from '../components/LeftNavTabs';
import { MeasureDiv } from './MeasureDiv';
import { Storage } from '@finos/a11y-theme-builder-sdk';

interface Props {
    user: any;
    storage: Storage;
    themeName: string;
}

const WelcomePage: React.FC<Props> = ({ user, storage, themeName }) => {
    const [showItem, setShowItem] = useState<string>(localStorage.getItem("themebuilder-welcome-selected") || "welcome");
    const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

    useEffect(() => {
        localStorage.setItem("themebuilder-welcome-selected", showItem)
    }, [showItem]);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleTabChange = (event: any, newShowItem: string) => {
        setShowItem(newShowItem);
    };

    const [size, setSize] = useState<number>(window.innerHeight);
    useEffect(() => {
        const handleResize = () => setSize(window.innerHeight);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const [divHeight, setDivHeight] = useState<number>(0);
    const divStyle = {
        height: (size - divHeight - 4) + "px",
    };

    const toggleDrawer = (open: boolean) => (event: any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const drawerContent = (
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
    );

    return (
        <ThemeProvider theme={(themes as any)[themeName]}>
            <div className="design-system-container">
                <MeasureDiv setHeight={setDivHeight}>
                    <WelcomeNavbar />
                </MeasureDiv>
                <div className="design-system-editor-content" style={divStyle}>
                    {isMobile && (
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={toggleDrawer(true)}
                            className="hamburger-icon"
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                    <Drawer
                        anchor="left"
                        open={isDrawerOpen}
                        onClose={toggleDrawer(false)}
                    >
                        {drawerContent}
                    </Drawer>
                    <div className="design-system-editor-left-nav">
                        <div className="design-system-editor-left-nav-scrollable">
                            {drawerContent}
                        </div>
                    </div>
                    <div className="design-system-editor-right-content">
                        <div className="design-system-editor-right-content-scrollable">
                            {showItem === "welcome" && (
                                <Welcome user={user} changeTab={handleTabChange} />
                            )}
                            {showItem === "jumpStart" && (
                                <JumpStart user={user} storage={storage} />
                            )}
                            {showItem === "getStarted" && (
                                <GetStarted user={user} storage={storage} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default WelcomePage;
