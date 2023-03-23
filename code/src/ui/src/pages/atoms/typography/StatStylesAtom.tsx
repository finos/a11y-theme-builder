import React from 'react';
import { DesignSystem } from 'a11y-theme-builder-sdk';
import TextEditBox from '../../../components/TextEditBox';
import { HeadingSection } from '../../content/HeadingSection';
import { GeneratedCodeSection } from '../../content/GeneratedCodeSection';
import { ExampleSection } from '../../content/ExampleSection';
import { SettingsSection } from '../../content/SettingsSection';

const statCssPrefix = "stat"

interface Props {
    designSystem: DesignSystem;
}

export const StatStylesAtom: React.FC<Props> = ({ designSystem }) => {

    const statStylesAtom = designSystem.atoms.statStyles

    const statTypographyStyling = statStylesAtom.stat

    const keyStat = statTypographyStyling.key

    return (
        <div className="container">
            <HeadingSection item={statStylesAtom} title="Typography">
            </HeadingSection>
            <ExampleSection>
                None
            </ExampleSection>
            <SettingsSection>
                <TextEditBox
                    textKey={keyStat}
                    cssPrefix={statCssPrefix}
                    designSystem={designSystem}
                />
            </SettingsSection>
            <GeneratedCodeSection item={statStylesAtom}/>
        </div>
    )

}
