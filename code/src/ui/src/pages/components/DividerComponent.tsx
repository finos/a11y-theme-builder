/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { Divider, List, ListItemButton, ListItemText } from '@mui/material';
import { ColorModeSelector } from '../content/ColorModeSelector';
import { HeadingSection } from '../content/HeadingSection';
import { ExampleSection } from '../content/ExampleSection';

interface Props {
}

export const DividerComponent: React.FC<Props> = () => {

    const [colorMode, setColorMode] = useState<string>("default");

    return (
        <div>
            <HeadingSection title="Desktop" heading="Divider" />

            <ExampleSection>
              <div className="subtitle1">Horizontal</div>
              <Divider  />
              <br /><br />
              <br /><br />

              <div className="subtitle1">Horizontal and Wide</div>
              <Divider className="wide" />
              <br /><br />
              <br /><br />
              <div className="subtitle1">Vertical</div>
              <div className="vertical-line"  />
              <br /><br />
              <br /><br />

            </ExampleSection>
        </div>
    )
}
