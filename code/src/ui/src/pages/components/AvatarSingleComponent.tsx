import React, { useState } from 'react';
import { Avatar, Stack } from '@mui/material';
import { ColorModeSelector } from '../content/ColorModeSelector';
import { HeadingSection } from '../content/HeadingSection';

interface Props {
}

export const AvatarSingleComponent: React.FC<Props> = ({ }) => {

    const [colorMode, setColorMode] = useState<string>("colored");

    return (
        <div>
            <HeadingSection title="Avatars" heading="Single Avatars" />
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
        </div>
    )
}
