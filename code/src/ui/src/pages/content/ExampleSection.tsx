
import React from 'react';
import { Atom, Molecule, Organism } from '../../sdk';


interface Props {
    item?: Atom | Molecule | Organism;
    children?: React.ReactNode;
    title?: string;
}

export const ExampleSection: React.FC<Props> = ({item, children, title}) => {

    const heading = title ? title : "Example"
    return (
        <>
            <h6 className="section-header">{heading}</h6>
            <div className="top40 section-body">
                {children}
            </div>
        </>
    )
}