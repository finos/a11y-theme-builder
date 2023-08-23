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
import { YouTubeLeftSmall} from "../../mui-a11y-tb/templates/YouTubeLeftSmall";
import { YouTubeLeft} from "../../mui-a11y-tb/templates/YouTubeLeft";
import { YouTubeCentered} from "../../mui-a11y-tb/templates/YouTubeCentered";
import { YouTubeRightSmall} from "../../mui-a11y-tb/templates/YouTubeRightSmall";
import { YouTubeRight} from "../../mui-a11y-tb/templates/YouTubeRight";

interface Props {
    colorMode?: string;
}


export const YouTubeLayouts: React.FC<Props> = ({ }) => {

      const [colorMode, setColorMode] = useState<string>("colored");

      return (
          <div className={colorMode}>
              <HeadingSection title="Templates" heading="YouTube Videos" />
              <ExampleSection>
              </ExampleSection>
              <SectionColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
              </SectionColorModeSelector>
              <YouTubeLeftSmall/>
              <p></p>
              <YouTubeLeft/>
              <p></p>
              <YouTubeCentered/>
              <p></p>
              <YouTubeRightSmall/>
              <p></p>
              <YouTubeRight/>
              <p></p>

          </div>
      )
  }
