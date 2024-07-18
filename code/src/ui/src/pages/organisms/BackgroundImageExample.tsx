/**
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { SectionColorModeSelector } from '../content/SectionColorModeSelector';
import { HeadingSection } from '../../pages/content/HeadingSection';
import { SmBackgroundImageTextRight } from '../../mui-a11y-tb/organisms/SmBackgroundImageTextRight';
import { SmBackgroundImageTextLeft } from '../../mui-a11y-tb/organisms/SmBackgroundImageTextLeft';
import { MdBackgroundImageTextRight } from '../../mui-a11y-tb/organisms/MdBackgroundImageTextRight';
import { MdBackgroundImageTextLeft } from '../../mui-a11y-tb/organisms/MdBackgroundImageTextLeft';
import { LgBackgroundImageTextRight } from '../../mui-a11y-tb/organisms/LgBackgroundImageTextRight';
import { LgBackgroundImageTextLeft } from '../../mui-a11y-tb/organisms/LgBackgroundImageTextLeft';

interface Props {
    colorMode?: string;
}

export const BackgroundImageExample: React.FC<Props> = () => {
    const [colorMode, setColorMode] = useState<string>('');

    return (
        <div>
            <HeadingSection
                title="organisms"
                heading="Background Image & Text"
            />
            <SectionColorModeSelector
                colorMode={colorMode}
                setColorMode={setColorMode}
            ></SectionColorModeSelector>
            <div className="section-demos" data-background={colorMode}>
                <div className="demo-title subtitle1">Small Image on Right</div>
                <SmBackgroundImageTextRight className="top40 " />
                <p></p>
                <div className="subtitle1">Small Image on Left</div>
                <SmBackgroundImageTextLeft className="top40 " />
                <p></p>
                <div className="subtitle1">Medium Image on Right</div>
                <MdBackgroundImageTextRight className="top40 " />
                <p></p>
                <div className="subtitle1">Medium Image on Left</div>
                <MdBackgroundImageTextLeft className="top40 " />
                <p></p>
                <div className="subtitle1">Large Image on Right</div>
                <LgBackgroundImageTextRight className="top40 " />
                <p></p>
                <div className="subtitle1">Large Image on Left</div>
                <LgBackgroundImageTextLeft className="top40 " />
            </div>
        </div>
    );
};
