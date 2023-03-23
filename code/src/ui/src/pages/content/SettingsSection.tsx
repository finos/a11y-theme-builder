
import React from 'react';
import { Atom, Molecule, Organism } from '../../sdk';

interface Props {
    item?: Atom | Molecule | Organism;
    children?: React.ReactNode;
}

export const SettingsSection: React.FC<Props> = ({item, children}) => {

    return (
        <>
            <h6 className="section-header">Settings</h6>
            <div className="top40 section-body">
                {children}
            </div>
        </>
    )
}