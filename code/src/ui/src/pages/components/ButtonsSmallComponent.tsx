/**
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import { HeadingSection } from '../content/HeadingSection';
import { ExampleSection } from '../content/ExampleSection';

interface Props {}

export const ButtonsSmallComponent: React.FC<Props> = () => {

    useEffect(() => {
        console.log('ButtonsSmallComponent mounted');
    }, []);

    function barGraphIcon(props?: any) {
        return <i className="fa-solid fa-chart-simple"></i>;
    }

    return (
        <div>
            <HeadingSection heading="Small Buttons" title="Desktop">
                This button still has a minimum click area of 44x44 but looks
                smaller and uses non-uppercased type.
            </HeadingSection>
            <ExampleSection>
                <div className="subtitle1">Primary</div>
                <div className="buttonDemo">
                    <Button className="small-btn" variant="contained">
                        No Icon
                    </Button>
                    <Button
                        className="small-btn"
                        variant="contained"
                        startIcon={barGraphIcon()}
                    >
                        Left Icon
                    </Button>
                    <Button
                        className="small-btn"
                        variant="contained"
                        endIcon={barGraphIcon()}
                    >
                        Right Icon
                    </Button>
                    <Button variant="contained" className="small-btn icon">
                        {barGraphIcon()}
                    </Button>
                </div>
                <div className="subtitle1">Secondary</div>
                <div className="buttonDemo">
                    <Button className="small-btn" variant="outlined">
                        No Icon
                    </Button>
                    <Button
                        className="small-btn"
                        variant="outlined"
                        startIcon={barGraphIcon()}
                    >
                        Left Icon
                    </Button>
                    <Button
                        className="small-btn"
                        variant="outlined"
                        endIcon={barGraphIcon()}
                    >
                        Right Icon
                    </Button>
                    <Button variant="outlined" className="small-btn icon">
                        {barGraphIcon()}
                    </Button>
                </div>
                <div className="subtitle1">Tertiary</div>
                <div className="buttonDemo">
                    <Button className="small-btn" variant="text">
                        No Icon
                    </Button>
                    <Button
                        className="small-btn"
                        variant="text"
                        startIcon={barGraphIcon()}
                    >
                        Left Icon
                    </Button>
                    <Button
                        className="small-btn"
                        variant="text"
                        endIcon={barGraphIcon()}
                    >
                        Right Icon
                    </Button>
                    <Button variant="text" className="small-btn icon">
                        {barGraphIcon()}
                    </Button>
                </div>
            </ExampleSection>
        </div>
    );
};
