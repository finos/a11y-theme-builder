/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import { Button } from '@mui/material';
import React, { useState } from 'react';
import { ColorSelect } from '../../components/ColorSelect';
import { NumberScaledSelectable } from '../../components/editors/NumberScaledSelectable';
import { StringSelectable } from '../../components/editors/StringSelectable';
import ModalSample from '../../components/modals/ModalSample';
import { Modal, Shade } from 'a11y-theme-builder-sdk';
import { ExampleSection } from '../content/ExampleSection';
import { GeneratedCodeSection } from '../content/GeneratedCodeSection';
import { HeadingSection } from '../content/HeadingSection';
import { SettingsSection } from '../content/SettingsSection';
import { getCssValue } from '../../mui-a11y-tb/themes/Theme';

const name = "ModalMolecule";

interface Props {
    modalMolecule: Modal;
}

export const ModalMolecule: React.FC<Props> = ({ modalMolecule }) => {
    const scale = parseInt(getCssValue("--radius-1"));

    const colorProperty         = modalMolecule.color
    const startingColor = (colorProperty.getValue() || "#FFFFFF") as Shade
    const [sampleModalIsOpen, setSampleModalIsOpen] = useState(false);

    return (
        <>
            <ModalSample isOpen={sampleModalIsOpen} onClose={ () => setSampleModalIsOpen(false)} modalMolecule={modalMolecule}/>
            <HeadingSection item={modalMolecule} title="Apply Styles">
                A modal is a window within an application that disables the main window but keeps it visible, with the modal window as a child window in front of it.
            </HeadingSection>
            <ExampleSection>
                <div className="caption">Sample Modal</div>
                <Button variant="contained" onClick={() => setSampleModalIsOpen(true)}>Launch Demo Modal</Button>
            </ExampleSection>
            <SettingsSection>
                <div className="form-row">
                    <div className="subtitle1">Modal Overlay</div>
                    <ColorSelect value={colorProperty} label="Color:" defaultValue={startingColor?.hex} ></ColorSelect>
                </div>
                <div className="form-row">
                    <NumberScaledSelectable property={modalMolecule.borderRadius} units="px" defaultValue={3} scale={scale}/>
                </div>
                <div className="form-row">
                    <StringSelectable property={modalMolecule.elevation} defaultValue="No Elevation" />
                </div>
            </SettingsSection>
            <GeneratedCodeSection item={modalMolecule} />
        </>
    )

}
