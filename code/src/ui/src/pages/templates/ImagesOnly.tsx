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
import { ImageLarge } from "../../mui-a11y-tb/templates/ImageLarge";
import { TwoImages } from "../../mui-a11y-tb/templates/TwoImages";
import { ThreeImages } from "../../mui-a11y-tb/templates/ThreeImages";
import { FourImages } from "../../mui-a11y-tb/templates/FourImages";

interface Props {
    colorMode?: string;
}


export const ImagesOnly: React.FC<Props> = ({ }) => {

      const [colorMode, setColorMode] = useState<string>("");

      return (
          <div>
              <HeadingSection title="Templates" heading="Image Only Sections" />
              <SectionColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
              </SectionColorModeSelector>
              <div className={colorMode}></div>
              <ExampleSection>
                <div className="subtitle1">Single Image</div>
                <ImageLarge className={"top40 " + colorMode} />
                <p></p>
                <div className="subtitle1">Two Images</div>
                <TwoImages className={"top40 " + colorMode} />
                <p></p>
                <div className="subtitle1">Three Images</div>
                <ThreeImages className={"top40 " + colorMode} />
                <p></p>
                <div className="subtitle1">Four Images</div>
                <FourImages className={"top40 " + colorMode} />
              </ExampleSection>
          </div>
      )
  }
