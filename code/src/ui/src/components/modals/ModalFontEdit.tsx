import React, { useEffect, useState } from 'react'
import './Modals.css';
import '../../pages/WelcomePage.css'
import { DesignSystem, TypographyStyling } from 'a11y-theme-builder-sdk';
import { Alert, Button, FormControl, Grid, InputLabel, MenuItem, Select, Slider } from '@mui/material';
import { FontWeightsUtil } from '../../pages/atoms/typography/FontWeightsUtil'

const name = "ModalFontEdit";

interface Props {
    isOpen: any;
    onCancel: any;
    designSystem: DesignSystem;
    textKey: string;
    cssPrefix?: string;
    isHeader?: boolean;
}

const alertStyles = {width: 400, height: 100, marginTop: 1}
const fontNotCommonAlert = <Alert severity='warning' sx={alertStyles}>
    This font is not a common google font.
    <br/> Ensure you only use supported font weights to avoid any later errors.
</Alert>
const weightUnsupportedAlert = <Alert severity='warning' sx={{width: 300,  marginTop: 2}}>
    The font weight provided is not supported by the selected font.
</Alert>

const ModalFontEdit: React.FC<Props> = ({isOpen, onCancel, designSystem, textKey, cssPrefix, isHeader}) => {
    // console.log(`${name} - >>> enter()`);

    const typographyStyling = designSystem.getNode(textKey) as TypographyStyling;

    const fontFamilyProperty    = typographyStyling.fontFamily
    const fontSizeProperty      = typographyStyling.fontSize
    const fontWeightProperty    = typographyStyling.fontWeight
    const charSpacingProperty   = typographyStyling.characterSpacing

    const [fontFamily,  setFontFamily ] = useState<string>(""+(fontFamilyProperty.getValue() || "Discover Sans"));
    const [fontSize,    setFontSize   ] = useState<number>(fontSizeProperty.getValue()       || 16);
    const [fontWeight,  setFontWeight ] = useState<number>(fontWeightProperty.getValue()     || 400);
    const [charSpacing, setCharSpacing] = useState<number>(charSpacingProperty.getValue()    || 0);

    const [fontUncommon, setFontUncommon] = useState<boolean>(!FontWeightsUtil.isFontCommon(fontFamily))
    const [fontWeightWarningTriggered, setFontWeightWarningTriggered] = useState<boolean>(false)

    useEffect(() => {
        if (!FontWeightsUtil.isFontCommon(fontFamily)) {
            setFontUncommon(true)
            setFontWeightWarningTriggered(false)
            return
        }
        setFontUncommon(false)
        if (!FontWeightsUtil.isWeightSupported(fontFamily, fontWeight)) {
            setFontWeightWarningTriggered(true)
            return
        }
        setFontWeightWarningTriggered(false)
    }, [fontFamily])

    useEffect(() => {
        if (fontUncommon) {
            setFontWeightWarningTriggered(false)
            return
        }
        if (!FontWeightsUtil.isWeightSupported(fontFamily, fontWeight)) {
            setFontWeightWarningTriggered(true)
            return
        }
        setFontWeightWarningTriggered(false)
    }, [fontWeight])

    const cssFontFamily       = "var(--" + cssPrefix + "FontFamily)";
    const cssFontSize         = "var(--" + cssPrefix + "FontSize)";
    const cssFontWeight       = "var(--" + cssPrefix + "FontWeight)";
    const cssLineHeight       = "var(--" + cssPrefix + "LineHeight)";
    const cssCharacterSpacing = "var(--" + cssPrefix + "LetterSpacing)";

    const sampleStyle = {
        fontFamily: cssFontFamily,
        fontSize: cssFontSize,
        fontWeight: cssFontWeight,
        lineHeight: cssLineHeight,
        letterSpacing: cssCharacterSpacing,
        padding: "32px",
    }

    async function handleFontFamilyChanged(event: any): Promise<void> {
        const value = event.target.value;
        setFontFamily(value);
    }
    async function handleFontSizeChange(event: any): Promise<void> {
        const value = parseInt(event.target.value);
        setFontSize(value);
    }
    async function handleFontWeightChanged(event: any): Promise<void> {
        const value = parseInt(event.target.value);
        setFontWeight(value);
    }
    async function handleCharSpacingChange(event: any): Promise<void> {
        const value = parseInt(event.target.value);
        setCharSpacing(value);
    }

    function handleSave () {
        fontFamilyProperty.setValue(fontFamily)
        fontSizeProperty.setValue(fontSize)
        fontWeightProperty.setValue(fontWeight)
        charSpacingProperty.setValue(charSpacing)
        onCancel()
    }

    const renderFontFamilySelectables = () => {
        var r = [];
        var selectables = fontFamilyProperty.getSelectableValues();
        for (var i=0; i<selectables.length; i++) {
            const s = selectables[i].toString();
            r.push(<MenuItem key={s} value={s}> {s} </MenuItem>)
        }
        return (
            <FormControl sx={{ m: 2, minWidth: 350}}>
                <InputLabel id='fontFamilyLabel'>
                    {fontFamilyProperty.name}
                </InputLabel>
                <Select
                    label={fontFamilyProperty.name}
                    labelId='fontFamilyLabel'
                    value={fontFamily}
                    onChange={handleFontFamilyChanged}
                >
                    {r}
                </Select>
            </FormControl>
        )
    }
    const renderFontWeightSelectables = () => {
        var r = [];
        var selectables = fontWeightProperty.getSelectableValues();
        for (var i=0; i<selectables.length; i++) {
            const s = selectables[i].toString();
            r.push(<MenuItem key={s} value={s}> {s} </MenuItem>)
        }
        return (
            <FormControl sx={{m: 2, minWidth: 100}}>
                <InputLabel id='fontWeightLabel'>
                    {fontWeightProperty.name}
                </InputLabel>
                <Select
                    label={fontWeightProperty.name}
                    labelId='fontWeightLabel'
                    value={fontWeight}
                    onChange={handleFontWeightChanged}
                >
                    {r}
                </Select>
            </FormControl>
        )
    }    

    if (!isOpen || !designSystem || !typographyStyling || !textKey) return null;
    return (
        <>
            <div className="overlay"></div>
            <div className='modal modal-fontEdit'>
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title" >
                            Edit Typography Styling
                        </h3>
                    </div>
                    <div className="modal-body">
                        <div>
                            <div className="caption quiet">
                                Sample
                            </div>
                            <div style={sampleStyle}>
                                {typographyStyling.name}
                            </div>
                        </div>
                        <br/>
                        <form>
                            {renderFontFamilySelectables()}
                            {!fontUncommon
                            || fontNotCommonAlert}
                            { fontUncommon
                            || <Alert severity='info' sx={alertStyles}>
                                This font is a common google font. <br/> It has the supported font weights:<br/>
                                <b>{FontWeightsUtil.getFontWeights(fontFamily)?.join(", ")}</b>.
                            </Alert>}
                            <br/>
                            <FormControl sx={{m: 2, minWidth: 500}}>
                                <label className="label-1">
                                    Font Size:
                                </label>
                                <div className="caption">
                                    Percent of Base Font:&nbsp;<span>?</span>
                                </div>
                                <div className="caption">
                                    Size:&nbsp;<span>{fontSize}px</span>
                                </div>
                                <Slider
                                    value={fontSize}
                                    onChange={handleFontSizeChange}
                                    min={fontSizeProperty.min}
                                    max={fontSizeProperty.max}
                                />
                            </FormControl>
                            <br/>

                            <div className="form-row">
                                <Grid container spacing={3}>
                                    <Grid item xs={3}>
                                        {renderFontWeightSelectables()}
                                    </Grid>
                                    <Grid item xs={5}>
                                        {!fontWeightWarningTriggered || weightUnsupportedAlert}
                                    </Grid>
                                </Grid>
                            </div>
                            <br/>
                            <FormControl sx={{m: 2, minWidth: 500}}>
                                <label className="label-1">
                                    Character Spacing:
                                </label>
                                <div className="caption">
                                    Spacing: <span>{charSpacing}</span>
                                </div>
                                <Slider
                                    value={charSpacing}
                                    onChange={handleCharSpacingChange}
                                    min={charSpacingProperty.min}
                                    max={charSpacingProperty.max}
                                />
                                { isHeader || (charSpacing > (0.12*fontSize))
                                    || <Alert severity="error">
                                            WCAG AA guidelines require Line Height to be at least 0.12 times the font size. 
                                        </Alert> }
                            </FormControl>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <div className="button-area">
                            <Button onClick={onCancel}>Cancel</Button>
                            <Button onClick={handleSave} disabled={!isHeader && !(charSpacing > (0.12*fontSize))}>Save</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) 
}

export default ModalFontEdit;