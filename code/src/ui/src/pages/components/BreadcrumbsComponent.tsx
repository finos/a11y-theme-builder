import React, { useState } from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import { ColorModeSelector } from '../content/ColorModeSelector';
import { HeadingSection } from '../content/HeadingSection';

interface Props {
}

export const BreadcrumbsComponent: React.FC<Props> = ({ }) => {

    const [colorMode, setColorMode] = useState<string>("colored");

    return (
        <div>
            <HeadingSection title="Breadcrumbs" heading="Breadcrumbs" />
            <ColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
                <h4>Standard Breadcrumbs</h4>
                <Breadcrumbs aria-label="breadcrumb" className={`breadcrumbs ${colorMode}`}>
                    <Link>Home</Link>
                    <Link>Page</Link>
                    <Typography>Page</Typography>
                </Breadcrumbs>
            </ColorModeSelector>
        </div>
    )
}
