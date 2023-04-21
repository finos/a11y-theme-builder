/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React from 'react';
import { DesignSystem } from 'a11y-theme-builder-sdk';
import TextEditBox from '../../../components/TextEditBox';
import { HeadingSection } from '../../content/HeadingSection';
import { GeneratedCodeSection } from '../../content/GeneratedCodeSection';
import { ExampleSection } from '../../content/ExampleSection';
import { SettingsSection } from '../../content/SettingsSection';

const name = "SmallTextStylesAtom";

const subtitle1CssPrefix = "subtitle1";
const subtitle2CssPrefix = "subtitle2";
const captionCssPrefix = "caption";
const captionBoldCssPrefix = "caption-bold";
const overlineCssPrefix = "overline";
const overlineLargeCssPrefix = "overline-large";
const overlineXLCssPrefix = "overline-XL";
const label1CssPrefix = "label-1";
const label1CapsCssPrefix = "label-1-allCaps";
const label2CssPrefix = "label-2";
const label2CapsCssPrefix = "label-2-allCaps";
const labelSmallCssPrefix = "label-small";
const callToActionCssPrefix = "CTA";
const callToActionSmallCssPrefix = "CTA-Small";
const smallCssPrefix = "small";
const smallSemiboldCssPrefix = "small-semibold";

interface Props {
    designSystem: DesignSystem;
}

