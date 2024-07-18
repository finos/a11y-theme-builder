/**
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { HeroExample } from '../../pages/organisms/HeroExample';
import { ExampleSection } from '../content/ExampleSection';
import { HeadingSection } from '../content/HeadingSection';
interface Props {}

export const HeroComponent: React.FC<Props> = ({}) => {
    const [colorMode, setColorMode] = useState<string>('colored');

    return (
        <div>
            <HeadingSection title="Desktop" heading="Hero" />
            <ExampleSection>
                <HeroExample data-background={colorMode} />
            </ExampleSection>
        </div>
    );
};
