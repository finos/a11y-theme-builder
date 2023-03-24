import React from 'react';
import { } from '@mui/material';
import { HeadingSection } from '../../content/HeadingSection';
import TypographyBox from '../../../components/TypographyBox';

const body1CssPrefix = "Body1"
const body2CssPrefix = "Body2"
const body3CssPrefix = "Body3"

interface Props {
}

export const BodyComponent: React.FC<Props> = ({ }) => {
    return (
        <div className="content">
        <HeadingSection title='Typography' heading='Body'></HeadingSection>
        <TypographyBox cssPrefix={body1CssPrefix} sampleTitle='Body 1' isBody></TypographyBox>
        <TypographyBox cssPrefix={body2CssPrefix} sampleTitle='Body 2' isBody></TypographyBox>
        <TypographyBox cssPrefix={body3CssPrefix} sampleTitle='Body 3' isBody></TypographyBox>
        </div>
    )
}
