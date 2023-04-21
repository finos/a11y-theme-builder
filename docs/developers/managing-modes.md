# Managing Light and Dark Modes

Switching between light and dark modes for a web app is often accomplished by creating a `.darkmode` class that is added to a container such as the `<body>` element.

The components used in the Theme Builder are enabled for dark mode by including a `.darkmode` class.  

```
<body class="... darkmode">
</body>
```

The Theme Builder generates root light mode and dark mode colors that can be used when creating your component classes.  The naming convention is `--varName` for light mode and `--dm-varName` for dark mode.  

For example, the root button variables are:

```
--button: var(--mycolor-400);
--on-button: #FFFFFF;

--dm-button: var(--dm-mycolor-400);
--dm-on-button: #121212;
```

All root variables should be added to the `:root` css.  (See [TS.css](https://github.com/discoverfinancial/a11y-theme-builder/blob/main/code/src/ui/src/mui-a11y-tb/themes/TB.css#L1))

```
:root {
    --button: var(--mycolor-400);
    --on-button: #FFFFFF;
    --dm-button: var(--dm-mycolor-400);
    --dm-on-button: #121212;
    ...
}
```

They can be used by the button component classes that style the button:

```
.button {
  background: var(--button) !important;
  color: var(--on-button) !important;
}

.darkmode .button {
  background: var(--dm-button) !important;
  color: var(--dm-on-button) !important;
}
```

Any new components added to your component library should use the same method to ensure they work correctly.
