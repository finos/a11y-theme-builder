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
import { ListDoubleClickable } from "../../mui-a11y-tb/organisms/ListDoubleClickable";
import { ListDoubleAvatarClickable } from "../../mui-a11y-tb/organisms/ListDoubleAvatarClickable";
import { ListDoubleImageClickable } from "../../mui-a11y-tb/organisms/ListDoubleImageClickable";
import { ListDoubleImageWideClickable } from "../../mui-a11y-tb/organisms/ListDoubleImageWideClickable";
import { ListDoubleIconSmallClickable } from "../../mui-a11y-tb/organisms/ListDoubleIconSmallClickable";
import { ListDoubleIconLargeClickable} from "../../mui-a11y-tb/organisms/ListDoubleIconLargeClickable";

interface Props {
    colorMode?: string;
}


export const ListsDoubleClickable: React.FC<Props> = ({ }) => {

      const [colorMode, setColorMode] = useState<string>("");

      return (
          <div>
              <HeadingSection title="organisms" heading="Lists, Double Line" />
              <SectionColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
              </SectionColorModeSelector>
              <div className="section-demos" data-background={colorMode}>
                  <div className="demo-title subtitle1">List, Standard</div>
                  <ListDoubleClickable className="top40"  />
                  <p></p>
                  <div className="demo-title subtitle1">List, with avatars</div>
                  <ListDoubleAvatarClickable className="top40"  />
                  <p></p>
                  <div className="demo-title subtitle1">List, with images</div>
                  <ListDoubleImageClickable className="top40"  />
                  <p></p>
                  <div className="demo-title subtitle1">List, with wide images</div>
                  <ListDoubleImageWideClickable className="top40" />
                  <p></p>
                  <div className="demo-title subtitle1">List, with icons</div>
                  <ListDoubleIconSmallClickable className="top40"  />
                  <p></p>
                  <div className="demo-title subtitle1">List, with wide icons</div>
                  <ListDoubleIconLargeClickable className="top40"  />
                  <p></p>
              </div>
          </div>
      )
  }
