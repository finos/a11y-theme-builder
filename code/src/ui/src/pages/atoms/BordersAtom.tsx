/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React from 'react';
import { BorderSettings } from 'a11y-theme-builder-sdk';
import { NumberProperty } from '../../components/editors/NumberProperty';
import { GeneratedCodeSection } from '../content/GeneratedCodeSection';
import { ExampleSection } from '../content/ExampleSection';
import { SettingsSection } from '../content/SettingsSection';
import { HeadingSection } from '../content/HeadingSection';

interface Props {
    atom: BorderSettings;
}

export const BordersAtom: React.FC<Props> = ({ atom }) => {
    return (
        <div>
            <HeadingSection item={atom} title="Borders" />
            <ExampleSection>
                <div style={{
                    borderWidth: "var(--border-1)", 
                    borderColor: "red", 
                    borderStyle: "solid", 
                    borderRadius: "var(--radius-1)",
                    width: "25%",
                    padding: "10px",
                }}>
                    This shows the border radius and border width specified in the Settings section.
                </div>
            </ExampleSection>
            <SettingsSection>
                <div className="top40">
                    <NumberProperty property={atom.baseBorderWidth} units="px" />
                </div>
                <div className="top40">
                    <NumberProperty property={atom.baseBorderRadius} units="px" />
                </div>
                <div className="top24">
                    The base radius is used to calculate the border radius of all elements with borders.
                </div>
            </SettingsSection>
            <GeneratedCodeSection item={atom}/>
        </div>
    )
}
