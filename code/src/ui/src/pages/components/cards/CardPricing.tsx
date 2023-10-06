/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, FormControl, FormControlLabel, IconButton, Radio, RadioGroup, SvgIcon, Typography } from '@mui/material';
import { HeadingSection } from '../../content/HeadingSection';

interface Props {
    title: string,
    cost: string,
    billing: string,
    className?: string,
    button: string,
    hotlink: string,
    color: string,
    children?: React.ReactNode,
}

export const CardPricing: React.FC<Props> = ({title, className, cost, billing, button, hotlink, color,  children }) => {

    let rootClassName = (className || "");
    return (


                <Card data-background={color} className="elevation-1 pricing top-40">
                    <div className="subtitle1">{title}</div>
                    <h6>{cost}</h6>
                    <div className="subtitle2">{billing}</div>
                    <CardContent>
                        <Typography variant="body2" component="div">
                            {children}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained">{button}</Button>
                        <a href="#">{hotlink}</a>
                    </CardActions>
                </Card>


    );
}
