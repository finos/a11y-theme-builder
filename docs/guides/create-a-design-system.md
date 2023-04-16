# Create a design system

The act of creating a design system is very easy.  After loading the application, click on the `Your Design Systems` entry in the left navigation menu.  Then click on the `Create a New Design System` button.  If you do not see that item in your left nav bar, click on the icon in the upper left of the screen to return to the root of the Theme Builder application.  You will be presented with a popup window.  Enter a name for this new design system and then click the `Next` button.

The steps below will help you initialize a Theme Builder design system.

## Step 1. Populate your color palette

A design system in Theme Builder has humble beginnings.  When a new design system is created in Theme Builder, you, the author, are initially restricted to very few actions.  You must first define a color palette.  This will be the collection of colors from which themes can be defined.  You may decide to define a color for every color that exists in your company's brand or just the subset that will be used by a specific application.  However, at least one color must be present in the color palette before you can progress to the next stage, defining the default theme for the design system.

### Add a color to the color palette

1. Make sure that `Color Palette` has been selected from the `ATOMIC SETTINGS` section on the left navigation menu.
2. Specify the name of the color that you are adding.
3. Select the color from the Color Picker.
4. Click `Add Color`.

You will be presented with the list of colors in the palette, as rows of 10 shades.  Add as many colors as desired.  You may add colors to the color palette in the design system at any time.

## Step 2. Select colors for the default color theme

Until the default theme is complete, no other parts of the design system will be configurable.

### Specify colors

1. Make sure that `Color Theme` has been selected from the `ATOMIC SETTINGS` section on the left navigation menu.
2. Select primary, secondary and tertiary colors.  For each of these values, you will be allowed to choose from the tray of shades that will be generated from each color available in the color palette.  Once these three colors are defined, you will be free to draw upon these colors and their shades to define which will be used for various aspects of the default theme (such as background colors, button colors and icon colors).  **Note:** Unless all three colors are selected, some of the following fields may not be selectable.  Values for all fields must be specified to proceed to the next step.
3. Click `Show Theme` to indicate that you are satisfied with the default theme.

**Note:** Once you have confirmed your decision, you will be presented with a read-only representation of all of the values that you selected, displayed in light mode and dark mode.  At this point, the default theme will no longer be modifiable.  The reason behind this is that changes to the default theme after other parts of the design system are configured, could largely invalidate those selections.  In a future version, creating sub themes will be possible which will overlay the default color theme, thus allowing for a modifiable design system.

You may want to save your design system at this point to serve as a foundation from which to populate future design systems or as a safe restore point from which to begin again.

Upon establishing the default theme, Theme Builder will now allow you to modify any aspect of the design system that you wish.  To begin, we lightly suggest that you define values at the atom level initially and progress next to the molecules.

## Step 3. Select Typography values

Along with coloring, selecting a good font will provide a great foundation for styling your application.  More information on configuring the Typography in your design system can be found [here](../designers/how-to-configure-fonts.md).

## Interlude: Helpful Insights

As you grow more satisfied with the style that you are achieving, feel free to progress to more complex combinations like organisms.  You may notice that some colors you select, for example in State Settings, will not be used by Theme Builder.  It may choose to use similar, though slightly different, colors.  This is by design.  In order to meet the requirements set out in the accessibility guidelines, some colors cannot be used in combination with others as contrast ratios limits have to be observed.  Similarly, you may find yourself unable to change some settings.  For example, you may not be given the ability to choose to not underline hotlinks.  Again, to be compliant with the standards, hotlinks must be easily differentiated from surrounding text.  Based on the background and hotlink colors that you selected, this differentiation may only be achievable by underlining the text.

So how can you evaluate your new design system?  One thing that you may notice as you use Theme Builder is that the tool itself uses many of the CSS variables that are being affected by your choices.  Button shapes and colors, border shades and elevations and many other visual cues in its user interface will change to reflect the values you selected.  This allows you to be immersed in the design and feel it for yourself.  Theme Builder also provides tabs like **Preview** and **Components** which collect many of the most popular atoms and molecules together to form more complex components and views where the styling that you have been composing can be exhibited in very tangible ways.

## Other Atoms

## Molecules

## Organisms

## Components

## Preview

## Code

