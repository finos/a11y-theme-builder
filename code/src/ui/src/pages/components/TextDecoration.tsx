/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React from 'react';
import { HeadingSection } from '../content/HeadingSection';
import { ExampleSection } from '../content/ExampleSection';

interface Props {
}

export const TextDecoration: React.FC<Props> = () => {
    return (
        <div className="content">
            <HeadingSection title='Desktop' heading='Text Decorations'></HeadingSection>
            <ExampleSection>
              <div className="subtitle1">Gradient Title</div>
              <h1 className="gradient-title">Sample Title</h1>

              <div className="subtitle1">Colored Drop Shadow Title</div>
              <h1 className="gradient-title">Sample Title</h1>

            </ExampleSection>
        </div>
    )
}
