/**
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React from 'react';
import { Button, Grid } from '@mui/material';

interface Props {
    style?: any;
    children?: React.ReactNode;
    className?: string;
}

export const VideoLeftSmall: React.FC<Props> = ({ className = '' }) => {
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
                    className="v-center"
                    lg={4}
                    md={6}
                    sm={12}
                >
                    <video src="/video.mp4" controls></video>
                </Grid>
                <Grid
                    item
                    spacing={2}
                    className="v-center"
                    lg={8}
                    md={6}
                    sm={12}
                >
                    <h2>Title</h2>
                    <div className="body1">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut
                            aliquip.
                        </p>
                        <Button>Get Started</Button>
                    </div>
                </Grid>
            </Grid>
        </section>
    );
};
