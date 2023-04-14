﻿/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React from 'react';
import { Alert } from '@mui/material';
import { DesignSystem, Toasts } from 'a11y-theme-builder-sdk';
import { NumberSelectable } from '../../components/editors/NumberSelectable';
import { NumberScaledSelectable } from '../../components/editors/NumberScaledSelectable';
import { StringSelectable } from '../../components/editors/StringSelectable';
import { ExampleSection } from '../content/ExampleSection';
import { GeneratedCodeSection } from '../content/GeneratedCodeSection';
import { SettingsSection } from '../content/SettingsSection';
import { HeadingSection } from '../content/HeadingSection';

interface Props {
    toastsMolecule: Toasts;
    designSystem: DesignSystem;
}

export const ToastsMolecule: React.FC<Props> = ({ toastsMolecule, designSystem }) => {
    const grid = designSystem.atoms.gridSettings.grid.getValue();

    return (
        <>
            <HeadingSection item={toastsMolecule} title="Apply Styles" />
            <ExampleSection>
                <Alert
                    severity="error"
                    sx={{
                        width:"fit-content",
                    }}
                >
                    Toast Title
                </Alert>
            </ExampleSection>
            <SettingsSection>
                <div className="form-row">
                    <NumberSelectable property={toastsMolecule.gap} units="px" defaultValue={32} />
                </div>
                <div className="form-row">
                    <StringSelectable property={toastsMolecule.elevation} defaultValue="No Elevation" />
                </div>
            </SettingsSection>
            <GeneratedCodeSection item={toastsMolecule} />
        </>
    )
}
