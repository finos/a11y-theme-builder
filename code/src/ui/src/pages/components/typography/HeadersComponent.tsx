/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React from 'react';
import { HeadingSection } from '../../content/HeadingSection';
import TypographyBox from '../../../components/TypographyBox';

const header1CssPrefix = "h1"
const header2CssPrefix = "h2"
const header3CssPrefix = "h3"
const header4CssPrefix = "h4"
const header5CssPrefix = "h5"
const header6CssPrefix = "h6"

interface Props {
}

export const HeadersComponent: React.FC<Props> = () => {
    return (
        <div className="content">
        <HeadingSection title='Typography' heading='Headers'></HeadingSection>
        <TypographyBox cssPrefix={header1CssPrefix} sampleTitle='Header 1' headerNo={1}></TypographyBox>
        <TypographyBox cssPrefix={header2CssPrefix} sampleTitle='Header 2' headerNo={2}></TypographyBox>
        <TypographyBox cssPrefix={header3CssPrefix} sampleTitle='Header 3' headerNo={3}></TypographyBox>
        <TypographyBox cssPrefix={header4CssPrefix} sampleTitle='Header 4' headerNo={4}></TypographyBox>
        <TypographyBox cssPrefix={header5CssPrefix} sampleTitle='Header 5' headerNo={5}></TypographyBox>
        <TypographyBox cssPrefix={header6CssPrefix} sampleTitle='Header 6' headerNo={6}></TypographyBox>
        </div>
    )
}
