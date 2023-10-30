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
import { ListTripleClickable } from "../../mui-a11y-tb/organisms/ListTripleClickable";
import { ListTripleAvatarClickable } from "../../mui-a11y-tb/organisms/ListTripleAvatarClickable";
import { ListTripleImageClickable } from "../../mui-a11y-tb/organisms/ListTripleImageClickable";
import { ListTripleImageWideClickable } from "../../mui-a11y-tb/organisms/ListTripleImageWideClickable";
import { ListTripleIconSmallClickable } from "../../mui-a11y-tb/organisms/ListTripleIconSmallClickable";
import { ListTripleIconLargeClickable} from "../../mui-a11y-tb/organisms/ListTripleIconLargeClickable";

interface Props {
    colorMode?: string;
}


export const ListsTripleClickable: React.FC<Props> = ({ }) => {

      const [colorMode, setColorMode] = useState<string>("");

      return (
          <div>
              <HeadingSection title="organisms" heading="Lists, Triple Line" />
              <SectionColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
              </SectionColorModeSelector>
              <div className="section-demos" data-background={colorMode}>
                  <div className="demo-title subtitle1">List, Standard</div>
                  <ListTripleClickable className="top40" />
                  <p></p>
                  <div className="demo-title subtitle1">List, with avatars</div>
                  <ListTripleAvatarClickable className="top40" />
                  <p></p>
                  <div className="demo-title subtitle1">List, with images</div>
                  <ListTripleImageClickable className="top40" />
                  <p></p>
                    <div className="demo-title subtitle1">List, with wide images</div>
                  <ListTripleImageWideClickable className="top40" />
                  <p></p>
                  <div className="demo-title subtitle1">List, with icons</div>
                  <ListTripleIconSmallClickable className="top40" />
                  <p></p>
                  <div className="demo-title subtitle1">List, with wide icons</div>
                  <ListTripleIconLargeClickable className="top40" />
                  <p></p>
              </div>
          </div>
      )
  }
