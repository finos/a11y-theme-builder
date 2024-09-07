/**
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { HeadingSection } from '../../pages/content/HeadingSection';
import { TextIconsGradient } from '../../mui-a11y-tb/organisms/TextIconsGradient';
import { TextIconsDropColor } from '../../mui-a11y-tb/organisms/TextIconsDropColor';
import { TextIconsGradientCentered } from '../../mui-a11y-tb/organisms/TextIconsGradientCentered';
import { TextIconsDropColorCentered } from '../../mui-a11y-tb/organisms/TextIconsDropColorCentered';
import { SectionColorModeSelector } from '../content/SectionColorModeSelector';

interface Props {
    colorMode?: string;
}

export const DecorativeTextIconLayouts: React.FC<Props> = () => {
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
                    Text with Gradient Title, Centered
                </div>
                <TextIconsGradient className="top40 " />
                <p></p>
                <div className="demo-title subtitle1">
                    Text with Colored Drop Shadow Title, Centered
                </div>
                <TextIconsDropColor className="top40 " />
                <p></p>
                <div className="demo-title subtitle1">
                    Text with Gradient Title, Centered
                </div>
                <TextIconsGradientCentered className="top40 " />
                <p></p>
                <div className="demo-title subtitle1">
                    Text with Colored Drop Shadow Title, Centered
                </div>
                <TextIconsDropColorCentered className="top40 " />
                <p></p>
            </div>
        </div>
    );
};
