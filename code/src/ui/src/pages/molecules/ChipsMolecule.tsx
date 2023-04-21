/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React from 'react';
import { Chip, Avatar } from '@mui/material';
import { Chips, DesignSystem } from 'a11y-theme-builder-sdk';
import { HeadingSection } from '../content/HeadingSection';
import { ExampleSection } from '../content/ExampleSection';
import { GeneratedCodeSection } from '../content/GeneratedCodeSection';
import { SettingsSection } from '../content/SettingsSection';
import { NumberScaledSelectable } from '../../components/editors/NumberScaledSelectable';
import { StringSelectable } from '../../components/editors/StringSelectable';
import { NumberProperty } from '../../components/editors/NumberProperty';
import DeleteIcon from '@mui/icons-material/AutoGraph';

interface Props {
    molecule: Chips;
    designSystem: DesignSystem
}

export const ChipsMolecule: React.FC<Props> = ({ molecule, designSystem }) => {
    const grid = designSystem.atoms.gridSettings.grid.getValue();
    return (
        <div>
            <HeadingSection item={molecule} title="Apply Styles">
                Like small buttons, you can adjust the visible height of a chip but the target area will be consistent with your selected minimum height. However, you will notice you can't go smaller than 32px to accommodate the need for chips with icons.
            </HeadingSection>
            <ExampleSection>
                <div>
                    <h4>Standard Chip</h4>
                    <div style={{display:"flex", gap:"32px"}}>
                        <Chip label="No Icon" />
                        <Chip label="No Icon" onDelete={(event) => {}} />                   
                    </div>
                    <h4>Chip with Icon</h4>
                    <div style={{display:"flex", gap:"32px"}}>
                        <Chip icon={<DeleteIcon/>} label="Icon" />
                        <Chip icon={<DeleteIcon/>} label="Icon" onDelete={(event) => {}} />
                    </div>
                    <h4>Chip with Avatar</h4>
                    <div style={{display:"flex", gap:"32px"}}>
                        <Chip avatar={<Avatar/>} label="Avatar" />
                        <Chip avatar={<Avatar/>} label="Avatar" onDelete={(event) => {}} />
                    </div>
                </div>
            </ExampleSection>
            <SettingsSection>
                <div className="formRow">
                    <NumberProperty property={molecule.minWidth} defaultValue={80} units="px"/>
                </div>
                <div className="formRow">
                    <NumberScaledSelectable property={molecule.visibleHeight} defaultValue={4} units="px" scale={grid}/>
                </div>
                <div className="formRow">
                    <NumberScaledSelectable property={molecule.radius} defaultValue={2} units="px" scale={grid}/>
                </div>
                <div className="formRow">
                    <NumberScaledSelectable property={molecule.horizontalPadding} defaultValue={2} units="px" scale={grid}/>
                </div>
                {/* <div className="formRow">
                    <StringSelectable property={molecule.text} defaultValue="Caption" />
                </div> */}
                <div className="formRow">
                    <StringSelectable property={molecule.elevation} defaultValue="No Elevation" />
                </div>
                <div className="formRow">
                    <StringSelectable property={molecule.bevel} defaultValue="No Bevel" />
                </div>
            </SettingsSection>
            <GeneratedCodeSection item={molecule} />
        </div>
    )

}
