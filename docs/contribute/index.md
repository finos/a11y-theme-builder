[![DFS - Incubating](../_images/discover-incubating.svg)](https://technology.discover.com/technologies/open_source)

# Call for Contributions
As an incubation project, *Discover Financial Services* seeks community input on where this project can be enhanced and/or put-into-use. This document serves as a compendium of suggestions pertaining to possible:

* feature enhancements
* applicable use cases
* workflow integrations

If you have a suggestion to share, please [submit a ticket](https://github.com/discoverfinancial/a11y-theme-builder/issues) to help capture and track your suggestion. We recommend to also submit a `pull-request` against this [documentation section](./index.md) so that your ideas can be included in the project documentation. 

## Feature Enhancements
Share an idea for how Theme Builder could be improved.  Explore and/or augment this list of enhancement ideas. Please use an [existing or new ticket](https://github.com/discoverfinancial/a11y-theme-builder/issues) to expand on a specific feature. 

| Feature Name | Description | Suggestion Ticket |
| --- | --- | --- | 
| A11y Layers (Overlays)| Create and add new overlays. | |
| New Atomic Elements | Extending Atomic components of the existing system. Create and add new atoms, molecule, or organism.| |
| Default Test App | Write a node-based web application that utilizes the output (generated CSS and/or JSON theme files) of Theme Builder. This could be applied to printing services, ATM’s, payment devices, etc. | |
| Styling Preview | Render within the Theme Builder interface a preview of how the chosen colors and styles would be applied to each atomic element. | |
| Design Starter Files | Create Theme Builder component starter files in Adobe XD and Sketch formats based on the Figma Starter File. | |
| Alternate Output Formats | Enable the ThemeBuilder to generate outputs suitable for mobile or desktop environments such as Xcode. | |
| Sub-themes | Allow for the creation of sub-themes associated with or building off of a parent theme. For instance, allow a sub-theme to be created for an intranet that is based off an organizations public website theme. | |
| Lockable Attributes | The ability for theming attributes within a parent theme to be locked so that sub-themes based on the parent theme retain the parent styling for the locked attributes. This is beneficial for keeping sub-themes on-brand. | |
|Updatable Theme Colors | Provide the ability for users of the Theme Builder to modify the selected primary, secondary, and tertiary colors after being initially set. | |
| Translation Layer | Enable dyslexia support to be applied to fonts in languages other than English. | |



## Use Cases
Share an idea for how Theme Builder can be used. We are interested in all possible use cases (not limited to the Finance Sector). Are you interested in building a prototype for a use case? Explore and/or augment this list of use cases. Please use an [existing or new ticket](https://github.com/discoverfinancial/a11y-theme-builder/issues) to expand on a specific use case. 

| Feature Name | Description | Suggestion Ticket |
| --- | --- | --- | 
| Design System Rebranding | Utilize the Theme Builder to expedite the rebranding of an application.| |
| Customized Consumer Instruments | Customized credit cards or mail based on a user’s preferences (for example: if a user noted that they were colorblind, the Theme Builder tool could be utilized to automatically change the colors & contrast values of their credit card when it was printed). | |
| CLI | A CLI could be used in a CI/CD process to automate any of the following: (1) transformation: automatically building/deploying multiple versions of a single app with different accessibility features enabled.(2) verification: verify that the checked in design system meets the min level of the source control merging standards; (3) output generation: automatically generate the outputs (CSS, JSON, PPT, etc) from a hosted design system. | |
Design System Accessibility Assessment| Verify if existing theme is a11y compliant via uploading for assessment. Metadata included to advise on standard development of a11y compliant solutions as part of results.| |
User Profile Specific Variations | Store user preferences to provide on-demand, profile-aware themes and experience variations across digital and physical channels that address a user's specific accessibility needs.| |
White-labeled Themes | Leverage the Theme Builder to create accessible sub-themes for third-party applications such as Workday and design systems such as IBM Carbon. | |




## Workflow Integrations 

Do you have an idea for how Theme Builder can be used in the workflow activities between accessibility designers, developers, and testers? Are you interested in doing a proof-of-concept for a end-to-end integration? Explore and/or augment this list of ideas. Please use an [existing or new ticket](https://github.com/discoverfinancial/a11y-theme-builder/issues) to expand on a specific concept. 

| Concept | Description |Suggestion Ticket |
| --- | --- | --- | 
| Low-code Environment Integration using [airplane.dev](https://www.airplane.dev/) | Imagine a simple, easy to use toolchain workflow whereby Theme Builder provides the accessibly aware CSS that can be consumed by a low-code developer environment. | [214](https://github.com/discoverfinancial/a11y-theme-builder/issues/214) |
| Dynamic Github A11y | Create your personalized A11y Theme and connect it to a Github account for a personalized experience. | [312](https://github.com/discoverfinancial/a11y-theme-builder/issues/312) |
| Theme Switcher |Utilize Theme Builder to switch between themes for a given interface. Examples include upgrading a design system theme from WCAG AA to AAA. | |
| Compliance Testing| Test prototypes & solutions developed utilizing [Fable testing tool](https://makeitfable.com/). This would include adding a sample app that can be used for applying themes and then testing for verifying compliance. | |
| Restaurant Menu Generator | Integrate Theme Builder into menu creation at restaurants. Once a user scans the QR code for a menu, they would be able to switch to different themes of the menu, depending on their disability. | |
| Nodejs Alternatives | Implement atomic components in another Javascript language/framework | |
| React Components | Build React (or other framework) components that can consume Theme Builder output. | |
| Synchronization with Storybook  | Published outputs from the ThemeBuilder are consumed by and therefore synchronized with a digital component library rendered in Storybook. | |
| DesignOps Toolchain | Prepare a demo and documentation for setting up the toolchain workflow for keeping the Design Component Library, the Digital Component Library and the CSS Library in sync. See [DesignOps Toolchain](https://discoverfinancial.github.io/a11y-theme-builder/motivation/solution/#designops-toolchain) for more details. | |

