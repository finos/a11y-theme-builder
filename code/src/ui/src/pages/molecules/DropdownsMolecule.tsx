/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useEffect, useState } from 'react';
import { Box, MenuItem, Select } from '@mui/material';
import { DesignSystem, Dropdowns } from 'a11y-theme-builder-sdk';
import { NumberScaledSelectable } from '../../components/editors/NumberScaledSelectable';
import { StringSelectable } from '../../components/editors/StringSelectable';
//import './DropdownsMolecule.css';
import { GeneratedCodeSection } from '../content/GeneratedCodeSection';
import { ExampleSection } from '../content/ExampleSection';
import { SettingsSection } from '../content/SettingsSection';
import { HeadingSection } from '../content/HeadingSection';
import { LightModeSection } from '../content/LightModeSection';
import { DarkModeSection } from '../content/DarkModeSection';
import { Dropdown } from '../../mui-a11y-tb/components/Dropdown';

interface Props {
    molecule: Dropdowns;
    designSystem: DesignSystem;
}

export const DropdownsMolecule: React.FC<Props> = ({ molecule, designSystem }) => {

    useEffect(() => {
        console.log("DropdownsMolecule mounted");
    }, []);

    const [sample, setSample] = useState<string>("option1");
    const refContainer = React.useRef(null);

    return (
        <div>
            <HeadingSection item={molecule} title="Apply Styles">
                You can stylize your dropdown menu items in their hover and focus states.
            </HeadingSection>
            <ExampleSection>
                <LightModeSection>
                    <div className="form-row">
                        <Dropdown
                            className="dropdownFocus"
                            value={sample}
                            sx={{ width: "300px" }}
                            onChange={(event:any) => setSample(event.target.value)}
                        >
                            <MenuItem value="option1">Option 1</MenuItem>
                            <MenuItem value="option2">Option 2</MenuItem>
                            <MenuItem value="option3">Option 3</MenuItem>
                        </Dropdown>
                    </div>
                </LightModeSection>
                <DarkModeSection>
                    <div className="form-row">
                        <Dropdown
                            className="dropdown-toggle dropdownFocus darkmode"
                            value={sample}
                            sx={{ width: "300px" }}
                            MenuProps={{
                                container: refContainer.current
                            }}
                            onChange={(event:any) => setSample(event.target.value)}
                        >
                            <MenuItem value="option1">Option 1</MenuItem>
                            <MenuItem value="option2">Option 2</MenuItem>
                            <MenuItem value="option3">Option 3</MenuItem>
                        </Dropdown>
                        <div ref={refContainer} ></div>
                    </div>
                </DarkModeSection>
            </ExampleSection>
            <SettingsSection>
                <StringSelectable property={molecule.menuFocusState} defaultValue="true" variant="radio" />
            </SettingsSection>
            <GeneratedCodeSection item={molecule} />
        </div >
    )
}
