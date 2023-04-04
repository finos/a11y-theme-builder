import React, { useState } from 'react';
import { Hero } from 'a11y-theme-builder-sdk';
import { NumberSelectable } from '../../components/editors/NumberSelectable';
import { StringSelectable } from '../../components/editors/StringSelectable';
import { HeroExample } from './HeroExample';
import { GeneratedCodeSection } from '../content/GeneratedCodeSection';
import { ExampleSection } from '../content/ExampleSection';
import { SettingsSection } from '../content/SettingsSection';
import { HeadingSection } from '../content/HeadingSection';
import { ColorModeSelector } from '../content/ColorModeSelector';
interface Props {
    organism: Hero;
}

export const HeroOrganism: React.FC<Props> = ({ organism }) => {
    
    const [colorMode, setColorMode] = useState<string>("primary");

    return (
        <div>
            <HeadingSection item={organism} title="Apply Styles" />
            <ExampleSection>
                <ColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
                    <HeroExample/>
                </ColorModeSelector>
            </ExampleSection>
            <SettingsSection>
                <div className="top40">
                    <NumberSelectable property={organism.verticalGap} defaultValue={24} units="px" />
                </div>
                <div className="top40">
                    <StringSelectable property={organism.title} defaultValue={"Display 1"} />
                </div>
                <div className="top40">
                    <StringSelectable property={organism.body} defaultValue={"Body 1"} />
                </div>
            </SettingsSection>
            <GeneratedCodeSection item={organism}/>
        </div>
    )
}
