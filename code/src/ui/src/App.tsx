/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import './App.css';
import React, { useState, useEffect } from 'react';
import WelcomePage from './pages/WelcomePage';
import ErrorPage from './pages/ErrorPage';
import DesignSystemPage from "./pages/DesignSystemPage";
import { themes } from "./mui-a11y-tb/themes/Theme";

import { BrowserRouter , Routes, Route } from 'react-router-dom';

// Using HashRouter allows app to be loaded in browser as file:///.../index.html
// but there is no server to call
// https://stackoverflow.com/questions/40342100/run-react-application-without-server
// https://stackoverflow.com/questions/51974369/what-is-the-difference-between-hashrouter-and-browserrouter-in-react/51976069#51976069
// import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { Http } from './Http'
import { ThemeProvider, Theme } from '@mui/material';
import { LocalStorage } from './LocalStorage';
import { ServerStorage } from './ServerStorage';
import WebFont from "webfontloader";

if (window.location.hostname == "localhost" && window.location.port == "3000") {
    Http.init(window.location.origin.replace("3000", "3001"));
}
else {
    Http.init(window.location.origin);
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        overlineLarge: true;
    }
}


interface Props {
    user: any;
}

const App: React.FC<Props> = ({user}) => {

    const [themeName, setThemeName] = useState<string>("light");

    useEffect(() => {
        console.log('App - Theme changed');
    }, [themeName])

    const changeThemeName = (name: string) => {
        if (Object.keys(themes).indexOf(name) > -1) {
            setThemeName(name);
        }
        else {
            console.log(`Error setting theme:  The theme ${name} does not exist.`);
        }
    }

    //const storage = new LocalStorage();
    const storage = new ServerStorage();

    useEffect(() => {
        WebFont.load({
            google: {
            families: ["Open Sans", "Montserrat"],
            }
        });
    }, []);

    /**
     * Render content
     */
    return (
        <BrowserRouter>
            { /* <ThemeProvider theme={customTheme}> */ }
                <div className="App">
                    <Routes>
                        <Route path="/" element={<WelcomePage user={user} themeName={themeName} storage={storage} />} />
                        <Route path="designSystem/:designSystemName" element={<DesignSystemPage user={user} themeName={themeName} setThemeName={changeThemeName} storage={storage} />} />
                        <Route path="*" element={<ErrorPage user={user} />} />
                    </Routes>
                </div>
            { /* </ThemeProvider> */ }
        </BrowserRouter>
    );
    
}

export default App;
