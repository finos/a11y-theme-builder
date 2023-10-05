# Adding Output Generators

Each output generator in the Theme Builder application has the goal of representing the currently loaded design system in a unique, consumable format.  At this time CSS and JSON are the supported formats, but we certainly see many other potential formats as Theme Builder is incorporated into more and more environments.  For example, you might want all of the documents and presentations that your company produces for the public to share the look and feel that you've already defined in your company's design system.  If these artifacts are all generated using a particular office suite, you might benefit from an output generator that can generate a theme in a format that can be imported into your office suite.  And because the theme is based on Theme Builder computations, you can be confident that your documents will meet accessibility standards.

The Theme Builder application is designed to be extensible with regard to code generators.  To get a feel for what a code generator implementation may look like, have a look at our base code generators:

* [CSS code generator](https://github.com/finos/a11y-theme-builder-sdk/blobmain/src/code/cssGenerator.ts#L1)
* [JSON code generator](https://github.com/finos/a11y-theme-builder-sdkblob/main/src/code/jsonGenerator.ts#L1)


## Adding an Output Generator to the SDK

See [How To Add a New Code Generator](https://github.com/finos/a11y-theme-builder-sdk/blob/main/DEV-GUIDE.md#how-to-add-a-new-code-generator) in the SDK documentation.

## Adding an Output Generator to the User Interface

Once a new output generator has been added to the SDK, it can be added to the `Code` page in the UI.  

The left nav lists all Output Generators (labeled as Code Generators).  To add a new tab, edit [CodeContext.tsx](https://github.com/finos/a11y-theme-builder/blob/main/code/src/ui/src/pages/content/code/CodeContent.tsx#L1).

Add a `<LeftNavItem>` for your output generator to the `<List>` element

```
<List ...>
    ...
    <LeftNavItem 
        text={"MyGenerator"} 
        value="myGenerator" 
        indent={1} 
        selected={showItem} 
        onClick={()=> {setShowItem("MyGenerator")}} 
        disabled={disabled}
    />
</List>
```

Add your content to the `design-system-editor-right-content-scrollable` div to have it rendered when your generator is selected in the left nav.

```
<div className="design-system-editor-right-content">
    <div className="design-system-editor-right-content-scrollable">
        ...
        {showItem === "myGenerator" && <>
            Add your content here
        </>}
    </div>
</div>
```