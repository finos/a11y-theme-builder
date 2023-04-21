/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
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
            The Stat Styles Atom sets Typography settings for the 1 Stat types:
                <ul>
                    <li>Stat</li>
                </ul>
                The Settings that can be changed for each are:
                <ul>
                    <li>Font Family</li>
                    <li>Font Size</li>
                    <li>Font Weight</li>
                    <li>Character Spacing</li>
                </ul>
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
