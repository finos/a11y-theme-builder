/**
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
    Grid,
    Divider,
} from '@mui/material';

export interface Props {
    colorMode: string;
    setColorMode: React.Dispatch<React.SetStateAction<string>>;
    children?: React.ReactNode;
}

export const SectionColorModeSelector: React.FC<Props> = ({
    colorMode,
    setColorMode,
    children,
}) => {
    const style = {
        marginTop: '40px',
    };

    return (
        <>
            <Grid container spacing={2} columns={12} margin={2}>
                <Grid item spacing={2} lg={12} md={12} sm={12}>
                    <InputLabel>Color Variants</InputLabel>
                    <Typography variant="caption">
                        View components on various background colors: default,
                        colored, black, white or gradients
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
                    {children && <div style={style}>{children}</div>}
                    <Divider style={style} />
                </Grid>
            </Grid>
        </>
    );
};
