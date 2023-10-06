/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { DesignSystem, Images } from 'a11y-theme-builder-sdk';
import { Breadcrumbs, Button, Link, Typography, Grid } from '@mui/material';
import { ExampleSection } from '../content/ExampleSection';
import { SectionColorModeSelector } from '../content/SectionColorModeSelector';
import { HeadingSection } from '../../pages/content/HeadingSection';
import { ListTriple } from "../../mui-a11y-tb/organisms/ListTriple";
import { ListTripleAvatar } from "../../mui-a11y-tb/organisms/ListTripleAvatar";
import { ListTripleImage } from "../../mui-a11y-tb/organisms/ListTripleImage";
import { ListTripleImageWide } from "../../mui-a11y-tb/organisms/ListTripleImageWide";
import { ListTripleIconSmall } from "../../mui-a11y-tb/organisms/ListTripleIconSmall";
import { ListTripleIconLarge} from "../../mui-a11y-tb/organisms/ListTripleIconLarge";

interface Props {
    colorMode?: string;
}


export const ListsTriple: React.FC<Props> = ({ }) => {

      const [colorMode, setColorMode] = useState<string>("");

      return (
          <div>
              <HeadingSection title="organisms" heading="Lists, Triple Line" />
              <SectionColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
              </SectionColorModeSelector>
              <div className="section-demos" data-background={colorMode}>
                <div className="demo-title subtitle1">List, Standard</div>
                <ListTriple className="top40" />
                <p></p>
                <div className="demo-title subtitle1">List, with avatars</div>
                <ListTripleAvatar className="top40" />
                <p></p>
                <div className="demo-title subtitle1">List, with images</div>
                <ListTripleImage className="top40" />
                <p></p>
                <div className="demo-title subtitle1">List, with wide images</div>
                <ListTripleImageWide className="top40" />
                <p></p>
                <div className="demo-title subtitle1">List, with icons</div>
                <ListTripleIconSmall className="top40" />
                <p></p>
                <div className="demo-title subtitle1">List, with wide icons</div>
                <ListTripleIconLarge className="top40" />
                <p></p>
              </div>
          </div>
      )
  }
