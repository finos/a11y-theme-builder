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
import { VideoLeftSmall} from "../../mui-a11y-tb/organisms/VideoLeftSmall";
import { VideoLeft} from "../../mui-a11y-tb/organisms/VideoLeft";
import { VideoCentered} from "../../mui-a11y-tb/organisms/VideoCentered";
import { VideoRightSmall} from "../../mui-a11y-tb/organisms/VideoRightSmall";
import { VideoRight} from "../../mui-a11y-tb/organisms/VideoRight";

interface Props {
    colorMode?: string;
}


export const VideoLayouts: React.FC<Props> = ({ }) => {

      const [colorMode, setColorMode] = useState<string>("");

      return (
          <div>
              <HeadingSection title="organisms" heading="Videos" />
              <SectionColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
              </SectionColorModeSelector>
              <div className="section-demos" data-background={colorMode}>
                <div className="demo-title subtitle1">Small Video Left</div>
                <VideoLeftSmall  className="top40"/>
                <p></p>
                <div className="demo-title subtitle1">Medium Video Left</div>
                <VideoLeft className="top40" />
                <p></p>
                <div className="demo-title subtitle1">Video Centered</div>
                <VideoCentered className="top40" />
                <p></p>
                <div className="demo-title subtitle1">Small Video Right</div>
                <VideoRightSmall className="top40" />
                <p></p>
                <div className="demo-title subtitle1">Medium Video Right</div>
                <VideoRight className="top40" />
                <p></p>
              </div>
          </div>
      )
  }
