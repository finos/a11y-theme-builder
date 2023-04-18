/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React from 'react';
import { useEffect, useState, ReactNode } from 'react';
import { DesignSystem, Event, EventType, Molecule, Popovers } from 'a11y-theme-builder-sdk';
import MoleculeIntro from './MoleculeIntro';
import { ErrorHandler } from '../../../ErrorHandler';
import { List, ListItemButton, ListItemText, ListSubheader, styled, Collapse, Button, InputLabel, TextField, InputAdornment } from '@mui/material';
import { LeftNavHeader, LeftNavItem } from '../../../components/LeftNavTabs';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { AvatarsMolecule } from '../../molecules/AvatarsMolecule';
import { ButtonsStandardMolecule } from '../../molecules/ButtonsStandardMolecule';
import { ButtonsSmallMolecule } from '../../molecules/ButtonsSmallMolecule';
import { CardsMolecule } from '../../molecules/CardsMolecule';
import { DropdownsMolecule } from '../../molecules/DropdownsMolecule';
import { ImagesMolecule } from '../../molecules/ImagesMolecule';
import { ToastsMolecule } from '../../molecules/ToastsMolecule';
import { PopoversMolecule } from '../../molecules/PopoversMolecule';
import { SlidersMolecule } from '../../molecules/SlidersMolecule';
import { SpacingMolecule } from '../../molecules/SpacingMolecule';
import { ModalMolecule } from '../../molecules/ModalMolecule';
import { ChipsMolecule } from '../../molecules/ChipsMolecule';

const name = "MoleculeContent"

interface moleculeItem {
    value: string;
    label: string;
    molecule: string;
    disabled: boolean;
}

const moleculesList: {[key: string]:moleculeItem} = {
    avatars: {value: "avatars", label: "Avatars", molecule: "Avatars", disabled: true},
    standardButtons: {value: "standardButtons", label: "Buttons - Standard", molecule: "Buttons - Standard", disabled: true},
    smallButtons: {value: "smallButtons", label: "Buttons - Small", molecule: "Buttons - Small", disabled: true},
    standardCards: {value: "standardCards", label: "Cards", molecule: "Cards", disabled: true},
    chips: {value: "chips", label: "Chips", molecule: "Chips", disabled: true},
    dropdowns: {value: "dropdowns", label: "Dropdowns", molecule: "Dropdowns", disabled: true},
    images: {value: "imagesAndVideos", label: "Images", molecule: "Images", disabled: true},
    modal: {value: "modal", label: "Modal", molecule: "Modal", disabled: true},
    spacing: {value: "spacing", label: "Spacing", molecule: "Spacing", disabled: true},
    popovers: {value: "popovers", label: "Popovers", molecule: "Popovers", disabled: true},
    sliders: {value: "sliders", label: "Sliders", molecule: "Sliders", disabled: true},
    toasts: {value: "toasts", label: "Toasts", molecule: "Toasts", disabled: true},

    donut: {value: "donut", label: "Donut", molecule: "Donut", disabled: true},
    pie: {value: "pie", label: "Pie", molecule: "Pie", disabled: true},
    bar: {value: "bar", label: "Bar", molecule: "Bar", disabled: true},
    line: {value: "line", label: "Line", molecule: "Line", disabled: true},
    progress: {value: "progress", label: "Progress", molecule: "Progress", disabled: true},

}

// Molecules that are not going to be implemented for MVP
const notImplemented = ["charts", "donut", "pie", "bar", "line", "progress"]

interface Props {
    user: any;
    designSystem: DesignSystem;
}

