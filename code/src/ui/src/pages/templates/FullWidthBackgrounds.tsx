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
import { LargeBackgroundImage } from "../../mui-a11y-tb/templates/LargeBackgroundImage";
import { LargeBackgroundVideo } from "../../mui-a11y-tb/templates/LargeBackgroundVideo";

interface Props {
    colorMode?: string;
}


export const FullWidthBackgrounds: React.FC<Props> = ({ }) => {

      const [colorMode, setColorMode] = useState<string>("colored");

      return (
          <div>
              <HeadingSection title="Templates" heading="Full Width Backgrounds" />
              <ExampleSection>
                  <div className="subtitle1">Section with full width background images, no content</div>
                  <LargeBackgroundImage className={"top40 " + colorMode} />
                  <p></p>
                  <div className="subtitle1">Section with full width background video, no content</div>
                  <LargeBackgroundVideo className={"top40 " + colorMode} />
                  <p></p>
              </ExampleSection>
          </div>
      )
  }
