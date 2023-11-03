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
import { YouTubeLeftSmall} from "../../mui-a11y-tb/organisms/YouTubeLeftSmall";
import { YouTubeLeft} from "../../mui-a11y-tb/organisms/YouTubeLeft";
import { YouTubeCentered} from "../../mui-a11y-tb/organisms/YouTubeCentered";
import { YouTubeRightSmall} from "../../mui-a11y-tb/organisms/YouTubeRightSmall";
import { YouTubeRight} from "../../mui-a11y-tb/organisms/YouTubeRight";

interface Props {
    colorMode?: string;
}


export const YouTubeLayouts: React.FC<Props> = ({ }) => {

      const [colorMode, setColorMode] = useState<string>("");

      return (
          <div>
              <HeadingSection title="organisms" heading="YouTube Videos" />
              <SectionColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
              </SectionColorModeSelector>
              <div className="section-demos" data-background={colorMode}>
                <div className="demo-title subtitle1">Small YouTube Video Left</div>
                <YouTubeLeftSmall className="top40" />
                <p></p>
                <div className="demo-title subtitle1">Medium YouTube Video Left</div>
                <YouTubeLeft className="top40" />
                <p></p>
                <div className="demo-title subtitle1">YouTube Video Centered</div>
                <YouTubeCentered className="top40" />
                <p></p>
                <div className="demo-title subtitle1">Small YouTube Video Right</div>
                <YouTubeRightSmall className="top40" />
                <p></p>
                <div className="demo-title subtitle1">Medium YouTube Video Right</div>
                <YouTubeRight className="top40" />
                <p></p>
              </div>

          </div>
      )
  }
