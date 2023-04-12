/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React from 'react';
import { useEffect, useState } from 'react';
import { DesignSystem, Event, EventType, Organism} from 'a11y-theme-builder-sdk';
import { LeftNavHeader, LeftNavItem } from '../../../components/LeftNavTabs';
import OrganismIntro from './OrganismIntro';
import { ErrorHandler } from '../../../ErrorHandler';
import { HeroOrganism } from '../../organisms/HeroOrganism';
import { List, Collapse } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { PrimaryNavOrganism } from '../../organisms/PrimaryNavOrganism';
import { SecondaryNavOrganism } from '../../organisms/SecondaryNavOrganism';
import { FooterCopyrightOrganism } from '../../organisms/FooterCopyrightOrganism';

interface organismItem {
    value: string;
    label: string;
    organism: string;
    disabled: boolean;
}

const organismsList: {[key: string]:organismItem} = {
    dataTables: {value: "dataTables", label: "Data Tables", organism: "Data Tables", disabled: true},
    hero: {value: "hero", label: "Hero", organism: "Hero", disabled: true},
    primaryNav: {value: "primaryNav", label: "Primary Nav", organism: "Primary Nav", disabled: true},
    secondaryNav: {value: "secondaryNav", label: "Secondary Nav", organism: "Secondary Nav", disabled: true},
    footerAndCopyright: {value: "footerAndCopyright", label: "Footer and Copyright", organism: "Footer and Copyright", disabled: true},
}

// Organisms that are not going to be implemented for MVP
const notImplemented = ["dataTables", "primaryNav", "secondaryNav", "footerAndCopyright"]

interface Props {
    user: any;
    designSystem: DesignSystem;
}

export const OrganismContent: React.FC<Props> = ({ user, designSystem }) => {

    let navigationSelected = false;
    if (localStorage.getItem("themebuilder-organism-navigation-selected") == "true") {
        navigationSelected = true;
    }
    const [displayNavigation, setDisplayNavigation] = useState<boolean>(navigationSelected);
    useEffect(() => {
        console.log("displayNavigation=",displayNavigation)
        localStorage.setItem("themebuilder-organism-navigation-selected", ""+displayNavigation)
    }, [displayNavigation])

    function enableDisableItems() {
        let _organisms = {...organisms};
        const isDisabled = !designSystem.organisms.isEnabled();
        for (const [key, node] of Object.entries(designSystem.organisms)) {
            if (node instanceof Organism) {
                if (notImplemented.indexOf(key) == -1) {
                    if (_organisms[key]) {
                        _organisms[key].disabled = isDisabled;
                    }
                }
            }
        }
        setOrganisms(_organisms);
        if (_organisms[showOrganism] && _organisms[showOrganism].disabled) {
            setShowOrganism("organisms");
        }
    }

    const [organisms, setOrganisms] = useState<{[key: string]:organismItem}>(organismsList);
    useEffect(() => {
        if (designSystem) {
            designSystem.setListener("OrganismContent-isEditable", 
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
        //console.log("Organisms updated =",organisms)
    }, [organisms])

    const [showOrganism, setShowOrganism] = React.useState(localStorage.getItem("themebuilder-organism-content-selected") || "organisms");
    useEffect(() => {
        localStorage.setItem("themebuilder-organism-content-selected", showOrganism)
    }, [showOrganism])

    interface LeftNavOrganismProps { item: any, indent?:number, disabled?:boolean };
    const LeftNavOrganism : React.FC<LeftNavOrganismProps> = ({item, indent, disabled}) => {
        return (
            <LeftNavItem 
                selected={showOrganism}
                value={item.value}
                text={item.label} 
                indent={indent} 
                disabled={disabled !== undefined ? disabled : item.disabled} 
                onClick={()=> {setShowOrganism(item.value)}}
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
                        <LeftNavItem text="Organisms" value="organisms" selected={showOrganism} indent={1} onClick={()=> {setShowOrganism("organisms")}}/>
                        <LeftNavHeader>Assign Desktop Style</LeftNavHeader>
                        <LeftNavOrganism item={organisms.dataTables} indent={2} />
                        <LeftNavOrganism item={organisms.hero} indent={2} />
                        <LeftNavItem text={"Navigation"} indent={1} onClick={()=>setDisplayNavigation(!displayNavigation)}>
                            {displayNavigation ? <ExpandLess /> : <ExpandMore />}
                        </LeftNavItem>
                        <Collapse in={displayNavigation} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <LeftNavOrganism item={organisms.primaryNav} indent={2} />
                                <LeftNavOrganism item={organisms.secondaryNav} indent={2} />
                                <LeftNavOrganism item={organisms.footerAndCopyright} indent={2} />
                            </List>
                        </Collapse>
                    </List>
                </div>
            </div>
            <div className="design-system-editor-right-content">
                <div className="design-system-editor-right-content-scrollable">
                    {showOrganism === "organisms" && (
                        <OrganismIntro />
                    )}
                    {showOrganism === "dataTables" && (
                        <div>dataTables</div>
                    )}
                    {showOrganism === "hero" && (
                        <ErrorHandler>
                            <HeroOrganism organism={designSystem.organisms.hero}/>
                        </ErrorHandler>
                    )}
                    {showOrganism === "primaryNav" && (
                        <PrimaryNavOrganism organism={designSystem.organisms.primaryNav}/>
                    )}
                    {showOrganism === "secondaryNav" && (
                        <SecondaryNavOrganism organism={designSystem.organisms.secondaryNav}/>
                    )}
                    {showOrganism === "footerAndCopyright" && (
                        <FooterCopyrightOrganism organism={designSystem.organisms.footerAndCopyright}/>
                    )}
                </div>
            </div>
        </>
    );
}

