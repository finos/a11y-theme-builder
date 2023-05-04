/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useEffect, useState } from 'react';
import { InputLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { DesignSystem, Hero } from 'a11y-theme-builder-sdk';
import { HeroExample } from '../../pages/organisms/HeroExample';
import { GeneratedCodeSection } from '../content/GeneratedCodeSection';
import { ExampleSection } from '../content/ExampleSection';
import { SettingsSection } from '../content/SettingsSection';
import { HeadingSection } from '../content/HeadingSection';
import { ColorModeSelector } from '../content/ColorModeSelector';
import { HeroColorModeSelector } from '../content/HeroColorModeSelector';
interface Props {
}

export const HeroComponent: React.FC<Props> = ({ }) => {

    const [colorMode, setColorMode] = useState<string>("default");

    return (
        <div>
            <HeadingSection title="Desktop" heading="Hero" />
            <ExampleSection>
                <HeroColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
                    <HeroExample colorMode={colorMode}/>
                </HeroColorModeSelector>
            </ExampleSection>
        </div>
    )
}
