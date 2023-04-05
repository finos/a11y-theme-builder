import React from 'react';
import { Box, Grid } from '@mui/material';

interface Props {
}

export const FooterCopyrightExample: React.FC<Props> = () => {

    const link = <li style={{listStyleType: "none"}}>Link</li>
    const footerSections = <Grid item xs={4} style={{paddingLeft: "24px"}}>
        <h6>Sections</h6>
        <ul>
            {link}
            {link}
            {link}
            {link}
        </ul>
    </Grid>

    return (
        <>
            <div className="caption">Sample Footer and Copyright</div>
            <Box sx={{flexGrow: 1}}>
                <Grid container style={{ backgroundColor: "#303030", color: "white", padding: "0"}}>
                    {footerSections}
                    {footerSections}
                    {footerSections}
                    <Grid item xs={12} style={{ backgroundColor: "black", color: "white", padding: "16px"}}>
                        Copyright 2023
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
