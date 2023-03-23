import { TypographyStyling } from "./typographyStyling";
import { Atom } from "./atom";
import { IAtoms } from "../interfaces";

/**
 * The body styles atom.
 * @category Atoms
 */
export class BodyStyles extends Atom {

    /** The body1 topography styling properties */
    public body1: TypographyStyling;
    /** The body1 bold topography styling properties */
    public body1Bold: TypographyStyling;
    /** The body2 topography styling properties */
    public body2: TypographyStyling;
    /** The body2 bold topography styling properties */
    public body2Bold: TypographyStyling;
    /** The body3 topography styling properties */
    public body3: TypographyStyling;
    /** The body3 bold topography styling properties */
    public body3Bold: TypographyStyling;

    constructor(atoms: IAtoms) {
        super("Body Styles", false, atoms);
        this.addDependency(atoms.colorThemes);
        this.body1 = new TypographyStyling("Body 1", this, 16, 500, 160, 2);
        this.body1Bold = new TypographyStyling("Body 1 - Bold", this, 16, 700, 160, 2);
        this.body2 = new TypographyStyling("Body 2", this, 14, 600, 160, 1.75);
        this.body2Bold = new TypographyStyling("Body 2 - Bold", this, 14, 700, 160, 1.75);
        this.body3 = new TypographyStyling("Body 3", this, 18, 500, 160, 2.25);
        this.body3Bold = new TypographyStyling("Body 3 - Bold", this, 18, 700, 160, 2.25);
    }

    public deserialize(obj: any) {
        if (!obj) return;
        super.deserialize(obj);
        this.body1.deserialize(obj.body1);
        this.body1Bold.deserialize(obj.body1Bold);
        this.body2.deserialize(obj.body2);
        this.body2Bold.deserialize(obj.body2Bold);
        this.body3.deserialize(obj.body3);
        this.body3Bold.deserialize(obj.body3Bold);
    }

    public serialize(): any {
        const obj: any = {};
        obj.body1 = this.body1.serialize();
        obj.body1Bold = this.body1Bold.serialize();
        obj.body2 = this.body2.serialize();
        obj.body2Bold = this.body2Bold.serialize();
        obj.body3 = this.body3.serialize();
        obj.body3Bold = this.body3Bold.serialize();
        return obj;
    }
}