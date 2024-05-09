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
import { ListSingleClickable } from '../../mui-a11y-tb/organisms/ListSingleClickable';
import { ListSingleAvatarClickable } from '../../mui-a11y-tb/organisms/ListSingleAvatarClickable';
import { ListSingleImageClickable } from '../../mui-a11y-tb/organisms/ListSingleImageClickable';
import { ListSingleImageWideClickable } from '../../mui-a11y-tb/organisms/ListSingleImageWideClickable';
import { ListSingleIconSmallClickable } from '../../mui-a11y-tb/organisms/ListSingleIconSmallClickable';
import { ListSingleIconLargeClickable } from '../../mui-a11y-tb/organisms/ListSingleIconLargeClickable';

interface Props {
  colorMode?: string;
}

export const ListsSingleClickable: React.FC<Props> = ({}) => {
  const [colorMode, setColorMode] = useState<string>('');

  return (
    <div>
      <HeadingSection title="organisms" heading="Lists, Single Line" />
      <SectionColorModeSelector
        colorMode={colorMode}
        setColorMode={setColorMode}
      ></SectionColorModeSelector>
      <div className="section-demos" data-background={colorMode}>
        <div className="demo-title subtitle1">List, Standard</div>
        <ListSingleClickable className="top40" />
        <p></p>
        <div className="demo-title subtitle1">List, with avatars</div>
        <ListSingleAvatarClickable className="top40" />
        <p></p>
        <div className="demo-title subtitle1">List, with images</div>
        <ListSingleImageClickable className="top40" />
        <p></p>
        <div className="demo-title subtitle1">List, with wide images</div>
        <ListSingleImageWideClickable className="top40" />
        <p></p>
        <div className="demo-title subtitle1">List, with icons</div>
        <ListSingleIconSmallClickable className="top40" />
        <p></p>
        <div className="demo-title subtitle1">List, with large icons</div>
        <ListSingleIconLargeClickable className="top40" />
        <p></p>
      </div>
    </div>
  );
};
