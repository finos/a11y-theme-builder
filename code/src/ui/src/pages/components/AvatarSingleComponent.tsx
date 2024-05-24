/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { Avatar, Stack } from '@mui/material';
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
              <h5>Standard Avatars</h5>
              <div className="subtitle1">Avatars with Icons</div>
              <Stack direction="row" spacing={1} alignItems="center">
                  <Avatar className="avatar xxs" />
                  <Avatar className="avatar xs" />
                  <Avatar className="avatar sm" />
                  <Avatar className="avatar md" />
                  <Avatar className="avatar lg" />
                  <Avatar className="avatar xl" />
                  <Avatar className="avatar xxl" />
              </Stack>

              <div className="subtitle1">Avatars with Images</div>
              <Stack direction="row" spacing={1} alignItems="center">
                  <Avatar className="avatar xxs" src="/profile.png" />
                  <Avatar className="avatar xs" src="/profile.png" />
                  <Avatar className="avatar sm" src="/profile.png" />
                  <Avatar className="avatar md" src="/profile.png" />
                  <Avatar className="avatar lg" src="/profile.png" />
                  <Avatar className="avatar xl" src="/profile.png" />
                  <Avatar className="avatar xxl"  src="/profile.png" />
              </Stack>

              <h5>Clickable Avatars</h5>
              <div>Note: although these avatars look small they have a target area equal to your min target height.</div>
              <div className="top40 subtitle1">Avatars with Icons</div>
              <Stack direction="row" spacing={1} alignItems="center">
                  <Avatar className="clickable avatar xxs" />
                  <Avatar className="clickable avatar xs" />
                  <Avatar className="clickable avatar sm" />
              </Stack>

              <div className="subtitle1">Avatars with Images</div>
              <Stack direction="row" spacing={1} alignItems="center">
                  <Avatar className="clickable avatar xxs" src="/profile.png" />
                  <Avatar className="clickable avatar xs" src="/profile.png" />
                  <Avatar className="clickable avatar sm" src="/profile.png" />
              </Stack>

            </ExampleSection>
        </div>
    )
}
