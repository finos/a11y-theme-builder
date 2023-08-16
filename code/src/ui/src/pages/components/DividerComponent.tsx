/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
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
                    <div className="subtitle1">Horizontal</div>
                    <List style={{ background: 'transparent' }}>
                        <br /><br />
                        <Divider className={colorMode} />
                        <br /><br />
                        <Divider className={colorMode} />
                        <br /><br />
                    </List>
                    <div className="subtitle1">Vertical</div>
                    <List style={{ background: 'transparent' }}>
                        <br /><br />
                        <div className={"vertical-line " + colorMode}  />
                        <br /><br />
                        <div className={"vertical-line " + colorMode}/>
                        <br /><br />
                    </List>
                </ColorModeSelector>
            </ExampleSection>
        </div>
    )
}
