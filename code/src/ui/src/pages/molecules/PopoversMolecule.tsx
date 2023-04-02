/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import { Button, Popover, Typography } from '@mui/material';
import React, { useState } from 'react';
import { DesignSystem, Popovers } from 'a11y-theme-builder-sdk';
import { NumberScaledSelectable } from '../../components/editors/NumberScaledSelectable';
import { StringSelectable } from '../../components/editors/StringSelectable';
import { ExampleSection } from '../content/ExampleSection';
import { GeneratedCodeSection } from '../content/GeneratedCodeSection';
import { SettingsSection } from '../content/SettingsSection';
import { HeadingSection } from '../content/HeadingSection';

interface Props {
    popoversMolecule: Popovers;
    designSystem: DesignSystem;
}

export const PopoversMolecule: React.FC<Props> = ({ popoversMolecule, designSystem }) => {
    const grid = designSystem.atoms.gridSettings.grid.getValue();

    const [anchor, setAnchor] = useState(null)
    const openPopover = (event: any) => {
        setAnchor(event.currentTarget)
    }
    const handleClose = () => {
        setAnchor(null)
    }

    return (
        <div>
            <HeadingSection item={popoversMolecule} title="Apply Styles"></HeadingSection>
            <ExampleSection>
                <Button variant="contained" onClick={openPopover}>
                    Popover on Top
                </Button>
                <Popover
                    open={Boolean(anchor)}
                    onClose={handleClose}
                    anchorEl={anchor}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    //@TODO: determine how to move to Theme.jsx
                    PaperProps={{
                        sx: {
                            borderRadius: "calc(var(--popoverRadius) * var(--radius-1))",
                        }
                    }}
                >
                    <Typography sx={{ p: 2 }}>Top Popover</Typography>
                </Popover>
            </ExampleSection>
            <SettingsSection>
                <div className="row">
                    <div className="col-12">
                        <div className="form-row">
                            <NumberScaledSelectable property={popoversMolecule.borderRadius} units="px" defaultValue={8} scale={grid}/>
                        </div>
                        <div className="form-row">
                            <StringSelectable property={popoversMolecule.elevation} defaultValue="No Elevation" />
                        </div>
                        <div className="form-row">
                            <StringSelectable property={popoversMolecule.bevel} defaultValue="No Bevel" />
                        </div>
                    </div>
                </div>
            </SettingsSection>
            <GeneratedCodeSection item={popoversMolecule} />
        </div>
    )
}
