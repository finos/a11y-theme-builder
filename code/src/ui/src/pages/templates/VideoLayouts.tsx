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
import { VideoLeftSmall} from "../../mui-a11y-tb/templates/VideoLeftSmall";
import { VideoLeft} from "../../mui-a11y-tb/templates/VideoLeft";
import { VideoCentered} from "../../mui-a11y-tb/templates/VideoCentered";
import { VideoRightSmall} from "../../mui-a11y-tb/templates/VideoRightSmall";
import { VideoRight} from "../../mui-a11y-tb/templates/VideoRight";

interface Props {
    colorMode?: string;
}


export const VideoLayouts: React.FC<Props> = ({ }) => {

      const [colorMode, setColorMode] = useState<string>("colored");

      return (
          <div className={colorMode}>
              <HeadingSection title="Templates" heading="Videos" />
              <ExampleSection>
              </ExampleSection>
              <SectionColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
              </SectionColorModeSelector>
              <VideoLeftSmall/>
              <p></p>
              <VideoLeft/>
              <p></p>
              <VideoCentered/>
              <p></p>
              <VideoRightSmall/>
              <p></p>
              <VideoRight/>
              <p></p>

          </div>
      )
  }
