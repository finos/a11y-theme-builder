/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React from 'react';
import { Avatar, Stack } from '@mui/material';
import { Avatars } from 'a11y-theme-builder-sdk';
import { ExampleSection } from '../content/ExampleSection';
import { GeneratedCodeSection } from '../content/GeneratedCodeSection';
import { SettingsSection } from '../content/SettingsSection';
import { NumberScaledSelectable } from '../../components/editors/NumberScaledSelectable';
import { StringSelectable } from '../../components/editors/StringSelectable';
import { HeadingSection } from '../content/HeadingSection';
import { getCssValue } from '../../mui-a11y-tb/themes/Theme';

interface Props {
    molecule: Avatars;
}

export const AvatarsMolecule: React.FC<Props> = ({ molecule }) => {

    const scale = parseInt(getCssValue("--border-1"));

    return (
        <div>
            <HeadingSection item={molecule} title="Apply Styles">
                <p>Configure settings that affect the borders, elevations and shadows of avatars</p>
            </HeadingSection>
            <ExampleSection>
                <div className="subtitle1">Avatars is icons</div>
                <Stack direction="row" spacing={1} alignItems="center">
                    <Avatar className="avatar xxs"/>
                    <Avatar className="avatar xs"/>
                    <Avatar className="avatar sm"/>
                    <Avatar className="avatar md"/>
                    <Avatar className="avatar lg"/>
                    <Avatar className="avatar xl"/>
                    <Avatar className="avatar xxl"/>
                </Stack>
                <div className="subtitle1">Avatars is images</div>
                <Stack direction="row" spacing={1} alignItems="center">
                    <Avatar className="avatar xxs" src="/profile.png" />
                    <Avatar className="avatar xs" src="/profile.png"/>
                    <Avatar className="avatar sm" src="/profile.png"/>
                    <Avatar className="avatar md" src="/profile.png"/>
                    <Avatar className="avatar lg" src="/profile.png"/>
                    <Avatar className="avatar xl" src="/profile.png"/>
                    <Avatar className="avatar xxl" src="/profile.png"/>
                </Stack>
            </ExampleSection>
            <SettingsSection>
                <div className="top40">
                    <NumberScaledSelectable property={molecule.mediumBorder} defaultValue={0} scale={scale} units="px" />
                </div>
                <div className="top40">
                    <NumberScaledSelectable property={molecule.extraLargeBorder} defaultValue={0} scale={scale} units="px" />
                    </div>
                <div className="top40">
                    <StringSelectable property={molecule.elevation} defaultValue={"No Elevation"} />
                </div>
            </SettingsSection>
            <GeneratedCodeSection item={molecule} />
        </div>
    )

}
