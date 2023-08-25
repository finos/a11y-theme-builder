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
import { IconCards} from "../../mui-a11y-tb/templates/IconCards";
import { IconCardsCentered} from "../../mui-a11y-tb/templates/IconCardsCentered";
import { IconCardsScrolling} from "../../mui-a11y-tb/templates/IconCardsScrolling";

interface Props {
    colorMode?: string;
}


export const IconCardsStandard: React.FC<Props> = ({ }) => {

      const [colorMode, setColorMode] = useState<string>("colored");

      return (
          <div className={colorMode}>
              <HeadingSection title="Templates" heading="White Cards, with Icons" />
              <SectionColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
              </SectionColorModeSelector>
              <div className={colorMode}></div>
              <ExampleSection>
                <IconCards/>
                <p></p>
                <IconCardsCentered />
                <p></p>
                <IconCardsScrolling  />
              </ExampleSection>





          </div>
      )
  }
