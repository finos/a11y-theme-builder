/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React from 'react';
import { Divider } from '@mui/material';
import { HeadingSection } from '../content/HeadingSection';
import { ExampleSection } from '../content/ExampleSection';

interface Props {}

export const DividerComponent: React.FC<Props> = () => {

    return (
        <div>
            <HeadingSection title="Desktop" heading="Divider" />

            <ExampleSection>
                <div className="subtitle1">Horizontal</div>
                <Divider />
                <br />
                <br />
                <br />
                <br />

                <div className="subtitle1">Horizontal and Wide</div>
                <Divider className="wide" />
                <br />
                <br />
                <br />
                <br />
                <div className="subtitle1">Vertical</div>
                <div className="vertical-line" />
                <br />
                <br />
                <br />
                <br />
            </ExampleSection>
        </div>
    );
};
