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
import { StandardCards} from "../../mui-a11y-tb/templates/StandardCards";
import { StandardCardsCentered} from "../../mui-a11y-tb/templates/StandardCardsCentered";
import { StandardCardsScrolling} from "../../mui-a11y-tb/templates/StandardCardsScrolling";

interface Props {
    colorMode?: string;
}


export const CardsStandard: React.FC<Props> = ({ }) => {

      const [colorMode, setColorMode] = useState<string>("colored");

      return (
          <div className={colorMode}>
              <HeadingSection title="Templates" heading="White Cards, Standard" />
              <ExampleSection>
              </ExampleSection>
              <SectionColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
              </SectionColorModeSelector>
              <StandardCards/>
              <p></p>
              <StandardCardsCentered />
              <p></p>
              <StandardCardsScrolling  />


          </div>
      )
  }
