import { Atom } from "./atom";
import { IAtoms } from "../interfaces";
import { PropertyNumberSelectable } from "../common/props";

/**
 * The grid settings atom.
 * @category Atoms
 */
export class GridSettings extends Atom {

    /** The grid or spacing property */
    public grid: PropertyNumberSelectable;

    constructor(atoms: IAtoms) {
        super("Grid Settings", false, atoms);
        this.addDependency(atoms.colorThemes);
        this.grid = new PropertyNumberSelectable("grid", false, this, {
            selectables: [8, 10],
            defaultValue: 8,
        });
    }

    public deserialize(obj: any) {
        if (!obj) return;
        super.deserialize(obj);
        this.grid.deserialize(obj.grid);
    }

    public serialize(): any {
        const obj: any = {};
        obj.grid = this.grid.serialize();
        return obj;
    }
}