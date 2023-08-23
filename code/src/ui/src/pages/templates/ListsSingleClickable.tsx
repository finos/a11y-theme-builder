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
import { ListSingleClickable } from "../../mui-a11y-tb/templates/ListSingleClickable";
import { ListSingleAvatarClickable } from "../../mui-a11y-tb/templates/ListSingleAvatarClickable";
import { ListSingleImageClickable } from "../../mui-a11y-tb/templates/ListSingleImageClickable";
import { ListSingleImageWideClickable } from "../../mui-a11y-tb/templates/ListSingleImageWideClickable";
import { ListSingleIconSmallClickable } from "../../mui-a11y-tb/templates/ListSingleIconSmallClickable";
import { ListSingleIconLargeClickable} from "../../mui-a11y-tb/templates/ListSingleIconLargeClickable";

interface Props {
    colorMode?: string;
}


export const ListsSingleClickable: React.FC<Props> = ({ }) => {

      const [colorMode, setColorMode] = useState<string>("colored");

      return (
          <div>
              <HeadingSection title="Templates" heading="Lists, Single Line" />
              <ExampleSection>
                  <SectionColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
                      <ListSingleClickable className={"top40 " + colorMode} />
                      <p></p>
                      <ListSingleAvatarClickable className={"top40 " + colorMode} />
                      <p></p>
                      <ListSingleImageClickable className={"top40 " + colorMode} />
                      <p></p>
                      <ListSingleImageWideClickable className={"top40 " + colorMode} />
                      <p></p>
                      <ListSingleIconSmallClickable className={"top40 " + colorMode} />
                      <p></p>
                      <ListSingleIconLargeClickable className={"top40 " + colorMode} />
                      <p></p>
                  </SectionColorModeSelector>
              </ExampleSection>
          </div>
      )
  }
