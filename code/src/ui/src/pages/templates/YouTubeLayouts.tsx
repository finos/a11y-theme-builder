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

      const [colorMode, setColorMode] = useState<string>("");

      return (
          <div>
              <HeadingSection title="Templates" heading="YouTube Videos" />
              <SectionColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
              </SectionColorModeSelector>
              <div className={colorMode}></div>
              <ExampleSection>
                <div className="subtitle1">Small YouTube Video Left</div>
                <YouTubeLeftSmall className={colorMode}/>
                <p></p>
                <div className="subtitle1">Medium YouTube Video Left</div>
                <YouTubeLeft className={colorMode}/>
                <p></p>
                <div className="subtitle1">YouTube Video Centered</div>
                <YouTubeCentered className={colorMode}/>
                <p></p>
                <div className="subtitle1">Small YouTube Video Right</div>
                <YouTubeRightSmall className={colorMode}/>
                <p></p>
                <div className="subtitle1">Medium YouTube Video Right</div>
                <YouTubeRight className={colorMode}/>
                <p></p>
              </ExampleSection>

          </div>
      )
  }
