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

    const [colorMode, setColorMode] = useState<string>("primary");

    useEffect(() => {
        console.log("ButtonsStandardComponent mounted");
    }, [])

    function barGraphIcon(props?: any) {
        return (
            <div className="inline-icon">
              <i className="fa-solid fa-user"></i>
            </div>  

        )
    }

    return (
        <div>
            <HeadingSection heading="Standard Buttons" title="Desktop" />
            <ExampleSection>
            <ColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
                <div className="subtitle1">Primary</div>
                <div className="buttonDemo">
                    <Button className="CTA" variant="contained">No Icon</Button>
                    <Button
                        className="CTA"
                        variant="contained"
                        startIcon={barGraphIcon()}
                    >Left Icon</Button>
                    <Button
                        className="CTA"
                        variant="contained"
                        endIcon={barGraphIcon()}
                    >Right Icon</Button>
                    <Button variant="contained" className="icon">{barGraphIcon()}</Button>
                </div>
                <div className="subtitle1">Secondary</div>
                <div className="buttonDemo">
                    <Button variant="outlined">No Icon</Button>
                    <Button
                        variant="outlined"
                        startIcon={barGraphIcon()}
                    >Left Icon</Button>
                    <Button
                        variant="outlined"
                        endIcon={barGraphIcon()}
                    >Right Icon</Button>
                    <Button variant="outlined" className="icon" >{barGraphIcon()}</Button>
                </div>
                <div className="subtitle1">Tertiary</div>
                <div className="buttonDemo">
                    <Button className="CTA" variant="text">No Icon</Button>
                    <Button
                        variant="text"
                        startIcon={barGraphIcon()}
                    >Left Icon</Button>
                    <Button
                        variant="text"
                        endIcon={barGraphIcon()}
                    >Right Icon</Button>
                    <Button variant="text" className="icon">{barGraphIcon()}</Button>
                </div>
            </ColorModeSelector>
            </ExampleSection>
        </div>
    )
}
