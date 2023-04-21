# Adding Output Generators

The Theme Builder application is extensible with regard to code generators.

For example, consider the following code generators:
* [CSS code generator](https://github.com/discoverfinancial/a11y-theme-builder-sdk/blob/main/src/code/cssGenerator.ts#L1)
* [JSON code generator](https://github.com/discoverfinancial/a11y-theme-builder-sdk/blob/main/src/code/jsonGenerator.ts#L1)


## Adding an Output Generator to the SDK

See [How To Add a New Code Generator](https://github.com/discoverfinancial/a11y-theme-builder-sdk/blob/main/DEV-GUIDE.md#how-to-add-a-new-code-generator) in the SDK documentation.

## Adding an Output Generator to the User Interface

Once a new output generator has been added to the SDK, it can be added to the `Code` page in the UI.  

The left nav lists all Output Generators (labeled as Code Generators).  To add a new tab, edit [CodeContext.tsx](https://github.com/discoverfinancial/a11y-theme-builder/blob/main/code/src/ui/src/pages/content/code/CodeContent.tsx#L1).

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

Add your content to the right content scrollable div to have it rendered when your generator is selected in the left nav.

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