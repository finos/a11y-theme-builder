/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React from 'react';
import { InputLabel, RadioGroup, FormControlLabel, Radio, Typography, Grid } from '@mui/material';

export interface SectionColorModeSelector {
    colorMode: string;
    setColorMode: React.Dispatch<React.SetStateAction<string>>;
    children?: React.ReactNode;
}

export const FooterColorModeSelector: React.FC<SectionColorModeSelector> = ({ colorMode, setColorMode, children }) => {

    const style = {
        marginTop: "40px",
    }

    return (
        <>
        <Grid container spacing={2} columns={12} margin={2}>
          <Grid item spacing={2} lg={12} md={12} sm={12}>
            <InputLabel>Color Variants</InputLabel>
            <Typography variant="caption">View footer templates in various colors: black, white, grey or colored</Typography>
            <RadioGroup onChange={(event) => setColorMode(event.target.value)} defaultValue={colorMode} value={colorMode}>
                <FormControlLabel value="primary" control={<Radio size="small"/>}  label="Default"/>
                <FormControlLabel value="black" control={<Radio size="small"/>} label="Black"/>
                <FormControlLabel value="white" control={<Radio size="small"/>} label="White"/>
                <FormControlLabel value="alt" control={<Radio size="small"/>}  label="Default Alternate"/>
                <FormControlLabel value="colored" control={<Radio size="small"/>} label="Colored"/>
            </RadioGroup>
            {children &&
                <div style={style}>
                    {children}
                </div>
            }
          </Grid>
        </Grid>
        </>
    )
}
