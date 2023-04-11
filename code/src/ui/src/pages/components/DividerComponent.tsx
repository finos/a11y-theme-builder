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
                <ColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
                    <List className={colorMode}>
                        <ListItemButton>
                            <ListItemText primary="Item One" />
                        </ListItemButton>
                        <Divider />
                        <ListItemButton>
                            <ListItemText primary="Item Two" />
                        </ListItemButton>
                        <Divider />
                        <ListItemButton>
                            <ListItemText primary="Item Three" />
                        </ListItemButton>
                    </List>
                </ColorModeSelector>
            </ExampleSection>
        </div>
    )
}
