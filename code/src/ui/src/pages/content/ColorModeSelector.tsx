﻿/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React from 'react';
import { InputLabel, RadioGroup, FormControlLabel, Radio, Typography } from '@mui/material';

export interface ColorModeSelector {
    colorMode: string;
    setColorMode: React.Dispatch<React.SetStateAction<string>>;
    children?: React.ReactNode;
}

export const ColorModeSelector: React.FC<ColorModeSelector> = ({ colorMode, setColorMode, children }) => {

    const backgroundColor:any = {default: "var(--background)", black: "white", white: "black"}
    // const color:any = {default: "var(--on-primary)", black: "black", white: "white"}

    const style = {
        border: "1px dotted black",
        //color: color[colorMode],
        backgroundColor: backgroundColor[colorMode],
        padding: "10px",
        marginTop: "24px",
    }

    console.log("style=",style);

    return (
        <>
        <InputLabel>Color Variants</InputLabel>
        <Typography variant="caption">View components as default, black or white variants</Typography>
        <RadioGroup onChange={(event) => setColorMode(event.target.value)} defaultValue={colorMode} value={colorMode}>
            <FormControlLabel value="default" control={<Radio size="small"/>} label="Default"/>
            <FormControlLabel value="black" control={<Radio size="small"/>} label="Black"/>
            <FormControlLabel value="white" control={<Radio size="small"/>} label="White"/>
        </RadioGroup>
        {children && 
            <div className={colorMode} style={style}>
                {children}
            </div>
        }
        </>
    )
}