# Developer's Overview of the Accessibility Theme Builder SDK

The following is an overview of the code layout of this repository:

* [src/themeBuilder.ts](./src/themeBuilder.ts) - The main theme builder class.
  
* [src/designSystem.ts](./src/designSystem.ts) - The design system class.

* [src/atoms](./src/atoms) - The directory containing all atoms.  Each atom class extends the [Atom](./src/atoms/atom.ts) class.

* [src/molecules](./src/molecules) - The directory containing all molecules.  Each molecule class extends the [Molecule](./src/molecules/molecule.ts) class.

* [src/organisms](./src/organisms) - The directory containing all organisms.  Each organism class extends the [Organism](./src/organisms/organism.ts) class.

* [src/layers](./src/layers) - The directory containing the accessbility layers, all currently in the [Layers](src/layers/layers.ts) class.

* [src/storage](./src/storage) - The directory containing all code related to storage or persistence.  Each molecule class extends the [Molecule](./src/molecules/molecule.ts) class.

* [src/common](./src/common) - The directory containing common code used by atoms, molecules, and/or organisms.  In particular, each atom extends the [Node](./src/common/node.ts) class which represents a node in a tree as well as a node in a dependency graph.  Each node may contain any number of properties from [src/common/props](./src/common/props.ts).

* [src/util](./src/util) - The directory containing various utility classes.  One very important class worth noting here is the [Shade](./src/common/shade.ts) class which performs several color-related important calculations for this SDK.