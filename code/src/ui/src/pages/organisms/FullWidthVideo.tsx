/**
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { HeadingSection } from '../../pages/content/HeadingSection';
import { LargeBackgroundVideo } from '../../mui-a11y-tb/organisms/LargeBackgroundVideo';

interface Props {
    colorMode?: string;
}

export const FullWidthVideo: React.FC<Props> = () => {
    const [colorMode, setColorMode] = useState<string>('colored');

    return (
        <div>
            <HeadingSection
                title="organisms"
                heading="Full Width Backgrounds"
            />

            <div className="demo-title subtitle1">
                Section with full width background video, no content
            </div>
            <LargeBackgroundVideo className={'top40 ' + colorMode} />
            <p></p>
        </div>
    );
};
