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
import { ListDoubleAvatarClickable } from "../../mui-a11y-tb/templates/ListDoubleAvatarClickable";
import { ListDoubleImageClickable } from "../../mui-a11y-tb/templates/ListDoubleImageClickable";
import { ListDoubleImageWideClickable } from "../../mui-a11y-tb/templates/ListDoubleImageWideClickable";
import { ListDoubleIconSmallClickable } from "../../mui-a11y-tb/templates/ListDoubleIconSmallClickable";
import { ListDoubleIconLargeClickable} from "../../mui-a11y-tb/templates/ListDoubleIconLargeClickable";

interface Props {
    colorMode?: string;
}


export const ListsTripleClickable: React.FC<Props> = ({ }) => {

      const [colorMode, setColorMode] = useState<string>("colored");

      return (
          <div>
              <HeadingSection title="Templates" heading="Lists, Triple Line" />
              <ExampleSection>
                  <SectionColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
                      <ListDoubleAvatarClickable className={"top40 " + colorMode} />
                      <p></p>
                      <ListDoubleImageClickable className={"top40 " + colorMode} />
                      <p></p>
                      <ListDoubleImageWideClickable className={"top40 " + colorMode} />
                      <p></p>
                      <ListDoubleIconSmallClickable className={"top40 " + colorMode} />
                      <p></p>
                      <ListDoubleIconLargeClickable className={"top40 " + colorMode} />
                      <p></p>
                  </SectionColorModeSelector>
              </ExampleSection>
          </div>
      )
  }
