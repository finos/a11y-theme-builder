/**
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { SectionColorModeSelector } from '../content/SectionColorModeSelector';
import { HeadingSection } from '../../pages/content/HeadingSection';
import { ImageCards } from '../../mui-a11y-tb/organisms/ImageCards';
import { ImageCardsCentered } from '../../mui-a11y-tb/organisms/ImageCardsCentered';
import { ImageCardsScrolling } from '../../mui-a11y-tb/organisms/ImageCardsScrolling';

interface Props {
    colorMode?: string;
}

export const ImageCardsStandard: React.FC<Props> = () => {
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
                <ImageCards />
                <p></p>
                <ImageCardsCentered />
                <p></p>
                <ImageCardsScrolling />
            </div>
        </div>
    );
};
