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
import { ListDoubleImageLeft } from '../../mui-a11y-tb/organisms/ListDoubleImageLeft';
import { ListDoubleAvatarImageLeft } from '../../mui-a11y-tb/organisms/ListDoubleAvatarImageLeft';
import { ListDoubleImageImageLeft } from '../../mui-a11y-tb/organisms/ListDoubleImageImageLeft';
import { ListDoubleImageWideImageLeft } from '../../mui-a11y-tb/organisms/ListDoubleImageWideImageLeft';
import { ListDoubleIconSmallImageLeft } from '../../mui-a11y-tb/organisms/ListDoubleIconSmallImageLeft';
import { ListDoubleIconLargeImageLeft } from '../../mui-a11y-tb/organisms/ListDoubleIconLargeImageLeft';

interface Props {
  colorMode?: string;
}

export const ListsDoubleImageLeft: React.FC<Props> = ({}) => {
  const [colorMode, setColorMode] = useState<string>('');

  return (
    <div>
      <HeadingSection
        title="organisms"
        heading="Lists, Double Line with an Image Left"
      />
      <SectionColorModeSelector
        colorMode={colorMode}
        setColorMode={setColorMode}
      ></SectionColorModeSelector>
      <div className="section-demos" data-background={colorMode}>
        <div className="demo-title subtitle1">List, standard</div>
        <ListDoubleImageLeft className="top40 " />
        <p></p>
        <div className="demo-title subtitle1">List, with avatars</div>
        <ListDoubleAvatarImageLeft className="top40 " />
        <p></p>
        <div className="demo-title subtitle1">List, with images</div>
        <ListDoubleImageImageLeft className="top40 " />
        <p></p>
        <div className="demo-title subtitle1">List, with wide images</div>
        <ListDoubleImageWideImageLeft className="top40 " />
        <p></p>
        <div className="demo-title subtitle1">List, with icons</div>
        <ListDoubleIconSmallImageLeft className="top40 " />
        <p></p>
        <div className="demo-title subtitle1">List, with wide icons</div>
        <ListDoubleIconLargeImageLeft className="top40 " />
        <p></p>
      </div>
    </div>
  );
};
