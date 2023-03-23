import React from 'react';
import { Avatar, Stack } from '@mui/material';
import { Avatars } from '../../sdk';
import { ExampleSection } from '../content/ExampleSection';
import { GeneratedCodeSection } from '../content/GeneratedCodeSection';
import { SettingsSection } from '../content/SettingsSection';
import { NumberSelectable } from '../../components/editors/NumberSelectable';
import { StringSelectable } from '../../components/editors/StringSelectable';
import { HeadingSection } from '../content/HeadingSection';

interface Props {
    molecule: Avatars;
}

export const AvatarsMolecule: React.FC<Props> = ({ molecule }) => {

    return (
        <div>
            <HeadingSection item={molecule} title="Apply Styles" />
            <ExampleSection>
                <Stack direction="row" spacing={1} alignItems="center">
                    <Avatar className="avatar xxs"/>
                    <Avatar className="avatar xs"/>
                    <Avatar className="avatar sm"/>
                    <Avatar className="avatar md"/>
                    <Avatar className="avatar lg"/>
                    <Avatar className="avatar xl"/>
                    <Avatar className="avatar xxl"/>
                </Stack>
            </ExampleSection>
            <SettingsSection>
                <div className="top40">
                    <NumberSelectable property={molecule.mediumBorder} defaultValue={0} units="px" />
                </div>
                <div className="top40">
                    <NumberSelectable property={molecule.extraLargeBorder} defaultValue={0} units="px" />
                    </div>
                <div className="top40">
                    <StringSelectable property={molecule.elevation} defaultValue={"No Elevation"} />
                </div>
            </SettingsSection>
            <GeneratedCodeSection item={molecule} />
        </div>
    )

}
