/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useEffect, useState } from 'react';
import { InputLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { DesignSystem, Hero } from '@finos/a11y-theme-builder-sdk';
import { NumberScaledSelectable } from '../../components/editors/NumberScaledSelectable';
import { StringSelectable } from '../../components/editors/StringSelectable';
import { HeroExample } from './HeroExample';
import { GeneratedCodeSection } from '../content/GeneratedCodeSection';
import { ExampleSection } from '../content/ExampleSection';
import { SettingsSection } from '../content/SettingsSection';
import { HeadingSection } from '../content/HeadingSection';
import { ColorModeSelector } from '../content/ColorModeSelector';
interface Props {
    organism: Hero;
    designSystem: DesignSystem;
}

export const HeroOrganism: React.FC<Props> = ({ organism, designSystem }) => {
    const grid = designSystem.atoms.gridSettings.grid.getValue();
    const [colorMode, setColorMode] = useState<string>("default");

    return (
        <div>
            <HeadingSection item={organism} title="Apply Styles">
                <p>Configure settings that affect the appearance of Hero organisms.  Heros are a common content-pattern that is located in a prominant location and may contain introductory text for a website and may contain breadcrumbs, buttons and other components.</p>
            </HeadingSection>

            <ExampleSection>
                <HeroExample/>
            </ExampleSection>

            <SettingsSection>
                <div className="top40">
                    <NumberScaledSelectable property={organism.verticalPadding} units="px" scale={grid}/>
                </div>
                <div className="top40">
                    <NumberScaledSelectable property={organism.verticalGap} units="px" scale={grid}/>
                </div>
                <div className="top40">
                    <StringSelectable property={organism.title} defaultValue={"Display 1"} />
                </div>
                <div className="top40">
                    <StringSelectable property={organism.body} defaultValue={"Body 1"} />
                </div>
            </SettingsSection>
            <GeneratedCodeSection item={organism}/>
        </div>
    )
}
