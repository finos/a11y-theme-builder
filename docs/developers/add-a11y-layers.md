# Adding Accessibility Layers

> Coming Soon ...

Accessibility Layers are visible and selectable from the user interface for color blindness, dyslexia, and motion sensitivity; however, the code generation part of the Theme Builder application does not yet support any of these layers.

## Adding an Accessibility Layer to the User Interface

The Accessibility Layers are currently visible in the user interface because of the [AccessibilityLayersButton component](https://github.com/discoverfinancial/a11y-theme-builder/blob/main/code/src/ui/src/components/AccessibilityLayersButton.tsx#L1) which uses the [SDK's layers object](https://github.com/discoverfinancial/a11y-theme-builder-sdk/blob/main/src/layers/layers.ts#L1).  Therefore, in order to add a new Accessibility Layer to user interface, simply add a new property to the [SDK's layers object](https://github.com/discoverfinancial/a11y-theme-builder-sdk/blob/main/src/layers/layers.ts#L1).  Be sure to also add the new property to the [properties  array](https://github.com/discoverfinancial/a11y-theme-builder-sdk/blob/main/src/layers/layers.ts#L28).

## Adding support for an Accessibility Layer to the SDK

Both the [CSS code generator](https://github.com/discoverfinancial/a11y-theme-builder-sdk/blob/main/src/code/cssGenerator.ts#L1) and the [JSON code generator](https://github.com/discoverfinancial/a11y-theme-builder-sdk/blob/main/src/code/jsonGenerator.ts#L1) must be enhanced in order to support each of the current accessibility layers: color blindness, dyslexia, and motion sensitivity.  The same work is required for any additional code generators.

Exactly how an Accessibility Layer changes the generated code depends upon both the layer itself as well as the type of code that is being generated.

Coming soon are modifications to the [CSS code generator](https://github.com/discoverfinancial/a11y-theme-builder-sdk/blob/main/src/code/cssGenerator.ts#L1) and [JSON generator](https://github.com/discoverfinancial/a11y-theme-builder-sdk/blob/main/src/code/jsonGenerator.ts#L1) to support the current accessibility layers.