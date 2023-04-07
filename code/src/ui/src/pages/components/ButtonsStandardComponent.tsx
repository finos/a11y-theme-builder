/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useState, useEffect } from 'react';
import { Button, IconButton, SvgIcon } from '@mui/material';
import { ColorModeSelector } from '../content/ColorModeSelector';
import { HeadingSection } from '../content/HeadingSection';
import { ExampleSection } from '../content/ExampleSection';

interface Props {
}

export const ButtonsStandardComponent: React.FC<Props> = () => {

    const [colorMode, setColorMode] = useState<string>("default");

    useEffect(() => {
        console.log("ButtonsStandardComponent mounted");
    }, [])

    function barGraphIcon(props?: any) {
        return (
              <i className="fa-solid fa-user"></i>
        )
    }

    return (
        <div>
            <HeadingSection heading="Standard Buttons" title="Desktop" />
            <ExampleSection>
            <ColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
                <div className="subtitle1">Primary</div>
                <div className="buttonDemo">
                    <Button className={colorMode} variant="contained">No Icon</Button>
                    <Button
                        className={colorMode}
                        variant="contained"
                        startIcon={barGraphIcon()}
                    >Left Icon</Button>
                    <Button
                        className={colorMode}
                        variant="contained"
                        endIcon={barGraphIcon()}
                    >Right Icon</Button>
                    <Button variant="contained" className={"icon " + colorMode}>{barGraphIcon()}</Button>
                </div>
                <div className="subtitle1">Secondary</div>
                <div className="buttonDemo">
                    <Button className={colorMode} variant="outlined">No Icon</Button>
                    <Button
                        className={colorMode}
                        variant="outlined"
                        startIcon={barGraphIcon()}
                    >Left Icon</Button>
                    <Button
                        className={colorMode}
                        variant="outlined"
                        endIcon={barGraphIcon()}
                    >Right Icon</Button>
                    <Button variant="outlined"  className={"icon " + colorMode} >{barGraphIcon()}</Button>
                </div>
                <div className="subtitle1">Tertiary</div>
                <div className="buttonDemo">
                    <Button className={colorMode} variant="text">No Icon</Button>
                    <Button
                        className={colorMode}
                        variant="text"
                        startIcon={barGraphIcon()}
                    >Left Icon</Button>
                    <Button
                        className={colorMode}
                        variant="text"
                        endIcon={barGraphIcon()}
                    >Right Icon</Button>
                    <Button variant="text"  className={"icon " + colorMode}>{barGraphIcon()}</Button>
                </div>
            </ColorModeSelector>
            </ExampleSection>
        </div>
    )
}
