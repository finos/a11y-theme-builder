/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useEffect, useState } from 'react';
import { Atoms, PropertyNumber } from '@finos/a11y-theme-builder-sdk';
import ModalFontHelp from '../../../components/modals/ModalFontHelp';
import { NumberProperty } from '../../../components/editors/NumberProperty';
import { ExampleSection } from '../../content/ExampleSection';
import { GeneratedCodeSection } from '../../content/GeneratedCodeSection';
import { SettingsSection } from '../../content/SettingsSection';
import { HeadingSection } from '../../content/HeadingSection';
import { Alert, FormControl, FormControlLabel, Grid, InputAdornment, InputLabel, MenuItem, Select, Switch, TextField } from '@mui/material';
import { FontWeightsUtil } from './FontWeightsUtil';
import { StringProperty } from '../../../components/editors/StringProperty';
import WebFont from "webfontloader";

const primaryFontDescription = "The primary font is used for the body and small font styles."
const secondaryFontDescription = "The secondary font is used for displays and headers."

interface Props {
    atoms: Atoms;
}

const textFieldWidth = 300
const textFieldMb = 3
const textFieldGridSpacing = 3
const textFieldGridWidth = 4
const alertGridWidth = 7
const allWeights = [100,200,300,400,500,600,700,800,900,1000]

const alertStyles = {width: 400, height: 100, margin: "24px 0"}
const fontNotCommonAlert = <Alert severity='warning' sx={alertStyles}>
    This font is not a common google font.
    <br/> Ensure you only use supported font weights to avoid any later errors.
</Alert>
const primaryWeightUnsupportedAlert = <Alert severity='warning' sx={{width: 450,  marginTop: 4}}>
    The font weight provided is not supported by the primary font.
</Alert>
const secondaryWeightUnsupportedAlert = <Alert severity='warning' sx={{width: 450,  marginTop: 4}}>
The font weight provided is not supported by  the secondary font.
</Alert>

