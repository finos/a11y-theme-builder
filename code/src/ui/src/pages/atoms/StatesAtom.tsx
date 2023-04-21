/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { ReactElement, useEffect, useState } from 'react';
import { InputLabel, TextField } from '@mui/material';
import { StateSettings } from 'a11y-theme-builder-sdk';
import './StatesAtom.css'
import { GeneratedCodeSection } from '../content/GeneratedCodeSection';
import { ExampleSection } from '../content/ExampleSection';
import { SettingsSection } from '../content/SettingsSection';
import { HeadingSection } from '../content/HeadingSection';
import { LightModeSection } from '../content/LightModeSection';
import { DarkModeSection } from '../content/DarkModeSection';
import { ColorProperty } from '../../components/editors/ColorProperty';
import { getCssValue } from '../../mui-a11y-tb/themes/Theme';

interface Props {
    atom: StateSettings;
}

export const StatesAtom: React.FC<Props> = ({ atom }) => {

    const [_blockPickerColor, _setBlockPickerColor] = useState<string>("#ffffff");
    const [_selectedState, _setSelectedState] = useState<string>("");

    const [info, setInfo] = useState([getCssValue(`--info`), getCssValue(`--dm-info`)]);
    const [success, setSuccess] = useState([getCssValue(`--success`), getCssValue(`--dm-success`)]);
    const [warning, setWarning] = useState([getCssValue(`--warning`), getCssValue(`--dm-warning`)]);
    const [danger, setDanger] = useState([getCssValue(`--danger`), getCssValue(`--dm-danger`)]);

    useEffect(() => {
        atom.info.prop.setListener("atom", function() {
            setInfo([getCssValue(`--info`), getCssValue(`--dm-info`)]);
        })
        atom.success.prop.setListener("atom", function() {
            setSuccess([getCssValue(`--success`), getCssValue(`--dm-success`)]);
        })
        atom.warning.prop.setListener("atom", function() {
            setWarning([getCssValue(`--warning`), getCssValue(`--dm-warning`)]);
        })
        atom.danger.prop.setListener("atom", function() {
            setDanger([getCssValue(`--danger`), getCssValue(`--dm-danger`)]);
        })
    }, [])


    const renderExample = (lm?:boolean) => {
        const mode = lm ? 0 : 1;
        return (
            <div style={{paddingRight:"20px"}}>
                <InputLabel className="label-1">Information</InputLabel>
                <TextField className="info" value={info[mode]}/>
                <div className="top24"/>
                <InputLabel className="label-1">Success</InputLabel>
                <TextField className="success" value={success[mode]}/>
                <div className="top24"/>
                <InputLabel className="label-1">Warning</InputLabel>
                <TextField className="warning" value={warning[mode]}/>
                <div className="top24"/>
                <InputLabel className="label-1">Danger</InputLabel>
                <TextField className="danger" value={danger[mode]}/>
            </div>
        )
    }

    return (
        <div className="color-palette-right-content">
            <HeadingSection item={atom} title="Theme">
                <p>Select the colors that will be used to display informative text for the user.  For example, these colors could be used to display banners, popups or toasts informing the user of the results of some task or process.</p>
            </HeadingSection>
            <ExampleSection>
                The color values are calculated from the input colors under Settings.  They will not necessarily be the same value that was selected.
                <div className="top40"/>
                <div style={{display:"flex", gap:"40px"}}>
                <LightModeSection>
                    {renderExample(true)}
                </LightModeSection>
                <DarkModeSection style={{paddingRight:"20px"}}>
                    {renderExample(false)}
                </DarkModeSection>
                </div>
            </ExampleSection>
            <SettingsSection>
                Click on the color to edit:
                <div className="top16"/>
                <div style={{display:"flex", gap:"40px"}}>
                    <ColorProperty property={atom.info} label="Information" />
                    <ColorProperty property={atom.success} label="Success" />
                    <ColorProperty property={atom.warning} label="Warning" />
                    <ColorProperty property={atom.danger} label="Danger" />
                </div>
            </SettingsSection>
            <GeneratedCodeSection item={atom}/>
        </div>
    )
}
