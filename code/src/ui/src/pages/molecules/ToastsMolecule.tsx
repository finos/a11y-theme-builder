/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React from 'react';
import { Alert } from '@mui/material';
import { Toasts } from '@finos/a11y-theme-builder-sdk';
import { NumberScaledSelectable } from '../../components/editors/NumberScaledSelectable';
import { StringCategorySelectable } from '../../components/editors/StringCategorySelectable';
import { ExampleSection } from '../content/ExampleSection';
import { GeneratedCodeSection } from '../content/GeneratedCodeSection';
import { SettingsSection } from '../content/SettingsSection';
import { HeadingSection } from '../content/HeadingSection';
import { getCssValue } from '../../mui-a11y-tb/themes/Theme';

interface Props {
    toastsMolecule: Toasts;
}

export const ToastsMolecule: React.FC<Props> = ({ toastsMolecule }) => {
    const grid = parseInt(getCssValue("--spacing-1"));

    return (
        <>
            <HeadingSection item={toastsMolecule} title="Apply Styles">
                A Toast is an alert box that informs the user about something important.
            </HeadingSection>
            <ExampleSection>
                <Alert severity="error" data-backround="primary" 
                    sx={{
                        width:"fit-content",
                    }}
                >
                    Toast Title
                </Alert>
                <SettingsSection>
                    <div className="form-row">
                        <NumberScaledSelectable property={toastsMolecule.padding} units="px" defaultValue={1} scale={grid}/>
                    </div>
                    <div className="form-row">
                        <StringCategorySelectable property={toastsMolecule.shadow} defaultValue="None" />
                    </div>
                </SettingsSection>
                <GeneratedCodeSection item={toastsMolecule} />
            </ExampleSection>

        </>
    )
}
