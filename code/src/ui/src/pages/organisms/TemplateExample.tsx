/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { DesignSystem, Images } from 'a11y-theme-builder-sdk';
import { Breadcrumbs, Button, Link, Typography, Grid } from '@mui/material';
import { ExampleSection } from '../content/ExampleSection';
import { SectionColorModeSelector } from '../content/SectionColorModeSelector';
import { HeadingSection } from '../../pages/content/HeadingSection';
import { ImageTextRight } from "../../mui-a11y-tb/organisms/ImageTextRight";
import { ImageTextLeft } from "../../mui-a11y-tb/organisms/ImageTextLeft";
import { MediumImageRight } from "../../mui-a11y-tb/organisms/MediumImageRight";
import { MediumImageLeft } from "../../mui-a11y-tb/organisms/MediumImageLeft";
import { LargeImageRight } from "../../mui-a11y-tb/organisms/LargeImageRight";
import { LargeImageLeft } from "../../mui-a11y-tb/organisms/LargeImageLeft";

interface Props {
    colorMode?: string;
}


export const TemplateExample: React.FC<Props> = ({ }) => {

      const [colorMode, setColorMode] = useState<string>("colored");

      return (
          <div>
              <HeadingSection title="organisms" heading="Image & Text" />
              <SectionColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
              </SectionColorModeSelector>
              <div className="section-demos" data-background={colorMode}>
                <div className="demo-title subtitle1">Small Image on Right</div>
                <ImageTextRight className="top40" />
                <p></p>
                <div className="demo-title subtitle1">Small Image on Left</div>
                <ImageTextLeft className="top40" />
                <p></p>
                <div className="demo-title subtitle1">Medium Image on Right</div>
                <MediumImageRight  className="top40"  />
                <p></p>
                <div className="demo-title subtitle1">Medium Image on Left</div>
                <MediumImageLeft className="top40" />
                <p></p>
                <div className="demo-title subtitle1">Large Image on Right</div>
                <LargeImageRight  className="top40"  />
                <p></p>
                <div className="demo-title subtitle1">Large Image on Left</div>
                <LargeImageLeft className="top40" />
              </div>
          </div>
      )
  }
