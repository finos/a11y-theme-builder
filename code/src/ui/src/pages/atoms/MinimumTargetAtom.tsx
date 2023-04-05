/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React from 'react';
import { MinimumTarget } from 'a11y-theme-builder-sdk';
import { NumberSelectable } from '../../components/editors/NumberSelectable';
import { GeneratedCodeSection } from '../content/GeneratedCodeSection';
import { ExampleSection } from '../content/ExampleSection';
import { SettingsSection } from '../content/SettingsSection';
import { HeadingSection } from '../content/HeadingSection';

interface Props {
    atom: MinimumTarget;
}

export const MinimumTargetAtom: React.FC<Props> = ({ atom }) => {
    return (
        <div>
            <HeadingSection item={atom} title="Theme" heading="Minimum Click Area">
                <div>Define the minimum click area for your desktop experience.</div>
                <div className="top16">WCAG AA requires a minimum target area of 24px, while WCAG AAA requires a 44px target area.</div>
                <div className="top16">Note: For tablet and mobile the target should be set to 44px.</div>
            </HeadingSection>
            <ExampleSection>
                None
            </ExampleSection>
            <SettingsSection>
                <NumberSelectable property={atom.minHeight} defaultValue={44} units="px" />
            </SettingsSection>
            <GeneratedCodeSection item={atom}/>
        </div>
    )
}
