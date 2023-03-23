import { Node } from "../common/node";
import { CSSGenerator, VarGroup } from "./cssGenerator";
import { IDesignSystem, VarListener, INode } from "../interfaces";

/**
 * Code generation for theme builder.
 * @category Generators
 */
export class Code extends Node {

    /** The CSS code generator */
    public cssGenerator: CSSGenerator;

    constructor(ds: IDesignSystem) {
        super("code", ds);
        this.cssGenerator = new CSSGenerator(ds);
    }

    public generate() {
        this.cssGenerator.generate();
    }

    /**
     * Get all CSS variables for this design system.
     * @returns All CSS variables for this design system.
     */
    public getCSSVars(): {[name: string]: string} {
        return this.cssGenerator.getVars();
    }

    /**
     * Set a CSS variable listener which is called each time a CSS variable value is changed.
     * @param name The listener name.
     * @param listener The listener callback.
     */
    public setCSSVarListener(name: string, listener?: VarListener) {
        this.cssGenerator.setCSSVarListener(name, listener);
    }

    /**
     * Get a group of CSS variables associated with a particular node (i.e. atom, molecule, or organism).
     * @param node The node for which we are getting the group of variables.
     * @returns The variable group
     */
    public getCSSVarGroup(node: INode): VarGroup {
        return this.cssGenerator.getVarGroup(node.key);
    }

    /**
     * Get all keys of all CSS variable groups.
     * @returns All keys associated with all CSS variable groups.
     */
    public getCSSVarGroupKeys(): string[] {
        return this.cssGenerator.getVarGroupKeys();
    }

}