/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useEffect, useState } from 'react';
import { InputLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { DesignSystem, Hero } from '@finos/a11y-theme-builder-sdk';
import { HeroExample } from '../../pages/organisms/HeroExample';
import { GeneratedCodeSection } from '../content/GeneratedCodeSection';
import { ExampleSection } from '../content/ExampleSection';
import { SettingsSection } from '../content/SettingsSection';
import { HeadingSection } from '../content/HeadingSection';
import { ColorModeSelector } from '../content/ColorModeSelector';
import { HeroColorModeSelector } from '../content/HeroColorModeSelector';
interface Props {}

export const HeroComponent: React.FC<Props> = ({}) => {
  const [colorMode, setColorMode] = useState<string>('colored');

  return (
    <div>
      <HeadingSection title="Desktop" heading="Hero" />
      <ExampleSection>
        <HeroExample data-background={colorMode} />
      </ExampleSection>
    </div>
  );
};
