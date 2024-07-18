/**
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { ExampleSection } from '../content/ExampleSection';
import { SectionColorModeSelector } from '../content/SectionColorModeSelector';
import { HeadingSection } from '../../pages/content/HeadingSection';
import { FeatureHighlightsRight } from '../../mui-a11y-tb/organisms/FeatureHighlightsRight';
import { FeatureHighlightsLeft } from '../../mui-a11y-tb/organisms/FeatureHighlightsLeft';

interface Props {
    colorMode?: string;
}

export const FeatureLayouts: React.FC<Props> = () => {
    const [colorMode, setColorMode] = useState<string>('');

    return (
        <div>
            <HeadingSection title="organisms" heading="Teams" />
            <SectionColorModeSelector
                colorMode={colorMode}
                setColorMode={setColorMode}
            ></SectionColorModeSelector>
            <div className="section-demos" data-background={colorMode}>
                <ExampleSection>
                    <div className="demo-title subtitle1">
                        Features Highlighted Right
                    </div>
                    <FeatureHighlightsRight className="top40 " />
                    <p></p>
                    <div className="demo-title subtitle1">
                        Features Highlighted Left
                    </div>
                    <FeatureHighlightsLeft className="top40 " />
                    <p></p>
                </ExampleSection>
            </div>
        </div>
    );
};