export const MoleculeContent: React.FC<Props> = ({ user, designSystem }) => {

    let generalSelected = false;
    if (localStorage.getItem("themebuilder-molecule-general-selected") == "true") {
        generalSelected = true;
    }
    const [displayGeneral, setDisplayGeneral] = useState<boolean>(generalSelected);
    useEffect(() => {
        localStorage.setItem("themebuilder-molecule-general-selected", ""+displayGeneral)
    }, [displayGeneral])

    let chartsSelected = false;
    if (localStorage.getItem("themebuilder-molecule-charts-selected") == "true") {
        generalSelected = true;
    }
    const [displayCharts, setDisplayCharts] = useState<boolean>(chartsSelected);
    useEffect(() => {
        localStorage.setItem("themebuilder-molecule-charts-selected", ""+displayCharts)
    }, [displayCharts])

    function enableDisableItems() {
        let _molecules = {...molecules};
        const isDisabled = !designSystem.molecules.isEnabled();
        for (const [key, node] of Object.entries(designSystem.molecules)) {
            if (node instanceof Molecule) {
                if (notImplemented.indexOf(key) == -1) {
                    if (_molecules[key]) {
                        _molecules[key].disabled = isDisabled;
                    }
                }
            }
        }
        setMolecules(_molecules);
        if (_molecules[showMolecule] && _molecules[showMolecule].disabled) {
            setShowMolecule("molecules");
        }
    }

    const [molecules, setMolecules] = useState<{[key: string]:moleculeItem}>(moleculesList);
    useEffect(() => {
        if (designSystem) {
            designSystem.setListener("MoleculeContent-isEditable",
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
        //console.log("Molecules updated =",molecules)
    }, [molecules])

    const [showMolecule, setShowMolecule] = React.useState(localStorage.getItem("themebuilder-molecule-content-selected") || "molecules");
    useEffect(() => {
        localStorage.setItem("themebuilder-molecule-content-selected", showMolecule)
        console.log(`${name} - showMolecule=${showMolecule}`)
    }, [showMolecule])

    interface LeftNavMoleculeProps { item: any, indent?:number, disabled?:boolean };
    const LeftNavMolecule : React.FC<LeftNavMoleculeProps> = ({item, indent, disabled}) => {
        return (
            <LeftNavItem
                selected={showMolecule}
                value={item.value}
                text={item.label}
                indent={indent}
                disabled={disabled !== undefined ? disabled : item.disabled}
                onClick={()=> {setShowMolecule(item.value)}}
            />
        )
    }

    // interface LeftNavItemProps { value?: string, text: string, indent?: number, disabled?:boolean, children?:ReactNode, onClick?:any}
    // const LeftNavItem : React.FC<LeftNavItemProps> = (props) => {
    //     const selected = (showMolecule == props.value);
    //     let fontSize = "1em";
    //     if (props.indent && (props.indent > 1)) {
    //         fontSize = (1-props.indent*0.05) + "em";
    //     }
    //     return(
    //         <ListItemButton sx={{
    //             pl: 2 + (props.indent ? 2*props.indent : 0),
    //             background: selected ? "var(--secondary)" : null,
    //             borderRight: selected ? "2px solid black" : null,
    //             ':hover': { backgroundColor: selected ? "var(--secondary)" : null},
    //         }}
    //             disabled={props.disabled}
    //             onClick={props.onClick}
    //         >
    //             <ListItemText
    //                 primary={props.text}
    //                 primaryTypographyProps={{
    //                     textTransform: "uppercase",
    //                     fontSize: fontSize,
    //                     fontWeight: "500",
    //                 }}
    //             >
    //             </ListItemText>
    //             {props.children}
    //         </ListItemButton>
    //     )
    // }

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
                    <LeftNavItem text={"Molecules"} value="molecules" indent={1} selected={showMolecule} onClick={()=> {setShowMolecule("molecules")}}/>

                    <LeftNavHeader>Molecule Settings</LeftNavHeader>
                    <LeftNavItem text={"General Desktop"} indent={1} onClick={()=>setDisplayGeneral(!displayGeneral)}>
                        {displayGeneral ? <ExpandLess /> : <ExpandMore />}
                    </LeftNavItem>
                    <Collapse in={displayGeneral} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <LeftNavMolecule item={molecules.avatars} indent={2} />
                            <LeftNavMolecule item={molecules.standardButtons} indent={2} />
                            <LeftNavMolecule item={molecules.smallButtons} indent={2} />
                            <LeftNavMolecule item={molecules.standardCards} indent={2} />
                            <LeftNavMolecule item={molecules.chips} indent={2} />
                            <LeftNavMolecule item={molecules.dropdowns} indent={2} />
                            <LeftNavMolecule item={molecules.images} indent={2} />
                            <LeftNavMolecule item={molecules.modal} indent={2} />
                            <LeftNavMolecule item={molecules.spacing} indent={2} />
                            <LeftNavMolecule item={molecules.popovers} indent={2} />
                            <LeftNavMolecule item={molecules.sliders} indent={2} />
                            <LeftNavMolecule item={molecules.toasts} indent={2} />
                        </List>
                    </Collapse>
                    <LeftNavItem text={"Charts"} indent={1} onClick={()=>setDisplayCharts(!displayCharts)}>
                        {displayCharts ? <ExpandLess /> : <ExpandMore />}
                    </LeftNavItem>
                    <Collapse in={displayCharts} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <LeftNavMolecule item={molecules.donut} indent={2} />
                            <LeftNavMolecule item={molecules.pie} indent={2} />
                            <LeftNavMolecule item={molecules.bar} indent={2} />
                            <LeftNavMolecule item={molecules.line} indent={2} />
                            <LeftNavMolecule item={molecules.progress} indent={2} />
                        </List>
                    </Collapse>

                </List>
            </div>
            </div>
            <div className="design-system-editor-right-content">
            <div className="design-system-editor-right-content-scrollable">
                {showMolecule === "molecules" &&
                    <MoleculeIntro />
                }
                {showMolecule === molecules.avatars.value && (
                    <ErrorHandler>
                        <AvatarsMolecule molecule={designSystem.molecules.avatars}/>
                    </ErrorHandler>
                )}
                {showMolecule === molecules.standardButtons.value && (
                    <ErrorHandler>
                        <ButtonsStandardMolecule molecule={designSystem.molecules.standardButtons} designSystem={designSystem}/>
                    </ErrorHandler>
                )}
                {showMolecule === molecules.smallButtons.value && (
                    <ErrorHandler>
                        <ButtonsSmallMolecule molecule={designSystem.molecules.smallButtons} designSystem={designSystem}/>
                    </ErrorHandler>
                )}
                {showMolecule === molecules.standardCards.value && (
                    <ErrorHandler>
                        <CardsMolecule molecule={designSystem.molecules.standardCards} designSystem={designSystem}/>
                    </ErrorHandler>
                )}
                {showMolecule === molecules.chips.value && (
                    <ErrorHandler>
                        <ChipsMolecule molecule={designSystem.molecules.chips} designSystem={designSystem}/>
                    </ErrorHandler>
                )}
                {showMolecule === molecules.dropdowns.value && (
                     <ErrorHandler>
                         <DropdownsMolecule molecule={designSystem.molecules.dropdowns} designSystem={designSystem}/>
                    </ErrorHandler>
                )}
                {showMolecule === molecules.images.value && (
                    <ErrorHandler>
                        <ImagesMolecule molecule={designSystem.molecules.images} designSystem={designSystem}/>
                    </ErrorHandler>
                )}
                {showMolecule === molecules.modal.value && (
                    <ErrorHandler>
                        <ModalMolecule modalMolecule={designSystem.molecules.modal}/>
                    </ErrorHandler>
                )}
                {showMolecule === molecules.spacing.value && (
                    <ErrorHandler>
                        <SpacingMolecule spacingMolecule={designSystem.molecules.spacing}/>
                    </ErrorHandler>
                )}
                {showMolecule === molecules.popovers.value && (
                    <ErrorHandler>
                        <PopoversMolecule popoversMolecule={designSystem.molecules.popovers} designSystem={designSystem}/>
                    </ErrorHandler>
                )}
                {showMolecule === molecules.sliders.value && (
                    <ErrorHandler>
                        <SlidersMolecule slidersMolecule={designSystem.molecules.sliders}/>
                    </ErrorHandler>
                )}
                {showMolecule === molecules.toasts.value && (
                    <ErrorHandler>
                        <ToastsMolecule toastsMolecule={designSystem.molecules.toasts}/>
                    </ErrorHandler>
                )}
            </div>
            </div>
        </>
    );
}
