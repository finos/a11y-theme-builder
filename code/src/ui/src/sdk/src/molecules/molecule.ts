import { Node } from "../common/node";
import { IMolecule, IMolecules } from "../interfaces";

/**
 * The base class for all molecules.
 * @category Molecules
 */
export class Molecule extends Node implements IMolecule {

    public readonly molecules: IMolecules;

    constructor(name: string, molecules: IMolecules) {
        super(name, molecules)
        this.molecules = molecules;
    }

}