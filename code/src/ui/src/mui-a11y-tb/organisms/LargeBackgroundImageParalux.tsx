/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useState, useEffect } from 'react';
import { Breadcrumbs, Button, Link, Typography, Grid } from '@mui/material';

interface Props {
    style?: any;
    children?: React.ReactNode;
    className?: string;
}

export const LargeBackgroundImageParalux: React.FC<Props> = ({className=""}) => {
    return (
        <section className={className}>
          <Grid className="v-center" container spacing={2} columns={12} margin={2}>
            <Grid item spacing={2} className="v-center backgroundImage paralux" lg={12} style={{backgroundImage: "url(/sample.jpg)"}}>
            </Grid>
          </Grid>
        </section>
    )
}
