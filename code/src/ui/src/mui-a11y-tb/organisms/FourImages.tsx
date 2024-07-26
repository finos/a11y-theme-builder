/**
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React from 'react';
import { Grid } from '@mui/material';

interface Props {
    style?: any;
    children?: React.ReactNode;
    className?: string;
}

export const FourImages: React.FC<Props> = ({ className = '' }) => {
    return (
        <section className={className}>
            <Grid
                className="v-center"
                container
                spacing={2}
                columns={12}
                margin={2}
            >
                <Grid
                    item
                    spacing={2}
                    justifyContent="center"
                    className="v-center"
                    lg={3}
                    sm={6}
                >
                    <div
                        className="inline-image"
                        style={{ width: '100%', height: 'auto' }}
                    >
                        <img src="/sample.jpg" alt="first sample"/>
                    </div>
                </Grid>
                <Grid
                    item
                    spacing={2}
                    justifyContent="center"
                    className="v-center"
                    lg={3}
                    sm={6}
                >
                    <div
                        className="inline-image"
                        style={{ width: '100%', height: 'auto' }}
                    >
                        <img src="/sample.jpg" alt="second sample" />
                    </div>
                </Grid>
                <Grid
                    item
                    spacing={2}
                    justifyContent="center"
                    className="v-center"
                    lg={3}
                    sm={6}
                >
                    <div
                        className="inline-image"
                        style={{ width: '100%', height: 'auto' }}
                    >
                        <img src="/sample.jpg" alt="third sample" />
                    </div>
                </Grid>
                <Grid
                    item
                    spacing={2}
                    justifyContent="center"
                    className="v-center"
                    lg={3}
                    sm={6}
                >
                    <div
                        className="inline-image"
                        style={{ width: '100%', height: 'auto' }}
                    >
                        <img src="/sample.jpg" alt="fourth sample"/>
                    </div>
                </Grid>
            </Grid>
        </section>
    );
};