export const SmallTextStylesAtom: React.FC<Props> = ({ designSystem }) => {
    // console.log(`${name} - >>> enter()`)

    const smallTextStylesAtom = designSystem.atoms.smallTextStyles;

    const subtitle1TypographyStyling            = smallTextStylesAtom.subtitle1
    const subtitle2TypographyStyling            = smallTextStylesAtom.subtitle2
    const captionTypographyStyling              = smallTextStylesAtom.caption
    const captionBoldTypographyStyling          = smallTextStylesAtom.captionBold
    const overlineTypographyStyling             = smallTextStylesAtom.overline
    const overlineLargeTypographyStyling        = smallTextStylesAtom.overlineLarge
    const overlineExtraLargeTypographyStyling   = smallTextStylesAtom.overlineExtraLarge
    const label1TypographyStyling               = smallTextStylesAtom.label1
    const label1CapsTypographyStyling           = smallTextStylesAtom.label1AllCaps
    const label2TypographyStyling               = smallTextStylesAtom.label2
    const label2CapsTypographyStyling           = smallTextStylesAtom.label2AllCaps
    const labelSmallTypographyStyling           = smallTextStylesAtom.labelSmall
    const callToActionTypographyStyling         = smallTextStylesAtom.callToAction
    const callToActionSmallTypographyStyling    = smallTextStylesAtom.callToActionSmall
    const smallTypographyStyling                = smallTextStylesAtom.small
    const smallSemiboldTypographyStyling        = smallTextStylesAtom.smallSemibold

    const keySubtitle1              = subtitle1TypographyStyling.key
    const keySubtitle2              = subtitle2TypographyStyling.key
    const keyCaption                = captionTypographyStyling.key
    const keyCaptionBold            = captionBoldTypographyStyling.key
    const keyOverline               = overlineTypographyStyling.key
    const keyOverlineLarge          = overlineLargeTypographyStyling.key
    const keyOverlineExtraLarge     = overlineExtraLargeTypographyStyling.key
    const keyLabel1                 = label1TypographyStyling.key
    const keyLabel1Caps             = label1CapsTypographyStyling.key
    const keyLabel2                 = label2TypographyStyling.key
    const keyLabel2Caps             = label2CapsTypographyStyling.key
    const KeyLabelSmall             = labelSmallTypographyStyling.key
    const keyCallToAction           = callToActionTypographyStyling.key
    const keyCallToActionSmall      = callToActionSmallTypographyStyling.key
    const keySmall                  = smallTypographyStyling.key
    const keySmallSemibold          = smallSemiboldTypographyStyling.key

    if ( !keySubtitle1 || !keySubtitle2
        || !keyCaption || !keyCaptionBold 
        || !keyOverline || !keyOverlineLarge || !keyOverlineExtraLarge 
        || !keyLabel1 || !keyLabel1Caps || !keyLabel2 || !keyLabel2Caps || !KeyLabelSmall 
        || !keyCallToAction || !keyCallToActionSmall
        || !keySmall || !keySmallSemibold)
        return null;
    return (
        <div className="container">
            <HeadingSection item={smallTextStylesAtom} title="Typography">
            The Small Text Styles Atom sets Typography settings for the 16 Small Text types:
                <ul>
                    <li>Subtitle 1</li>
                    <li>Subtitle 2</li>
                    <li>Caption</li>
                    <li>Caption Bold</li>
                    <li>Overline</li>
                    <li>Overline Large</li>
                    <li>Overline Extra Large</li>
                    <li>Label 1</li>
                    <li>Label 2 All Caps</li>
                    <li>Label 1</li>
                    <li>Label 2 All Caps</li>
                    <li>Label Small</li>
                    <li>Call to Action</li>
                    <li>Call to Action Small</li>
                    <li>Small</li>
                    <li>Small Semibold</li>
                </ul>
                The Settings that can be changed for each are:
                <ul>
                    <li>Font Family</li>
                    <li>Font Size</li>
                    <li>Font Weight</li>
                    <li>Character Spacing</li>
                </ul>
            </HeadingSection>
            <ExampleSection>
                None
            </ExampleSection>
            <SettingsSection>
                <TextEditBox
                    textKey={keySubtitle1}
                    cssPrefix={subtitle1CssPrefix}
                    designSystem={designSystem}
                />                
                <TextEditBox
                    textKey={keySubtitle2}
                    cssPrefix={subtitle2CssPrefix}
                    designSystem={designSystem}
                />
                <TextEditBox
                    textKey={keyCaption}
                    cssPrefix={captionCssPrefix}
                    designSystem={designSystem}
                />                
                <TextEditBox
                    textKey={keyCaptionBold}
                    cssPrefix={captionBoldCssPrefix}
                    designSystem={designSystem}
                />
                <TextEditBox
                    textKey={keyOverline}
                    cssPrefix={overlineCssPrefix}
                    designSystem={designSystem}
                />
                <TextEditBox
                    textKey={keyOverlineLarge}
                    cssPrefix={overlineLargeCssPrefix}
                    designSystem={designSystem}
                />                
                <TextEditBox
                    textKey={keyOverlineExtraLarge}
                    cssPrefix={overlineXLCssPrefix}
                    designSystem={designSystem}
                />
                <TextEditBox
                    textKey={keyLabel1}
                    cssPrefix={label1CssPrefix}
                    designSystem={designSystem}
                />                
                <TextEditBox
                    textKey={keyLabel1Caps}
                    cssPrefix={label1CapsCssPrefix}
                    designSystem={designSystem}
                />
                <TextEditBox
                    textKey={keyLabel2}
                    cssPrefix={label2CssPrefix}
                    designSystem={designSystem}
                />
                <TextEditBox
                    textKey={keyLabel2Caps}
                    cssPrefix={label2CapsCssPrefix}
                    designSystem={designSystem}
                />                
                <TextEditBox
                    textKey={KeyLabelSmall}
                    cssPrefix={labelSmallCssPrefix}
                    designSystem={designSystem}
                />
                <TextEditBox
                    textKey={keyCallToAction}
                    cssPrefix={callToActionCssPrefix}
                    designSystem={designSystem}
                />
                <TextEditBox
                    textKey={keyCallToActionSmall}
                    cssPrefix={callToActionSmallCssPrefix}
                    designSystem={designSystem}
                />
                <TextEditBox
                    textKey={keySmall}
                    cssPrefix={smallCssPrefix}
                    designSystem={designSystem}
                />                
                <TextEditBox
                    textKey={keySmallSemibold}
                    cssPrefix={smallSemiboldCssPrefix}
                    designSystem={designSystem}
                />
            </SettingsSection>
            <GeneratedCodeSection item={smallTextStylesAtom}/>
        </div>
    )

}
