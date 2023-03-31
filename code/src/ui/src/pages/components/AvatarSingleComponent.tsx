import React, { useState } from 'react';
import { Avatar, Stack } from '@mui/material';
import { ColorModeSelector } from '../content/ColorModeSelector';
import { HeadingSection } from '../content/HeadingSection';
import { ExampleSection } from '../content/ExampleSection';

interface Props {
}

export const AvatarSingleComponent: React.FC<Props> = () => {

    const [colorMode, setColorMode] = useState<string>("primary");

    return (
        <div>
            <HeadingSection title="Desktop" heading="Avatars" />
            <ExampleSection>
                <ColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Avatar className={`avatar xxs`} />
                        <Avatar className={`avatar xs`} />
                        <Avatar className={`avatar sm`} />
                        <Avatar className={`avatar md`} />
                        <Avatar className={`avatar lg`} />
                        <Avatar className={`avatar xl`} />
                        <Avatar className={`avatar xxl`} />
                    </Stack>
                </ColorModeSelector>
            </ExampleSection>
        </div>
    )
}
