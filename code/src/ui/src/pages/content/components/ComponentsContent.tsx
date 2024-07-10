/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { DesignSystem, Event, EventType } from '@finos/a11y-theme-builder-sdk';
import ComponentsIntro from './ComponentIntro';
import { List, Collapse } from '@mui/material';
import { LeftNavHeader, LeftNavItem } from '../../../components/LeftNavTabs';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { NavSwitch } from '../../../components/NavSwitch';
import { AccordionComponent } from '../../components/AccordionComponent';
import { AvatarSingleComponent } from '../../components/AvatarSingleComponent';
import { BreadcrumbsComponent } from '../../components/BreadcrumbsComponent';
import { ButtonsStandardComponent } from '../../components/ButtonsStandardComponent';
import { ButtonsSmallComponent } from '../../components/ButtonsSmallComponent';
import { ButtonGroupsComponent } from '../../components/ButtonGroupsComponent';
import { DisplayComponent } from '../../components/typography/DisplayComponent';
import { HeadersComponent } from '../../components/typography/HeadersComponent';
import { BodyComponent } from '../../components/typography/BodyComponent';
import { SmallFontsStylesComponent } from '../../components/typography/SmallFontsStylesComponent';
import { StatStylesComponent } from '../../components/typography/StatStylesComponent';
import { TooltipsComponent } from '../../components/TooltipsComponent';
import { TextDecorationComponent } from '../../components/TextDecorationComponent';
import { ImageDecorationsComponent } from '../../components/ImageDecorationsComponent';
import { ImagesList } from '../../components/ImagesList';
import { ToastsSingleLineComponent } from '../../components/ToastsSingleLineComponent';
import { ToastsDoubleLineComponent } from '../../components/ToastsDoubleLineComponent';
import { ToastsTripleLineComponent } from '../../components/ToastsTripleLineComponent';
import { SwitchComponent } from '../../components/SwitchComponent';
import { RadioButtonsComponent } from '../../components/RadioButtonsComponent';
import { PopoversComponent } from '../../components/PopoversComponent';
import { CoreColorsComponent } from '../../components/colors/CoreColorsComponent';
import { ThemeColorsComponent } from '../../components/colors/ThemeColorsComponent';
import { ExtendedPaletteComponent } from '../../components/colors/ExtendedPaletteComponent';
import { BackgroundColorsComponent } from '../../components/colors/BackgroundColorsComponent';
import { GradientsComponent } from '../../components/colors/GradientsComponent';
import { HotlinksComponent } from '../../components/colors/HotlinksComponent';
import { TextComponent } from '../../components/colors/TextComponent';
import { ColorStatesComponent } from '../../components/colors/ColorStatesComponent';
import { PrimaryTabsComponent } from '../../components/PrimaryTabsComponent';
import { SecondaryTabsComponent } from '../../components/SecondaryTabsComponent';
import { CardsStandardComponent } from '../../components/cards/CardsStandardComponent';
import { CardsStandardIconComponent } from '../../components/cards/CardsStandardIconComponent';
import { CardsImagesComponent } from '../../components/cards/CardsImagesComponent';
import { CardsImagesComponent921 } from '../../components/cards/CardsImagesComponent921';
import { CardsStatsComponent } from '../../components/cards/CardsStatsComponent';
import { CardsStatsIconsComponent } from '../../components/cards/CardsStatsIconsComponent';
import { CheckboxesComponent } from '../../components/CheckboxesComponent';
import { PaginationComponent } from '../../components/PaginationComponent';
import { ListsSingleComponent } from '../../components/ListsSingleComponent';
import { ListsTripleComponent } from '../../components/ListsTripleComponent';
import { ListsDoubleComponent } from '../../components/ListsDoubleComponent';
import { MultiselectDropdownComponent } from '../../components/MultiselectDropdownComponent';
import { TopAppBars } from '../../components/TopAppBars';
import { MenusComponent } from '../../components/MenusComponent';
import { ChipsComponent } from '../../components/ChipsComponent';
import { DropdownComponent } from '../../components/DropdownComponent';
import { SlidersComponent } from '../../components/SlidersComponent';
import { DividerComponent } from '../../components/DividerComponent';
import { HeroExample } from '../../components/HeroExample';
import { ElevationComponent } from '../../components/shadows/ElevationComponent';
import { BevelComponent } from '../../components/shadows/BevelComponent';
import { InvertedBevelComponent } from '../../components/shadows/InvertedBevelComponent';
import { RidgeComponent } from '../../components/shadows/RidgeComponent';
import { GrooveComponent } from '../../components/shadows/GrooveComponent';
import { GlowComponent } from '../../components/shadows/GlowComponent';

