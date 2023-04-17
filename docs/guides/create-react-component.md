## The design system has been finalized.  Now what?

After a design system has been created and exported from the Theme Builder tool, what happens next?  How can an application take advantage of the output?  This document will explore the scenario where the down-stream consumer of the design system will be a React component library or a React-based application.

Whether you have an existing component library or application or are creating a new one, the ideas presented here are still applicable.  But for the sake of clarity, let's consider a specific scenario where you are a developer on an existing application that uses a React-based component library, like Material UI (Mui).  Your designer has just used Theme Builder to create a design system and is handing you this CSS for you to use in your application.  How do you proceed?

### Consume the theme

It is our recommendation that you store the Theme Builder-generated design system that your designer provided to you in a file in your source code repository.  This file will contain little more than a collection of CSS variables with default values.  It will be up to you to bind the appropriate styling rules in your application to the CSS variables in this file.  If this is done correctly, then updating your application's design system should be little more than replacing this file with a newly exported Theme Builder design system.

### Binding style to a component

The first hurdle that you will encounter is trying to determine which of the 1000+ CSS variables are applicable to you and your application.  Let's begin with a simple example.  How would you style a pushbutton in your application using your design system?

#### Import design system

Theme Builder itemizes all of the CSS variables that are used by each atom, molecule or organism in the tool.  So if you load the design system that your designer provided to you into your local copy of Theme Builder, you'll quickly see what parts of your design system are in play on each page.  You may import the design system using using these instructions.

> link to import instructions

#### Helpful examples

As you play around with Theme Builder, you'll notice that the Theme Builder application itself is a consumer of many of the CSS variables loaded in the current design system.  As you make changes to atom and molecule settings, you may notice the UI adopting these updated values in background colors and typography, button colors and shapes, and many, many other styles.  So should you find yourself at a loss as to how to achieve a particular style in your application that you see in Theme Builder, look no further!

#### Let's try this.  Choose a component

Let's use a pushbutton as an example of a component from your application that you want to bind to your design system.

After loading the design system into Theme Builder, activate the `ATOMS` tab.  Then select the `Buttons-Standard` option from the left-hand menu.  Verify that the colors, typography, and button styling reflect those of your design system.  If you now scroll to the bottom of this page, you'll see, under the `Generated Code` section, the CSS variables that were generated in your design system by the Standard Buttons Molecule settings fields and a description for each.

If you scroll back toward the top of the page, to the `Example` section, you'll see styled examples of each button type, Primary, Secondary and Tertiary.  One or more of these will likely correspond to buttons in your application.  If you use your browser's developer tools to inspect the CSS for the Primary button, you'll see the variables mentioned in the Generated Code section, but you'll also see styles that have been applied to the button by Theme Builder.  For example, you may see that `{color: var(--on-button)}` binds the button's text color to the --on-button CSS variable in your design system.

##### CSS

As we recommended earlier in this page, the CSS used to style the Theme Builder components is largely located in two places.  [TB.css](https://github.com/discoverfinancial/a11y-theme-builder/blob/main/code/src/ui/src/mui-a11y-tb/themes/TB.css) holds all of the root CSS variables along with their default values. [Theme.css](https://github.com/discoverfinancial/a11y-theme-builder/blob/main/code/src/ui/src/mui-a11y-tb/themes/Theme.css) contains all of the CSS classes that make use of the CSS variables and binds them to the components.  Because the components for Theme Builder are displayed under the design system section of the tool, some styles may also be impacted by [DesignSystemPage.css](https://github.com/discoverfinancial/a11y-theme-builder/blob/main/code/src/ui/src/pages/DesignSystemPage.css).

**Note:** Theme Builder was built using Material UI (Mui) components.  So you may see Mui-specific classes in some of the CSS rules.  This allows the components to properly use the values specified in the design system.

##### JSON

As mentioned above, Theme Builder was built using components from the Mui component library.  Mui allows you to specify a theme for your Mui-based applications using JSON and its ThemeProvider component, as outlined [here](https://mui.com/material-ui/customization/theming/).  If your application already uses Mui, you may find it worth your time to see if you can leverage the JSX file that we built to bind our most oft-used CSS variables to Mui components.  This file is [Theme.jsx](https://github.com/discoverfinancial/a11y-theme-builder/blob/main/code/src/ui/src/mui-a11y-tb/themes/Theme.jsx).

