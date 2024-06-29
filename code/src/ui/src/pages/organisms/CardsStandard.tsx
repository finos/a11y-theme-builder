/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { DesignSystem, Images } from '@finos/a11y-theme-builder-sdk';
import { Breadcrumbs, Button, Link, Typography, Grid } from '@mui/material';
import { ExampleSection } from '../content/ExampleSection';
import { SectionColorModeSelector } from '../content/SectionColorModeSelector';
import { HeadingSection } from '../../pages/content/HeadingSection';
import { StandardCardsTwoButtons } from '../../mui-a11y-tb/organisms/StandardCardsTwoButtons';
import { StandardCardsOneButton } from '../../mui-a11y-tb/organisms/StandardCardsOneButton';
import { StandardCardsHotlink } from '../../mui-a11y-tb/organisms/StandardCardsHotlink';
import { StandardCardsClickable } from '../../mui-a11y-tb/organisms/StandardCardsClickable';
import { StandardCardsCenteredTwoButtons } from '../../mui-a11y-tb/organisms/StandardCardsCenteredTwoButtons';
import { StandardCardsCenteredOneButton } from '../../mui-a11y-tb/organisms/StandardCardsCenteredOneButton';
import { StandardCardsCenteredHotlink } from '../../mui-a11y-tb/organisms/StandardCardsCenteredHotlink';
import { StandardCardsCenteredClickable } from '../../mui-a11y-tb/organisms/StandardCardsCenteredClickable';
import { StandardCardsScrollingTwoButtons } from '../../mui-a11y-tb/organisms/StandardCardsScrollingTwoButtons';
import { StandardCardsScrollingOneButton } from '../../mui-a11y-tb/organisms/StandardCardsScrollingOneButton';
import { StandardCardsScrollingHotlink } from '../../mui-a11y-tb/organisms/StandardCardsScrollingHotlink';
import { StandardCardsScrollingClickable } from '../../mui-a11y-tb/organisms/StandardCardsScrollingClickable';

interface Props {
    colorMode?: string;
}

export const CardsStandard: React.FC<Props> = ({}) => {
    const [colorMode, setColorMode] = useState<string>('');

    return (
        <div>
            <HeadingSection title="organisms" heading="White Cards, Standard" />
            <SectionColorModeSelector
                colorMode={colorMode}
                setColorMode={setColorMode}
            ></SectionColorModeSelector>
            <div className="section-demos" data-background={colorMode}>
                <div className="demo-title subtitle1">
                    Responsive, Left Aligned with Two Buttons
                </div>
                <StandardCardsTwoButtons />
                <p></p>
                <div className="demo-title subtitle1">
                    Responsive, Left Aligned with One Button
                </div>
                <StandardCardsOneButton />
                <p></p>
                <div className="demo-title subtitle1">
                    Responsive, Left Aligned with Hotlink
                </div>
                <StandardCardsHotlink />
                <p></p>
                <div className="demo-title subtitle1">
                    Responsive, Left Aligned Clickable
                </div>
                <StandardCardsClickable />
                <p></p>
                <div className="demo-title subtitle1">
                    Center Aligned, Two Buttons
                </div>
                <StandardCardsCenteredTwoButtons />
                <p></p>
                <div className="demo-title subtitle1">
                    Center Aligned, One Button
                </div>
                <StandardCardsCenteredOneButton />
                <p></p>
                <div className="demo-title subtitle1">
                    Center Aligned, Hotlink
                </div>
                <StandardCardsCenteredHotlink />
                <p></p>
                <div className="demo-title subtitle1">
                    Center Aligned, Clickable
                </div>
                <StandardCardsCenteredClickable />
                <p></p>
                <div className="demo-title subtitle1">
                    Horizontal Scrolling Cards, Left Aligned with Two Buttons
                </div>
                <StandardCardsScrollingTwoButtons />
                <p></p>
                <div className="demo-title subtitle1">
                    Horizontal Scrolling Cards, Left Aligned with One Button
                </div>
                <StandardCardsScrollingOneButton />
                <p></p>
                <div className="demo-title subtitle1">
                    Horizontal Scrolling Cards, Left Aligned with Hotlink
                </div>
                <StandardCardsScrollingHotlink />
                <p></p>
                <div className="demo-title subtitle1">
                    Horizontal Scrolling Cards, Left Aligned with Clickable
                </div>
                <StandardCardsScrollingClickable />
            </div>
        </div>
    );
};
