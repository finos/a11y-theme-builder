/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React from 'react';
import { useEffect, useState, ReactNode } from 'react';
//import ModalAtomicIntro from './modals/ModalAtomicIntro';
import AtomicIntro from './AtomicIntro';
import { GridAtom } from '../../atoms/GridAtom';
import { MinimumTargetAtom } from '../../atoms/MinimumTargetAtom';
import { ColorPaletteAtom } from '../../atoms/ColorPaletteAtom';
import { FontSettingsAtom } from '../../atoms/typography/FontSettingsAtom';
import { HeaderStylesAtom } from '../../atoms/typography/HeaderStylesAtom';
import { SmallTextStylesAtom } from '../../atoms/typography/SmallTextStylesAtom';
import { BodyStylesAtom } from '../../atoms/typography/BodyStylesAtom';
import { StatStylesAtom } from '../../atoms/typography/StatStylesAtom';
import { ColorThemeAtom } from '../../atoms/ColorThemeAtom';
import { AnimationAtom } from '../../atoms/AnimationAtom';
import { BordersAtom } from '../../atoms/BordersAtom';
import { StatesAtom } from '../../atoms/StatesAtom';
import { InputBackgroundsAtom } from '../../atoms/InputBackgroundsAtom';
import { HotlinksAtom } from '../../atoms/HotlinksAtom';
import { FocusStateAtom } from '../../atoms/FocusStateAtom';
import { DesignSystem, Event, EventType, Atom } from 'a11y-theme-builder-sdk';
import { LeftNavHeader, LeftNavItem } from '../../../components/LeftNavTabs';
import { ErrorHandler } from '../../../ErrorHandler';
import { List, ListItemButton, ListItemText, ListSubheader, styled, Collapse, Button, InputLabel, TextField, InputAdornment } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { ElevationsAtom } from '../../atoms/ElevationsAtom';
import { BevelsAtom } from '../../atoms/BevelsAtom';

// DEMO:    Import your atom
import { ExampleAtom } from '../../atoms/ExampleAtom';

//import { TestAtom } from '../pages/atoms/TestAtom';

// To test loading of atom summary modal
//localStorage.removeItem("themebuilder-atom-show-intro");

interface atomItem {
    value: string;
    label: string;
    atom: string;
    disabled: boolean;
}

const atomsList: {[key: string]:atomItem} = {
    colorPalette: {value: "colorPalette", label: "Color Palette", atom: "Color Palette", disabled: true},
    colorThemes: {value: "colorThemes", label: "Color Theme", atom: "Color Themes", disabled: true},
    subcolorThemes: {value: "subcolorThemes", label: "Sub Color Themes", atom: "Subcolor Themes", disabled: true},
    fontsSettings: {value: "fontsSettings", label: "Fonts Settings", atom: "Fonts Settings", disabled: true},
    displayAndHeaderStyles: {value: "displayAndHeaderStyles", label: "Display & Header Styles", atom: "Display And Header Styles", disabled: true},
    bodyStyles: {value: "bodyStyles", label: "Body Styles", atom: "Body Styles", disabled: true},
    smallTextStyles: {value: "smallTextStyles", label: "Small Text Styles", atom: "Small Tests Styles", disabled: true},
    statStyles: {value: "statStyles", label: "Stat Styles", atom: "Stat Styles", disabled: true},
    gridSettings: {value: "gridSettings", label: "Grid Settings", atom: "Grid Settings", disabled: true},
    minimumTarget: {value: "minimumTarget", label: "Minimum Target", atom: "Minimum Target", disabled: true},
    stateSettings: {value: "stateSettings", label: "State Settings", atom: "State Settings", disabled: true},
    chartColors: {value: "chartColors", label: "Chart Colors", atom: "Chart Colors", disabled: true},
    borderSettings: {value: "borderSettings", label: "Border Settings", atom: "Border Settings", disabled: true},
    focusStates: {value: "focusStates", label: "Focus States", atom: "Focus States", disabled: true},
    hotlinks: {value: "hotlinks", label: "Hotlinks", atom: "Hotlinks", disabled: true},
    inputBackground: {value: "inputBackground", label: "Input Background", atom: "Input Background", disabled: true},
    elevationSettings: {value: "elevationSettings", label: "Elevation Settings", atom: "Elevation Settings", disabled: true},
    bevelSettings: {value: "bevelSettings", label: "Bevel Settings", atom: "Bevel Settings", disabled: true},
    animationSettings: {value: "animationSettings", label: "Animation Settings", atom: "Animation Settings", disabled: true},

// DEMO:    Add your atom to the atomsList
    // ExampleAtom: {value: "exampleAtom", label: "Example", atom: "Example", disabled: true},
}

// Atoms that are not going to be implemented for MVP
const notImplemented = ["subcolorThemes", "chartColors",]

interface Props {
    user: any;
    designSystem: DesignSystem;
}

