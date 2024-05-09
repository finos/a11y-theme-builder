/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { DesignSystem, Images } from '@finos/a11y-theme-builder-sdk';
import { Breadcrumbs, Button, Link, Typography, Grid } from '@mui/material';
import { ExampleSection } from '../content/ExampleSection';
import { SectionColorModeSelector } from '../content/SectionColorModeSelector';
import { HeadingSection } from '../../pages/content/HeadingSection';
import { Text } from '../../mui-a11y-tb/organisms/Text';
import { TextWithDivider } from '../../mui-a11y-tb/organisms/TextWithDivider';
import { TextGradient } from '../../mui-a11y-tb/organisms/TextGradient';
import { TextDropColor } from '../../mui-a11y-tb/organisms/TextDropColor';
import { TextCentered } from '../../mui-a11y-tb/organisms/TextCentered';
import { TextWithDividerCentered } from '../../mui-a11y-tb/organisms/TextWithDividerCentered';
import { TextGradientCentered } from '../../mui-a11y-tb/organisms/TextGradientCentered';
import { TextDropColorCentered } from '../../mui-a11y-tb/organisms/TextDropColorCentered';

interface Props {
  colorMode?: string;
}

export const TextLayouts: React.FC<Props> = ({}) => {
  const [colorMode, setColorMode] = useState<string>('');

  return (
    <div>
      <HeadingSection title="organisms" heading="Teams" />
      <SectionColorModeSelector
        colorMode={colorMode}
        setColorMode={setColorMode}
      ></SectionColorModeSelector>
      <div className="section-demos" data-background={colorMode}>
        <div className={colorMode}></div>
        <div className="demo-title subtitle1">Text with Title, Centered</div>
        <Text className="top40" />
        <p></p>
        <div className="demo-title subtitle1">Text with Divider, Centered</div>
        <TextWithDivider className="top40" />
        <p></p>
        <div className="demo-title subtitle1">Text with Title, Centered</div>
        <TextCentered className="top40" />
        <p></p>
        <div className="demo-title subtitle1">Text with Divider, Centered</div>
        <TextWithDividerCentered className="top40" />
        <p></p>
      </div>
    </div>
  );
};
