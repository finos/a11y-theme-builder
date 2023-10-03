/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React from 'react';
import { HeadingSection } from '../../content/HeadingSection';
import TypographyBox from '../../../components/TypographyBox';
import { ExampleSection } from '../../content/ExampleSection';

const subtitle1CssPrefix = "subtitle1";
const subtitle2CssPrefix = "subtitle2";
const captionCssPrefix = "caption";
const captionBoldCssPrefix = "caption-bold";
const overlineCssPrefix = "overline";
const overlineLargeCssPrefix = "overline-large";
const overlineXLCssPrefix = "overline-XL";
const label1CssPrefix = "label-1";
const label1CapsCssPrefix = "label-1-allCaps";
const label2CssPrefix = "label-2";
const label2CapsCssPrefix = "label-2-allCaps";
const labelSmallCssPrefix = "label-small";
const callToActionCssPrefix = "CTA";
const callToActionSmallCssPrefix = "CTA-Small";
const smallCssPrefix = "small";
const smallSemiboldCssPrefix = "small-semibold";
const statCssPrefix = "stat"

interface Props {
}

export const StatStylesComponent: React.FC<Props> = () => {
    return (
        <div className="content">
        <HeadingSection title='Typography' heading='STAT Text Styles'></HeadingSection>
        <ExampleSection>
          <TypographyBox cssPrefix={statCssPrefix} sampleTitle='STAT'></TypographyBox>
        </ExampleSection>
        </div>
    )
}
