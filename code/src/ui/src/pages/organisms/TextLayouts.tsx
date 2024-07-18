/**
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { SectionColorModeSelector } from '../content/SectionColorModeSelector';
import { HeadingSection } from '../../pages/content/HeadingSection';
import { Text } from '../../mui-a11y-tb/organisms/Text';
import { TextWithDivider } from '../../mui-a11y-tb/organisms/TextWithDivider';
import { TextCentered } from '../../mui-a11y-tb/organisms/TextCentered';
import { TextWithDividerCentered } from '../../mui-a11y-tb/organisms/TextWithDividerCentered';

interface Props {
    colorMode?: string;
}

export const TextLayouts: React.FC<Props> = () => {
    const [colorMode, setColorMode] = useState<string>('');

    return (
        <div>
            <HeadingSection title="organisms" heading="Teams" />
            <SectionColorModeSelector
                colorMode={colorMode}
                setColorMode={setColorMode}
            ></SectionColorModeSelector>
            <div className="section-demos" data-background={colorMode}>
                <div className={colorMode}></div>
                <div className="demo-title subtitle1">
                    Text with Title, Centered
                </div>
                <Text className="top40" />
                <p></p>
                <div className="demo-title subtitle1">
                    Text with Divider, Centered
                </div>
                <TextWithDivider className="top40" />
                <p></p>
                <div className="demo-title subtitle1">
                    Text with Title, Centered
                </div>
                <TextCentered className="top40" />
                <p></p>
                <div className="demo-title subtitle1">
                    Text with Divider, Centered
                </div>
                <TextWithDividerCentered className="top40" />
                <p></p>
            </div>
        </div>
    );
};
