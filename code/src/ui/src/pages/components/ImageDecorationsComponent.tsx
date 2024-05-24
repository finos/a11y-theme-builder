/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React from 'react';
import { HeadingSection } from '../content/HeadingSection';
import { ExampleSection } from '../content/ExampleSection';

interface Props {
}

export const ImageDecorationsComponent: React.FC<Props> = (clickable) => {


    return (
        <div className="content">
        <HeadingSection title='Desktop' heading='Images'></HeadingSection>
        <ExampleSection>
          <div className="subtitle1">Default</div>
          <div className="standard-image top16 ">
            <img src="/sample.jpg" />
          </div>
          <div className="subtitle1">Clickable</div>
          <div className="standard-image clickable top16 ">
            <img  src="/sample.jpg" />
          </div>
        </ExampleSection>



        </div>
    )
}
