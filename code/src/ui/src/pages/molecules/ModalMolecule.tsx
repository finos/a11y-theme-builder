import { Button, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';
import { ColorSelect } from '../../components/ColorSelect';
import { NumberSelectable } from '../../components/editors/NumberSelectable';
import { StringSelectable } from '../../components/editors/StringSelectable';
import ModalSample from '../../components/modals/ModalSample';
import { Modal, Shade } from 'a11y-theme-builder-sdk';
import { ExampleSection } from '../content/ExampleSection';
import { GeneratedCodeSection } from '../content/GeneratedCodeSection';
import { HeadingSection } from '../content/HeadingSection';
import { SettingsSection } from '../content/SettingsSection';

const name = "ModalMolecule";

interface Props {
    modalMolecule: Modal;
}

export const ModalMolecule: React.FC<Props> = ({ modalMolecule }) => {
    // console.log(`${name} - >>> enter()`)

    const colorProperty         = modalMolecule.color

    const startingColor = (colorProperty.getValue() || "#FFFFFF") as Shade

    const [sampleModalIsOpen, setSampleModalIsOpen] = useState(false);

    return (
        <>
            <ModalSample isOpen={sampleModalIsOpen} onClose={ () => setSampleModalIsOpen(false)} modalMolecule={modalMolecule}/>
            <HeadingSection item={modalMolecule} title="Apply Styles"/>
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
                    <NumberSelectable property={modalMolecule.borderRadius} units="px" defaultValue={8} />
                </div>
                <div className="form-row">
                    <StringSelectable property={modalMolecule.elevation} defaultValue="No Elevation" />
                </div>
            </SettingsSection>
            <GeneratedCodeSection item={modalMolecule} />
        </>
    )

}
