/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React from 'react';
import { HeadingSection } from '../../content/HeadingSection';
import TypographyBox from '../../../components/TypographyBox';
import { ExampleSection } from '../../content/ExampleSection';

const statCssPrefix = 'stat';

interface Props {}

export const StatStylesComponent: React.FC<Props> = () => {
    return (
        <div className="content">
            <HeadingSection
                title="Typography"
                heading="STAT Text Styles"
            ></HeadingSection>
            <ExampleSection>
                <TypographyBox
                    cssPrefix={statCssPrefix}
                    sampleTitle="STAT"
                ></TypographyBox>
            </ExampleSection>
        </div>
    );
};
