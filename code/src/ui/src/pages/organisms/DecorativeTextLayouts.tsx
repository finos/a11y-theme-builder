/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { HeadingSection } from '../../pages/content/HeadingSection';
import { TextColored } from '../../mui-a11y-tb/organisms/TextColored';
import { TextGradient } from '../../mui-a11y-tb/organisms/TextGradient';
import { TextDropColor } from '../../mui-a11y-tb/organisms/TextDropColor';
import { TextGradientCentered } from '../../mui-a11y-tb/organisms/TextGradientCentered';
import { TextDropColorCentered } from '../../mui-a11y-tb/organisms/TextDropColorCentered';
import { SectionColorModeSelector } from '../content/SectionColorModeSelector';

interface Props {
    colorMode?: string;
}

export const DecorativeTextLayouts: React.FC<Props> = () => {
    const [colorMode, setColorMode] = useState<string>('');

    return (
        <div>
            <HeadingSection title="organisms" heading="Teams" />
            <SectionColorModeSelector
                colorMode={colorMode}
                setColorMode={setColorMode}
            ></SectionColorModeSelector>
            <div className="section-demos" data-background={colorMode}>
                <div className="demo-title subtitle1">
                    Text Colored (only on the default background)
                </div>
                <TextColored className="top40 " />
                <p></p>
                <div className="demo-title subtitle1">
                    Text with Gradient Title (only on the default background)
                </div>
                <TextGradient className="top40 " />
                <p></p>
                <div className="demo-title subtitle1">
                    Text with Colored Drop Shadow Title
                </div>
                <TextDropColor className="top40 " />
                <p></p>
                <div className="demo-title subtitle1">
                    Text with Gradient Title, Centered
                </div>
                <TextGradientCentered className="top40 " />
                <p></p>
                <div className="demo-title subtitle1">
                    Text with Colored Drop Shadow Title, Centered
                </div>
                <TextDropColorCentered className="top40 " />
                <p></p>
            </div>
        </div>
    );
};
