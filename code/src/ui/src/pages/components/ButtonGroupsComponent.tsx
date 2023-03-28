import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup, SvgIcon } from '@mui/material';
import { ColorModeSelector } from '../content/ColorModeSelector';
import { HeadingSection } from '../content/HeadingSection';

interface Props {
}

export const ButtonGroupsComponent: React.FC<Props> = ({}) => {

    const [colorMode, setColorMode] = useState<string>("primary");

    useEffect(() => {
        console.log("ButtonsStandardComponent mounted");
    }, [])

    function barGraphIcon(props?: any) {
        return (
            <SvgIcon {...props}>
                <path d="M2 13H8V21H2V13ZM16 8H22V21H16V8ZM9 3H15V21H9V3ZM4 15V19H6V15H4ZM11 5V19H13V5H11ZM18 10V19H20V10H18Z" />
            </SvgIcon>
        )
    }

    const renderButtonGroup = (title: string, orientation: "horizontal"|"vertical", variant: "contained"|"outlined"|"text") => {
        return (
            <div className="row">
                <div className="col-12">
                    <div className="subtitle1">{title}</div>
                    <div className="buttonDemo">
                        <ButtonGroup orientation={orientation} variant={variant}>
                            <Button className="CTA">No Icon</Button>
                            <Button className="CTA" startIcon={barGraphIcon()}>Left Icon</Button>
                            <Button className="CTA" endIcon={barGraphIcon()}>Right Icon</Button>
                            <Button className="CTA">{barGraphIcon()}</Button>
                        </ButtonGroup>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="content">
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <HeadingSection heading="Button Groups" title="Buttons" />
                            <ColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
                                <div className="caption" style={{margin: "16px 0px"}}>Horizontal Groups</div>
                                {renderButtonGroup("primary", "horizontal", "contained")}
                                {renderButtonGroup("secondary", "horizontal", "outlined")}
                                {renderButtonGroup("tertiary", "horizontal", "text")}

                                <div className="caption" style={{margin: "16px 0px"}}>Vertical Groups</div>
                                {renderButtonGroup("primary", "vertical", "contained")}
                                {renderButtonGroup("secondary", "vertical", "outlined")}
                                {renderButtonGroup("tertiary", "vertical", "text")}
                            </ColorModeSelector>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
