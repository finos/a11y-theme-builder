/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React from 'react';
import { Breadcrumbs, Button, Link, Typography } from '@mui/material';
import { Hero } from "../../mui-a11y-tb/components/Hero";

interface Props {
    style?: any;
}

export const HeroExample: React.FC<Props> = ({style}) => {
    return (
        <Hero style={{...{paddingTop:"10px", paddingBottom:"10px"}, ...style}}>
            <Breadcrumbs aria-label="breadcrumb" className="breadcrumbs">
                <Link>Home</Link>
                <Link>Page</Link>
                <Typography>Page</Typography>
            </Breadcrumbs>
            <div className="title">Page Title</div>
            <div className="body">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                </p>
            </div>
            <Button>Get Started</Button>
        </Hero>
    )
}
