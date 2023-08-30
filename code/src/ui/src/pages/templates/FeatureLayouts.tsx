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
import { FeatureHighlightsRight } from "../../mui-a11y-tb/templates/FeatureHighlightsRight";
import { FeatureHighlightsLeft } from "../../mui-a11y-tb/templates/FeatureHighlightsLeft";

interface Props {
    colorMode?: string;
}


export const FeatureLayouts: React.FC<Props> = ({ }) => {

      const [colorMode, setColorMode] = useState<string>("");

      return (
          <div>
              <HeadingSection title="Templates" heading="Teams" />
              <SectionColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
              </SectionColorModeSelector>
              <div className={colorMode}></div>
              <ExampleSection>
                <div className={colorMode}></div>
                <div className="subtitle1">Features Highlighted Right</div>
                <FeatureHighlightsRight className={"top40 " + colorMode} />
                <p></p>
                <div className="subtitle1">Features Highlighted Left</div>
                <FeatureHighlightsLeft className={"top40 " + colorMode} />
                <p></p>
              </ExampleSection>
          </div>
      )
  }
