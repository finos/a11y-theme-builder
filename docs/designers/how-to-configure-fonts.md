*Typography* pertains to the differences between different styles of text that create distinct appearances in both physical and digital material. When using the Theme Builder, a *Designer* can configure a collection of five different *Typography Atoms*.

The first is `Fonts Settings` which governs the more general settings for all text. This is followed by `Display & Header Styles`, `Body Styles`, `Small Text Styles`, and `Stat Styles`, all of which set the properties for different classes of texts individually. This guide will cover each of these atoms and the range of settings they contain.

## Fonts Settings

This atom allows you to set the primary and secondary font, the base font size, base font weights and line heights. As the user changes these settings, they should expect the text on the same page to change accordingly.

### Primary and Secondary Fonts

The user can enter any text into either of these fields. We have kept a list of 100 or so common Google fonts. If we recognize the entry as one of these, we will display a message below informing the user of the weights the font supports. Alternatively, if we do not recognize the font, the message below will change to indicate this. We allow the user to set any font they want, but it is left up to the user to ensure the values work downstream.

### Font Sizes

This value can be set to configure the base font. The default unit is pixels. This value is used as a starting point for many typography calculations.

### Primary Font Weights

This section defines five font weights in increasing order to be used in the theme. We allow the user to enter any weights they wish, making them responsible for whether the weights can actually be used for their purposes. If the user had selected a font in our database, we will alert the user if the weight selected is not supported.

### Line Heights

Here, the user can define three sets of line heights, for body, headers and small texts. `Standard Line Height`, sets the line height for all body text, and has a minimum value of 150% for accessibility. `Header Line Height` sets the line height for all headers, and `Small Text Line Height` sets the value for all other text. These last two fields have a default value of 110%, and no limits are set at this time.

## Display and Header Styles

This atom defines settings for all text with a display or header class, including h1-6, display1 snd display2.

### Header/Display Font Weight

The user can set a font weight for all header classes. The default is 700 (bold). The same warnings are applied to this weight depending on the font selected as were for the other weights.

### Percent Change in Header/Display Sizes

This slider affects how greatly the headers vary in size as they increase their class.

### Class Settings

There are 8 further settings below that open a modal and allow the user to edit settings for a specific class. The section includes, `Display 1`, `Display 2`, `Header 1`, `Header 2`, `Header 3`, `Header 4`, `Header 5`, and `Header 6`. For information on how this works see the [modal documentation](#font-edit-modal).

## Body Styles

This atom defines 6 classes that are used for body text. These include `Body 1`, `Body 1 - Bold`, `Body 2`, `Body 2 - Bold`, `Body 3`, and `Body 3 - Bold`. Each section allows the user to alter individual settings for each class. For information on how this works see the [modal documentation](#font-edit-modal).

## Small Text Styles

This atom defines 16 classes that are used for body text. These include `Subtitle 1`, `Subtitle 2`, `Caption`, `Caption Bold`, `Overline`, `Overline Large`, `Overline Extra Large`, `Label 1`, `Label 1 All Caps`, `Label 2`, `Label 2 All Caps`, `Label Small`, `Call to Action`, `Call to Action Small`, `Small`, `Small Semibold`,. Each section allows the user to alter individual settings for each class. For information on how this works see the [modal documentation](#font-edit-modal).

## Stat Styles

This atom defines 1 class that are used for stat text: `Stat`. This one section allows the user to alter individual settings for this class. For information on how this works see the [modal documentation](#font-edit-modal).

## Font Edit Modal

Each individual text class is editable, and will open up a modal with a few settings.

- **Font Family:** A drop down where the user can select a font for this text style.
- **Font Size:** A slider where the user can select the font size for this text style.
- **Font Weight:** A drop down where the user can select a weight for this text style. Similar warnings apply to this as with any other weight selections.
- **Character Spacing:** A slider where the user can change the space between characters for this text style.

To confirm the selected changes, the user must click `Save`, other wise the selections will not take effect.
