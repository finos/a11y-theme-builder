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
import { ImageCards916} from "../../mui-a11y-tb/templates/ImageCards916";
import { ImageCardsCentered916} from "../../mui-a11y-tb/templates/ImageCardsCentered916";
import { ImageCardsScrolling916} from "../../mui-a11y-tb/templates/ImageCardsScrolling916";

interface Props {
    colorMode?: string;
}


export const ImageCardsStandard916: React.FC<Props> = ({ }) => {

      const [colorMode, setColorMode] = useState<string>("colored");

      return (
          <div className={colorMode}>
              <HeadingSection title="Templates" heading="White Cards, with Images 9:16" />
              <div className={colorMode}></div>
              <ExampleSection>
                <SectionColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
                </SectionColorModeSelector>
                <ImageCards916/>
                <p></p>
                <ImageCardsCentered916 />
                <p></p>
                <ImageCardsScrolling916  />
              </ExampleSection>
          </div>
      )
  }
