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
import { ListSingle } from "../../mui-a11y-tb/templates/ListSingle";
import { ListSingleAvatar } from "../../mui-a11y-tb/templates/ListSingleAvatar";
import { ListSingleImage } from "../../mui-a11y-tb/templates/ListSingleImage";
import { ListSingleImageWide } from "../../mui-a11y-tb/templates/ListSingleImageWide";
import { ListSingleIconSmall } from "../../mui-a11y-tb/templates/ListSingleIconSmall";
import { ListSingleIconLarge} from "../../mui-a11y-tb/templates/ListSingleIconLarge";

interface Props {
    colorMode?: string;
}


export const ListsSingle: React.FC<Props> = ({ }) => {

      const [colorMode, setColorMode] = useState<string>("colored");

      return (
          <div>
              <HeadingSection title="Templates" heading="Lists, Single Line" />
              <ExampleSection>
                  <SectionColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
                      <ListSingle className={"top40 " + colorMode} />
                      <p></p>
                      <ListSingleAvatar className={"top40 " + colorMode} />
                      <p></p>
                      <ListSingleImage className={"top40 " + colorMode} />
                      <p></p>
                      <ListSingleImageWide className={"top40 " + colorMode} />
                      <p></p>
                      <ListSingleIconSmall className={"top40 " + colorMode} />
                      <p></p>
                      <ListSingleIconLarge className={"top40 " + colorMode} />
                      <p></p>
                  </SectionColorModeSelector>
              </ExampleSection>
          </div>
      )
  }