export const FontSettingsAtom: React.FC<Props> = ({ atoms }) => {

    const [fontHelpIsOpen, setFontHelpIsOpen] = useState(false);

    const fontSettingsAtom = atoms.fontsSettings

    const primaryFontFamilyProperty     = fontSettingsAtom.primaryFont
    const secondaryFontFamilyProperty   = fontSettingsAtom.secondaryFont
    const fontWeight0Property           = fontSettingsAtom.fontWeights[0]
    const fontWeight1Property           = fontSettingsAtom.fontWeights[1]
    const fontWeight2Property           = fontSettingsAtom.fontWeights[2]
    const fontWeight3Property           = fontSettingsAtom.fontWeights[3]
    const fontWeight4Property           = fontSettingsAtom.fontWeights[4]
    const secondaryFontWeightProperty   = fontSettingsAtom.secondaryFontWeight
    const standardLineHeightProperty    = fontSettingsAtom.standardLineHeight
    const headerLineHeightProperty      = fontSettingsAtom.headerLineHeight
    const smallLineHeightProperty       = fontSettingsAtom.smallLineHeight

    const [primaryFont,         setPrimaryFont         ] = useState<string>((primaryFontFamilyProperty.getValue()   || "Open Sans"));
    const [secondaryFont,       setSecondaryFont       ] = useState<string>((secondaryFontFamilyProperty.getValue() || "Open Sans"));
    const [fontWeight0,         setFontWeight0         ] = useState<number>((fontWeight0Property.getValue()         || 300));
    const [fontWeight1,         setFontWeight1         ] = useState<number>((fontWeight1Property.getValue()         || 400));
    const [fontWeight2,         setFontWeight2         ] = useState<number>((fontWeight2Property.getValue()         || 600));
    const [fontWeight3,         setFontWeight3         ] = useState<number>((fontWeight3Property.getValue()         || 700));
    const [fontWeight4,         setFontWeight4         ] = useState<number>((fontWeight4Property.getValue()         || 800));
    const [secondaryFontWeight, setSecondaryFontWeight ] = useState<number>((secondaryFontWeightProperty.getValue() || 400));
    const [standardLineHeight,  setStandardLineHeight  ] = useState<number>((standardLineHeightProperty.getValue()  || 160));
    const [headerLineHeight,    setHeaderLineHeight    ] = useState<number>((headerLineHeightProperty.getValue()    || 150));
    const [smallLineHeight,     setSmallLineHeight     ] = useState<number>((smallLineHeightProperty.getValue()     || 110));

    const [standardLineHeightErrorTriggered,    setStandardLineHeightErrorTriggered    ] = useState<boolean>(false)
    const [primaryFontUncommon,                 setPrimaryFontUncommon                 ] = useState<boolean>(!FontWeightsUtil.isFontCommon(primaryFont))
    const [secondaryFontUncommon,               setSecondaryFontUncommon               ] = useState<boolean>(!FontWeightsUtil.isFontCommon(secondaryFont))
    const [fontWeight0WarningTriggered,         setFontWeight0WarningTriggered         ] = useState<boolean>(false)
    const [fontWeight1WarningTriggered,         setFontWeight1WarningTriggered         ] = useState<boolean>(false)
    const [fontWeight2WarningTriggered,         setFontWeight2WarningTriggered         ] = useState<boolean>(false)
    const [fontWeight3WarningTriggered,         setFontWeight3WarningTriggered         ] = useState<boolean>(false)
    const [fontWeight4WarningTriggered,         setFontWeight4WarningTriggered         ] = useState<boolean>(false)
    const [secondaryFontWeightWarningTriggered, setSecondaryFontWeightWarningTriggered ] = useState<boolean>(false)

    const [selectPrimaryFont, setSelectPrimaryFont    ] = useState<boolean>(true)
    const [selectSecondaryFont, setSelectSecondaryFont] = useState<boolean>(true)

    useEffect(() => {
        recheckWeights()
        // We dynamically load the fonts here:
        // NOTE: After a few loads, the Google API can give 400 errors.
        // The solution to the above is to ensure the first letter of each word of the font is capitalized.
        WebFont.load({
            google: {
            families: [primaryFont, secondaryFont],
            }
        });
        // TODO: Catch any errors with font loading and notify the user.
    }, [primaryFont, secondaryFont])


    const recheckWeights = () => {
        if (primaryFontUncommon) {
            setFontWeight0WarningTriggered(false)
            setFontWeight1WarningTriggered(false)
            setFontWeight2WarningTriggered(false)
            setFontWeight3WarningTriggered(false)
            setFontWeight4WarningTriggered(false)
        } else {
            if (!FontWeightsUtil.isWeightSupported(primaryFont, fontWeight0)) {
                setFontWeight0WarningTriggered(true)
            } else {
                setFontWeight0WarningTriggered(false)
            }
            if (!FontWeightsUtil.isWeightSupported(primaryFont, fontWeight1)) {
                setFontWeight1WarningTriggered(true)
            } else {
                setFontWeight1WarningTriggered(false)
            }
            if (!FontWeightsUtil.isWeightSupported(primaryFont, fontWeight2)) {
                setFontWeight2WarningTriggered(true)
            } else {
                setFontWeight2WarningTriggered(false)
            }
            if (!FontWeightsUtil.isWeightSupported(primaryFont, fontWeight3)) {
                setFontWeight3WarningTriggered(true)
            } else {
                setFontWeight3WarningTriggered(false)
            }
            if (!FontWeightsUtil.isWeightSupported(primaryFont, fontWeight4)) {
                setFontWeight4WarningTriggered(true)
            } else {
                setFontWeight4WarningTriggered(false)
            }
        }
        if (secondaryFontUncommon) {
            setSecondaryFontWeightWarningTriggered(false)
        } else {
            if (!FontWeightsUtil.isWeightSupported(secondaryFont, secondaryFontWeight)) {
                setSecondaryFontWeightWarningTriggered(true)
            } else {
                setSecondaryFontWeightWarningTriggered(false)
            }
        }
    }

    const renderFontWeightSelectables = (fontWeightProperty: PropertyNumber, fontWeight: number, handleFontWeightChange: any, weightNum: string, isSecondary?: boolean) => {
        var r = [];
        var selectables = primaryFontUncommon ? allWeights : FontWeightsUtil.getFontWeights(primaryFont);
        if (isSecondary) selectables = secondaryFontUncommon ? allWeights : FontWeightsUtil.getFontWeights(secondaryFont);
        if (!selectables) return;
        for (var i=0; i<selectables.length; i++) {
            const s = selectables[i].toString();
            r.push(<MenuItem key={s} value={s}> {s} </MenuItem>)
        }
        return (
            <FormControl sx={{m: 2, minWidth: 120}}>
                <Select label={fontWeightProperty.name} labelId={`fontWeight${weightNum}Label`} value={fontWeight} onChange={handleFontWeightChange}>{r}</Select>
            </FormControl>
        )
    }

    async function handlePrimaryFontChange(event: any): Promise<void> {
        const value = event.target.value;
        setPrimaryFont(value);
        primaryFontFamilyProperty.setValue(value);

        // Update all Body and Small Text Styles Fonts:
        atoms.bodyStyles.body1.fontFamily.setValue                  (value ? value : undefined)
        atoms.bodyStyles.body1Bold.fontFamily.setValue              (value ? value : undefined)
        atoms.bodyStyles.body2.fontFamily.setValue                  (value ? value : undefined)
        atoms.bodyStyles.body2Bold.fontFamily.setValue              (value ? value : undefined)
        atoms.bodyStyles.body3.fontFamily.setValue                  (value ? value : undefined)
        atoms.bodyStyles.body3Bold.fontFamily.setValue              (value ? value : undefined)
        atoms.smallTextStyles.subtitle1.fontFamily.setValue         (value ? value : undefined)
        atoms.smallTextStyles.subtitle2.fontFamily.setValue         (value ? value : undefined)
        atoms.smallTextStyles.caption.fontFamily.setValue           (value ? value : undefined)
        atoms.smallTextStyles.captionBold.fontFamily.setValue       (value ? value : undefined)
        atoms.smallTextStyles.overline.fontFamily.setValue          (value ? value : undefined)
        atoms.smallTextStyles.overlineLarge.fontFamily.setValue     (value ? value : undefined)
        atoms.smallTextStyles.overlineExtraLarge.fontFamily.setValue(value ? value : undefined)
        atoms.smallTextStyles.label1.fontFamily.setValue            (value ? value : undefined)
        atoms.smallTextStyles.label1AllCaps.fontFamily.setValue     (value ? value : undefined)
        atoms.smallTextStyles.label2.fontFamily.setValue            (value ? value : undefined)
        atoms.smallTextStyles.label2AllCaps.fontFamily.setValue     (value ? value : undefined)
        atoms.smallTextStyles.labelSmall.fontFamily.setValue        (value ? value : undefined)
        atoms.smallTextStyles.callToAction.fontFamily.setValue      (value ? value : undefined)
        atoms.smallTextStyles.callToActionSmall.fontFamily.setValue (value ? value : undefined)
        atoms.smallTextStyles.small.fontFamily.setValue             (value ? value : undefined)
        atoms.smallTextStyles.smallSemibold.fontFamily.setValue     (value ? value : undefined)
        atoms.statStyles.stat.fontFamily.setValue                   (value ? value : undefined)

        if (FontWeightsUtil.isFontCommon(value)) {
            setPrimaryFontUncommon(false)
        } else {
            setPrimaryFontUncommon(true)
        }
    }
    async function handleSecondaryFontChange(event: any): Promise<void> {
        const value = event.target.value;
        setSecondaryFont(value);
        secondaryFontFamilyProperty.setValue(value);

        // Update all Display and Header Fonts:
        atoms.displayAndHeaderStyles.headerStyles[0].fontFamily.setValue (value ? value : undefined)
        atoms.displayAndHeaderStyles.headerStyles[1].fontFamily.setValue (value ? value : undefined)
        atoms.displayAndHeaderStyles.headerStyles[2].fontFamily.setValue (value ? value : undefined)
        atoms.displayAndHeaderStyles.headerStyles[3].fontFamily.setValue (value ? value : undefined)
        atoms.displayAndHeaderStyles.headerStyles[4].fontFamily.setValue (value ? value : undefined)
        atoms.displayAndHeaderStyles.headerStyles[5].fontFamily.setValue (value ? value : undefined)
        atoms.displayAndHeaderStyles.displayStyles[0].fontFamily.setValue(value ? value : undefined)
        atoms.displayAndHeaderStyles.displayStyles[1].fontFamily.setValue(value ? value : undefined)

        if (FontWeightsUtil.isFontCommon(value)) {
            setSecondaryFontUncommon(false)
        } else {
            setSecondaryFontUncommon(true)
        }
    }

    const renderPrimaryCommonFontSelectables = () => {
        var r = [];
        const commonFontsList = FontWeightsUtil.listCommonFonts()
        for (var i=0; i<commonFontsList.length; i++) {
            const s = commonFontsList[i].toString();
            r.push(<MenuItem key={s} value={s}> {s} </MenuItem>)
        }

        return (
            <FormControl sx={{m: textFieldMb, minWidth: textFieldWidth}}>
                <div id="primaryFontLabel" className='subtitle'><b>{primaryFontFamilyProperty.name}</b></div>
                <div id="primaryFontDescription" className='body1' style={{fontWeight:"normal"}}>{primaryFontDescription}</div>
                <Select id="primaryFontSelect" labelId="primaryFontLabel" aria-describedby="primaryFontDescription" value={primaryFont} onChange={handlePrimaryFontChange}>
                    {r}
                </Select>
            </FormControl>
        )
    }
    const renderSecondaryCommonFontSelectables = () => {
        var r = [];
        const commonFontsList = FontWeightsUtil.listCommonFonts()
        for (var i=0; i<commonFontsList.length; i++) {
            const s = commonFontsList[i].toString();
            r.push(<MenuItem key={s} value={s}> {s} </MenuItem>)
        }

        return (
            <FormControl sx={{m: textFieldMb, minWidth: textFieldWidth}}>
                <div id="secondaryFontLabel" className='subtitle'><b>{secondaryFontFamilyProperty.name}</b></div>
                <div id="secondaryFontDescription" className='body1' style={{fontWeight:"normal"}}>{secondaryFontDescription}</div>
                <Select id="secondaryFontSelect" labelId="secondaryFontLabel" aria-describedby="secondaryFontDescription" value={secondaryFont} onChange={handleSecondaryFontChange}>
                    {r}
                </Select>
            </FormControl>
        )
    }
    async function handleFontWeight0Change(event: any): Promise<void> {
        const value = parseInt(event.target.value);
        setFontWeight0(value)
        fontSettingsAtom.fontWeights[0].setValue(value)
        atoms.smallTextStyles.caption.fontWeight.setValue(value ? value : undefined)
        atoms.smallTextStyles.callToAction.fontWeight.setValue(value ? value : undefined)
        atoms.smallTextStyles.callToActionSmall.fontWeight.setValue(value ? value : undefined)
        atoms.smallTextStyles.small.fontWeight.setValue(value ? value : undefined)
        if (primaryFontUncommon) {
            setFontWeight0WarningTriggered(false)
            return
        }
        if (!FontWeightsUtil.isWeightSupported(primaryFont, value)) {
            setFontWeight0WarningTriggered(true)
            return
        }
        setFontWeight0WarningTriggered(false)
    }
    async function handleFontWeight1Change(event: any): Promise<void> {
        const value = parseInt(event.target.value);
        setFontWeight1(value)
        fontSettingsAtom.fontWeights[1].setValue(value)
        atoms.bodyStyles.body1.fontWeight.setValue(value ? value : undefined)
        atoms.bodyStyles.body2.fontWeight.setValue(value ? value : undefined)
        atoms.bodyStyles.body3.fontWeight.setValue(value ? value : undefined)
        if (primaryFontUncommon) {
            setFontWeight1WarningTriggered(false)
            return
        }
        if (!FontWeightsUtil.isWeightSupported(primaryFont, value)) {
            setFontWeight1WarningTriggered(true)
            return
        }
        setFontWeight1WarningTriggered(false)
    }
    async function handleFontWeight2Change(event: any): Promise<void> {
        const value = parseInt(event.target.value);
        setFontWeight2(value)
        fontSettingsAtom.fontWeights[2].setValue(value)
        atoms.smallTextStyles.subtitle1.fontWeight.setValue(value ? value : undefined)
        atoms.smallTextStyles.subtitle2.fontWeight.setValue(value ? value : undefined)
        atoms.smallTextStyles.captionBold.fontWeight.setValue(value ? value : undefined)
        atoms.smallTextStyles.overline.fontWeight.setValue(value ? value : undefined)
        atoms.smallTextStyles.overlineLarge.fontWeight.setValue(value ? value : undefined)
        atoms.smallTextStyles.overlineExtraLarge.fontWeight.setValue(value ? value : undefined)
        atoms.smallTextStyles.label1.fontWeight.setValue(value ? value : undefined)
        atoms.smallTextStyles.label1AllCaps.fontWeight.setValue(value ? value : undefined)
        atoms.smallTextStyles.label2.fontWeight.setValue(value ? value : undefined)
        atoms.smallTextStyles.label2AllCaps.fontWeight.setValue(value ? value : undefined)
        atoms.smallTextStyles.labelSmall.fontWeight.setValue(value ? value : undefined)
        atoms.smallTextStyles.smallSemibold.fontWeight.setValue(value ? value : undefined)
        if (primaryFontUncommon) {
            setFontWeight2WarningTriggered(false)
            return
        }
        if (!FontWeightsUtil.isWeightSupported(primaryFont, value)) {
            setFontWeight2WarningTriggered(true)
            return
        }
        setFontWeight2WarningTriggered(false)
    }
    async function handleFontWeight3Change(event: any): Promise<void> {
        const value = parseInt(event.target.value);
        setFontWeight3(value)
        fontSettingsAtom.fontWeights[3].setValue(value)
        atoms.bodyStyles.body1Bold.fontWeight.setValue(value ? value : undefined)
        atoms.bodyStyles.body2Bold.fontWeight.setValue(value ? value : undefined)
        atoms.bodyStyles.body3Bold.fontWeight.setValue(value ? value : undefined)
        if (primaryFontUncommon) {
            setFontWeight3WarningTriggered(false)
            return
        }
        if (!FontWeightsUtil.isWeightSupported(primaryFont, value)) {
            setFontWeight3WarningTriggered(true)
            return
        }
        setFontWeight3WarningTriggered(false)
    }
    async function handleFontWeight4Change(event: any): Promise<void> {
        const value = parseInt(event.target.value);
        setFontWeight4(value)
        fontSettingsAtom.fontWeights[4].setValue(value)
        atoms.statStyles.stat.fontWeight.setValue(value ? value : undefined)
        if (primaryFontUncommon) {
            setFontWeight4WarningTriggered(false)
            return
        }
        if (!FontWeightsUtil.isWeightSupported(primaryFont, value)) {
            setFontWeight4WarningTriggered(true)
            return
        }
        setFontWeight4WarningTriggered(false)
    }
    async function handleSecondaryFontWeightChange(event: any): Promise<void> {
        const value = parseInt(event.target.value);
        setSecondaryFontWeight(value)
        fontSettingsAtom.secondaryFontWeight.setValue(value)
        atoms.displayAndHeaderStyles.headingDisplayFontWeight.setValue(value ? value : undefined)
        atoms.displayAndHeaderStyles.displayStyles[0].fontWeight.setValue(value ? value : undefined)
        atoms.displayAndHeaderStyles.displayStyles[1].fontWeight.setValue(value ? value : undefined)
        atoms.displayAndHeaderStyles.headerStyles[0].fontWeight.setValue(value ? value : undefined)
        atoms.displayAndHeaderStyles.headerStyles[1].fontWeight.setValue(value ? value : undefined)
        atoms.displayAndHeaderStyles.headerStyles[2].fontWeight.setValue(value ? value : undefined)
        atoms.displayAndHeaderStyles.headerStyles[3].fontWeight.setValue(value ? value : undefined)
        atoms.displayAndHeaderStyles.headerStyles[4].fontWeight.setValue(value ? value : undefined)
        atoms.displayAndHeaderStyles.headerStyles[5].fontWeight.setValue(value ? value : undefined)
        if (secondaryFontUncommon) {
            setSecondaryFontWeightWarningTriggered(false)
            return
        }
        if (!FontWeightsUtil.isWeightSupported(secondaryFont, value)) {
            setSecondaryFontWeightWarningTriggered(true)
            return
        }
        setSecondaryFontWeightWarningTriggered(false)
    }
    async function handleStandardLineHeightChange(event: any): Promise<void> {
        const value = parseInt(event.target.value);
        setStandardLineHeight(value)
        if (value < 150) {
            setStandardLineHeightErrorTriggered(true);
            return;
        }
        setStandardLineHeightErrorTriggered(false);
        fontSettingsAtom.headerLineHeight.setValue    (value ? value : undefined)
        atoms.bodyStyles.body1.lineHeight.setValue    (value ? value : undefined)
        atoms.bodyStyles.body1Bold.lineHeight.setValue(value ? value : undefined)
        atoms.bodyStyles.body2.lineHeight.setValue    (value ? value : undefined)
        atoms.bodyStyles.body2Bold.lineHeight.setValue(value ? value : undefined)
        atoms.bodyStyles.body3.lineHeight.setValue    (value ? value : undefined)
        atoms.bodyStyles.body3Bold.lineHeight.setValue(value ? value : undefined)
    }
    async function handleHeaderLineHeightChange(event: any): Promise<void> {
        const value = parseInt(event.target.value);
        setHeaderLineHeight(value)
        fontSettingsAtom.headerLineHeight.setValue(value ? value : undefined)
        atoms.displayAndHeaderStyles.headerStyles[0].lineHeight.setValue (value ? value : undefined)
        atoms.displayAndHeaderStyles.headerStyles[1].lineHeight.setValue (value ? value : undefined)
        atoms.displayAndHeaderStyles.headerStyles[2].lineHeight.setValue (value ? value : undefined)
        atoms.displayAndHeaderStyles.headerStyles[3].lineHeight.setValue (value ? value : undefined)
        atoms.displayAndHeaderStyles.headerStyles[4].lineHeight.setValue (value ? value : undefined)
        atoms.displayAndHeaderStyles.headerStyles[5].lineHeight.setValue (value ? value : undefined)
        atoms.displayAndHeaderStyles.displayStyles[0].lineHeight.setValue(value ? value : undefined)
        atoms.displayAndHeaderStyles.displayStyles[1].lineHeight.setValue(value ? value : undefined)
    }
    async function handleSmallLineHeightChange(event: any): Promise<void> {
        const value = parseInt(event.target.value);
        setSmallLineHeight(value)
        fontSettingsAtom.smallLineHeight.setValue                  (value ? value : undefined)
        atoms.smallTextStyles.subtitle1.lineHeight.setValue         (value ? value : undefined)
        atoms.smallTextStyles.subtitle2.lineHeight.setValue         (value ? value : undefined)
        atoms.smallTextStyles.caption.lineHeight.setValue           (value ? value : undefined)
        atoms.smallTextStyles.captionBold.lineHeight.setValue       (value ? value : undefined)
        atoms.smallTextStyles.overline.lineHeight.setValue          (value ? value : undefined)
        atoms.smallTextStyles.overlineLarge.lineHeight.setValue     (value ? value : undefined)
        atoms.smallTextStyles.overlineExtraLarge.lineHeight.setValue(value ? value : undefined)
        atoms.smallTextStyles.label1.lineHeight.setValue            (value ? value : undefined)
        atoms.smallTextStyles.label1AllCaps.lineHeight.setValue     (value ? value : undefined)
        atoms.smallTextStyles.label2.lineHeight.setValue            (value ? value : undefined)
        atoms.smallTextStyles.label2AllCaps.lineHeight.setValue     (value ? value : undefined)
        atoms.smallTextStyles.labelSmall.lineHeight.setValue        (value ? value : undefined)
        atoms.smallTextStyles.callToAction.lineHeight.setValue      (value ? value : undefined)
        atoms.smallTextStyles.callToActionSmall.lineHeight.setValue (value ? value : undefined)
        atoms.smallTextStyles.small.lineHeight.setValue             (value ? value : undefined)
        atoms.smallTextStyles.smallSemibold.lineHeight.setValue     (value ? value : undefined)
        atoms.statStyles.stat.lineHeight.setValue                   (value ? value : undefined)
    }

    return (
        <>
            <HeadingSection item={fontSettingsAtom} title="Typography">
                    The Font Settings Atom includes:
                    <ul>
                        <li>Primary and Secondary Font</li>
                        <li>5 different font weights (0-4)</li>
                        <li>3 different Line Heights (Standard, Header, Small)</li>
                    </ul>
            </HeadingSection>

            <ExampleSection>
                <div style={{fontFamily: primaryFontFamilyProperty.getValue()}}>
                    <b>The Primary Font is {primaryFontFamilyProperty.getValue()}.</b>
                    <div style={{padding:"10px"}}>
                        abcdefghijklmnopqrstuvwxyz<br/>
                        ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
                        0123456789
                    </div>
                </div>
                <div className="top40" />
                <div style={{fontFamily: secondaryFontFamilyProperty.getValue()}}>
                    <b>The Secondary Font is {secondaryFontFamilyProperty.getValue()}.</b>
                    <div style={{padding:"10px"}}>
                        abcdefghijklmnopqrstuvwxyz<br/>
                        ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
                        0123456789
                    </div>
                </div>
                <SettingsSection>
                    <Grid container spacing={2} columns={12} margin={2}>

                        <Grid lg={4} md={12} sm={12}>
                            <div>
                                <div className="subtitle1">Not seeing your font in Figma?</div>
                                <p>Take these steps to render your selected fonts in Figma.</p>
                                <ul>
                                    <li>Download and install your font on your local system.</li>
                                    <li>Upload font to &nbsp;
                                        <a
                                            href="https://help.figma.com/hc/en-us/articles/360039956774-Upload-custom-fonts-to-an-organization"
                                            target="new"
                                        >oranization's Figma account.</a>
                                    </li>
                                    <li>
                                        Make sure you only reference the available font weights.&nbsp;
                                        <a onClick={() => setFontHelpIsOpen(true)} >
                                            Need help?
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <h4>Font Families</h4>
                            <div>
                                <FormControlLabel
                                    control={<Switch checked={selectPrimaryFont} onChange={() => setSelectPrimaryFont(!selectPrimaryFont)} />}
                                    label="Select Primary Font"
                                    labelPlacement="start"
                                />
                                <br />
                                {!selectPrimaryFont || renderPrimaryCommonFontSelectables()}
                                {selectPrimaryFont ||
                                <StringProperty
                                    property={primaryFontFamilyProperty}
                                    description={primaryFontDescription}
                                    onChange={handlePrimaryFontChange}
                                />}

                                {!primaryFontUncommon
                                || fontNotCommonAlert}
                                {primaryFontUncommon
                                || <Alert severity='info' sx={alertStyles}>
                                    This font is a common google font. <br/> It has the supported font weights:<br/>
                                    <b>{FontWeightsUtil.getFontWeights(primaryFont)?.join(", ")+"."}</b>
                                </Alert>}
                            </div>
                        </Grid>
                    </Grid>
                    <FormControlLabel
                        control={<Switch checked={selectSecondaryFont} onChange={() => setSelectSecondaryFont(!selectSecondaryFont)} />}
                        label="Select Secondary Font"
                        labelPlacement="start"
                    />
                    <br />
                    {!selectSecondaryFont || renderSecondaryCommonFontSelectables()}
                    {selectSecondaryFont ||
                    <StringProperty
                        property={secondaryFontFamilyProperty}
                        description={secondaryFontDescription}
                        onChange={handleSecondaryFontChange}
                    />}
                    {!secondaryFontUncommon
                    || fontNotCommonAlert}
                    {secondaryFontUncommon
                    || <Alert severity='info' sx={alertStyles}>
                        This font is a common google font. <br/> It has the supported font weights:<br/>
                        <b>{FontWeightsUtil.getFontWeights(secondaryFont)?.join(", ")+"."}</b>
                    </Alert>}

                    <h4>Font Sizes</h4>
                    <div className="form-row">
                        <NumberProperty property={fontSettingsAtom.baseFontSize} defaultValue={16} units="px"
                            description={"All typography is multiplied from the base font size."} />
                    </div>
                    <h4>Font Weights</h4>
                    <h6>Primary</h6>
                    <div className="form-row">
                        <Grid container spacing={textFieldGridSpacing}>
                            <Grid item xs={textFieldGridWidth}>
                                <InputLabel htmlFor="fontWeight0TextField" id="fontWeight0Label">{fontWeight0Property.name}</InputLabel>
                                <div style={{fontWeight:"normal"}}>For decorative and non critical text.</div>
                                {renderFontWeightSelectables(fontWeight0Property, fontWeight0, handleFontWeight0Change, "0")}
                            </Grid>
                            <Grid item xs={alertGridWidth}>
                                {!fontWeight0WarningTriggered || primaryWeightUnsupportedAlert}
                            </Grid>
                        </Grid>
                    </div>
                    <div className="form-row">
                        <Grid container spacing={textFieldGridSpacing}>
                            <Grid item xs={textFieldGridWidth}>
                                <InputLabel htmlFor="fontWeight1TextField" id="fontWeight1Label">{fontWeight1Property.name}</InputLabel>
                                <div style={{fontWeight:"normal"}}>For standard body text.</div>
                                {renderFontWeightSelectables(fontWeight1Property, fontWeight1, handleFontWeight1Change, "1")}
                            </Grid>
                            <Grid item xs={alertGridWidth}>
                                {!fontWeight1WarningTriggered || primaryWeightUnsupportedAlert}
                            </Grid>
                        </Grid>
                    </div>
                    <div className="form-row">
                        <Grid container spacing={textFieldGridSpacing}>
                            <Grid item xs={textFieldGridWidth}>
                                <InputLabel htmlFor="fontWeight2TextField" id="fontWeight2Label">{fontWeight2Property.name}</InputLabel>
                                <div style={{fontWeight:"normal"}}>For labels.</div>
                                {renderFontWeightSelectables(fontWeight2Property, fontWeight2, handleFontWeight2Change, "2")}
                            </Grid>
                            <Grid item xs={alertGridWidth}>
                                {!fontWeight2WarningTriggered || primaryWeightUnsupportedAlert}
                            </Grid>
                        </Grid>
                    </div>
                    <div className="form-row">
                        <Grid container spacing={textFieldGridSpacing}>
                            <Grid item xs={textFieldGridWidth}>
                                <InputLabel htmlFor="fontWeight3TextField" id="fontWeight3Label">{fontWeight3Property.name}</InputLabel>
                                <div style={{fontWeight:"normal"}}>For emphasized text.</div>
                                {renderFontWeightSelectables(fontWeight3Property, fontWeight3, handleFontWeight3Change, "3")}
                            </Grid>
                            <Grid item xs={alertGridWidth}>
                                {!fontWeight3WarningTriggered || primaryWeightUnsupportedAlert}
                            </Grid>
                        </Grid>
                    </div>
                    <div className="form-row">
                        <Grid container spacing={textFieldGridSpacing}>
                            <Grid item xs={textFieldGridWidth}>
                                <InputLabel htmlFor="fontWeight4TextField" id="fontWeight4Label">{fontWeight4Property.name}</InputLabel>
                                <div style={{fontWeight:"normal"}}>Used sparingly on text of great importance such as stats.</div>
                                {renderFontWeightSelectables(fontWeight4Property, fontWeight4, handleFontWeight4Change, "4")}
                            </Grid>
                            <Grid item xs={alertGridWidth}>
                                {!fontWeight4WarningTriggered || primaryWeightUnsupportedAlert}
                            </Grid>
                        </Grid>
                    </div>
                    <h6>Secondary</h6>
                    <div className="form-row">
                        <Grid container spacing={textFieldGridSpacing}>
                            <Grid item xs={textFieldGridWidth}>
                                <InputLabel htmlFor="fontWeight5TextField" id="fontWeight5Label">{secondaryFontWeightProperty.name}</InputLabel>
                                <div style={{fontWeight:"normal"}}>For displays and headers.</div>
                                {renderFontWeightSelectables(secondaryFontWeightProperty, secondaryFontWeight, handleSecondaryFontWeightChange, "5", true)}
                            </Grid>
                            <Grid item xs={alertGridWidth}>
                                {!secondaryFontWeightWarningTriggered || secondaryWeightUnsupportedAlert}
                            </Grid>
                        </Grid>
                    </div>
                    <ModalFontHelp isOpen={fontHelpIsOpen} onClose={() => setFontHelpIsOpen(false)} />
                    <h4>Line heights</h4>
                    <div className="form-row">
                        <Grid container spacing={textFieldGridSpacing}>
                            <Grid item xs={textFieldGridWidth}>
                                <InputLabel htmlFor="standardLineHeightTextField" id="standardLineHeightLabel">{standardLineHeightProperty.name}</InputLabel>
                                <TextField
                                    id="standardLineHeightTextField"
                                    InputProps={{endAdornment: <InputAdornment position="end">{"%"}</InputAdornment>}}
                                    value={isNaN(standardLineHeight) ? "" : ""+standardLineHeight }
                                    error={standardLineHeightErrorTriggered}
                                    // helperText={standardLineHeightErrorTriggered ? "Standard Line Height must be at least 150%" : ""}
                                    onChange={handleStandardLineHeightChange}
                                    sx={{width:textFieldWidth}}
                                />
                                </Grid>
                                <Grid item xs={alertGridWidth}>
                                    {!standardLineHeightErrorTriggered
                                    || <Alert variant='filled' severity='error' sx={{width: 500, padding: 3}}>
                                    <b>Standard Line Height must be at least 150%!</b>
                                </Alert>}
                            </Grid>
                        </Grid>
                    </div>
                    <div className="form-row">
                        <InputLabel htmlFor="headerLineHeightTextField" id="headerLineHeightLabel">{headerLineHeightProperty.name}</InputLabel>
                        <TextField
                            id="headerLineHeightTextField"
                            InputProps={{endAdornment: <InputAdornment position="end">{"%"}</InputAdornment>}}
                            value={isNaN(headerLineHeight) ? "" : ""+headerLineHeight }
                            onChange={handleHeaderLineHeightChange}
                            sx={{width:textFieldWidth}}
                        />
                    </div>
                    <div className="form-row">
                        <InputLabel htmlFor="smallLineHeightTextField" id="smallLineHeightLabel">{smallLineHeightProperty.name}</InputLabel>
                        <TextField
                            id="smallLineHeightTextField"
                            InputProps={{endAdornment: <InputAdornment position="end">{"%"}</InputAdornment>}}
                            value={isNaN(smallLineHeight) ? "" : ""+smallLineHeight }
                            onChange={handleSmallLineHeightChange}
                            sx={{width:textFieldWidth}}
                        />
                    </div>
                </SettingsSection>
                <GeneratedCodeSection item={fontSettingsAtom} />
            </ExampleSection>
        </>
    )
}
