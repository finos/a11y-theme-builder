import React, { useEffect, useState } from 'react';
import { Box, MenuItem, Select } from '@mui/material';
import { DesignSystem, Dropdowns } from '../../sdk';
import { NumberScaledSelectable } from '../../components/editors/NumberScaledSelectable';
import { StringSelectable } from '../../components/editors/StringSelectable';
//import './DropdownsMolecule.css';
import { GeneratedCodeSection } from '../content/GeneratedCodeSection';
import { ExampleSection } from '../content/ExampleSection';
import { SettingsSection } from '../content/SettingsSection';
import { HeadingSection } from '../content/HeadingSection';
import { LightModeSection } from '../content/LightModeSection';
import { DarkModeSection } from '../content/DarkModeSection';

interface Props {
    molecule: Dropdowns;
    designSystem: DesignSystem;
}

export const DropdownsMolecule: React.FC<Props> = ({ molecule, designSystem }) => {
    const grid = designSystem.atoms.gridSettings.grid.getValue();

    useEffect(() => {
        console.log("DropdownsMolecule mounted");
    }, []);

    const [sample, setSample] = useState<string>("option1");

    return (
        <div>
            <HeadingSection item={molecule} title="Apply Styles">
                You can stylize your dropdown menu items in their hover and focus states.
            </HeadingSection>
            <ExampleSection>
                <LightModeSection>
                    <div className="form-row">
                        <Select
                            className="dropdownFocus"
                            value={sample}
                            sx={{ width: "300px" }}
                            onChange={(event) => setSample(event.target.value)}
                        >
                            <MenuItem value="option1">Option 1</MenuItem>
                            <MenuItem value="option2">Option 2</MenuItem>
                            <MenuItem value="option3">Option 3</MenuItem>
                        </Select>
                    </div>
                </LightModeSection>
                <DarkModeSection>
                    <div className="form-row">
                        <Select
                            className="dropdown-toggle dropdownFocus darkmode"
                            value={sample}
                            sx={{ width: "300px" }}
                            //@TODO: Need to determine how to move this to Theme.jsx
                            MenuProps={{
                                PaperProps: {
                                  sx: {
                                    '& .MuiList-root.MuiMenu-list': {
                                      background: 'var(--dm-surface) !important',
                                      color: 'var(--dm-on-surface)',
                                      border: '1px solid var(--dm-border)',
                                    },
                                    '& .MuiList-root.MuiMenu-list .MuiMenuItem-root': {
                                        color: "var(--dm-on-background)",
                                    },
                                    '& .MuiList-root.MuiMenu-list .MuiMenuItem-root:hover': {
                                        color: "var(--dm-on-dropdown-hover-bg)",
                                        background: "var(--dm-dropdown-hover-bg)",
                                    },
                                        borderRadius: 'calc(var(--radius-1) * var(--dropdown-radius))',
                                  },
                                },
                              }}
                            
                            onChange={(event) => setSample(event.target.value)}
                        >
                            <MenuItem value="option1">Option 1</MenuItem>
                            <MenuItem value="option2">Option 2</MenuItem>
                            <MenuItem value="option3">Option 3</MenuItem>
                        </Select>
                    </div>
                </DarkModeSection>
            </ExampleSection>
            <SettingsSection>
                <StringSelectable property={molecule.menuFocusState} defaultValue="true" variant="radio" />
                <div className="top24"/>
                <NumberScaledSelectable property={molecule.borderRadius} units="px" scale={grid} />
            </SettingsSection>
            <GeneratedCodeSection item={molecule} />
        </div >
    )
}
