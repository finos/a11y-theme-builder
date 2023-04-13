/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { Avatar, Stack } from '@mui/material';
import { ColorModeSelector } from '../content/ColorModeSelector';
import { HeadingSection } from '../content/HeadingSection';
import { ExampleSection } from '../content/ExampleSection';

interface Props {
}

export const AvatarSingleComponent: React.FC<Props> = () => {

    const [colorMode, setColorMode] = useState<string>("default");

    return (
        <div>
            <HeadingSection title="Desktop" heading="Avatars" />
            <ExampleSection>
                <ColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
                    <div className="subtitle1">Avatars with Icons</div>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Avatar className={`avatar xxs ${colorMode}`} />
                        <Avatar className={`avatar xs ${colorMode}`} />
                        <Avatar className={`avatar sm ${colorMode}`} />
                        <Avatar className={`avatar md ${colorMode}`} />
                        <Avatar className={`avatar lg ${colorMode}`} />
                        <Avatar className={`avatar xl ${colorMode}`} />
                        <Avatar className={`avatar xxl ${colorMode}`} />
                    </Stack>

                    <div className="subtitle1">Avatars with Images</div>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Avatar className={`avatar xxs ${colorMode}`} src="/profile.png" />
                        <Avatar className={`avatar xs ${colorMode}`}  src="/profile.png"/>
                        <Avatar className={`avatar sm ${colorMode}`}  src="/profile.png"/>
                        <Avatar className={`avatar md ${colorMode}`}  src="/profile.png"/>
                        <Avatar className={`avatar lg ${colorMode}`}  src="/profile.png"/>
                        <Avatar className={`avatar xl ${colorMode}`}  src="/profile.png"/>
                        <Avatar className={`avatar xxl ${colorMode}`}  src="/profile.png"/>
                    </Stack>
                </ColorModeSelector>
            </ExampleSection>
        </div>
    )
}
