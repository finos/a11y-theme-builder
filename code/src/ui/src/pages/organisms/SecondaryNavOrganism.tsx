import React, { useState } from 'react';
import { SecondaryNav } from 'a11y-theme-builder-sdk';
import { GeneratedCodeSection } from '../content/GeneratedCodeSection';
import { ExampleSection } from '../content/ExampleSection';
import { SettingsSection } from '../content/SettingsSection';
import { HeadingSection } from '../content/HeadingSection';
import { NavbarExample } from './NavbarExample';
import { NumberSelectable } from '../../components/editors/NumberSelectable';
import { StringSelectable } from '../../components/editors/StringSelectable';
import { Checkbox, FormControlLabel } from '@mui/material';

interface Props {
    organism: SecondaryNav;
}

export const SecondaryNavOrganism: React.FC<Props> = ({ organism }) => {

    const [sticky, setSticky] = React.useState(false);
    const handleChange = (event: any) => {
        setSticky(event.target.checked);
    };

    return (
        <div>
            <HeadingSection item={organism} title="Apply Styles" />
            <ExampleSection>
                <NavbarExample isSecondary/>
            </ExampleSection>
            <SettingsSection>
            <FormControlLabel
                    value="top"
                    control={<Checkbox
                        checked={sticky}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'sticky-checkbox' }}
                    />}
                    label="Sticky"
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
