## Design Ops Toolchain

A Design Ops Toolchain keeps the Design Component Library, the Digital Component Library and the CSS Library in sync. 

For example, assuming the use of [Figma]() as prototyping tool, a *Designer* can push changes from the master Figma design library to a staging component library repo. 

![figma-workflow](../../_images/design-ops-figma.png)

Alternatively, changes can also be pushed from the staging repo to Figma.  

![storybook-workflow](../../_images/design-ops-storybook.png)

>Note: This only demonstrates the work flow not the approval processes.  This toolchain utilizes Figma Tokens, Figma, GitHub, a React Component Library and Chromatic (a paid and enhanced version of Storybook).