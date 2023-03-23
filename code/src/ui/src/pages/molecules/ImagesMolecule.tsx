import React, { useEffect } from 'react';
import { DesignSystem, Images } from '../../sdk';
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
            </HeadingSection>
            <ExampleSection>
                <div className="row">
                    <div className="col-12">
                        <h4>List Images</h4>
                        <div className="example">
                            <div className="caption">Sample Square List Image</div>
                            <div className="image-sq">
                                <img src="/image-1.jpeg" />
                            </div>
                        </div>
                        <div className="example">
                            <div className="caption">Sample Wide List Image</div>
                            <div className="image-lg">
                                <img src="/image-1.jpeg" />
                            </div>
                        </div>
                        <h4>General Images</h4>
                        <div className="example">
                            <div className="caption">Sample Square Image</div>
                            <div className="inline-image" style={{ width: '300px', height: '200px' }}>
                                <img src="/image-1.jpeg" />
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
