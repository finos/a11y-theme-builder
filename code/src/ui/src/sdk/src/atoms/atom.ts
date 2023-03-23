/* eslint-disable */
import { Node } from "../common/node";
import { IAtoms, IAtom } from "../interfaces";

/**
 * Base class for all atoms.
 * @category Atoms
 */
export class Atom extends Node implements IAtom {

    /** Is this a required atom? */
    public readonly required: boolean;
    public readonly atoms: IAtoms;

    constructor(name: string, required: boolean, atoms: IAtoms) {
        super(name, atoms);
        this.required = required;
        this.atoms = atoms;
        this.atoms.addAtom(this);
    }

}