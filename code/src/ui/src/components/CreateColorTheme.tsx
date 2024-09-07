/**
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useEffect, useRef, useState } from 'react';
import { Button, Grid, Accordion, AccordionSummary, AccordionDetails, Link } from '@mui/material';
import {
    ColorPalette,
    ColorTheme,
    ColorThemes,
    Event,
    EventType,
    Shade,
} from '@finos/a11y-theme-builder-sdk';
import { ColorSelect } from './ColorSelect';
import { ColorPairSelect } from './ColorPairSelect';
import { ColorGradient } from './ColorGradient';
import { ColorGradientHeader } from './ColorGradientHeader';
import './CreateColorTheme.css';
import ModalConfirmation from './modals/ModalConfirmation';
import { HeadingSection } from '../pages/content/HeadingSection';
import { SettingsSection } from '../pages/content/SettingsSection';
import { GeneratedCodeSection } from '../pages/content/GeneratedCodeSection';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Props {
    atom: ColorThemes;
    colorPalette: ColorPalette;
    handleDefaultThemeInitialized: (newDefaultThemeName: string) => void;
}
interface ExpandedState {
    panel1: boolean;
    panel2: boolean;
    panel3: boolean;
    panel4: boolean;
    panel5: boolean;
    panel6: boolean;
  }

export const CreateColorTheme: React.FC<Props> = ({
    atom,
    colorPalette,
    handleDefaultThemeInitialized,
}) => {
    const defaultIconShade = Shade.fromHex('#ffffff');

    const [_colorTheme, _setColorTheme] = useState<ColorTheme>();
    const [_themeInitialized, _setThemeInitialized] = useState<boolean>(false);
    const [_iconColor, _setIconColor] = useState<Shade>(defaultIconShade);
    const [_openConfirmation, _setOpenConfirmation] = useState<boolean>(false);
    const [_baseColorsHex, _setBaseColorsHex] = useState<Set<string>>();
    const [_allExpanded, _setAllExpanded] = useState<boolean>(true);
    const [expanded, setExpanded] = useState<ExpandedState>({
        panel1: false,
        panel2: false,
        panel3: false,
        panel4: false,
        panel5: false,
        panel6: false,
      });

      const handlePanelStateChange = (panel: keyof ExpandedState) => (
        event: React.SyntheticEvent
      ) => {
        setExpanded((prevState) => ({ ...prevState, [panel]: !prevState[panel]}));
      };

    // Function to toggle expand/collapse all panels
    const toggleAll = () => {
        const newState = !_allExpanded;
        setExpanded({
        panel1: newState,
        panel2: newState,
        panel3: newState,
        panel4: newState,
        panel5: newState,
        panel6: newState,
        });
        _setAllExpanded(newState);
    };

    const colorIconRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // creating a color theme should not work if the designSystem isn't
        //  able to accept new color themes
        if (atom.isEnabled()) {
            // if there is no current default theme, then we'll create one.
            let colorTheme = atom.getDefaultTheme();
            if (!colorTheme) {
                try {
                    colorTheme = atom.getTheme(
                        'default-initial-color-theme-instance'
                    );
                } catch (error) {
                    // if the name doesn't exist as a theme already, it can throw an exception.
                    console.debug(
                        `ignoring getTheme failing with possible error: $(error.message)`
                    );
                }
                if (!colorTheme) {
                    colorTheme = atom.createTheme(
                        'default-initial-color-theme-instance',
                        true
                    );
                }
                atom.setDefaultTheme(colorTheme);
            }
            _setColorTheme(colorTheme);
            // colorTheme.addTheme entering "enabled" state means that the color theme has
            //  been fully initialized and ready to use
            if (colorTheme && !colorTheme.addTheme.isEnabled()) {
                colorTheme.addTheme.setListener(
                    'createColorTheme',
                    (event: Event) => {
                        if (event.type === EventType.NodeEnabled) {
                            _setThemeInitialized(
                                colorTheme?.addTheme.isEnabled() || false
                            );
                            return;
                        }
                    }
                );
            }

            colorTheme.icon.setListener(
                'ColorThemeAtom-iconColor',
                function (event: Event) {
                    if (event.type === EventType.ValueChanged) {
                        console.log(
                            `Notified of default color theme icon color value changing, event: ${event}`
                        );
                        const newShade = colorTheme?.icon.getValue();
                        const iconSampleDiv = colorIconRef.current;
                        if (!iconSampleDiv) {
                            //throw new Error("color icon sample missing DOM information");
                            return;
                        }
                        if (newShade) {
                            _setIconColor(newShade);
                            iconSampleDiv.style.display = '';
                        } else {
                            _setIconColor(defaultIconShade);
                            iconSampleDiv.style.display = 'none';
                        }
                    }
                }
            );
        }
    }, [colorIconRef]);

    const handleShowTheme = () => {
        // when the user clicks the "Show Theme" button, we should be letting
        //  the user know what this means in practical terms
        _setOpenConfirmation(true);
    };

    const handleConfirmation = (confirmed: boolean) => {
        // when the user clicks the "OK" button on the confirmation popup, we
        // should be letting the caller know that the theme is ready to go
        _setOpenConfirmation(false);
        if (handleDefaultThemeInitialized && confirmed) {
            handleDefaultThemeInitialized(_colorTheme?.name || '');
        }
    };
    useEffect(() => {

      const baseColorsHex= new Set<string>;
      colorPalette.getColors().map((color)=>{
        const hexValue = color.hex?.getValue();
        if (hexValue) {
            baseColorsHex.add(hexValue);
        }
      });
      _setBaseColorsHex(baseColorsHex);
    }, [colorPalette])
    
    if (_colorTheme) {
    return (
        <div className="content theme-page active lightholder" id="buildThemes" data-mode="light" style={{padding:"0px", borderRadius:"0px"}} >
            
            <Grid container spacing={2} columns={12} margin={2}>
              <Grid item spacing={2} lg={12} md={12} sm={12}>
                <h4 style={{marginTop: "10px", marginBottom: "10px"}}>Light Mode</h4>

                    <div className="formRow lightholder" data-mode="light" style={{padding:"16px", borderRadius:"0px"}}>
                                    
                                    <div  style={{fontSize:"22px",paddingTop:"8px"}}>Theme Colors</div>
                                    <div style={{ borderTop: '1px solid ',opacity:"25%", margin: '20px 0 0 0' }}></div>
                                    <div>
                                    <div  style={{fontSize:"22px",paddingTop:"8px"}}>Default</div>
                                    <div> </div>
                                    </div>
                                    
     
                                        <div className="form-columns top16">
                                        <ColorSelect value={_colorTheme.primary} baseColorHex={_baseColorsHex} label="Primary"></ColorSelect>
                                        <ColorSelect value={_colorTheme.secondary} baseColorHex={_baseColorsHex} label="Secondary" optional={true}></ColorSelect>
                                        <ColorSelect value={_colorTheme.tertiary} baseColorHex={_baseColorsHex} label="Tertiary" optional={true}></ColorSelect>
                                    </div>
                    </div>
                    <div className='row' style={{justifyContent:"space-between"}}>
                        <div  style={{fontSize:"22px",paddingTop:"8px"}}>Advanced Settings</div>
                        
                        <Button variant='text' onClick={toggleAll} sx={{ textTransform: 'none' }}>{_allExpanded?"Collapse All":"Expand All"}</Button>
                    </div>
                    <Accordion 
                        expanded={expanded.panel1}
                        onChange={handlePanelStateChange('panel1')}
                    >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                    <div className="input-col">
                            <p style={{ fontSize: "18px", fontWeight: "700", margin: "0px", padding: "0px", paddingBottom: "8px" }}>Backgrounds</p>

                        </div>

                    </AccordionSummary>
                    <AccordionDetails>
                        background details
                    </AccordionDetails>
                    </Accordion>
                    <Accordion 
                        expanded={expanded.panel2}
                        onChange={handlePanelStateChange('panel2')}
                    >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                    <div className="input-col">
                            <p style={{ fontSize: "18px", fontWeight: "700", margin: "0px", padding: "0px", paddingBottom: "8px" }}>Buttons and Interactive Components</p>

                            {/* <ColorPaletteSummary colorPalette={colorPalette} /> */}
                        </div>

                    </AccordionSummary>
                    <AccordionDetails>

                    </AccordionDetails>
                    </Accordion>
                    <Accordion 
                        expanded={expanded.panel3}
                        onChange={handlePanelStateChange('panel3')}
                    >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                    >
                    <div className="input-col">
                            <p style={{ fontSize: "18px", fontWeight: "700", margin: "0px", padding: "0px", paddingBottom: "8px" }}>Hotlinks</p>

                            {/* <ColorPaletteSummary colorPalette={colorPalette} /> */}
                        </div>

                    </AccordionSummary>
                    <AccordionDetails>
                    </AccordionDetails>
                    </Accordion>
                    <Accordion 
                        expanded={expanded.panel4}
                        onChange={handlePanelStateChange('panel4')}
                    >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4-content"
                        id="panel4-header"
                    >
                    <div className="input-col">
                            <p style={{ fontSize: "18px", fontWeight: "700", margin: "0px", padding: "0px", paddingBottom: "8px" }}>ThemeElements(Icons &Colored Texts)</p>

                            {/* <ColorPaletteSummary colorPalette={colorPalette} /> */}
                        </div>

                    </AccordionSummary>
                    <AccordionDetails>
                    </AccordionDetails>
                    </Accordion>
                    <Accordion 
                        expanded={expanded.panel5}
                        onChange={handlePanelStateChange('panel5')}
                    >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel5-content"
                        id="panel5-header"
                    >
                    <div className="input-col">
                            <p style={{ fontSize: "18px", fontWeight: "700", margin: "0px", padding: "0px", paddingBottom: "8px" }}>Gradients</p>

                            {/* <ColorPaletteSummary colorPalette={colorPalette} /> */}
                        </div>

                    </AccordionSummary>
                    <AccordionDetails>
                    </AccordionDetails>
                    </Accordion>
                    <Accordion 
                        expanded={expanded.panel6}
                        onChange={handlePanelStateChange('panel6')}
                    >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel6-content"
                        id="panel6-header"
                    >
                    <div className="input-col">
                            <p style={{ fontSize: "18px", fontWeight: "700", margin: "0px", padding: "0px", paddingBottom: "8px" }}>Text Gradients</p>

                            {/* <ColorPaletteSummary colorPalette={colorPalette} /> */}
                        </div>

                    </AccordionSummary>
                    <AccordionDetails>
                    </AccordionDetails>
                    </Accordion>
                  {/* <div className="container">
                      <div className="row">
                          <div className="col-12">
                              <div className="formRow">
                                  <div className="subtitle1">Theme Colors</div>
                                  <div className="form-columns top16">
                                      <ColorSelect value={_colorTheme.primary} baseColorHex={_baseColorsHex} label="Primary"></ColorSelect>
                                      <ColorSelect value={_colorTheme.secondary} baseColorHex={_baseColorsHex} label="Secondary"></ColorSelect>
                                      <ColorSelect value={_colorTheme.tertiary} baseColorHex={_baseColorsHex} label="Tertiary"></ColorSelect>
                                  </div>
                              </div>
                              <div className="subtitle1">Advanced Settings</div>
                              <div className="formRow">
                                  <div className="subtitle1">Light Mode Backgrounds</div>
                                  <div className="form-columns top16">
                                      <ColorPairSelect value={_colorTheme.lightModeBackground} label="Primary & Secondary Background Colors"></ColorPairSelect>
                                  </div>
                              </div>
                              <div className="formRow">
                                  <div className="subtitle1">Dark Mode Backgrounds</div>
                                  <div className="small">Note: Your dark mode background options are limited to colors in the 800 and 900 range of your color palette.</div>
                                  <div className="form-columns top16">
                                      <ColorPairSelect value={_colorTheme.darkModeBackground} label="Primary & Secondary Background Colors"></ColorPairSelect>
                                  </div>
                              </div>
                              <div className="formRow">
                                  <div className="subtitle1">Gradient 1</div>
                                  <div className="small">Note: The "To Color" will be limited to those colors with the same "On Color" or text color to make sure the gradiemt meets WCAG 2.1 AA contrast guidelines.</div>
                                  <div>
                                      <ColorGradient className="form-columns top16" value={_colorTheme.gradient1} />
                                  </div>
                              </div>
                              <div className="formRow">
                                  <div className="subtitle1">Gradient 2</div>
                                  <div className="small">Note: The "To Color" will be limited to those colors with the same "On Color" or text color to make sure the gradiemt meets WCAG 2.1 AA contrast guidelines.</div>
                                  <div className="form-columns top16">
                                      <ColorGradient className="form-columns top16" value={_colorTheme.gradient2} />
                                  </div>
                              </div>
                              <div className="formRow">
                                  <div className="subtitle1">Button Color</div>
                                  <div className="small">Note: Buttons limited to colors with a contrast against your primary and secondary backgrounds of 3.1: 1 to meet WCAG 2.1 AA Guidelines.</div>
                                  <div className="form-columns top16">
                                      <ColorSelect value={_colorTheme.button} label="Color:"></ColorSelect>
                                  </div>
                              </div>
                              <div className="formRow">
                                  <div className="subtitle1">Icon Color</div>
                                  <div className="small">Note: Icons limited to colors with a contrast against your primary and secondary backgrounds of 3.1: 1 to meet WCAG 2.1 AA Guidelines.</div>
                                  <div className="form-columns top16">
                                      <ColorSelect value={_colorTheme.icon} label="Color:"></ColorSelect>
                                      <div className="input-col default-col">
                                          <div className="caption">Sample Icon</div>
                                          <div className="default-icon" id="themeIcon-sample" ref={colorIconRef} style={{display: 'none'}}>
                                              <div className="icon-body">
                                                  <svg width="24" height="24" viewBox="0 0 24 24" fill={_iconColor.getHexOrRGBA()} xmlns="http://www.w3.org/2000/svg">
                                                      <g clip-path="url(#clip0_775_36558)">
                                                          <path d="M7.29101 20.824L2.00001 22L3.17601 16.709C2.40154 15.2604 1.99754 13.6426 2.00001 12C2.00001 6.477 6.47701 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C10.3574 22.0025 8.73963 21.5985 7.29101 20.824ZM7.00001 12C7.00001 13.3261 7.5268 14.5979 8.46448 15.5355C9.40216 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12H15C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7957 15 12 15C11.2044 15 10.4413 14.6839 9.87869 14.1213C9.31608 13.5587 9.00001 12.7956 9.00001 12H7.00001Z" />
                                                      </g>
                                                      <defs>
                                                          <clipPath id="clip0_775_36558">
                                                              <rect width="24" height="24" fill="white" />
                                                          </clipPath>
                                                      </defs>
                                                  </svg>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="formRow">
                                  <div className="subtitle1">Gradient Header Text</div>
                                  <div className="small">Note: Large text gradient colors are limited to those with a contrast against your background of 3.1: 1 to meet WCAG 2.1 AA Guidelines.</div>
                                  <div className="form-columns top16">
                                  <ColorGradientHeader className="form-columns top16" value={_colorTheme.gradientHeaderText} sampleText="Sample Header" />
                                  </div>
                              </div>
                              <div className="formRow">
                                  <div className="subtitle1">Accent Color</div>
                                  <div className="small">This color will be used for non-critical or decorative accents and never appears with text or iconongraphy.</div>
                                  <div className="form-columns top16">
                                      <ColorSelect value={_colorTheme.accent} label="Color:"></ColorSelect>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="row">
                          <Button onClick={() => {handleShowTheme();}} disabled={!_themeInitialized}>Show Theme</Button>
                      </div>
                  </div> */}
                {/* <GeneratedCodeSection item={atom} /> */}
              </Grid>
            </Grid>
              </div>
        );
    } else {
        return (
            <div className="content theme-page active" id="buildThemes">
                <HeadingSection title="Theme" heading="Create Default Theme" />
                <div style={{ display: 'flex', gap: '40px' }}>
                    No color palette
                </div>
            </div>
        );
    }
};
