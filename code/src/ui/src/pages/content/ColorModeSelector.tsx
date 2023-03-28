import React from 'react';
import { InputLabel, RadioGroup, FormControlLabel, Radio, Typography } from '@mui/material';

export interface ColorModeSelector {
    colorMode: string;
    setColorMode: React.Dispatch<React.SetStateAction<string>>;
    children?: React.ReactNode;
}

export const ColorModeSelector: React.FC<ColorModeSelector> = ({ colorMode, setColorMode, children }) => {

    const backgroundColor:any = {primary: "var(--primary)", black: "black", white: "white"}
    const color:any = {primary: "var(--on-primary)", black: "white", white: "black"}

    const style = {
        border: "1px dotted black",
        color: color[colorMode],
        backgroundColor: backgroundColor[colorMode],
        padding: "10px",
        marginTop: "24px",
    }   

    return (
        <>
        <InputLabel>Background Colors</InputLabel>
        <Typography variant="caption">View components on different backgrounds</Typography>
        <RadioGroup onChange={(event) => setColorMode(event.target.value)} defaultValue={colorMode} value={colorMode}>
            <FormControlLabel value="primary" control={<Radio size="small"/>} label="Primary Color"/>
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