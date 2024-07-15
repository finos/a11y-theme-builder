/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React from 'react';
import { HeadingSection } from '../../content/HeadingSection';
import { ComputedColorSwatch } from '../../../components/ComputedColorSwatch';
import { ExampleSection } from '../../content/ExampleSection';

interface Props {}

export const BackgroundColorsComponent: React.FC<Props> = ({}) => {
    return (
        <div>
            <HeadingSection title="Colors" heading="Background Colors" />
            <ExampleSection>
                <div className="theme-colors">
                    <ComputedColorSwatch
                        className={'background'}
                        label={'Primary'}
                    />
                    <ComputedColorSwatch
                        className={'background-secondary'}
                        label={'Alternate'}
                    />
                    <ComputedColorSwatch
                        className={'background-tertiary'}
                        label={'Colored'}
                    />
                    <ComputedColorSwatch className={'black'} label={'Black'} />
                    <ComputedColorSwatch className={'white'} label={'White'} />
                </div>
            </ExampleSection>
        </div>
    );
};
