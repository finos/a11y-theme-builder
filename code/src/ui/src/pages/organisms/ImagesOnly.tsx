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
import { ImageLarge } from "../../mui-a11y-tb/organisms/ImageLarge";
import { TwoImages } from "../../mui-a11y-tb/organisms/TwoImages";
import { ThreeImages } from "../../mui-a11y-tb/organisms/ThreeImages";
import { FourImages } from "../../mui-a11y-tb/organisms/FourImages";

interface Props {
    colorMode?: string;
}


export const ImagesOnly: React.FC<Props> = ({ }) => {

      const [colorMode, setColorMode] = useState<string>("");

      return (
          <div>
              <HeadingSection title="organisms" heading="Image Only Sections" />
              <SectionColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
              </SectionColorModeSelector>
              <div className="section-demos" data-background={colorMode}>
                <div className="demo-title subtitle1">Single Image</div>
                <ImageLarge className="top40 "  />
                <p></p>
                <div className="demo-title subtitle1">Two Images</div>
                <TwoImages className="top40 "  />
                <p></p>
                <div className="demo-title subtitle1">Three Images</div>
                <ThreeImages className="top40 "  />
                <p></p>
                <div className="demo-title subtitle1">Four Images</div>
                <FourImages className="top40 " />
              </div>
          </div>
      )
  }
