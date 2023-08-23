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
import { ListDoubleAvatar } from "../../mui-a11y-tb/templates/ListDoubleAvatar";
import { ListDoubleImage } from "../../mui-a11y-tb/templates/ListDoubleImage";
import { ListDoubleImageWide } from "../../mui-a11y-tb/templates/ListDoubleImageWide";
import { ListDoubleIconSmall } from "../../mui-a11y-tb/templates/ListDoubleIconSmall";
import { ListDoubleIconLarge} from "../../mui-a11y-tb/templates/ListDoubleIconLarge";

interface Props {
    colorMode?: string;
}


export const ListsTriple: React.FC<Props> = ({ }) => {

      const [colorMode, setColorMode] = useState<string>("colored");

      return (
          <div>
              <HeadingSection title="Templates" heading="Lists, Triple Line" />
              <ExampleSection>
                  <SectionColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
                      <ListDoubleAvatar className={"top40 " + colorMode} />
                      <p></p>
                      <ListDoubleImage className={"top40 " + colorMode} />
                      <p></p>
                      <ListDoubleImageWide className={"top40 " + colorMode} />
                      <p></p>
                      <ListDoubleIconSmall className={"top40 " + colorMode} />
                      <p></p>
                      <ListDoubleIconLarge className={"top40 " + colorMode} />
                      <p></p>
                  </SectionColorModeSelector>
              </ExampleSection>
          </div>
      )
  }
