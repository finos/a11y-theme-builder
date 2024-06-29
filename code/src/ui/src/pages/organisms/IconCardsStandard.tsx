/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { ExampleSection } from '../content/ExampleSection';
import { SectionColorModeSelector } from '../content/SectionColorModeSelector';
import { HeadingSection } from '../../pages/content/HeadingSection';
import { IconCards } from '../../mui-a11y-tb/organisms/IconCards';
import { IconCardsCentered } from '../../mui-a11y-tb/organisms/IconCardsCentered';
import { IconCardsScrolling } from '../../mui-a11y-tb/organisms/IconCardsScrolling';

interface Props {
    colorMode?: string;
}

export const IconCardsStandard: React.FC<Props> = ({}) => {
    const [colorMode, setColorMode] = useState<string>('colored');

    return (
        <div>
            <HeadingSection
                title="organisms"
                heading="White Cards, with Icons"
            />
            <SectionColorModeSelector
                colorMode={colorMode}
                setColorMode={setColorMode}
            ></SectionColorModeSelector>
            <div className="section-demos" data-background={colorMode}>
                <IconCards />
                <p></p>
                <IconCardsCentered />
                <p></p>
                <IconCardsScrolling />
            </div>
        </div>
    );
};
