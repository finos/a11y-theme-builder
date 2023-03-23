import React, { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { DesignSystem} from 'a11y-theme-builder-sdk';
import { ErrorHandler } from '../../../ErrorHandler';
import { List, ListItemButton, ListItemText, ListSubheader, styled, Collapse } from '@mui/material';
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
import { TooltipsComponent } from '../../components/TooltipsComponent';
import { ToastsSingleLineComponent } from '../../components/ToastsSingleLineComponent';
import { ToastsDoubleLineComponent } from '../../components/ToastsDoubleLineComponent';
import { ToastsTripleLineComponent } from '../../components/ToastsTripleLineComponent';
import { SwitchComponent } from '../../components/SwitchComponent';
import { RadioButtonsComponent } from '../../components/RadioButtonsComponent';
import { PopoversComponent } from '../../components/PopoversComponent';
import { ExtendedPaletteComponent } from '../../components/colors/ExtendedPaletteComponent';
import { GradientsComponent } from '../../components/colors/GradientsComponent';
import { ColorStatesComponent } from '../../components/colors/ColorStatesComponent';
import { PrimaryTabsComponent } from '../../components/PrimaryTabsComponent';
import { SecondaryTabsComponent } from '../../components/SecondaryTabsComponent';
import { CardsStandardComponent } from '../../components/cards/CardsStandardComponent';
import { CardsImagesComponent } from '../../components/cards/CardsImagesComponent';
import { CardsStatsComponent } from '../../components/cards/CardsStatsComponent';
import { PaginationComponent } from '../../components/PaginationComponent';
import { ListsSingleComponent } from '../../components/ListsSingleComponent';
import { ListsTripleComponent } from '../../components/ListsTripleComponent';
import { ListsDoubleComponent } from '../../components/ListsDoubleComponent';

interface Props {
    user: any;
    designSystem: DesignSystem;
}

export const ComponentsContent: React.FC<Props> = ({ user, designSystem }) => {

    let colorsSelected = false;
    if (localStorage.getItem("themebuilder-components-colors-selected") == "true") {
        colorsSelected = true;
    }
    const [displayColors, setDisplayColors] = useState<boolean>(colorsSelected);
    useEffect(() => {
        localStorage.setItem("themebuilder-components-colors-selected", ""+displayColors)
    }, [displayColors])

    let typographySelected = false;
    if (localStorage.getItem("themebuilder-components-typography-selected") == "true") {
        typographySelected = true;
    }
    const [displayTypography, setDisplayTypography] = useState<boolean>(typographySelected);
    useEffect(() => {
        localStorage.setItem("themebuilder-components-typography-selected", ""+displayTypography)
    }, [displayTypography])

    const [showComponent, setShowComponent] = React.useState(localStorage.getItem("themebuilder-components-content-selected") || "colorsPrimary");
    useEffect(() => {
        localStorage.setItem("themebuilder-components-content-selected", showComponent)
    }, [showComponent])

    return (
        <>
            <div className="design-system-editor-left-nav">
                <List 
                    sx={{
                        '& ul': {padding:0}
                    }}
                >
                    <LeftNavHeader>Styles</LeftNavHeader>
                    <LeftNavItem text="Mode" indent={1} />
                    <div style={{paddingLeft: "50px"}}>
                        <NavSwitch defaultChecked leftLabel="Light" rightLabel="Dark" />
                    </div>
                    <LeftNavItem text={"Colors"} indent={1} onClick={()=>setDisplayColors(!displayColors)}>
                        {displayColors ? <ExpandLess /> : <ExpandMore />}
                    </LeftNavItem>
                    <Collapse in={displayColors} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <LeftNavItem text={"Primary"} value="colorsPrimary" indent={2} selected={showComponent} onClick={()=> {setShowComponent("colorsPrimary")}} />
                            <LeftNavItem text={"Extended Palette"} value="colorsExtendedPalette" indent={2} selected={showComponent} onClick={()=> {setShowComponent("colorsExtendedPalette")}} />
                            <LeftNavItem text={"Gradients"} value="colorsGradients" indent={2} selected={showComponent} onClick={()=> {setShowComponent("colorsGradients")}} />
                            <LeftNavItem text={"States"} value="colorsStates" indent={2} selected={showComponent} onClick={()=> {setShowComponent("colorsStates")}} />
                        </List>
                    </Collapse>
                    <LeftNavItem text={"Typography"} indent={1} onClick={()=>setDisplayTypography(!displayTypography)}>
                        {displayTypography ? <ExpandLess /> : <ExpandMore />}
                    </LeftNavItem>
                    <Collapse in={displayTypography} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <LeftNavItem text={"Display"} value="typographyPrimary" indent={2} selected={showComponent} onClick={()=> {setShowComponent("typographyPrimary")}} />
                            <LeftNavItem text={"Headers"} value="typographyHeaders" indent={2} selected={showComponent} onClick={()=> {setShowComponent("typographyHeaders")}} />
                            <LeftNavItem text={"Body"} value="typographyBody" indent={2} selected={showComponent} onClick={()=> {setShowComponent("typographyBody")}} />
                            <LeftNavItem text={"Small Fonts Styles"} value="typographySmallFontsStyles" indent={2} selected={showComponent} onClick={()=> {setShowComponent("typographySmallFontsStyles")}} />
                        </List>
                    </Collapse>
                    <LeftNavHeader>Desktop Components</LeftNavHeader>
                    <LeftNavItem text={"Accordions"} value="accordions" indent={1} selected={showComponent} onClick={()=> {setShowComponent("accordions")}} />
                    
                    <LeftNavItem text={"Avatars" /* - Single */} value="avatarsSingle" indent={1} selected={showComponent} onClick={()=> {setShowComponent("avatarsSingle")}} />
                    { /* <LeftNavItem text={"Avatars - Groups"} value="avatarsGroups" indent={1} selected={showComponent} onClick={()=> {setShowComponent("avatarsGroups")}} /> */}
                    
                    <LeftNavItem text={"Breadcrumbs"} value="breadcrumbs" indent={1} selected={showComponent} onClick={()=> {setShowComponent("breadcrumbs")}} />

                    <LeftNavItem text={"Buttons - Standard"} value="buttonsStandard" indent={1} selected={showComponent} onClick={()=> {setShowComponent("buttonsStandard")}} />
                    <LeftNavItem text={"Buttons - Small"} value="buttonsSmall" indent={1} selected={showComponent} onClick={()=> {setShowComponent("buttonsSmall")}} />
                    <LeftNavItem text={"Buttons - Groups"} value="buttonsGroups" indent={1} selected={showComponent} onClick={()=> {setShowComponent("buttonsGroups")}} />

                    <LeftNavItem text={"Cards - Standard"} value="cardsStandard" indent={1} selected={showComponent} onClick={()=> {setShowComponent("cardsStandard")}} />
                    <LeftNavItem text={"Cards - Images"} value="cardsImages" indent={1} selected={showComponent} onClick={()=> {setShowComponent("cardsImages")}} />
                    <LeftNavItem text={"Cards - Videos"} value="cardsVideos" indent={1} selected={showComponent} onClick={()=> {setShowComponent("cardsVideos")}} />
                    <LeftNavItem text={"Cards - Stats"} value="cardsStats" indent={1} selected={showComponent} onClick={()=> {setShowComponent("cardsStats")}} />

                    <LeftNavItem text={"Checkboxes"} value="checkboxes" indent={1} selected={showComponent} onClick={()=> {setShowComponent("checkboxes")}} />

                    <LeftNavItem text={"Chips"} value="chips" indent={1} selected={showComponent} onClick={()=> {setShowComponent("chips")}} />

                    <LeftNavItem text={"Datepicker"} value="datepicker" indent={1} selected={showComponent} onClick={()=> {setShowComponent("datepicker")}} />

                    <LeftNavItem text={"Divider"} value="divider" indent={1} selected={showComponent} onClick={()=> {setShowComponent("divider")}} />

                    <LeftNavItem text={"Menus"} value="menus" indent={1} selected={showComponent} onClick={()=> {setShowComponent("menus")}} />

                    <LeftNavItem text={"Multiselect Dropdown"} value="multiselectDropdown" indent={1} selected={showComponent} onClick={()=> {setShowComponent("multiselectDropdown")}} />

                    <LeftNavItem text={"List - Single"} value="listsSingle" indent={1} selected={showComponent} onClick={()=> {setShowComponent("listsSingle")}} />
                    <LeftNavItem text={"List - Double"} value="listsDouble" indent={1} selected={showComponent} onClick={()=> {setShowComponent("listsDouble")}} />
                    <LeftNavItem text={"List - Triple"} value="listsTriple" indent={1} selected={showComponent} onClick={()=> {setShowComponent("listsTriple")}} />

                    <LeftNavItem text={"Pagination"} value="pagination" indent={1} selected={showComponent} onClick={()=> {setShowComponent("pagination")}} />

                    <LeftNavItem text={"Popovers"} value="popovers" indent={1} selected={showComponent} onClick={()=> {setShowComponent("popovers")}} />

                    <LeftNavItem text={"Radio Buttons"} value="radioButtons" indent={1} selected={showComponent} onClick={()=> {setShowComponent("radioButtons")}} />

                    <LeftNavItem text={"Switch"} value="switch" indent={1} selected={showComponent} onClick={()=> {setShowComponent("switch")}} />

                    <LeftNavItem text={"Tabs - Primary"} value="tabsPrimary" indent={1} selected={showComponent} onClick={()=> {setShowComponent("tabsPrimary")}} />
                    <LeftNavItem text={"Tabs - Secondary"} value="tabsSecondary" indent={1} selected={showComponent} onClick={()=> {setShowComponent("tabsSecondary")}} />

                    <LeftNavItem text={"Toasts - Single Line"} value="toastsSingleLine" indent={1} selected={showComponent} onClick={()=> {setShowComponent("toastsSingleLine")}} />
                    <LeftNavItem text={"Toasts - Double Line"} value="toastsDoubleLine" indent={1} selected={showComponent} onClick={()=> {setShowComponent("toastsDoubleLine")}} />
                    <LeftNavItem text={"Toasts - Triple Line"} value="toastsTripleLine" indent={1} selected={showComponent} onClick={()=> {setShowComponent("toastsTripleLine")}} />

                    <LeftNavItem text={"Tooltips"} value="tooltips" indent={1} selected={showComponent} onClick={()=> {setShowComponent("tooltips")}} />

                    <LeftNavHeader>Mobile Components</LeftNavHeader>

                    <LeftNavItem text={"Navbars - Top"} value="navbarsTop" indent={1} selected={showComponent} onClick={()=> {setShowComponent("navbarsTop")}} />
                    <LeftNavItem text={"Navbars - Bottom"} value="navbarsBottom" indent={1} selected={showComponent} onClick={()=> {setShowComponent("navbarsBottom")}} />
                    <LeftNavItem text={"Tooltips"} value="tooltipsMobile" indent={1} selected={showComponent} onClick={()=> {setShowComponent("tooltipsMobile")}} />

                </List>
            </div>
            <div className="design-system-editor-right-content">
                    {showComponent === "colorsExtendedPalette" &&
                        <ExtendedPaletteComponent designSystem={designSystem} />
                    }
                    {showComponent === "colorsGradients" &&
                        <GradientsComponent />
                    }
                    {showComponent === "colorsStates" &&
                        <ColorStatesComponent designSystem={designSystem} />
                    }
                    {showComponent === "accordions" &&
                        <AccordionComponent />
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
                    {showComponent === "cardsStandard" &&
                        <CardsStandardComponent />
                    }
                    {showComponent === "cardsImages" &&
                        <CardsImagesComponent />
                    }
                    {showComponent === "cardsStats" &&
                        <CardsStatsComponent />
                    }

                    {/* MIDPOINT */}

                    {showComponent === "listsSingle" &&
                        <ListsSingleComponent/>
                    }
                    {showComponent === "listsDouble" &&
                        <ListsDoubleComponent/>
                    }
                    {showComponent === "listsTriple" &&
                        <ListsTripleComponent/>
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
                    {showComponent === "switch" &&
                        <SwitchComponent />
                    }
                    {showComponent === "tabsPrimary" && 
                        <PrimaryTabsComponent />
                    }
                    {showComponent === "tabsSecondary" && 
                        <SecondaryTabsComponent />
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
            </div>
        </>
    );
}

