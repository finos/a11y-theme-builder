/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { Breadcrumbs, Button, Link, Typography } from '@mui/material';
import { HeroColorModeSelector } from '../content/HeroColorModeSelector';
import { Hero } from "../../mui-a11y-tb/components/Hero";
import { ExampleSection } from '../content/ExampleSection';

interface Props {
    style?: any;
}

export const HeroExample: React.FC<Props> = ({style}) => {
  const [colorMode, setColorMode] = useState<string>("default");
    return (
        <ExampleSection>
          <HeroColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
            <div className={"hero " + colorMode} >
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
            </div>
          </HeroColorModeSelector>
        </ExampleSection>
    )
}
