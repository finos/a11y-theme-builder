/**
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { SectionColorModeSelector } from '../content/SectionColorModeSelector';
import { HeadingSection } from '../../pages/content/HeadingSection';
import { ListDoubleClickableImageLeft } from '../../mui-a11y-tb/organisms/ListDoubleClickableImageLeft';
import { ListDoubleImageClickableImageLeft } from '../../mui-a11y-tb/organisms/ListDoubleImageClickableImageLeft';
import { ListDoubleImageWideClickableImageLeft } from '../../mui-a11y-tb/organisms/ListDoubleImageWideClickableImageLeft';
import { ListDoubleIconSmallClickableImageLeft } from '../../mui-a11y-tb/organisms/ListDoubleIconSmallClickableImageLeft';
import { ListDoubleIconLargeClickableImageLeft } from '../../mui-a11y-tb/organisms/ListDoubleIconLargeClickableImageLeft';
import { ListDoubleAvatarClickableImageLeft } from '../../mui-a11y-tb/organisms/ListDoubleAvatarClickableImageLeft';

interface Props {
    colorMode?: string;
}

export const ListsDoubleClickableImageLeft: React.FC<Props> = () => {
    const [colorMode, setColorMode] = useState<string>('');

    return (
        <div>
            <HeadingSection title="organisms" heading="Lists, Double Line" />
            <SectionColorModeSelector
                colorMode={colorMode}
                setColorMode={setColorMode}
            ></SectionColorModeSelector>
            <div className="section-demos" data-background={colorMode}>
                <div className="demo-title subtitle1">List, Standard</div>
                <ListDoubleClickableImageLeft className="top40" />
                <p></p>
                <div className="demo-title subtitle1">List, with avatars</div>
                <ListDoubleAvatarClickableImageLeft className="top40" />
                <p></p>
                <div className="demo-title subtitle1">List, with images</div>
                <ListDoubleImageClickableImageLeft className="top40" />
                <p></p>
                <div className="demo-title subtitle1">
                    List, with wide images
                </div>
                <ListDoubleImageWideClickableImageLeft className="top40" />
                <p></p>
                <div className="demo-title subtitle1">List, with icons</div>
                <ListDoubleIconSmallClickableImageLeft className="top40" />
                <p></p>
                <div className="demo-title subtitle1">
                    List, with wide icons
                </div>
                <ListDoubleIconLargeClickableImageLeft className="top40" />
                <p></p>
            </div>
        </div>
    );
};
