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
import { ImageCards916 } from '../../mui-a11y-tb/organisms/ImageCards916';
import { ImageCardsCentered916 } from '../../mui-a11y-tb/organisms/ImageCardsCentered916';
import { ImageCardsScrolling916 } from '../../mui-a11y-tb/organisms/ImageCardsScrolling916';

interface Props {
    colorMode?: string;
}

export const ImageCardsStandard916: React.FC<Props> = ({}) => {
    const [colorMode, setColorMode] = useState<string>('colored');

    return (
        <div>
            <HeadingSection
                title="organisms"
                heading="White Cards, with Images 9:16"
            />
            <SectionColorModeSelector
                colorMode={colorMode}
                setColorMode={setColorMode}
            ></SectionColorModeSelector>
            <div className="section-demos" data-background={colorMode}>
                <ImageCards916 />
                <p></p>
                <ImageCardsCentered916 />
                <p></p>
                <ImageCardsScrolling916 />
            </div>
        </div>
    );
};
