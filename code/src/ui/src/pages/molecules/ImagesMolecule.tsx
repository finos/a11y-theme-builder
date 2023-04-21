/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useEffect } from 'react';
import { DesignSystem, Images } from 'a11y-theme-builder-sdk';
import { NumberScaledSelectable } from '../../components/editors/NumberScaledSelectable';
import { StringSelectable } from '../../components/editors/StringSelectable';
import { GeneratedCodeSection } from '../content/GeneratedCodeSection';
import { ExampleSection } from '../content/ExampleSection';
import { SettingsSection } from '../content/SettingsSection';
import { HeadingSection } from '../content/HeadingSection';
import './ImagesMolecule.css';


interface Props {
    molecule: Images;
    designSystem: DesignSystem;
}

export const ImagesMolecule: React.FC<Props> = ({ molecule, designSystem }) => {
    const grid = designSystem.atoms.gridSettings.grid.getValue();

    useEffect(() => {
        console.log("ImagesMolecule mounted");
    }, []);

    return (
        <div>
            <HeadingSection item={molecule} title="Apply Styles" heading="Images">
                <p>Configure settings that affect the appearance of images.</p>
            </HeadingSection>
            <ExampleSection>
                <div className="row">
                    <div className="col-12">
                        <h4>List Images</h4>
                        <div className="example">
                            <div className="caption">Sample Square List Image</div>
                            <div className="image-sq">
                                <img src="/sample.jpg" />
                            </div>
                        </div>
                        <div className="example">
                            <div className="caption">Sample Wide List Image</div>
                            <div className="image-lg">
                                <img src="/sample.jpg" />
                            </div>
                        </div>
                        <h4>General Images</h4>
                        <div className="example">
                            <div className="caption">Sample Square Image</div>
                            <div className="inline-image" style={{ width: '300px', height: '200px' }}>
                                <img src="/sample.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </ExampleSection>
            <SettingsSection>
                <div className="row">
                    <div className="col-12">
                    <div className="formRow">
                            <NumberScaledSelectable property={molecule.listImageHeight} units="px" scale={grid}/>
                        </div>
                        <div className="formRow">
                            <NumberScaledSelectable property={molecule.listImageBorderRadius} units="px" scale={grid}/>
                        </div>
                        <div className="formRow">
                            <NumberScaledSelectable property={molecule.generalImageBorderRadius} units="px" scale={grid}/>
                        </div>
                        <div className="formRow">
                            <StringSelectable property={molecule.imageElevation} defaultValue="" />
                        </div>
                    </div>
                </div>
            </SettingsSection>
            <GeneratedCodeSection item={molecule} />
        </div >
    )
}
