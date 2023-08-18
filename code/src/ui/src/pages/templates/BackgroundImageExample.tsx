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
import { SmBackgroundImageTextRight } from "../../mui-a11y-tb/templates/SmBackgroundImageTextRight";
import { SmBackgroundImageTextLeft } from "../../mui-a11y-tb/templates/SmBackgroundImageTextLeft";
import { MdBackgroundImageTextRight } from "../../mui-a11y-tb/templates/MdBackgroundImageTextRight";
import { MdBackgroundImageTextLeft } from "../../mui-a11y-tb/templates/MdBackgroundImageTextLeft";
import { LgBackgroundImageTextRight } from "../../mui-a11y-tb/templates/LgBackgroundImageTextRight";
import { LgBackgroundImageTextLeft } from "../../mui-a11y-tb/templates/LgBackgroundImageTextLeft";

interface Props {
    colorMode?: string;
}


export const BackgroundImageExample: React.FC<Props> = ({ }) => {

      const [colorMode, setColorMode] = useState<string>("colored");

      return (
          <div>
              <HeadingSection title="Templates" heading="Image & Text" />
              <ExampleSection>
                  <SectionColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
                      <SmBackgroundImageTextRight className={"top40 " + colorMode} />
                      <p></p>
                      <SmBackgroundImageTextLeft className={"top40 " + colorMode} />
                      <p></p>
                      <MdBackgroundImageTextRight className={"top40 " + colorMode} />
                      <p></p>
                      <MdBackgroundImageTextLeft className={"top40 " + colorMode} />
                      <p></p>
                      <LgBackgroundImageTextRight className={"top40 " + colorMode} />
                      <p></p>
                      <LgBackgroundImageTextLeft className={"top40 " + colorMode} />
                  </SectionColorModeSelector>
              </ExampleSection>
          </div>
      )
  }
