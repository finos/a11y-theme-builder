/**
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React from 'react';
import { ExampleSection } from '../content/ExampleSection';
import { HeadingSection } from '../content/HeadingSection';
import FaqList from '../../components/FaqList';

export const FaqOrganism: React.FC = () => (
    <div>
        <HeadingSection
            title="Other"
            heading="Frequently asked questions"
        >
            A support section that groups common questions with expandable
            answers.
        </HeadingSection>
        <ExampleSection title="Business support">
            <FaqList />
        </ExampleSection>
    </div>
);

export default FaqOrganism;
