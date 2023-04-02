/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import { Grid, Button } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import { DesignSystem, TypographyStyling } from 'a11y-theme-builder-sdk';
import ModalFontEdit from "./modals/ModalFontEdit";

const sampleBody = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna 
aliqua. Ut enim ad minim veniam, quis nostrud exercitation`

interface Props {
    designSystem: DesignSystem;
    textKey: string;
    isBody?: boolean;
    headerNo?: number;
    cssPrefix: string;
}

export const TextEditBox: React.FC<Props> = ({ designSystem, cssPrefix, textKey, isBody=false, headerNo=0 }) => {
    const [styles, setStyles] = useState<any>();
    const sampleRef = useRef(null);
    useEffect(() => {
        if (sampleRef.current) {
            setStyles(getComputedStyle(sampleRef.current));
        }
    }, [])

    const [fontEditIsOpen, setFontEditIsOpen] = useState(false);

    const typographyStyling = designSystem.getNode(textKey) as TypographyStyling;

    const fontFamily = "var(--" + cssPrefix + "FontFamily)";
    const fontSize = "var(--" + cssPrefix + "FontSize)";
    const fontWeight = "var(--" + cssPrefix + "FontWeight)";
    const lineHeight = "var(--" + cssPrefix + "LineHeight)";
    const letterSpacing = "var(--" + cssPrefix + "LetterSpacing)";

    const sampleStyle = {
        fontFamily: fontFamily,
        fontSize: fontSize,
        fontWeight: fontWeight,
        lineHeight: lineHeight,
        letterSpacing: letterSpacing,
    }

    if (!typographyStyling) return null;

    return (
        <>
            <ModalFontEdit
                isOpen={fontEditIsOpen}
                onCancel={ () => setFontEditIsOpen(false)}
                textKey={textKey}
                designSystem={designSystem}
                cssPrefix={cssPrefix}
                isHeader={!!headerNo}
            />
            <hr/>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    {!isBody && !headerNo && <div ref={sampleRef} style={sampleStyle}>
                        {typographyStyling.name}
                    </div>}
                    {isBody &&
                    <>
                        <div className="caption quiet">{typographyStyling.name}</div>
                        <div ref={sampleRef} style={sampleStyle}>
                            {sampleBody}
                        </div>
                    </>}
                    {(headerNo==7) &&
                    <h1 ref={sampleRef} style={sampleStyle}>
                            {typographyStyling.name}
                    </h1>}
                    {(headerNo==1) && <h1 ref={sampleRef} style={sampleStyle}>{typographyStyling.name}</h1>}
                    {(headerNo==2) && <h2 ref={sampleRef} style={sampleStyle}>{typographyStyling.name}</h2>}
                    {(headerNo==3) && <h3 ref={sampleRef} style={sampleStyle}>{typographyStyling.name}</h3>}
                    {(headerNo==4) && <h4 ref={sampleRef} style={sampleStyle}>{typographyStyling.name}</h4>}
                    {(headerNo==5) && <h5 ref={sampleRef} style={sampleStyle}>{typographyStyling.name}</h5>}
                    {(headerNo==6) && <h6 ref={sampleRef} style={sampleStyle}>{typographyStyling.name}</h6>}
                </Grid>
                <Grid item xs={5}>
                    <div className="label-1">
                        Styling
                    </div>
                    <ul className="styling caption quiet">
                        <li className="font-family">
                            font-family: <span>
                            {styles && styles.getPropertyValue("font-family")}
                            </span>
                        </li>
                        <li className="font-weight">
                            font-weight: <span>
                            {styles && styles.getPropertyValue("font-weight")}
                            </span>
                        </li>
                        <li className="font-size">
                            font-size: <span>
                            {styles && styles.getPropertyValue("font-size")}
                            </span>
                        </li>
                        <li className="font-line-height">
                            line-height: <span>
                            {styles && styles.getPropertyValue("line-height")}
                            </span>
                        </li>
                        <li className="font-character-spacing">
                            letter-spacing: <span>
                            {styles && styles.getPropertyValue("letter-spacing")}
                            </span>
                        </li>
                    </ul>
                    <Button onClick={() => setFontEditIsOpen(true)}>
                        Edit
                    </Button>
                </Grid>
            </Grid>
        </>
    );
}

export default TextEditBox;