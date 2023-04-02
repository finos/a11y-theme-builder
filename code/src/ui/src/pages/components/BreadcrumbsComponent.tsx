/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import { ColorModeSelector } from '../content/ColorModeSelector';
import { HeadingSection } from '../content/HeadingSection';
import { ExampleSection } from '../content/ExampleSection';

interface Props {
}

export const BreadcrumbsComponent: React.FC<Props> = () => {

    const [colorMode, setColorMode] = useState<string>("primary");

    return (
        <div>
            <HeadingSection title="Desktop" heading="Breadcrumbs" />
            <ExampleSection>
                <ColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
                    <Breadcrumbs aria-label="breadcrumb" className={"breadcrumbs"} style={{margin:"40px"}}>
                        <Link>Home</Link>
                        <Link>Page</Link>
                        <Typography>Page</Typography>
                    </Breadcrumbs>
                </ColorModeSelector>
            </ExampleSection>
        </div>
    )
}
