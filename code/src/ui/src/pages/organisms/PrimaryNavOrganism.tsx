import React, { useState } from 'react';
import { PrimaryNav } from 'a11y-theme-builder-sdk';
import { NumberSelectable } from '../../components/editors/NumberSelectable';
import { StringSelectable } from '../../components/editors/StringSelectable';
import { GeneratedCodeSection } from '../content/GeneratedCodeSection';
import { ExampleSection } from '../content/ExampleSection';
import { SettingsSection } from '../content/SettingsSection';
import { HeadingSection } from '../content/HeadingSection';
import { NavbarExample } from './NavbarExample';
import { Checkbox, FormControlLabel } from '@mui/material';
interface Props {
    organism: PrimaryNav;
}

export const PrimaryNavOrganism: React.FC<Props> = ({ organism }) => {

    const [fixed, setFixed] = React.useState(false);
    const handleChange = (event: any) => {
        setFixed(event.target.checked);
    };

    return (
        <div>
            <HeadingSection item={organism} title="Apply Styles" />
            <ExampleSection>
                <NavbarExample/>
            </ExampleSection>
            <SettingsSection>
                <FormControlLabel
                    value="top"
                    control={<Checkbox
                        checked={fixed}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'fixed-checkbox' }}
                    />}
                    label="Fixed"
                    labelPlacement="top"
                />
                <div className="top40">
                    <NumberSelectable property={organism.verticalPadding} defaultValue={8} units="px" />
                </div>
                <div className="top40">
                    <NumberSelectable property={organism.horizontalTabPadding} defaultValue={8} units="px" />
                </div>
                <div className="top40">
                    <StringSelectable property={organism.navText} defaultValue={"CTA LARGE"} />
                </div>
            </SettingsSection>
            <GeneratedCodeSection item={organism}/>
        </div>
    )
}
