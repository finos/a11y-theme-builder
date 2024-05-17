/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { DesignSystem, Images } from '@finos/a11y-theme-builder-sdk';
import { Breadcrumbs, Button, Link, Typography, Grid } from '@mui/material';
import { ExampleSection } from '../content/ExampleSection';
import { BasicColorModeSelector } from '../content/BasicColorModeSelector';
import { HeadingSection } from '../../pages/content/HeadingSection';
import { PricingCards } from '../../mui-a11y-tb/organisms/PricingCards';
import { SectionColorModeSelector } from '../content/SectionColorModeSelector';

interface Props {
    colorMode?: string;
}

export const PricingCardSamples: React.FC<Props> = ({}) => {
    const [colorMode, setColorMode] = useState<string>('');

    return (
        <div>
            <HeadingSection
                title="organisms"
                heading="White Cards, with Images 9:21"
            />
            <SectionColorModeSelector
                colorMode={colorMode}
                setColorMode={setColorMode}
            ></SectionColorModeSelector>
            <div className="section-demos" data-background={colorMode}>
                <div className="demo-title subtitle1">Pricing Cards</div>
                <PricingCards />
            </div>
        </div>
    );
};
