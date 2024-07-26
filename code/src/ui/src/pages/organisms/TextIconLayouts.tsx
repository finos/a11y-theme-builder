/**
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { SectionColorModeSelector } from '../content/SectionColorModeSelector';
import { HeadingSection } from '../../pages/content/HeadingSection';
import { TextIcons } from '../../mui-a11y-tb/organisms/TextIcons';
import { TextIconsWithDivider } from '../../mui-a11y-tb/organisms/TextIconsWithDivider';
import { TextIconsCentered } from '../../mui-a11y-tb/organisms/TextIconsCentered';
import { TextIconsWithDividerCentered } from '../../mui-a11y-tb/organisms/TextIconsWithDividerCentered';

interface Props {
    colorMode?: string;
}

export const TextIconLayouts: React.FC<Props> = () => {
    const [colorMode, setColorMode] = useState<string>('');

    return (
        <div>
            <HeadingSection
                title="organisms"
                heading="Text with Icons Sections"
            />
            <SectionColorModeSelector
                colorMode={colorMode}
                setColorMode={setColorMode}
            ></SectionColorModeSelector>
            <div className="section-demos" data-background={colorMode}>
                <div className="demo-title subtitle1">
                    Text with Title, Centered, Left Aligned
                </div>
                <TextIcons className="top40" />
                <p></p>
                <div className="demo-title subtitle1">
                    Text with Divider, Centered, Left Aligned
                </div>
                <TextIconsWithDivider className="top40" />
                <p></p>
                <div className="demo-title subtitle1">
                    Text with Title, Centered, Center Aligned
                </div>
                <TextIconsCentered className="top40" />
                <p></p>
                <div className="demo-title subtitle1">
                    Text with Divider, Centered, Center Aligned
                </div>
                <TextIconsWithDividerCentered className="top40" />
            </div>
        </div>
    );
};
