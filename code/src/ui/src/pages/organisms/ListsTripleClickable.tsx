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
              <div className={colorMode}></div>
              <ExampleSection>
                  <div className="subtitle1">List, Standard</div>
                  <ListTripleClickable className={"top40 " + colorMode} />
                  <p></p>
                  <div className="subtitle1">List, with avatars</div>
                  <ListTripleAvatarClickable className={"top40 " + colorMode} />
                  <p></p>
                  <div className="subtitle1">List, with images</div>
                  <ListTripleImageClickable className={"top40 " + colorMode} />
                  <p></p>
                    <div className="subtitle1">List, with wide images</div>
                  <ListTripleImageWideClickable className={"top40 " + colorMode} />
                  <p></p>
                  <div className="subtitle1">List, with icons</div>
                  <ListTripleIconSmallClickable className={"top40 " + colorMode} />
                  <p></p>
                  <div className="subtitle1">List, with wide icons</div>
                  <ListTripleIconLargeClickable className={"top40 " + colorMode} />
                  <p></p>
              </ExampleSection>
          </div>
      )
  }
