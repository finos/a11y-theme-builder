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
import { TeamsLarge } from "../../mui-a11y-tb/organisms/TeamsLarge";
import { TeamsXLarge } from "../../mui-a11y-tb/organisms/TeamsXLarge";
import { TeamsMedium } from "../../mui-a11y-tb/organisms/TeamsMedium";

interface Props {
    colorMode?: string;
}


export const TeamLayouts: React.FC<Props> = ({ }) => {

      const [colorMode, setColorMode] = useState<string>("");

      return (
          <div>
              <HeadingSection title="organisms" heading="Teams" />
              <SectionColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
              </SectionColorModeSelector>
              <div className="section-demos" data-background={colorMode}>
                <div className={colorMode}></div>
                <div className="demo-title subtitle1">Teams with X-Large Avatars</div>
                <TeamsXLarge className="top40" />
                <p></p>
                <div className="demo-title subtitle1">Teams with Large Avatars</div>
                <TeamsLarge className="top40" />
                <p></p>
                <div className="demo-title subtitle1">Teams with Medium Avatars</div>
                <TeamsMedium className="top40" />
              </div>
          </div>
      )
  }
