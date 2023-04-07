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

    const [colorMode, setColorMode] = useState<string>("default");

    function backIcon(props?: any) {
        return (
            <i className="fa-solid fa-arrow-left"></i>
        )
    }

    return (
        <div>
            <HeadingSection title="Desktop" heading="Breadcrumbs" />
            <ExampleSection>
                <ColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
                    <div className="subtitle1">Standard Breadcrumbs</div>
                    <Breadcrumbs aria-label="breadcrumb" className={`breadcrumbs ${colorMode}`} style={{margin:"40px"}}>
                        <Link>Home</Link>
                        <Link>Page</Link>
                        <Typography>Page</Typography>
                    </Breadcrumbs>
                    <div className="subtitle1">Back Breadcrumbs</div>
                        <Breadcrumbs aria-label="breadcrumb" className={`breadcrumbs back-breadcrumbs ${colorMode}`} style={{margin:"40px"}}>
                            <Link>{backIcon()}Home</Link>
                        </Breadcrumbs>
                </ColorModeSelector>
            </ExampleSection>



        </div>
    )
}