export const AtomContent: React.FC<Props> = ({ user, designSystem }) => {

    let typographySelected = false;
    if (localStorage.getItem("themebuilder-atom-typography-selected") == "true") {
        typographySelected = true;
    }
    const [displayTypography, setDisplayTypography] = useState<boolean>(typographySelected);
    useEffect(() => {
        localStorage.setItem("themebuilder-atom-typography-selected", ""+displayTypography)
    }, [displayTypography])

    let otherSelected = false;
    if (localStorage.getItem("themebuilder-atom-other-selected") == "true") {
        otherSelected = true;
    }
    const [displayOther, setDisplayOther] = useState<boolean>(otherSelected);
    useEffect(() => {
        localStorage.setItem("themebuilder-atom-other-selected", ""+displayOther)
    }, [displayOther])

    function enableDisableItems() {
        let _atoms = {...atoms};
        for (const [key, node] of Object.entries(designSystem.atoms)) {
            if (node instanceof Atom) {
                if (notImplemented.indexOf(key) == -1) {
                    if (_atoms[key]) {
                        console.log("Atom enabled:"+key+" enabled="+node.isEnabled());
                        //_atoms[key].disabled = false; //TODO: remove when done developing
                        _atoms[key].disabled = !node.isEnabled(); //TODO: uncomment when done developing
                    }
                }
            }
        }
        setAtoms(_atoms);
        if (_atoms[showAtom] && _atoms[showAtom].disabled) {
            setShowAtom("atoms");
        }
    }

    const [atoms, setAtoms] = useState<{[key: string]:atomItem}>(atomsList);
    useEffect(() => {
        if (designSystem) {
            designSystem.setListener("AtomContent-isEditable", 
                function(event: Event) {
                    if (event.type == EventType.NodeDisabled) {
                        enableDisableItems();
                    }
                    else if (event.type == EventType.NodeEnabled) {
                        enableDisableItems();
                    }
                }
            )
            enableDisableItems();
        }
    }, [])

    useEffect(() => {
        //console.log("Atoms updated =",atoms)
    }, [atoms])

    const [showAtom, setShowAtom] = React.useState(localStorage.getItem("themebuilder-atom-content-selected") || "atoms");
    useEffect(() => {
        localStorage.setItem("themebuilder-atom-content-selected", showAtom)
    }, [showAtom])

    interface LeftNavAtomProps { atom: any, indent?:number, disabled?:boolean };
    const LeftNavAtom : React.FC<LeftNavAtomProps> = ({atom, indent, disabled}) => {
        return (
            <LeftNavItem 
                selected={showAtom}
                value={atom.value}
                text={atom.label} 
                indent={indent} 
                disabled={disabled !== undefined ? disabled : atom.disabled} 
                onClick={()=> {setShowAtom(atom.value)}}
            />
        )
    }

    return (
        <>
            <div className="design-system-editor-left-nav">
                <div className="design-system-editor-left-nav-scrollable">
                    <List 
                        sx={{
                            '& ul': {padding:0},
                            paddingTop: "0px",
                        }}
                    >
                        <LeftNavHeader>Introduction</LeftNavHeader>
                        <LeftNavItem text={"Atoms"} value="atoms" indent={1} selected={showAtom} onClick={()=> {setShowAtom("atoms")}}/>
                        <LeftNavHeader>Atomic Settings</LeftNavHeader>
                        <LeftNavAtom atom={atoms.colorPalette} indent={1} />
                        <LeftNavAtom atom={atoms.colorThemes} indent={1} />
                        <LeftNavAtom atom={atoms.subcolorThemes} indent={1}/>
                        <LeftNavItem text={"Typography"} indent={1} onClick={()=>setDisplayTypography(!displayTypography)}>
                            {displayTypography ? <ExpandLess /> : <ExpandMore />}
                        </LeftNavItem>
                        <Collapse in={displayTypography} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <LeftNavAtom atom={atoms.fontsSettings} indent={2} />
                                <LeftNavAtom atom={atoms.displayAndHeaderStyles} indent={2} />
                                <LeftNavAtom atom={atoms.bodyStyles} indent={2} />
                                <LeftNavAtom atom={atoms.smallTextStyles} indent={2} />
                                <LeftNavAtom atom={atoms.statStyles} indent={2} />
                            </List>
                        </Collapse>
                        <LeftNavItem text={"Other Atoms"} indent={1} onClick={()=>setDisplayOther(!displayOther)}>
                            {displayOther ? <ExpandLess /> : <ExpandMore />}
                        </LeftNavItem>
                        <Collapse in={displayOther} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <LeftNavAtom atom={atoms.gridSettings} indent={2} />
                                <LeftNavAtom atom={atoms.minimumTarget} indent={2} />
                                <LeftNavAtom atom={atoms.stateSettings} indent={2} />
                                <LeftNavAtom atom={atoms.chartColors} indent={2} disabled={true} />
                                <LeftNavAtom atom={atoms.borderSettings} indent={2} />

                                <LeftNavAtom atom={atoms.focusStates} indent={2} />
                                <LeftNavAtom atom={atoms.hotlinks} indent={2} />
                                <LeftNavAtom atom={atoms.inputBackground} indent={2} />
                                <LeftNavAtom atom={atoms.elevationSettings} indent={2} />
                                <LeftNavAtom atom={atoms.bevelSettings} indent={2} />
                                <LeftNavAtom atom={atoms.animationSettings} indent={2} />

                                {
                                // DEMO:    Add a tab for your atom
                                /* <LeftNavAtom atom={atoms.exampleAtom} indent={2} /> */
                                }
                            </List>
                        </Collapse>

                    </List>
                </div>
            </div>
            <div className="design-system-editor-right-content">
                <div className="design-system-editor-right-content-scrollable">
                    {showAtom === "atoms" && 
                        <AtomicIntro changeTab={setShowAtom}/>
                    }
                    {showAtom === atoms.colorPalette.value && (
                        <ErrorHandler>
                            <ColorPaletteAtom atom={designSystem.atoms.colorPalette} defaultColor="#ffffff" changeTab={setShowAtom}/>
                        </ErrorHandler>
                    )}
                    {showAtom === atoms.colorThemes.value && (
                        <ErrorHandler>
                            <ColorThemeAtom atom={designSystem.atoms.colorThemes}></ColorThemeAtom>
                        </ErrorHandler>
                    )}
                    {showAtom === atoms.subcolorThemes.value && (
                        <div>subColorThemes</div>
                    )}
                    {showAtom === atoms.gridSettings.value && (
                        <ErrorHandler>
                            <GridAtom atom={designSystem.atoms.gridSettings}/>
                        </ErrorHandler>
                    )}
                    {showAtom === atoms.minimumTarget.value && (
                        <ErrorHandler>
                            <MinimumTargetAtom atom={designSystem.atoms.minimumTarget}/>
                        </ErrorHandler>
                    )}
                    {showAtom === atoms.stateSettings.value && (
                        <ErrorHandler>
                            <StatesAtom atom={designSystem.atoms.stateSettings} />
                        </ErrorHandler>
                    )}
                    {showAtom === atoms.chartColors.value && (
                        <div>chartColors</div>
                    )}
                    {showAtom === atoms.fontsSettings.value && (
                        <ErrorHandler>
                            <FontSettingsAtom atoms={designSystem.atoms}/>
                        </ErrorHandler>
                    )}
                    {showAtom === atoms.displayAndHeaderStyles.value && (
                        <ErrorHandler>
                            <HeaderStylesAtom designSystem={designSystem}/>
                        </ErrorHandler>
                    )}
                    {showAtom === atoms.bodyStyles.value && (
                        <ErrorHandler>
                            <BodyStylesAtom designSystem={designSystem}/>
                        </ErrorHandler>
                    )}
                    {showAtom === atoms.smallTextStyles.value && (
                        <ErrorHandler>
                            <SmallTextStylesAtom designSystem={designSystem}/>
                        </ErrorHandler>
                    )}
                    {showAtom === atoms.statStyles.value && (
                        <ErrorHandler>
                            <StatStylesAtom designSystem={designSystem}/>
                        </ErrorHandler>
                    )}
                    {showAtom === atoms.borderSettings.value && (
                        <ErrorHandler>
                            <BordersAtom atom={designSystem.atoms.borderSettings}/>
                        </ErrorHandler>
                    )}
                    {showAtom === atoms.focusStates.value && (
                        <ErrorHandler>
                            <FocusStateAtom focusStates={designSystem.atoms.focusStates} />
                        </ErrorHandler>
                    )}
                    {showAtom === atoms.hotlinks.value && (
                        <ErrorHandler>
                            <HotlinksAtom hotlinks={designSystem.atoms.hotlinks} />
                        </ErrorHandler>
                    )}
                    {showAtom === atoms.inputBackground.value && (
                        <ErrorHandler>
                            <InputBackgroundsAtom inputBackground={designSystem.atoms.inputBackground} />
                        </ErrorHandler>
                    )}
                    {showAtom === atoms.elevationSettings.value && (
                        <ElevationsAtom elevationSettings={designSystem.atoms.elevationSettings}/>
                    )}
                    {showAtom === atoms.bevelSettings.value && (
                        <BevelsAtom bevelSettings={designSystem.atoms.bevelSettings}/>
                    )}
                    {showAtom === atoms.animationSettings.value && (
                        <ErrorHandler>
                            <AnimationAtom atom={designSystem.atoms.animationSettings}/>
                        </ErrorHandler>
                    )}

                    {
                    // DEMO:    Add your atom to the content
                    /* {showAtom === atoms.minimumTarget.value && (
                        <ErrorHandler>
                            <ExampleAtom atom={designSystem.atoms.minimumTarget}/>
                        </ErrorHandler>
                    )} */
                    }

                </div>
            </div>
        </>
    );
}

