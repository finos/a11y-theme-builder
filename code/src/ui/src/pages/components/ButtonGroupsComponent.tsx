/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup, SvgIcon } from '@mui/material';
import { ColorModeSelector } from '../content/ColorModeSelector';
import { HeadingSection } from '../content/HeadingSection';
import { ExampleSection } from '../content/ExampleSection';

interface Props {
}

export const ButtonGroupsComponent: React.FC<Props> = ({ }) => {

    const [colorMode, setColorMode] = useState<string>("default");

    useEffect(() => {
        console.log("ButtonsStandardComponent mounted");
    }, [])

    function barGraphIcon(props?: any) {
        return (
            <div className="inline-icon">
              <i className="fa-solid fa-chart-simple"></i>
            </div>
        )
    }

    const renderButtonGroup = (title: string, orientation: "horizontal" | "vertical", variant: "contained" | "outlined" | "text") => {
        return (
            <div className="row">
                <div className="col-12">
                    <div className="subtitle1">{title}</div>
                    <div className="buttonDemo">
                        <ButtonGroup orientation={orientation} variant={variant}>
                            <Button className={"CTA " + colorMode}>No Icon</Button>
                            <Button className={"CTA " + colorMode} startIcon={barGraphIcon()}>Left Icon</Button>
                            <Button className={"CTA " + colorMode} endIcon={barGraphIcon()}>Right Icon</Button>
                            <Button className={"CTA " + colorMode}>{barGraphIcon()}</Button>
                        </ButtonGroup>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <HeadingSection heading="Button Groups" title="Desktop" />
            <ExampleSection>
                <ColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
                    <h6>Horizontal Groups</h6>
                    {renderButtonGroup("primary", "horizontal", "contained")}
                    {renderButtonGroup("secondary", "horizontal", "outlined")}
                    {renderButtonGroup("tertiary", "horizontal", "text")}

                    <h6>Vertical Groups</h6>
                    {renderButtonGroup("primary", "vertical", "contained")}
                    {renderButtonGroup("secondary", "vertical", "outlined")}
                    {renderButtonGroup("tertiary", "vertical", "text")}
                </ColorModeSelector>
            </ExampleSection>
        </div>
    )
}
