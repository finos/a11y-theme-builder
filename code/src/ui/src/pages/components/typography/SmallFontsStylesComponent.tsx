/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React from 'react';
import { HeadingSection } from '../../content/HeadingSection';
import TypographyBox from '../../../components/TypographyBox';

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

export const SmallFontsStylesComponent: React.FC<Props> = () => {
    return (
        <div className="content">
        <HeadingSection title='Typography' heading='Small Text Styles'></HeadingSection>
        <TypographyBox cssPrefix={subtitle1CssPrefix} sampleTitle='Subtitle 1'></TypographyBox>
        <TypographyBox cssPrefix={subtitle2CssPrefix} sampleTitle='Subtitle 2'></TypographyBox>
        <TypographyBox cssPrefix={callToActionCssPrefix} sampleTitle='CTA (CALL TO ACTION)'></TypographyBox>
        <TypographyBox cssPrefix={callToActionSmallCssPrefix} sampleTitle='CTA-Small (Call to Action)'></TypographyBox>
        <TypographyBox cssPrefix={captionCssPrefix} sampleTitle='Caption'></TypographyBox>
        <TypographyBox cssPrefix={captionBoldCssPrefix} sampleTitle='Caption Bold'></TypographyBox>
        <TypographyBox cssPrefix={overlineCssPrefix} sampleTitle='OVERLINE'></TypographyBox>
        <TypographyBox cssPrefix={overlineLargeCssPrefix} sampleTitle='OVERLINE LARGE'></TypographyBox>
        <TypographyBox cssPrefix={overlineXLCssPrefix} sampleTitle='OVERLINE XL'></TypographyBox>
        <TypographyBox cssPrefix={smallCssPrefix} sampleTitle='Small'></TypographyBox>
        <TypographyBox cssPrefix={smallSemiboldCssPrefix} sampleTitle='Small Semibold'></TypographyBox>
        <TypographyBox cssPrefix={label1CssPrefix} sampleTitle='Label 1'></TypographyBox>
        <TypographyBox cssPrefix={label1CapsCssPrefix} sampleTitle='Label 1 - All Capitalized'></TypographyBox>
        <TypographyBox cssPrefix={label2CssPrefix} sampleTitle='Label 2'></TypographyBox>
        <TypographyBox cssPrefix={label2CapsCssPrefix} sampleTitle='Label 2 - All Capitalized'></TypographyBox>
        <TypographyBox cssPrefix={labelSmallCssPrefix} sampleTitle='LABEL SMALL'></TypographyBox>
        <TypographyBox cssPrefix={statCssPrefix} sampleTitle='STAT'></TypographyBox>
        </div>
    )
}
