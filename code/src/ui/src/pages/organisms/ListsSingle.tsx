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
import { ListSingle } from "../../mui-a11y-tb/organisms/ListSingle";
import { ListSingleAvatar } from "../../mui-a11y-tb/organisms/ListSingleAvatar";
import { ListSingleImage } from "../../mui-a11y-tb/organisms/ListSingleImage";
import { ListSingleImageWide } from "../../mui-a11y-tb/organisms/ListSingleImageWide";
import { ListSingleIconSmall } from "../../mui-a11y-tb/organisms/ListSingleIconSmall";
import { ListSingleIconLarge} from "../../mui-a11y-tb/organisms/ListSingleIconLarge";

interface Props {
    colorMode?: string;
}


export const ListsSingle: React.FC<Props> = ({ }) => {

      const [colorMode, setColorMode] = useState<string>("");

      return (
          <div>
              <HeadingSection title="organisms" heading="Lists, Single Line" />
              <SectionColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
              </SectionColorModeSelector>
              <div className="section-demos" data-background={colorMode}>
                  <div className="demo-title subtitle1">List, Standard</div>
                  <ListSingle className="top40 "/>
                  <p></p>
                  <div className="demo-title subtitle1">List, with avatars</div>
                  <ListSingleAvatar className="top40 " />
                  <p></p>
                  <div className="demo-title subtitle1">List, with images</div>
                  <ListSingleImage className="top40 " />
                  <p></p>
                  <div className="demo-title subtitle1">List, with wide images</div>
                  <ListSingleImageWide className="top40 " />
                  <p></p>
                  <div className="demo-title subtitle1">List, with icons</div>
                  <ListSingleIconSmall className="top40 " />
                  <p></p>
                  <div className="demo-title subtitle1">List, with wide icons</div>
                  <ListSingleIconLarge className="top40 " />
                  <p></p>
              </div>
          </div>
      )
  }
