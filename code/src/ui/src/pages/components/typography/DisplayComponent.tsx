/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React from 'react';
import { HeadingSection } from '../../content/HeadingSection';
import TypographyBox from '../../../components/TypographyBox';

const display1CssPrefix = "Display1"
const display2CssPrefix = "Display2"

interface Props {
}

export const DisplayComponent: React.FC<Props> = () => {

    return (
        <div className="content">
            <HeadingSection title='Typography' heading='Display'></HeadingSection>
            <TypographyBox cssPrefix={display1CssPrefix} sampleTitle='Display 1' headerNo={7}></TypographyBox>
            <TypographyBox cssPrefix={display2CssPrefix} sampleTitle='Display 2' headerNo={7}></TypographyBox>
        </div>
    )
}
