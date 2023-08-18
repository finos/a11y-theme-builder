/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React from 'react';
import { InputLabel, RadioGroup, FormControlLabel, Radio, Typography } from '@mui/material';

export interface SectionColorModeSelector {
    colorMode: string;
    setColorMode: React.Dispatch<React.SetStateAction<string>>;
    children?: React.ReactNode;
}

export const SectionColorModeSelector: React.FC<SectionColorModeSelector> = ({ colorMode, setColorMode, children }) => {

    const style = {
        marginTop: "40px",
    }

    return (
        <>
        <InputLabel>Color Variants</InputLabel>
        <Typography variant="caption">View components as default, black, white or gradient variants</Typography>
        <RadioGroup onChange={(event) => setColorMode(event.target.value)} defaultValue={colorMode} value={colorMode}>
            <FormControlLabel value="colored" control={<Radio size="small"/>} label="Colored"/>
            <FormControlLabel value="black" control={<Radio size="small"/>} label="Black"/>
            <FormControlLabel value="white" control={<Radio size="small"/>} label="White"/>
            <FormControlLabel value="gradient-1" control={<Radio size="small"/>} label="Gradient 1"/>
            <FormControlLabel value="gradient-2" control={<Radio size="small"/>} label="Gradient 2"/>
            <FormControlLabel value="gradient-3" control={<Radio size="small"/>} label="Gradient 3"/>
        </RadioGroup>
        {children &&
            <div style={style}>
                {children}
            </div>
        }
        </>
    )
}
