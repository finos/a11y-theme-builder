import React, { useState, useEffect } from 'react';
import { Switch } from '@mui/material';
import { Spacing } from '../../sdk';
import { GeneratedCodeSection } from '../content/GeneratedCodeSection';
import { HeadingSection } from '../content/HeadingSection';
import { SettingsSection } from '../content/SettingsSection';
import { ExampleSection } from '../content/ExampleSection';
import { NumberSelectable } from '../../components/editors/NumberSelectable';

const name = "SpacingMolecule";

interface Props {
    spacingMolecule: Spacing;
}

export const SpacingMolecule: React.FC<Props> = ({ spacingMolecule }) => {
    // console.log(`${name} - >>> enter()`)

    const [showGuidelines, setShowGuidelines] = useState<boolean>(true)
    const [guideColor, setGuideColor] = useState("#FFFFFF")

    useEffect( () => {
        if (showGuidelines) {
            setGuideColor("#FC7EFF40")
        } else {
            setGuideColor("#FFFFFF")
        }
    }, [showGuidelines]);

    return (
        <>
            <HeadingSection item={spacingMolecule} title="Assign Spacing"/>
            <Switch
                checked={showGuidelines}
                onChange={() => setShowGuidelines(!showGuidelines)}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <ExampleSection>
                <div style={{padding: (spacingMolecule.sectionPadding.getValue() || 24)+"px", background: guideColor}}>
                    <h2>Sample</h2>
                    <div style={{padding: (spacingMolecule.paragraphPadding.getValue() || 8)+"px", background: guideColor}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                        nostrud exercitation ullamco laboris nisi ut aliquip.
                    </div>
                    <div style={{padding: (spacingMolecule.paragraphPadding.getValue() || 8)+"px", background: guideColor}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                        nostrud exercitation ullamco laboris nisi ut aliquip.
                    </div>
                </div>
                <div style={{padding: (spacingMolecule.sectionPadding.getValue() || 24)+"px", background: guideColor}}>
                    <h2>Sample</h2>
                    <div style={{padding: (spacingMolecule.paragraphPadding.getValue() || 8)+"px", background: guideColor}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                        nostrud exercitation ullamco laboris nisi ut aliquip.
                    </div>
                </div>
            </ExampleSection>
            <SettingsSection>
                <div className="form-row">
                    <NumberSelectable property={spacingMolecule.sectionPadding} units="px" defaultValue={24} />
                </div>
                <div className="form-row">
                    <NumberSelectable property={spacingMolecule.paragraphPadding} units="px" defaultValue={8} />
                </div>
            </SettingsSection>
            <GeneratedCodeSection item={spacingMolecule} />
        </>
    )
}
