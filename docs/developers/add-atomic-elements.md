# Extending Atoms, Molecules, or Organisms

This section describes how a developer can extend the Theme Builder application with respect to atomic elements (i.e. atoms, molecules, or organisms).

Although it depends upon your use case, in most cases it will require modifying both:

* the user interface code in the [a11y-theme-builder repository](https://github.com/discoverfinancial/a11y-theme-builder) (see [Extending the User Interface section](#extending-the-user-interface) below), and
* the SDK code in the [a11y-theme-builder-sdk repository](https://github.com/discoverfinancial/a11y-theme-builder-sdk) (see [Extending the SDK](#extending-the-sdk)).

Generally speaking, there are two ways of extending the Theme Builder application with respect to an atomic element:
1. Adding an additional property to an existing atomic element, or
2. Adding a new atomic element.

The sections below describe how to perform these types of extensions for both the SDK and the User Interface.

## Extending the SDK

See [Extending the SDK](https://github.com/discoverfinancial/a11y-theme-builder-sdk/blob/main/DEV-GUIDE.md#extending-the-sdk).

## Extending the User Interface

* Ensure that the SDK is extended first with your new additions, and that this newest SDK version is present in your build.
* Create the React component for the new addition you are planning to make. Ensure it is in the correct directory depending on whether it is a atom, molecule, organism or component.  Be sure to import the SDK extension you made, and pass it as a prop.
* Complete the new React component, by completing a HeadingSection, ExampleSection and Settings Section.
* Add your new component to the correct content page depending on whether it is a atom, molecule, organism or component.

### Walkthrough: Creating a new Atom

We have included an [Example Atom](https://github.com/discoverfinancial/a11y-theme-builder/blob/main/code/src/ui/src/pages/atoms/ExampleAtom.tsx) as a DEMO.

Follow the comments labeled with `DEMO` in the above file and the [Atom Content Page](https://github.com/discoverfinancial/a11y-theme-builder/blob/main/code/src/ui/src/pages/content/atoms/AtomContent.tsx).