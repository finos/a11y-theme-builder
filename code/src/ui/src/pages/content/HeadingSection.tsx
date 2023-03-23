
import React from 'react';
import { Atom, Molecule, Organism } from '../../sdk';


interface Props {
    item?: Atom | Molecule | Organism;
    children?: React.ReactNode;
    title?: string;
    heading?: string;
}

export const HeadingSection: React.FC<Props> = ({item, children, title, heading}) => {

    const getType = () => {
        if (item instanceof Atom) {
            return "Atom"
        }
        if (item instanceof Molecule) {
            return "Molecule"
        }
        if (item instanceof Organism) {
            return "Origanism"
        }
        return "";
    }

    return (
        <>
            <div className="overline-large">{title || item?.name}</div>
            <h1>{heading || item?.name}</h1>
            <div className="section-body">
                {children}
                {(!children && item) && <div>
                    TODO: Add description for {item?.name || heading} {getType()}.
                </div>}
            </div>
        </>
    )
}