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
import { ListDoubleClickable } from "../../mui-a11y-tb/templates/ListDoubleClickable";
import { ListDoubleAvatarClickable } from "../../mui-a11y-tb/templates/ListDoubleAvatarClickable";
import { ListDoubleImageClickable } from "../../mui-a11y-tb/templates/ListDoubleImageClickable";
import { ListDoubleImageWideClickable } from "../../mui-a11y-tb/templates/ListDoubleImageWideClickable";
import { ListDoubleIconSmallClickable } from "../../mui-a11y-tb/templates/ListDoubleIconSmallClickable";
import { ListDoubleIconLargeClickable} from "../../mui-a11y-tb/templates/ListDoubleIconLargeClickable";

interface Props {
    colorMode?: string;
}


export const ListsDoubleClickable: React.FC<Props> = ({ }) => {

      const [colorMode, setColorMode] = useState<string>("");

      return (
          <div>
              <HeadingSection title="Templates" heading="Lists, Double Line" />
              <SectionColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
              </SectionColorModeSelector>
              <div className={colorMode}></div>
              <ExampleSection>
                <div className="subtitle1">List, Standard</div>
                <ListDoubleClickable className={"top40 " + colorMode} />
                <p></p>
                <div className="subtitle1">List, with avatars</div>
                <ListDoubleAvatarClickable className={"top40 " + colorMode} />
                <p></p>
                <div className="subtitle1">List, with images</div>
                <ListDoubleImageClickable className={"top40 " + colorMode} />
                <p></p>
                <div className="subtitle1">List, with wide images</div>
                <ListDoubleImageWideClickable className={"top40 " + colorMode} />
                <p></p>
                <div className="subtitle1">List, with icons</div>
                <ListDoubleIconSmallClickable className={"top40 " + colorMode} />
                <p></p>
                <div className="subtitle1">List, with wide icons</div>
                <ListDoubleIconLargeClickable className={"top40 " + colorMode} />
                <p></p>
              </ExampleSection>
          </div>
      )
  }
