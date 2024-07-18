/**
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { ExampleSection } from '../content/ExampleSection';
import { ColorModeSelector } from '../content/ColorModeSelector';
import { HeadingSection } from '../../pages/content/HeadingSection';
import { ResponsiveTopAppBar } from '../../mui-a11y-tb/organisms/ResponsiveTopAppBar';

interface Props {
    colorMode?: string;
}

export const TopAppBars: React.FC<Props> = () => {
    const [colorMode, setColorMode] = useState<string>('colored');

    return (
        <div>
            <HeadingSection title="organisms" heading="App Bar" />
            <ExampleSection>
                <ColorModeSelector
                    colorMode={colorMode}
                    setColorMode={setColorMode}
                ></ColorModeSelector>

                <div
                    className="top40 section-demos"
                    data-background={colorMode}
                >
                    <ResponsiveTopAppBar color={colorMode} />
                </div>
            </ExampleSection>
        </div>
    );
};
