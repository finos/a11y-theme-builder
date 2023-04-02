/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React from 'react';
import { AnimationSettings } from 'a11y-theme-builder-sdk';
import { NumberProperty } from '../../components/editors/NumberProperty';
import { GeneratedCodeSection } from '../content/GeneratedCodeSection';
import { ExampleSection } from '../content/ExampleSection';
import { SettingsSection } from '../content/SettingsSection';
import { HeadingSection } from '../content/HeadingSection';

interface Props {
    atom: AnimationSettings;
}

export const AnimationAtom: React.FC<Props> = ({ atom }) => {
    return (
        <div>
            <HeadingSection item={atom} title="Animations" />
            <ExampleSection>
                None
            </ExampleSection>
            <SettingsSection>
                <div className="top40">
                    <NumberProperty property={atom.animationTiming} units="ms" />
                </div>
                <div className="top40">
                    <NumberProperty property={atom.hoverAndFocusAnimationDistance} units="px" />
                </div>
            </SettingsSection>
            <GeneratedCodeSection item={atom}/>
        </div>
    )
}
