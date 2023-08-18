/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React from 'react';
import { useEffect, useState, ReactNode } from 'react';
import { DesignSystem, Event, EventType, Popovers } from 'a11y-theme-builder-sdk';
import TemplatesIntro from './TemplatesIntro';
import { ErrorHandler } from '../../../ErrorHandler';
import { List, ListItemButton, ListItemText, ListSubheader, styled, Collapse, Button, InputLabel, TextField, InputAdornment } from '@mui/material';
import { LeftNavHeader, LeftNavItem } from '../../../components/LeftNavTabs';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { TemplateExample } from '../../templates/TemplateExample';
import { BackgroundImageExample } from '../../templates/BackgroundImageExample';
import { Preferences } from '../../../Preferences';

const name = "TemplatesContent"

interface templateItem {
    value: string;
    label: string;
    template: string;
    disabled: boolean;
}

const templateList: {[key: string]:templateItem} = {
    imageText: {value: "imageText", label: "Image & Text", template: "ImageText", disabled: false},
    backgroundimageText: {value: "backgroundimageText", label: "Background Image & Text", template: "ImageText", disabled: false},

}

interface Props {
    user: any;
    designSystem: DesignSystem;
}

export const TemplatesContent: React.FC<Props> = ({ user, designSystem }) => {
    const pref = new Preferences(designSystem.name);

    let generalSelected = false;
    if (pref.get("templates-general-selected") == "true") {
        generalSelected = true;
    }
    const [displayGeneral, setDisplayGeneral] = useState<boolean>(generalSelected);
    useEffect(() => {
        pref.set("templates-templates-selected", ""+displayGeneral)
    }, [displayGeneral])

    const [templates, setTemplates] = useState<{[key: string]:templateItem}>(templateList);


    useEffect(() => {
    }, [templates])

    const [showTemplate, setShowTemplate] = React.useState(pref.get("template-content-selected") || "templates");
    useEffect(() => {
        pref.set("template-content-selected", showTemplate)
        console.log(`${name} - showTemplate=${showTemplate}`)
    }, [showTemplate])

    interface LeftNavTemplatesProps { item: any, indent?:number, disabled?:boolean };
    const LeftNavTemplates : React.FC<LeftNavTemplatesProps> = ({item, indent, disabled}) => {
        return (
            <LeftNavItem
                selected={showTemplate}
                value={item.value}
                text={item.label}
                indent={indent}
                disabled={disabled !== undefined ? disabled : item.disabled}
                onClick={()=> {setShowTemplate(item.value)}}
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
                    <LeftNavItem text={"Templates"} value="templates" indent={1} selected={showTemplate} onClick={()=> {setShowTemplate("templates")}}/>

                    <LeftNavHeader>Template Settings</LeftNavHeader>
                    <LeftNavItem text={"General Desktop"} indent={1} onClick={()=>setDisplayGeneral(!displayGeneral)}>
                        {displayGeneral ? <ExpandLess /> : <ExpandMore />}
                    </LeftNavItem>
                    <Collapse in={displayGeneral} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <LeftNavTemplates item={templates.imageText} indent={2} />
                        </List>
                        <List component="div" disablePadding>
                            <LeftNavTemplates item={templates.backgroundimageText} indent={2} />
                        </List>
                    </Collapse>
                </List>
            </div>
            </div>
            <div className="design-system-editor-right-content">
            <div className="design-system-editor-right-content-scrollable">
                {showTemplate === "templates" &&
                    <TemplatesIntro />
                }
                {showTemplate === templates.imageText.value && (
                    <ErrorHandler>
                        <TemplateExample />
                    </ErrorHandler>
                )}
                {showTemplate === templates.backgroundimageText.value && (
                    <ErrorHandler>
                        <BackgroundImageExample />
                    </ErrorHandler>
                )}

            </div>
            </div>
        </>
    );
}
