/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { DesignSystem, Images } from 'a11y-theme-builder-sdk';
import { Breadcrumbs, Button, Link, Typography, Grid } from '@mui/material';
import { ExampleSection } from '../content/ExampleSection';
import { SectionColorModeSelector } from '../content/SectionColorModeSelector';
import { HeadingSection } from '../../pages/content/HeadingSection';
import { ImageTextRight } from "../../mui-a11y-tb/templates/ImageTextRight";
import { ImageTextLeft } from "../../mui-a11y-tb/templates/ImageTextLeft";

interface Props {
    colorMode?: string;
}


export const TemplateExample: React.FC<Props> = ({ }) => {

      const [colorMode, setColorMode] = useState<string>("colored");

      return (
          <div>
              <HeadingSection title="Templates" heading="Image & Text" />
              <ExampleSection>
                  <SectionColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
                      <ImageTextRight className={colorMode} />
                      <ImageTextLeft className={"top40 " + colorMode} />
                  </SectionColorModeSelector>
              </ExampleSection>
          </div>
      )
  }
