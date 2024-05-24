import React, { useState } from 'react';
import { PrimaryNav } from '@finos/a11y-theme-builder-sdk';
import { NumberSelectable } from '../../components/editors/NumberSelectable';
import { StringSelectable } from '../../components/editors/StringSelectable';
import { GeneratedCodeSection } from '../content/GeneratedCodeSection';
import { HeadingSection } from '../content/HeadingSection';
import { Checkbox, FormControlLabel } from '@mui/material';
import { SectionColorModeSelector } from '../content/SectionColorModeSelector';

interface Props {
    organism: PrimaryNav;
}

export const PrimaryNavOrganism: React.FC<Props> = ({ organism }) => {
  const [colorMode, setColorMode] = useState<string>("");

    const [fixed, setFixed] = React.useState(false);
    const handleChange = (event: any) => {
        setFixed(event.target.checked);
    };

    return (
        <div>
            <HeadingSection item={organism} title="Apply Styles" />
            <SectionColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
            </SectionColorModeSelector>
            <div className="section-demos" data-background={colorMode}>
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
            </div>
            <GeneratedCodeSection item={organism}/>
        </div>
    )
}