import { Preferences } from '../../../Preferences';
import ComponentIntro from './ComponentIntro';

interface Props {
    user: any;
    designSystem: DesignSystem;
}

export const ComponentsContent: React.FC<Props> = ({ user, designSystem }) => {
    const pref = new Preferences(designSystem.name);

    let colorsSelected = false;
    if (pref.get("components-colors-selected") == "true") {
        colorsSelected = true;
    }
    const [displayColors, setDisplayColors] = useState<boolean>(colorsSelected);
    useEffect(() => {
        pref.set("components-colors-selected", ""+displayColors)
    }, [displayColors])

    let shadowSelected = false;
    if (pref.get("components-shadows-selected") == "true") {
        shadowSelected = true;
    }
    const [displayShadows, setDisplayShadows] = useState<boolean>(shadowSelected);
    useEffect(() => {
        pref.set("components-shadows-selected", ""+displayShadows)
    }, [displayShadows])

    let typographySelected = false;
    if (pref.get("components-typography-selected") == "true") {
        typographySelected = true;
    }
    const [displayTypography, setDisplayTypography] = useState<boolean>(typographySelected);
    useEffect(() => {
        pref.set("components-typography-selected", ""+displayTypography)
    }, [displayTypography])

    const [showComponent, setShowComponent] = React.useState(pref.get("components-content-selected") || "colorsPrimary");
    useEffect(() => {
        pref.set("components-content-selected", showComponent)
    }, [showComponent])


    const [disabled, setDisabled] = useState<boolean>(false);
    function enableDisableItems() {
        const isDisabled = !designSystem.organisms.isEnabled();
        setDisabled(isDisabled);
        if (isDisabled) {
            setShowComponent("");
        }
    }
    useEffect(() => {
        if (designSystem) {
            designSystem.setListener("CodeContent-isEditable",
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
    }, [disabled])

    const [darkMode, setDarkMode] = useState<boolean>(pref.get("components-mode-selected") == "true" || false);
    useEffect(() => {
        pref.set("components-mode-selected", ""+darkMode);
    }, [darkMode]);

    return (
        <>
            <div className="design-system-editor-left-nav" >
            <div className="design-system-editor-left-nav-scrollable">
                <List
                    sx={{
                        '& ul': {padding:0},
                        paddingTop: "0px",
                    }}
                >
                    <LeftNavHeader>Introduction</LeftNavHeader>
                    <LeftNavItem text={"Components"} value="Components" indent={1} selected={showComponent} onClick={()=> {setShowComponent("Components")}}/>
                    
                    <LeftNavHeader>Styles</LeftNavHeader>
                    <LeftNavItem text="Mode" indent={1} />
                    <div style={{paddingLeft: "50px"}}>
                        <NavSwitch leftLabel="Light" rightLabel="Dark" checked={darkMode} onChange={()=>setDarkMode(!darkMode)}/>
                    </div>
                    <LeftNavItem text={"Colors"} indent={1} onClick={()=>setDisplayColors(!displayColors)}>
                        {displayColors ? <ExpandLess /> : <ExpandMore />}
                    </LeftNavItem>
                    <Collapse in={displayColors} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <LeftNavItem text={"Core Colors"} value="colorsCoreColors" indent={2} selected={showComponent} onClick={()=> {setShowComponent("colorsCoreColors")}} />
                            <LeftNavItem text={"Theme Colors"} value="colorsThemeColors" indent={2} selected={showComponent} onClick={()=> {setShowComponent("colorsThemeColors")}} />
                            <LeftNavItem text={"Extended Palette"} value="colorsExtendedPalette" indent={2} selected={showComponent} onClick={()=> {setShowComponent("colorsExtendedPalette")}} />
                            <LeftNavItem text={"Backgrounds"} value="colorsBackgroundColors" indent={2} selected={showComponent} onClick={()=> {setShowComponent("colorsBackgroundColors")}} />
                            <LeftNavItem text={"Gradients"} value="colorsGradients" indent={2} selected={showComponent} onClick={()=> {setShowComponent("colorsGradients")}} />
                            <LeftNavItem text={"States"} value="colorsStates" indent={2} selected={showComponent} onClick={()=> {setShowComponent("colorsStates")}} />
                            <LeftNavItem text={"Hotlinks"} value="colorsHotlinks" indent={2} selected={showComponent} onClick={()=> {setShowComponent("colorsHotlinks")}} />
                            <LeftNavItem text={"Text"} value="colorsText" indent={2} selected={showComponent} onClick={()=> {setShowComponent("colorsText")}} />
                        </List>
                    </Collapse>
                    <LeftNavItem text={"Shadows"} indent={1} onClick={()=>setDisplayShadows(!displayShadows)}>
                        {displayShadows ? <ExpandLess /> : <ExpandMore />}
                    </LeftNavItem>
                    <Collapse in={displayShadows} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <LeftNavItem text={"Elevations"} value="shadowElevations" indent={2} selected={showComponent} onClick={()=> {setShowComponent("shadowElevations")}} />
                            <LeftNavItem text={"Bevels"} value="shadowBevels" indent={2} selected={showComponent} onClick={()=> {setShowComponent("shadowBevels")}} />
                            <LeftNavItem text={"Inverted Bevels"} value="shadowInvertedBevels" indent={2} selected={showComponent} onClick={()=> {setShowComponent("shadowInvertedBevels")}} />
                            <LeftNavItem text={"Ridges"} value="shadowRidges" indent={2} selected={showComponent} onClick={()=> {setShowComponent("shadowRidges")}} />
                            <LeftNavItem text={"Grooves"} value="shadowGrooves" indent={2} selected={showComponent} onClick={()=> {setShowComponent("shadowGrooves")}} />
                            <LeftNavItem text={"Glows"} value="shadowGlows" indent={2} selected={showComponent} onClick={()=> {setShowComponent("shadowGlows")}} />
                        </List>
                    </Collapse>
                    <LeftNavItem text={"Typography"} indent={1} onClick={()=>setDisplayTypography(!displayTypography)}>
                        {displayTypography ? <ExpandLess /> : <ExpandMore />}
                    </LeftNavItem>
                    <Collapse in={displayTypography} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <LeftNavItem text={"Display"} value="typographyPrimary" indent={2} selected={showComponent} onClick={()=> {setShowComponent("typographyPrimary")}} disabled={disabled}/>
                            <LeftNavItem text={"Headers"} value="typographyHeaders" indent={2} selected={showComponent} onClick={()=> {setShowComponent("typographyHeaders")}} disabled={disabled}/>
                            <LeftNavItem text={"Body Styles"} value="typographyBody" indent={2} selected={showComponent} onClick={()=> {setShowComponent("typographyBody")}} disabled={disabled}/>
                            <LeftNavItem text={"Small Text Styles"} value="typographySmallFontsStyles" indent={2} selected={showComponent} onClick={()=> {setShowComponent("typographySmallFontsStyles")}} disabled={disabled}/>
                            <LeftNavItem text={"Stat Text Styles"} value="statFontsStyles" indent={2} selected={showComponent} onClick={()=> {setShowComponent("statFontsStyles")}} disabled={disabled}/>
                        </List>
                    </Collapse>
                    <LeftNavHeader>Desktop Components</LeftNavHeader>
                    <LeftNavItem text={"Accordions"} value="accordions" indent={1} selected={showComponent} onClick={()=> {setShowComponent("accordions")}} disabled={disabled}/>
                    <LeftNavItem text={"App Bar"} value="appbar" indent={1} selected={showComponent} onClick={()=> {setShowComponent("appbar")}} disabled={disabled}/>

                    <LeftNavItem text={"Avatars" /* - Single */} value="avatarsSingle" indent={1} selected={showComponent} onClick={()=> {setShowComponent("avatarsSingle")}} disabled={disabled}/>
                    { /* <LeftNavItem text={"Avatars - Groups"} value="avatarsGroups" indent={1} selected={showComponent} onClick={()=> {setShowComponent("avatarsGroups")}} disabled={disabled}/> */}

                    <LeftNavItem text={"Breadcrumbs"} value="breadcrumbs" indent={1} selected={showComponent} onClick={()=> {setShowComponent("breadcrumbs")}} disabled={disabled}/>

                    <LeftNavItem text={"Buttons - Standard"} value="buttonsStandard" indent={1} selected={showComponent} onClick={()=> {setShowComponent("buttonsStandard")}} disabled={disabled}/>
                    <LeftNavItem text={"Buttons - Small"} value="buttonsSmall" indent={1} selected={showComponent} onClick={()=> {setShowComponent("buttonsSmall")}} disabled={disabled}/>
                    <LeftNavItem text={"Buttons - Groups"} value="buttonsGroups" indent={1} selected={showComponent} onClick={()=> {setShowComponent("buttonsGroups")}} disabled={disabled}/>

                    <LeftNavItem text={"Cards - Standard"} value="cardsStandard" indent={1} selected={showComponent} onClick={()=> {setShowComponent("cardsStandard")}} disabled={disabled}/>
                    <LeftNavItem text={"Cards - with Icons"} value="cardsStandardIcons" indent={1} selected={showComponent} onClick={()=> {setShowComponent("cardsStandardIcons")}} disabled={disabled}/>
                    <LeftNavItem text={"Cards - with Images 9:16 Ratio"} value="cardsImages" indent={1} selected={showComponent} onClick={()=> {setShowComponent("cardsImages")}} disabled={disabled}/>
                    <LeftNavItem text={"Cards - with Images 9:21 Ratio"} value="cardsImages921" indent={1} selected={showComponent} onClick={()=> {setShowComponent("cardsImages921")}} disabled={disabled}/>
                  {/* <LeftNavItem text={"Cards - Videos"} value="cardsVideos" indent={1} selected={showComponent} onClick={()=> {setShowComponent("cardsVideos")}} disabled={disabled}/> */}
                    <LeftNavItem text={"Cards - with Stats"} value="cardsStats" indent={1} selected={showComponent} onClick={()=> {setShowComponent("cardsStats")}} disabled={disabled}/>
                    <LeftNavItem text={"Cards - with Stats & Icons"} value="cardsStatsIcons" indent={1} selected={showComponent} onClick={()=> {setShowComponent("cardsStatsIcons")}} disabled={disabled}/>
                    <LeftNavItem text={"Checkboxes"} value="checkboxes" indent={1} selected={showComponent} onClick={()=> {setShowComponent("checkboxes")}} disabled={disabled}/>

                    <LeftNavItem text={"Chips"} value="chips" indent={1} selected={showComponent} onClick={()=> {setShowComponent("chips")}} disabled={disabled}/>

                    {/* <LeftNavItem text={"Datepicker"} value="datepicker" indent={1} selected={showComponent} onClick={()=> {setShowComponent("datepicker")}} disabled={disabled}/> */}

                    <LeftNavItem text={"Divider"} value="divider" indent={1} selected={showComponent} onClick={()=> {setShowComponent("divider")}} disabled={disabled}/>

                    <LeftNavItem text={"Dropdown"} value="dropdown" indent={1} selected={showComponent} onClick={()=> {setShowComponent("dropdown")}} disabled={disabled}/>
                    <LeftNavItem text={"Hero"} value="hero" indent={1} selected={showComponent} onClick={()=> {setShowComponent("hero")}} disabled={disabled}/>
                    <LeftNavItem text={"Images"} value="imageDecorations" indent={1} selected={showComponent} onClick={()=> {setShowComponent("imageDecorations")}} disabled={disabled}/>
                    <LeftNavItem text={"Image List"} value="imageList" indent={1} selected={showComponent} onClick={()=> {setShowComponent("imageList")}} disabled={disabled}/>

                    <LeftNavItem text={"Menus"} value="menus" indent={1} selected={showComponent} onClick={()=> {setShowComponent("menus")}} disabled={disabled}/>

                    <LeftNavItem text={"Multiselect Dropdown"} value="multiselectDropdown" indent={1} selected={showComponent} onClick={()=> {setShowComponent("multiselectDropdown")}} disabled={disabled}/>

                    <LeftNavItem text={"List - Single"} value="listsSingle" indent={1} selected={showComponent} onClick={()=> {setShowComponent("listsSingle")}} disabled={disabled}/>
                    <LeftNavItem text={"List - Double"} value="listsDouble" indent={1} selected={showComponent} onClick={()=> {setShowComponent("listsDouble")}} disabled={disabled}/>
                    <LeftNavItem text={"List - Triple"} value="listsTriple" indent={1} selected={showComponent} onClick={()=> {setShowComponent("listsTriple")}} disabled={disabled}/>

                    <LeftNavItem text={"Pagination"} value="pagination" indent={1} selected={showComponent} onClick={()=> {setShowComponent("pagination")}} disabled={disabled}/>

                    <LeftNavItem text={"Popovers"} value="popovers" indent={1} selected={showComponent} onClick={()=> {setShowComponent("popovers")}} disabled={disabled}/>

                    <LeftNavItem text={"Radio Buttons"} value="radioButtons" indent={1} selected={showComponent} onClick={()=> {setShowComponent("radioButtons")}} disabled={disabled}/>

                    <LeftNavItem text={"Sliders"} value="sliders" indent={1} selected={showComponent} onClick={()=> {setShowComponent("sliders")}} disabled={disabled}/>

                    <LeftNavItem text={"Switch"} value="switch" indent={1} selected={showComponent} onClick={()=> {setShowComponent("switch")}} disabled={disabled}/>

                    <LeftNavItem text={"Tabs - Primary"} value="tabsPrimary" indent={1} selected={showComponent} onClick={()=> {setShowComponent("tabsPrimary")}} disabled={disabled}/>
                    <LeftNavItem text={"Tabs - Secondary"} value="tabsSecondary" indent={1} selected={showComponent} onClick={()=> {setShowComponent("tabsSecondary")}} disabled={disabled}/>

                    <LeftNavItem text={"Text Decorations"} value="textDecoration" indent={1} selected={showComponent} onClick={()=> {setShowComponent("textDecoration")}} disabled={disabled}/>

                    <LeftNavItem text={"Toasts - Single Line"} value="toastsSingleLine" indent={1} selected={showComponent} onClick={()=> {setShowComponent("toastsSingleLine")}} disabled={disabled}/>
                    <LeftNavItem text={"Toasts - Double Line"} value="toastsDoubleLine" indent={1} selected={showComponent} onClick={()=> {setShowComponent("toastsDoubleLine")}} disabled={disabled}/>
                    <LeftNavItem text={"Toasts - Triple Line"} value="toastsTripleLine" indent={1} selected={showComponent} onClick={()=> {setShowComponent("toastsTripleLine")}} disabled={disabled}/>

                    <LeftNavItem text={"Tooltips"} value="tooltips" indent={1} selected={showComponent} onClick={()=> {setShowComponent("tooltips")}} disabled={disabled}/>

                    {/* <LeftNavHeader>Mobile Components</LeftNavHeader>

                    <LeftNavItem text={"Navbars - Top"} value="navbarsTop" indent={1} selected={showComponent} onClick={()=> {setShowComponent("navbarsTop")}} disabled={disabled}/>
                    <LeftNavItem text={"Navbars - Bottom"} value="navbarsBottom" indent={1} selected={showComponent} onClick={()=> {setShowComponent("navbarsBottom")}} disabled={disabled}/>
                    <LeftNavItem text={"Tooltips"} value="tooltipsMobile" indent={1} selected={showComponent} onClick={()=> {setShowComponent("tooltipsMobile")}} disabled={disabled}/> */}

                </List>
            </div>
            </div>
            <div className="design-system-editor-right-content"  data-mode={darkMode ? "dark" : "light"}>
            <div className="design-system-editor-right-content-scrollable">
                    {showComponent === "Components" &&
                        <ComponentIntro />
                    }
                    {showComponent === "colorsCoreColors" &&
                        <CoreColorsComponent />
                    }
                    {showComponent === "colorsThemeColors" &&
                        <ThemeColorsComponent />
                    }
                    {showComponent === "colorsExtendedPalette" &&
                        <ExtendedPaletteComponent designSystem={designSystem} />
                    }
                    {showComponent === "colorsBackgroundColors" &&
                        <BackgroundColorsComponent />
                    }
                    {showComponent === "colorsGradients" &&
                        <GradientsComponent />
                    }
                    {showComponent === "colorsStates" &&
                        <ColorStatesComponent designSystem={designSystem} />
                    }
                    {showComponent === "colorsHotlinks" &&
                        <HotlinksComponent />
                    }
                    {showComponent === "shadowElevations" &&
                        <ElevationComponent />
                    }
                    {showComponent === "shadowBevels" &&
                        <BevelComponent />
                    }
                    {showComponent === "shadowInvertedBevels" &&
                        <InvertedBevelComponent />
                    }
                    {showComponent === "shadowRidges" &&
                        <RidgeComponent />
                    }
                    {showComponent === "shadowGrooves" &&
                        <GrooveComponent />
                    }
                    {showComponent === "shadowGlows" &&
                        <GlowComponent />
                    }
                    {showComponent === "colorsText" &&
                        <TextComponent />
                    }
                    {showComponent === "accordions" &&
                        <AccordionComponent />
                    }
                    {showComponent === "appbar" &&
                        <TopAppBars />
                    }
                    {showComponent === "avatarsSingle" &&
                        <AvatarSingleComponent />
                    }
                    {showComponent === "breadcrumbs" &&
                        <BreadcrumbsComponent />
                    }
                    {showComponent === "buttonsStandard" &&
                        <ButtonsStandardComponent />
                    }
                    {showComponent === "buttonsSmall" &&
                        <ButtonsSmallComponent />
                    }
                    {showComponent === "buttonsGroups" &&
                        <ButtonGroupsComponent />
                    }
                    {showComponent === "typographyPrimary" &&
                        <DisplayComponent />
                    }
                    {showComponent === "typographyHeaders" &&
                        <HeadersComponent />
                    }
                    {showComponent === "typographyBody" &&
                        <BodyComponent />
                    }
                    {showComponent === "typographySmallFontsStyles" &&
                        <SmallFontsStylesComponent />
                    }
                    {showComponent === "statFontsStyles" &&
                        <StatStylesComponent />
                    }
                    {showComponent === "cardsStandard" &&
                        <CardsStandardComponent />
                    }
                    {showComponent === "cardsStandardIcons" &&
                        <CardsStandardIconComponent />
                    }
                    {showComponent === "cardsImages" &&
                        <CardsImagesComponent />
                    }
                    {showComponent === "cardsImages921" &&
                        <CardsImagesComponent921 />
                    }
                    {showComponent === "cardsStats" &&
                        <CardsStatsComponent />
                    }
                    {showComponent === "cardsStatsIcons" &&
                        <CardsStatsIconsComponent />
                    }
                    {showComponent === "checkboxes" &&
                        <CheckboxesComponent />
                    }
                    {showComponent === "chips" &&
                        <ChipsComponent />
                    }
                    {showComponent === "divider" &&
                        <DividerComponent />
                    }
                    {showComponent === "dropdown" &&
                        <DropdownComponent/>
                    }
                    {showComponent === "imageDecorations" &&
                        <ImageDecorationsComponent/>
                    }
                    {showComponent === "imageList" &&
                        <ImagesList/>
                    }
                    {showComponent === "listsSingle" &&
                        <ListsSingleComponent/>
                    }
                    {showComponent === "listsDouble" &&
                        <ListsDoubleComponent/>
                    }
                    {showComponent === "listsTriple" &&
                        <ListsTripleComponent/>
                    }

                    {showComponent === "menus" &&
                        <MenusComponent/>
                    }
                    {showComponent === "multiselectDropdown" &&
                        <MultiselectDropdownComponent/>
                    }
                    {showComponent === "pagination" &&
                        <PaginationComponent />
                    }
                    {showComponent === "popovers" &&
                        <PopoversComponent />
                    }
                    {showComponent === "radioButtons" &&
                        <RadioButtonsComponent />
                    }
                    {showComponent === "sliders" &&
                        <SlidersComponent />
                    }
                    {showComponent === "switch" &&
                        <SwitchComponent />
                    }
                    {showComponent === "tabsPrimary" &&
                        <PrimaryTabsComponent />
                    }
                    {showComponent === "tabsSecondary" &&
                        <SecondaryTabsComponent />
                    }
                    {showComponent === "textDecoration" &&
                        <TextDecorationComponent />
                    }
                    {showComponent === "toastsSingleLine" &&
                        <ToastsSingleLineComponent />
                    }
                    {showComponent === "toastsDoubleLine" &&
                        <ToastsDoubleLineComponent />
                    }
                    {showComponent === "toastsTripleLine" &&
                        <ToastsTripleLineComponent />
                    }
                    {showComponent === "tooltips" &&
                        <TooltipsComponent />
                    }
                    {showComponent === "hero" &&
                        <HeroExample />
                    }
            </div>
            </div>
        </>
    );
}
