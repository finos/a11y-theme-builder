/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, {useState, useEffect } from 'react';
import {DesignSystem} from 'a11y-theme-builder-sdk';
import {Select, SelectChangeEvent, InputLabel, FormControl, FormControlLabel, Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { AccessibilityLayersButton } from './AccessibilityLayersButton';
import './DesignSystemTitleBar.css';
import { Divider } from '@mui/material';
import ModalSystemName from '../components/modals/ModalSystemName';

const name = "DesignSystemTitleBar";

interface Props {
    designSystemNames: string[];
    designSystem: DesignSystem;
};

export const DesignSystemTitleBar: React.FC<Props> = ({ designSystemNames, designSystem }) => {

    // list of names of design systems in ThemeBuilder
    const [_designSystemsList, _setDesignSystemsList] = useState<string[]>([]);
    const [systemNameIsOpen, setSystemNameIsOpen] = useState(false);

    const createNewDesignSystem = "New design system";

    useEffect(() => {
    }, []);

    const handleLogoClick = async () => {
        window.location.href = `/`;
    }

    const saveDesignSystem = async () => {
        console.log(`Save Design System`);
        designSystem.store();
    }

    const handleDSChange = async (event: SelectChangeEvent) => {
        const value = event.target.value;
        console.log(`${name} - Changed by UI to ${value}`);

        if (value == createNewDesignSystem) {
            setSystemNameIsOpen(true)
        }
        else {
            setTimeout(function() {
                window.location.href = `/designSystem/${value}`;
            }, 100); // let animation finish

            // TODO: is there a way to do this using navigate?
        }
    };

    return (
        <>
            <div className='titleBarDiv'>

                <div className="left-titlebar">
                    <img src="/tb-logo.svg" alt="ThemeBuilder Logo" className="tb-logo" onClick={handleLogoClick}/>
                </div>

                <div className="center-titlebar">
                    <div className="input-titlebar">
                        <div id="design-system-title-current-select-label" className="label">Current Design System:</div>
                        <Select
                            labelId="design-system-title-current-select-label"
                            onChange={handleDSChange}
                            value={designSystem.name}
                            size="small"
                            sx={{
                                width: "fit-content",
                                minWidth: "200px",
                            }}
                        >
                            {designSystemNames.map((item) => {
                                return <MenuItem key={"key" + item} value={item}>{item}</MenuItem>
                            })}
                            <Divider />
                            <MenuItem value={createNewDesignSystem}>{createNewDesignSystem}</MenuItem>
                        </Select>
                    </div>
                    <Button size="small" onClick={saveDesignSystem}>Save</Button>
                </div>

                <div className="right-titlebar">
                    <AccessibilityLayersButton designSystem={designSystem} />
                </div>

            </div>
            <ModalSystemName isOpen={systemNameIsOpen} onClose={() => setSystemNameIsOpen(false)} />
        </>
    );
}
