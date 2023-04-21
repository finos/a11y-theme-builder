/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useEffect, useState } from 'react';
import { Alert, Grid, InputLabel, Slider, TextField } from '@mui/material';
import { DesignSystem } from 'a11y-theme-builder-sdk';
import TextEditBox from '../../../components/TextEditBox';
import { FontWeightsUtil } from './FontWeightsUtil';
import { HeadingSection } from '../../content/HeadingSection';
import { GeneratedCodeSection } from '../../content/GeneratedCodeSection';
import { ExampleSection } from '../../content/ExampleSection';
import { SettingsSection } from '../../content/SettingsSection';

const name = "HeaderStylesAtom";

const display1CssPrefix = "Display1"
const display2CssPrefix = "Display2"
const header1CssPrefix = "h1"
const header2CssPrefix = "h2"
const header3CssPrefix = "h3"
const header4CssPrefix = "h4"
const header5CssPrefix = "h5"
const header6CssPrefix = "h6"

interface Props {
    designSystem: DesignSystem;
}

export const HeaderStylesAtom: React.FC<Props> = ({ designSystem }) => {
    // console.log(`${name} - >>> enter()`)

    const headerStylesAtom = designSystem.atoms.displayAndHeaderStyles;

    const fontWeightProperty            = headerStylesAtom.headingDisplayFontWeight
    const typographyChangeProperty      = headerStylesAtom.percentChangeInHeaderDisplaySizes
    const display1TypographyStyling     = headerStylesAtom.displayStyles[0]
    const display2TypographyStyling     = headerStylesAtom.displayStyles[1]
    const header1TypographyStyling      = headerStylesAtom.headerStyles[0]
    const header2TypographyStyling      = headerStylesAtom.headerStyles[1]
    const header3TypographyStyling      = headerStylesAtom.headerStyles[2]
    const header4TypographyStyling      = headerStylesAtom.headerStyles[3]
    const header5TypographyStyling      = headerStylesAtom.headerStyles[4]
    const header6TypographyStyling      = headerStylesAtom.headerStyles[5]

    const keyDisplay1   = display1TypographyStyling.key
    const keyDisplay2   = display2TypographyStyling.key
    const keyHeader1    = header1TypographyStyling.key
    const keyHeader2    = header2TypographyStyling.key
    const keyHeader3    = header3TypographyStyling.key
    const keyHeader4    = header4TypographyStyling.key
    const keyHeader5    = header5TypographyStyling.key
    const keyHeader6    = header6TypographyStyling.key

    const primaryFont          = designSystem.atoms.fontsSettings.primaryFont.getValue()   || "Open Sans"
    const secondaryFont        = designSystem.atoms.fontsSettings.secondaryFont.getValue() || "Open Sans"
    const isOneOfFontsUncommon = !FontWeightsUtil.isFontCommon(primaryFont) || !FontWeightsUtil.isFontCommon(secondaryFont)

    const [fontWeight, setFontWeight] = useState<number>(fontWeightProperty.getValue() || 400);
    const [typographyChange, setTypographyChange] = useState<number>(typographyChangeProperty.getValue() || 42);
    const [fontWeightWarningTriggered, setFontWeightWarningTriggered] = useState<boolean>(false)

    useEffect(() => {
        if (isOneOfFontsUncommon) {
            setFontWeightWarningTriggered(false)
            return
        }
        if (!FontWeightsUtil.isWeightSupported(primaryFont, fontWeight) || !FontWeightsUtil.isWeightSupported(secondaryFont, fontWeight)) {
            setFontWeightWarningTriggered(true)
        } else {
            setFontWeightWarningTriggered(false)
        }
    }, [fontWeight])

    async function handleFontWeightChange(event: any): Promise<void> {
        const value = parseInt(event.target.value);
        setFontWeight(value);
        fontWeightProperty.setValue(value)
        display1TypographyStyling.fontWeight.setValue(value)
        display2TypographyStyling.fontWeight.setValue(value)
        header1TypographyStyling.fontWeight.setValue(value)
        header2TypographyStyling.fontWeight.setValue(value)
        header3TypographyStyling.fontWeight.setValue(value)
        header4TypographyStyling.fontWeight.setValue(value)
        header5TypographyStyling.fontWeight.setValue(value)
        header6TypographyStyling.fontWeight.setValue(value)
    }
    async function handleTypographyChangeChange(event: any): Promise<void> {
        const value = parseInt(event.target.value);
        setTypographyChange(value);
        typographyChangeProperty.setValue(value)

        // Recalculate all header sizes from the baseFont, overwriting any user-specified
        const baseFont = designSystem.atoms.fontsSettings.baseFontSize.getValue() || 16
        display1TypographyStyling.fontSize.setValue(baseFont * (1 + (value/100 * 9)))
        display2TypographyStyling.fontSize.setValue(baseFont * (1 + (value/100 * 8)))
        header1TypographyStyling.fontSize.setValue(baseFont  * (1 + (value/100 * 6)))
        header2TypographyStyling.fontSize.setValue(baseFont  * (1 + (value/100 * 5)))
        header3TypographyStyling.fontSize.setValue(baseFont  * (1 + (value/100 * 4)))
        header4TypographyStyling.fontSize.setValue(baseFont  * (1 + (value/100 * 3)))
        header5TypographyStyling.fontSize.setValue(baseFont  * (1 + (value/100 * 2)))
        header6TypographyStyling.fontSize.setValue(baseFont  * (1 + (value/100 * 1)))
    }

    if ( !keyDisplay1 || !keyDisplay2 || !keyHeader1 || !keyHeader2 
        || !keyHeader3 || !keyHeader4 || !keyHeader5 || !keyHeader6) return null;
    return (
        <div className="container">
            <HeadingSection item={headerStylesAtom} title="Typography">
            The Header Styles Atom sets Typography settings for the 8 Header types:
                <ul>
                    <li>Display 1</li>
                    <li>Display 2</li>
                    <li>Header 1</li>
                    <li>Header 2</li>
                    <li>Header 3</li>
                    <li>Header 4</li>
                    <li>Header 5</li>
                    <li>Header 6</li>
                </ul>
                The Settings that can be changed for each are:
                <ul>
                    <li>Font Family</li>
                    <li>Font Size</li>
                    <li>Font Weight</li>
                    <li>Character Spacing</li>
                </ul>
                In addition, the change in size between headers can be changed, along with the font weight.
            </HeadingSection>
            <ExampleSection>
                None
            </ExampleSection>
            <SettingsSection>
                <div className="form-row top16">
                    <div className="form-row">
                        <Grid container spacing={3}>
                            <Grid item xs={3}>
                                <InputLabel htmlFor="fontWeight">
                                    Heading/Display Font Weight
                                </InputLabel>
                                <TextField
                                    id="fontWeight"
                                    type="number"
                                    sx={{maxWidth:300}}
                                    value={isNaN(fontWeight) ? "" : ""+fontWeight }
                                    onChange={handleFontWeightChange}
                                />
                            </Grid>
                            <Grid item xs={7}>
                                {!fontWeightWarningTriggered
                                ||
                                <Alert severity='warning' sx={{width: 500, marginTop: 1, padding: 1}}>
                                    The font weight provided is not supported by at least one of the primary and secondary fonts.
                                </Alert>}
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className="form-row top16">
                    <div className="label-1">
                        Percent Change in Header/Display Sizes
                    </div>
                    <Slider
                        aria-label="TypographyChange"
                        value={typographyChange}
                        sx={{maxWidth:600}}
                        onChange={handleTypographyChangeChange}
                        valueLabelDisplay="auto"
                    />
                </div>
                <div className="top40"/>
                <TextEditBox
                    textKey={keyDisplay1}
                    cssPrefix={display1CssPrefix}
                    designSystem={designSystem}
                    headerNo={7}
                />
                <TextEditBox
                    textKey={keyDisplay2}
                    cssPrefix={display2CssPrefix}
                    designSystem={designSystem}
                    headerNo={7}
                />
                <div className="row">
                    <div className="col-12">
                        <div className="subtitle1 quiet">
                            Header Styles
                        </div>
                    </div>
                </div>
                <TextEditBox
                    textKey={keyHeader1}
                    cssPrefix={header1CssPrefix}
                    designSystem={designSystem}
                    headerNo={1}
                />
                <TextEditBox
                    textKey={keyHeader2}
                    cssPrefix={header2CssPrefix}
                    designSystem={designSystem}
                    headerNo={2}
                />
                <TextEditBox
                    textKey={keyHeader3}
                    cssPrefix={header3CssPrefix}
                    designSystem={designSystem}
                    headerNo={3}
                />
                <TextEditBox
                    textKey={keyHeader4}
                    cssPrefix={header4CssPrefix}
                    designSystem={designSystem}
                    headerNo={4}
                />
                <TextEditBox
                    textKey={keyHeader5}
                    cssPrefix={header5CssPrefix}
                    designSystem={designSystem}
                    headerNo={5}
                />
                <TextEditBox
                    textKey={keyHeader6}
                    cssPrefix={header6CssPrefix}
                    designSystem={designSystem}
                    headerNo={6}
                />
            </SettingsSection>
            <GeneratedCodeSection item={headerStylesAtom}/>
        </div>
    )
}
