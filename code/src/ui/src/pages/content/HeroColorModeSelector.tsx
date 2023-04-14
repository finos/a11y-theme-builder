/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React from 'react';
import { InputLabel, RadioGroup, FormControlLabel, Radio, Typography } from '@mui/material';

export interface HeroColorModeSelector {
    colorMode: string;
    setColorMode: React.Dispatch<React.SetStateAction<string>>;
    children?: React.ReactNode;
}

export const HeroColorModeSelector: React.FC<HeroColorModeSelector> = ({ colorMode, setColorMode, children }) => {

    const backgroundColor:any = {colored: "rgba(255,255,255,0)", black: "rgba(255,255,255,.5)", white: "rgba(0,0,0,.5)"}
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
