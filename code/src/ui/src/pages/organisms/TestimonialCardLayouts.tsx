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
import { TestimonialCards } from '../../mui-a11y-tb/organisms/TestimonialCards';
import { TestimonialCardsCentered } from '../../mui-a11y-tb/organisms/TestimonialCardsCentered';

interface Props {
  colorMode?: string;
}

export const TestimonialCardLayouts: React.FC<Props> = ({}) => {
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
        <div className="demo-title subtitle1">Testimonial Cards</div>
        <TestimonialCards className="top40" />
        <p></p>
        <div className="demo-title subtitle1">Testimonial Cards, Centered</div>
        <TestimonialCardsCentered className="top40" />
        <p></p>
      </div>
    </div>
  );
};
