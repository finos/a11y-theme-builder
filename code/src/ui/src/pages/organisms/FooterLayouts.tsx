/**
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { FooterColorModeSelector } from '../content/FooterColorModeSelector';
import { HeadingSection } from '../../pages/content/HeadingSection';
import { Footer5Columns } from '../../mui-a11y-tb/organisms/Footer5Columns';
import { Footer4Columns } from '../../mui-a11y-tb/organisms/Footer4Columns';
import { Footer3Columns } from '../../mui-a11y-tb/organisms/Footer3Columns';

interface Props {
    colorMode?: string;
    'data-background'?: string;
}

export const FooterLayouts: React.FC<Props> = () => {
    const [colorMode, setColorMode] = useState<string>('');

    return (
        <div>
            <HeadingSection title="organisms" heading="Image & Text" />
            <FooterColorModeSelector
                colorMode={colorMode}
                setColorMode={setColorMode}
            ></FooterColorModeSelector>
            <div className="section-demos" data-background={colorMode}>
                <div className="demo-title subtitle1">
                    Brand Section and 5 Colums
                </div>
                <Footer5Columns />

                <div className="demo-title subtitle1">
                    Brand Section and 4 Colums
                </div>
                <Footer4Columns />

                <div className="demo-title subtitle1">
                    Brand Section and 3 Colums
                </div>
                <Footer3Columns />
            </div>
        </div>
    );
};
