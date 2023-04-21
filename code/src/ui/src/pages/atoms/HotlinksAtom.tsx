/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useState, useEffect } from 'react';
import { Alert, FormControl, FormControlLabel, FormHelperText, FormLabel, InputLabel, Radio, RadioGroup } from '@mui/material';
import { ColorTheme, DesignSystem, Hotlinks, HotlinkModeVariables } from 'a11y-theme-builder-sdk';
import './BordersAtom.css'
import { GeneratedCodeSection } from '../content/GeneratedCodeSection';
import { ExampleSection } from '../content/ExampleSection';
import { SettingsSection } from '../content/SettingsSection';
import { HeadingSection } from '../content/HeadingSection';
import { LightModeSection } from '../content/LightModeSection';
import { DarkModeSection } from '../content/DarkModeSection';

const name = "BordersAtom";

interface Props {
    hotlinks: Hotlinks;
}

export const HotlinksAtom: React.FC<Props> = ({ hotlinks }) => {
    
    const [_underlineHotlinksLightmode, _setUnderlineHotlinksLightmode] = useState<boolean>(true);
    const [_underlineHotlinksLightmodeRequired, _setUnderlineHotlinksLightmodeRequired] = useState<boolean>(true);
    const [_underlineHotlinksDarkmodeRequired, _setUnderlineHotlinksDarkmodeRequired] = useState<boolean>(true);
    const [_hotlinksError, _setHotlinksError] = useState<boolean>(false);
    const [_hotlinksErrorMessage, _setHotlinksErrorMessage] = useState<string>("");

    useEffect(() => {
        try {
            _setUnderlineHotlinksLightmode(hotlinks.getHotlinkVariables()?.lm.underlineRequired || hotlinks.underlineHotlinksInLightMode.getValue() || false);
            _setUnderlineHotlinksLightmodeRequired(hotlinks.getHotlinkVariables()?.lm.underlineRequired || false);
            _setUnderlineHotlinksDarkmodeRequired(hotlinks.getHotlinkVariables()?.dm.underlineRequired || false);
        } catch (error) {
            // It is possible that getHotlinkVariables may throw an error
            //  if it runs into shades without "on" colors.
            let message = "";
            if (error instanceof Error){
                message = error.message;
            } else {
                message = String(error);
            }
            console.log(`Hotlinks initialization, error: ${message}`);
            _setHotlinksErrorMessage(message);
            _setHotlinksError(true);
        }
    }, []);

    // Called when user clicks on one of the state controls.
    //  Should set the picker to the color reflected by
    //  the selected State control
    const handleUnderlineChange = (value: boolean) => {
        console.log(`handling underline change, value: ${value}`);
        hotlinks.underlineHotlinksInLightMode.setValue(value);
        _setUnderlineHotlinksLightmode(value);
    }

    return (
        <div>
            <HeadingSection item={hotlinks} title="Focus States & Hotlinks">
                <p>Hotlinks must have a contrast against the background of 4.5:1 or higher, and a contrast to the surrounding text of 3.1:1 or higher or they must be underlined.</p>
                <p>Users can choose to underline the text in light mode or not. In dark mode underlining is required to meet the contrast guidelines.</p>
                <p>Note: Hotlinks that appear on anything other that selected primary and secondary background, black or white will have either black or white underlined hotlinks in order to meet the accessibility requirements.</p>
                <p><a href="https://webaim.org/blog/wcag-2-0-and-link-colors/">Helpful Link</a></p>
            </HeadingSection>
            <ExampleSection>
                <LightModeSection>
                    <div className="inputRow">
                        <div id="hotlink-color-lightmode-preview" className="Hex theme-link" style={{ background: 'var(--hotlink)' }} />
                        <div><label className="label-1" htmlFor="hotlink-color-lightmode-preview">Hotlink Color</label></div>
                    </div>
                    <div className="inputRow">
                        <div id="hotlink-visited-color-lightmode-preview" className="Hex theme-link" style={{ background: 'var(--hotlink)', opacity: '.7' }} />
                        <div><label className="label-1" htmlFor="hotlink-visited-color-lightmode-preview">Visited</label></div>
                    </div>
                    <div className="label-1">Sample hotlinks</div>
                    <a href="#" className="default-link">Sample Hotlink</a>
                </LightModeSection>
                <DarkModeSection>
                    <div className="row">
                        <div className="col-6">
                            <div className="inputRow">
                                <div id="hotlink-color-darkmode-preview" className="Hex theme-link" style={{ background: 'var(--dm-hotlink)' }} />
                                <label className="label-1" htmlFor="hotlink-color-darkmode-preview">Hotlink Color</label>
                            </div>
                            <div className="inputRow">
                                <div id="hotlink-visited-color-darkmode-preview" className="Hex theme-link" style={{ background: 'var(--dm-hotlink)', opacity: '.7' }} />
                                <label className="label-1" htmlFor="hotlink-visited-color-darkmode-preview">Visited</label>
                            </div>
                            <div className="label-1">Sample hotlinks</div>
                            <a href="#" className="default-link">Sample Hotlink</a>
                        </div>
                    </div>
                </DarkModeSection>
            </ExampleSection>
            <SettingsSection>
                <FormControl>
                    <FormLabel id="underline-hotlinks-lightmode-radio-buttons-group">Underline hotlinks in lightmode</FormLabel>
                    <RadioGroup
                        aria-labelledby="underline-hotlinks-lightmode-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={_underlineHotlinksLightmode}
                        onChange={(event) => { handleUnderlineChange(event.target.value === "true") }}
                    >
                        <FormControlLabel value="true" control={<Radio />} label="Yes (Recommended)" disabled={_hotlinksError} />
                        <FormControlLabel value="false" control={<Radio />} label="No" disabled={_hotlinksError || _underlineHotlinksLightmodeRequired} />
                    </RadioGroup>
                    {_underlineHotlinksLightmodeRequired && <FormHelperText>"no underline" does not meet WCAG AA requirements</FormHelperText>}
                    {_hotlinksError && <Alert severity='error'>{_hotlinksErrorMessage}</Alert>}
                </FormControl>
            </SettingsSection>
            <GeneratedCodeSection item={hotlinks}/>
        </div>
    )

}
