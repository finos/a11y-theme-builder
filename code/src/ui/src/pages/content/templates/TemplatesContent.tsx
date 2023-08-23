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
import { ListsSingle } from '../../templates/ListsSingle';
import { ListsDouble } from '../../templates/ListsDouble';
import { ListsTriple } from '../../templates/ListsTriple';
import { ListsSingleClickable } from '../../templates/ListsSingleClickable';
import { ListsDoubleClickable  } from '../../templates/ListsDoubleClickable';
import { ListsTripleClickable  } from '../../templates/ListsTripleClickable';
import { CardsStandard  } from '../../templates/CardsStandard';
import { IconCardsStandard  } from '../../templates/IconCardsStandard';
import { ImageCardsStandard  } from '../../templates/ImageCardsStandard';
import { ImageCardsStandard916  } from '../../templates/ImageCardsStandard916';
import { VideoLayouts  } from '../../templates/VideoLayouts';
import { YouTubeLayouts  } from '../../templates/YouTubeLayouts';
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
    listVariations: {value: "listVariations", label: "List - Single Line", template: "listVariations", disabled: false},
    listsDoubleVariations: {value: "listsDoubleVariations", label: "List - Double Line", template: "listsDoubleVariations", disabled: false},
    listsTripleVariations: {value: "listsTripleVariations", label: "List - Triple Line", template: "listsTripleVariations", disabled: false},
    listVariationsClickable: {value: "listVariationsClickable", label: "Lists, Clickable - Single Line", template: "listVariationsClickable", disabled: false},
    listsDoubleVariationsClickable: {value: "listsDoubleVariationsClickable", label: "Lists, Clickable - Double Line", template: "listsDoubleVariationsClickable", disabled: false},
    listsTripleVariationsClickable: {value: "listsTripleVariationsClickable", label: "Lists, Clickable - Triple Line", template: "listsTripleVariationsClickable", disabled: false},
    cardVariationsStandard: {value: "cardVariationsStandard", label: "Cards, Standard", template: "cardVariationsStandard", disabled: false},
    cardVariationsIcons: {value: "cardVariationsIcons", label: "Cards, with Icons", template: "cardVariationsIcons", disabled: false},
    imageCardVariations: {value: "imageCardVariations", label: "Cards, with Images 9:21", template: "imageCardVariations", disabled: false},
    imageCard916Variations: {value: "imageCard916Variations", label: "Cards, with Images 9:16", template: "imageCard916Variations", disabled: false},
    videoVariations: {value: "videoVariations", label: "Videos", template: "videoVariations", disabled: false},
    youTubeVariations: {value: "youTubeVariations", label: "YouTube Videos", template: "youTubeVariations", disabled: false},

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

    let videoSelected = false;
    if (pref.get("templates-templates-selected") == "true") {
        videoSelected = true;
    }
    const [displayVideo, setDisplayVideo] = useState<boolean>(videoSelected);
    useEffect(() => {
        pref.set("templates-templates-selected", ""+displayVideo)
    }, [displayVideo])

    let listSelected = false;
    const [displayLists, setDisplayList] = useState<boolean>(listSelected);
    useEffect(() => {
        pref.set("templates-templates-selected", ""+displayLists)
    }, [displayLists])

    let listSelectedClickable = false;
    const [displayListsClickable, setDisplayListClickable] = useState<boolean>(listSelectedClickable);
    useEffect(() => {
        pref.set("templates-templates-selected", ""+displayListsClickable)
    }, [displayListsClickable])

    let cardsClickable = false;
    const [displayCardsClickable, setDisplayCardsClickable] = useState<boolean>(cardsClickable);
    useEffect(() => {
        pref.set("templates-templates-selected", ""+displayCardsClickable)
    }, [displayCardsClickable])

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
                    <LeftNavItem text={"Images"} indent={1} onClick={()=>setDisplayGeneral(!displayGeneral)}>
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
                    <LeftNavItem text={"Videos"} indent={1} onClick={()=>setDisplayVideo(!displayVideo)}>
                        {displayVideo ? <ExpandLess /> : <ExpandMore />}
                    </LeftNavItem>
                    <Collapse in={displayVideo} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <LeftNavTemplates item={templates.videoVariations} indent={2} />
                        </List>
                        <List component="div" disablePadding>
                            <LeftNavTemplates item={templates.youTubeVariations} indent={2} />
                        </List>
                    </Collapse>
                    <LeftNavItem text={"Lists - Not Clickable"} indent={1} onClick={()=>setDisplayList(!displayLists)}>
                        {displayLists ? <ExpandLess /> : <ExpandMore />}
                    </LeftNavItem>
                    <Collapse in={displayLists} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <LeftNavTemplates item={templates.listVariations} indent={2} />
                        </List>
                        <List component="div" disablePadding>
                            <LeftNavTemplates item={templates.listsDoubleVariations} indent={2} />
                        </List>
                        <List component="div" disablePadding>
                            <LeftNavTemplates item={templates.listsTripleVariations} indent={2} />
                        </List>
                    </Collapse>
                    <LeftNavItem text={"Lists, Clickable"} indent={1} onClick={()=>setDisplayListClickable(!displayListsClickable)}>
                        {displayListsClickable ? <ExpandLess /> : <ExpandMore />}
                    </LeftNavItem>
                    <Collapse in={displayListsClickable} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <LeftNavTemplates item={templates.listVariationsClickable} indent={2} />
                        </List>
                        <List component="div" disablePadding>
                            <LeftNavTemplates item={templates.listsDoubleVariationsClickable} indent={2} />
                        </List>
                        <List component="div" disablePadding>
                            <LeftNavTemplates item={templates.listsTripleVariationsClickable} indent={2} />
                        </List>
                    </Collapse>
                    <LeftNavItem text={"Cards, White"} indent={1} onClick={()=>setDisplayCardsClickable(!displayCardsClickable)}>
                        {displayCardsClickable ? <ExpandLess /> : <ExpandMore />}
                    </LeftNavItem>
                    <Collapse in={displayCardsClickable} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <LeftNavTemplates item={templates.cardVariationsStandard} indent={2} />
                        </List>
                        <List component="div" disablePadding>
                            <LeftNavTemplates item={templates.cardVariationsIcons} indent={2} />
                        </List>
                        <List component="div" disablePadding>
                            <LeftNavTemplates item={templates.imageCard916Variations} indent={2} />
                        </List>
                        <List component="div" disablePadding>
                            <LeftNavTemplates item={templates.imageCardVariations} indent={2} />
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
                {showTemplate === templates.listVariations.value && (
                    <ErrorHandler>
                        <ListsSingle />
                    </ErrorHandler>
                )}
                {showTemplate === templates.listsDoubleVariations.value && (
                    <ErrorHandler>
                        <ListsDouble />
                    </ErrorHandler>
                )}
                {showTemplate === templates.listsTripleVariations.value && (
                    <ErrorHandler>
                        <ListsTriple />
                    </ErrorHandler>
                )}
                {showTemplate === templates.listVariationsClickable.value && (
                    <ErrorHandler>
                        <ListsSingleClickable />
                    </ErrorHandler>
                )}
                {showTemplate === templates.listsDoubleVariationsClickable.value && (
                    <ErrorHandler>
                        <ListsDoubleClickable />
                    </ErrorHandler>
                )}
                {showTemplate === templates.listsTripleVariationsClickable.value && (
                    <ErrorHandler>
                        <ListsTripleClickable />
                    </ErrorHandler>
                )}
                {showTemplate === templates.cardVariationsStandard.value && (
                    <ErrorHandler>
                        <CardsStandard />
                    </ErrorHandler>
                )}
                {showTemplate === templates.cardVariationsIcons.value && (
                    <ErrorHandler>
                        <IconCardsStandard />
                    </ErrorHandler>
                )}
                {showTemplate === templates.imageCardVariations.value && (
                    <ErrorHandler>
                        <ImageCardsStandard />
                    </ErrorHandler>
                )}
                {showTemplate === templates.imageCard916Variations.value && (
                    <ErrorHandler>
                        <ImageCardsStandard916 />
                    </ErrorHandler>
                )}
                {showTemplate === templates.videoVariations.value && (
                    <ErrorHandler>
                        <VideoLayouts />
                    </ErrorHandler>
                )}
                {showTemplate === templates.youTubeVariations.value && (
                    <ErrorHandler>
                        <VideoLayouts />
                    </ErrorHandler>
                )}
            </div>
            </div>
        </>
    );
}
