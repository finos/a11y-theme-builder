/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React from 'react';
import {
    InputLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    Typography,
} from '@mui/material';

export interface HeroColorModeSelector {
    colorMode: string;
    setColorMode: React.Dispatch<React.SetStateAction<string>>;
    children?: React.ReactNode;
}

export const HeroColorModeSelector: React.FC<HeroColorModeSelector> = ({
    colorMode,
    setColorMode,
    children,
}) => {
    const backgroundColor: any = {
        colored: 'rgba(255,255,255,0)',
        black: 'rgba(255,255,255,.5)',
        white: 'rgba(0,0,0,.5)',
    };

    const style = {
        backgroundColor: backgroundColor[colorMode],
    };

    return (
        <>
            <InputLabel>Color Variants</InputLabel>
            <Typography variant="caption">
                View components as default, black, white or gradient variants
            </Typography>
            <RadioGroup
                onChange={(event) => setColorMode(event.target.value)}
                defaultValue={colorMode}
                value={colorMode}
            >
                <FormControlLabel
                    value="colored"
                    control={<Radio size="small" />}
                    label="Colored"
                />
                <FormControlLabel
                    value="black"
                    control={<Radio size="small" />}
                    label="Black"
                />
                <FormControlLabel
                    value="white"
                    control={<Radio size="small" />}
                    label="White"
                />
                <FormControlLabel
                    value="gradient1"
                    control={<Radio size="small" />}
                    label="Gradient 1"
                />
                <FormControlLabel
                    value="gradient2"
                    control={<Radio size="small" />}
                    label="Gradient 2"
                />
                <FormControlLabel
                    value="gradient3"
                    control={<Radio size="small" />}
                    label="Gradient 3"
                />
            </RadioGroup>
            {children && (
                <div className="hero-color-mode-selector" style={style}>
                    {children}
                </div>
            )}
        </>
    );
};
