import React, { useState, useEffect } from 'react';
import { InputLabel, TextField } from '@mui/material';
import { ColorResult } from "react-color";
import { StateSettings } from 'a11y-theme-builder-sdk';
import './StatesAtom.css'
import { GeneratedCodeSection } from '../content/GeneratedCodeSection';
import { ExampleSection } from '../content/ExampleSection';
import { SettingsSection } from '../content/SettingsSection';
import { HeadingSection } from '../content/HeadingSection';
import { LightModeSection } from '../content/LightModeSection';
import { DarkModeSection } from '../content/DarkModeSection';
import { ColorProperty } from '../../components/editors/ColorProperty';


interface Props {
    atom: StateSettings;
}

export const StatesAtom: React.FC<Props> = ({ atom }) => {

    const [_blockPickerColor, _setBlockPickerColor] = useState<string>("#ffffff");
    const [_selectedState, _setSelectedState] = useState<string>("");

    const renderExample = (darkMode?:boolean) => {
        let info = atom.info.lmShade.hex;
        let success = atom.warning.lmShade.hex;
        let warning = atom.warning.lmShade.hex;
        let danger = atom.danger.lmShade.hex;
        if (darkMode) {
            info = atom.info.dmShade.hex;
            success = atom.warning.dmShade.hex;
            warning = atom.warning.dmShade.hex;
            danger = atom.danger.dmShade.hex;
        }
        return (
        <div style={{paddingRight:"20px"}}>
            <InputLabel className="label-1">Information</InputLabel>
            <TextField className="info" value={info}/>
            <div className="top24"/>
            <InputLabel className="label-1">Success</InputLabel>
            <TextField className="success" value={success}/>
            <div className="top24"/>
            <InputLabel className="label-1">Warning</InputLabel>
            <TextField className="warning" value={warning}/>
            <div className="top24"/>
            <InputLabel className="label-1">Danger</InputLabel>
            <TextField className="danger" value={danger}/>
        </div>
        )
    }


    return (
        <div className="container color-palette-right-content">
            <HeadingSection item={atom} title="Theme">
                    <ul>
                        <li>Load <a href="#">color blind</a> states. <a href="#">Learn more.</a></li>
                        <li><a href="#">Reset to Default</a></li>
                    </ul>
            </HeadingSection>
            <ExampleSection>
                The color values are calculated from the input colors under Settings.  They will not necessarily be the same value that was selected.
                <div className="top40"/>
                <div style={{display:"flex", gap:"40px"}}>
                <LightModeSection>
                    {renderExample()}
                </LightModeSection>
                <DarkModeSection style={{paddingRight:"20px"}}>
                    {renderExample(true)}
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
