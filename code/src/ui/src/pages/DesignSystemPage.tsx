/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useRef, useLayoutEffect, ReactNode } from 'react';
import { useParams } from "react-router-dom";
import { Tab, Tabs, styled } from '@mui/material';
import { useEffect, useState } from 'react';
import { ThemeBuilder, DesignSystem, EventValueChange, Layers, Storage } from 'a11y-theme-builder-sdk';
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
import { Preferences } from '../Preferences';

const name = "DesignSystemPage"

interface Props {
    user: any;
    storage: Storage;
    themeName: string;
    setThemeName(name: string): void;
}

interface AccessibleLayerContainerAttributes {
    "data-typography"?: string;
    "data-animation"?: string;
    "data-device"?: string;
}

let initComplete = false;

const DesignSystemPage: React.FC<Props> = ({user, storage, themeName, setThemeName}) => {

    // designSystemName comes into the component from the path
    //  of the Route
    const { designSystemName } = useParams();

    const [themeBuilder, setThemeBuilder] = useState<ThemeBuilder>();
    const [designSystemNames, setDesignSystemNames] = useState<string[]>([]);
    const [designSystem, setDesignSystem] = useState<DesignSystem>();
    const [designSystemContentClassName, setDesignSystemContentClassName] = useState<string>("design-system-container");
    const [designSystemContainerAttributes, setDesignSystemContentAttributes] = useState<AccessibleLayerContainerAttributes>({})

    const [tabIndex, setTabIndex] = useState<string|null>(null);
    const handleTabChange = (event:any, newTabIndex:string) => {
        setTabIndex(newTabIndex);
        if (designSystem) {
            const pref = new Preferences(designSystem.name);
            pref.set("content-selected", newTabIndex)
        }
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
        }
    }, []);

    useEffect(() => {
        if (designSystem) {
            designSystem.code.setCSSVarListener("css", setCssValue);
            const pref = new Preferences(designSystem.name);
            setTabIndex(pref.get("content-selected") || "atoms");

            // listen for changes in selected accessibility layers so that appropriate
            //  styles can be set
            const layerChangeListener = function (event: EventValueChange<Boolean>) {
                UpdateContainerLayerInfo();
            };
            const deviceTargetListener = function (event: EventValueChange<String>) {
                UpdateContainerLayerInfo();
            };
            designSystem.layers.colorBlind.setPropertyListener("colorBlindListener", layerChangeListener);
            designSystem.layers.dyslexia.setPropertyListener("dyslexiaListener", layerChangeListener);
            designSystem.layers.motionSensitivity.setPropertyListener("motionSensativityListener", layerChangeListener);
            designSystem.layers.deviceTarget.setPropertyListener("deviceTargetListener", deviceTargetListener);

            UpdateContainerLayerInfo();
        }
    }, [designSystem])

    // Update the class names on the design system container div
    //  taking into account which accessibility layers have been
    //  selected by the user
    const UpdateContainerLayerInfo = () => {
        let dsccn = "design-system-container";
        let attributes: AccessibleLayerContainerAttributes = {};
        if (designSystem) {
            //TODO re-enable when color blindness styling is available
            // and the color blind accessibility layer is
            // re-introduced to the UI
            //if (designSystem.layers.colorBlind.getValue()) {
            //    dsccn += " color-blind";
            //}
            if (designSystem.layers.dyslexia.getValue()) {
                dsccn += " dyslexic";
                attributes["data-typography"] = "dyslexic";
            }
            if (designSystem.layers.motionSensitivity.getValue()) {
                dsccn += " motion-sensitive";
                attributes["data-animation"] = "sensitive";
            }
            if (designSystem.layers.deviceTarget.getValue()) {
                attributes["data-device"] = designSystem.layers.deviceTarget.getValue();
            }
        }

        setDesignSystemContentClassName(dsccn);
        setDesignSystemContentAttributes(attributes);
    }

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

    if (designSystem && themeBuilder && tabIndex)

        return (
            <ThemeProvider theme={(themes as any)[themeName]}>
                <div {...designSystemContainerAttributes} className="design-system-container">
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
                                <div className="vertical-line"  />
                                <TopNavTab label="Components" value="components"/>
                                <TopNavTab label="Organisms" value="organisms"/>
                                <TopNavTab label="Templates" value="templates"/>
                                <div className="vertical-line"  />
                                <TopNavTab label="Code" value="code"/>
                            </Tabs>
                        </div>
                    </MeasureDiv>
                    <div className="design-system-editor-content" data-background="primary" style={divStyle}>
                        {tabIndex === "atoms" && (
                            <AtomContent user={user} designSystem={designSystem}/>
                        )}
                        {tabIndex === "molecules" && (
                            <MoleculeContent user={user} designSystem={designSystem}/>
                        )}

                        {tabIndex === "components" && (
                            <ComponentsContent user={user} designSystem={designSystem}/>
                        )}
                        {tabIndex === "organisms" && (
                            <OrganismContent user={user} designSystem={designSystem}/>
                        )}
                        {tabIndex === "templates" && (
                            <PreviewContent user={user} designSystem={designSystem}/>
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
