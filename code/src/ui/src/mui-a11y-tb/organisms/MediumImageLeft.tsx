﻿/*
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

export const MediumImageLeft: React.FC<Props> = ({ className = '' }) => {
    return (
        <section className={className}>
            <Grid
                className="v-center"
                container
                spacing={2}
                columns={12}
                margin={2}
            >
                <Grid item spacing={2} className="v-center" lg={6} sm={12}>
                    <div
                        className="inline-image"
                        style={{ width: '100%', height: 'auto' }}
                    >
                        <img src="/sample.jpg" />
                    </div>
                </Grid>
                <Grid item spacing={2} className="v-center" lg={6} sm={12}>
                    <h2>Title</h2>
                    <div className="body1">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut
                            aliquip.
                        </p>
                    </div>
                </Grid>
            </Grid>
        </section>
    );
};
