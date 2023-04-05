import React from 'react';
import { FooterAndCopyright } from 'a11y-theme-builder-sdk';
import { GeneratedCodeSection } from '../content/GeneratedCodeSection';
import { ExampleSection } from '../content/ExampleSection';
import { SettingsSection } from '../content/SettingsSection';
import { HeadingSection } from '../content/HeadingSection';
import { NumberSelectable } from '../../components/editors/NumberSelectable';
import { FooterCopyrightExample } from './FooterCopyrightExample';
interface Props {
    organism: FooterAndCopyright;
}

export const FooterCopyrightOrganism: React.FC<Props> = ({ organism }) => {

    return (
        <div>
            <HeadingSection item={organism} title="Apply Styles" />
            <ExampleSection>
                <FooterCopyrightExample/>
            </ExampleSection>
            <SettingsSection>
            <div className="top40">
                    <NumberSelectable property={organism.footerVerticalPadding} defaultValue={40} units="px" />
                </div>
                <div className="top40">
                    <NumberSelectable property={organism.copyrightVerticalPadding} defaultValue={8} units="px" />
                </div>
            </SettingsSection>
            <GeneratedCodeSection item={organism}/>
        </div>
    )
}
