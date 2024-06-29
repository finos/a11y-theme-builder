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

export interface ColorModeSelector {
    colorMode: string;
    setColorMode: React.Dispatch<React.SetStateAction<string>>;
    children?: React.ReactNode;
}

export const ColorModeSelector: React.FC<ColorModeSelector> = ({
    colorMode,
    setColorMode,
    children,
}) => {
    const backgroundColor: any = {
        default: 'rgba(255,255,255,0)',
        black: 'rgba(255,255,255,.5)',
        white: 'rgba(0,0,0,.5)',
    };
    // const color:any = {default: "var(--on-primary)", black: "black", white: "white"}
    const style = { backgroundColor: backgroundColor[colorMode] };

    return (
        <>
            <InputLabel>Color Variants</InputLabel>
            <Typography variant="caption">
                View components as default, black or white variants
            </Typography>
            <RadioGroup
                onChange={(event) => setColorMode(event.target.value)}
                defaultValue={colorMode}
                value={colorMode}
            >
                <FormControlLabel
                    value="primary"
                    control={<Radio size="small" />}
                    label="Default"
                />
                <FormControlLabel
                    value="alt"
                    control={<Radio size="small" />}
                    label="Default Alternate"
                />
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
            </RadioGroup>
            {children && (
                <div className="color-mode-selector" style={style}>
                    {children}
                </div>
            )}
        </>
    );
};
