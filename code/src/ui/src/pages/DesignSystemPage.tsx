/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useRef, useLayoutEffect, ReactNode } from 'react';
import { useParams } from "react-router-dom";
import { Tab, Tabs, styled } from '@mui/material';
import { useEffect, useState } from 'react';
import { ThemeBuilder, DesignSystem, Storage } from 'a11y-theme-builder-sdk';
import { DesignSystemTitleBar } from '../components/DesignSystemTitleBar';
import { AtomContent } from './content/atoms/AtomContent';
import { MoleculeContent } from './content/molecules/MoleculeContent';
import { OrganismContent } from './content/organisms/OrganismContent';
import { PreviewContent } from './content/preview/PreviewContent';
import { ComponentsContent } from './content/components/ComponentsContent';
import { CodeContent } from './content/code/CodeContent';
import './DesignSystemPage.css';
import { themes, setCssValue, getCssValue } from "../mui-a11y-tb/themes/Theme";
import { ThemeProvider } from '@mui/material';
import { MeasureDiv } from './MeasureDiv';

const name = "DesignSystemPage"

interface Props {
    user: any;
    storage: Storage;
    themeName: string;
    setThemeName(name: string): void;
}

let initComplete = false;

const DesignSystemPage: React.FC<Props> = ({user, storage, themeName, setThemeName}) => {

    // designSystemName comes into the component from the path
    //  of the Route
    //TODO: Throw error here if themeBuilder not set?
    const { designSystemName } = useParams();

    const [themeBuilder, setThemeBuilder] = useState<ThemeBuilder>();
    const [designSystemNames, setDesignSystemNames] = useState<string[]>([]);
    const [designSystem, setDesignSystem] = useState<DesignSystem>();

    const [tabIndex, setTabIndex] = useState<string>(localStorage.getItem("themebuilder-content-selected") ||"atoms");
    const handleTabChange = (event:any, newTabIndex:string) => {
        setTabIndex(newTabIndex);
        localStorage.setItem("themebuilder-content-selected", newTabIndex)
    };

    const setDesignSystemName = async (designName: string | undefined) => {
        console.log(`${name} - setDesignSystemName(${designName})`);
        let _themeBuilder = await ThemeBuilder.create({storage: storage});
        setThemeBuilder(_themeBuilder)
        if (designName && _themeBuilder) {
            const dsn = await _themeBuilder.listDesignSystemNames();
            setDesignSystemNames(dsn);

            // On page reload with MemStorage the data is blank, so must recreate design systems every time
            if (dsn.length == 0) {
                const ds1 = await _themeBuilder.addDesignSystem("Test");
                const ds2 = await _themeBuilder.addDesignSystem("Sample");
                const dsn = await _themeBuilder.listDesignSystemNames();
                setDesignSystemNames(dsn);
                if (designSystemName == "Test") setDesignSystem(ds1);
                if (designSystemName == "Sample") setDesignSystem(ds2);
            }
            // If found
            if (dsn.indexOf(designName) > -1) {
                const ds = await _themeBuilder.getDesignSystem(designName);
                setDesignSystem(ds);
            }
            // If not found, then create it
            else {
                const ds1 = await _themeBuilder.addDesignSystem(designName);
                const dsn = await _themeBuilder.listDesignSystemNames();
                setDesignSystemNames(dsn);
                setDesignSystem(ds1);
            }
        }
    };

    useEffect(() => {
        if (!initComplete) {
            initComplete = true;
            setDesignSystemName(designSystemName);

            // Test theme change from light to dark to light
            // setTimeout(function() {
            //     setThemeName("dark")
            // }, 5000)
            // setTimeout(function() {
            //     setThemeName("light")
            // }, 10000)
        }
    }, []);

    useEffect(() => {
        if (designSystem) {
            designSystem.code.setCSSVarListener("css", setCssValue);
        }
    }, [designSystem])

    const TopNavTab = styled(Tab)(({ theme }) => ({
        ":hover": {
            backgroundColor: "rgba(0, 0, 0, 0.04)",
        },
        ":hover::after": {
            opacity: 0,
        },
    }));

    const [size, setSize] = useState<number>(window.innerHeight);
    window.addEventListener("resize", (event) => {
        setSize(window.innerHeight);
    });
    const [divHeight, setDivHeight] = useState<number>(0);
    const divStyle = {
        height: (size - divHeight - 4) + "px",
    }

    if (designSystem && themeBuilder)
        return (
            <ThemeProvider theme={(themes as any)[themeName]}>
                <div className="design-system-container">
                    <MeasureDiv setHeight={setDivHeight}>
                        <DesignSystemTitleBar designSystemNames={designSystemNames} designSystem={designSystem} />
                        <div className="design-system-tab-bar">
                            <Tabs
                                value={tabIndex}
                                onChange={handleTabChange}
                                orientation="horizontal"
                                centered
                                className="white"
                                sx={{
                                    '.MuiTabs-indicator': {
                                        left: 0,
                                        backgroundColor: "#000"
                                    },
                                }}
                            >
                                <TopNavTab label="Atoms" value="atoms"/>
                                <TopNavTab label="Molecules" value="molecules"/>
                                <TopNavTab label="Organisms" value="organisms"/>
                                <TopNavTab label="Components" value="components"/>
                                <TopNavTab label="Preview" value="preview"/>
                                <TopNavTab label="Code" value="code"/>
                            </Tabs>
                        </div>
                    </MeasureDiv>
                    <div className="design-system-editor-content" style={divStyle}>
                        {tabIndex === "atoms" && (
                            <AtomContent user={user} designSystem={designSystem}/>
                        )}
                        {tabIndex === "molecules" && (
                            <MoleculeContent user={user} designSystem={designSystem}/>
                        )}
                        {tabIndex === "organisms" && (
                            <OrganismContent user={user} designSystem={designSystem}/>
                        )}
                        {tabIndex === "preview" && (
                            <PreviewContent user={user} designSystem={designSystem}/>
                        )}
                        {tabIndex === "components" && (
                            <ComponentsContent user={user} designSystem={designSystem}/>
                        )}
                        {tabIndex === "code" && (
                            <CodeContent user={user} designSystem={designSystem}/>
                        )}
                    </div>
                </div>
            </ThemeProvider>
        );

    return(<div>No design system loaded</div>)
}

export default DesignSystemPage;
