/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React from 'react';
import { HeadingSection } from '../content/HeadingSection';
import { ExampleSection } from '../content/ExampleSection';

interface Props {}

export const TextDecorationComponent: React.FC<Props> = () => {
    return (
        <div className="content">
            <HeadingSection
                title="Desktop"
                heading="Text Decorations"
            ></HeadingSection>
            <ExampleSection>
                <div className="subtitle1">Colored Title</div>
                <h1 className="colored-title">Sample Title</h1>

                <div className="subtitle1">Gradient Title</div>
                <h1 className="gradient-title">Sample Title</h1>

                <div className="subtitle1 top40">Colored Drop Shadow Title</div>
                <h1 className="drop-color">Sample Title</h1>
            </ExampleSection>
        </div>
    );
};
