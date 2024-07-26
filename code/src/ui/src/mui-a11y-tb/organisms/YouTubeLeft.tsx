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

export const YouTubeLeft: React.FC<Props> = ({ className = '' }) => {
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
                    <div className="videoWrapper">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/Vbg81kc56FU"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="YouTube inline video iframe"
                        ></iframe>
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
                        <Button>Get Started</Button>
                    </div>
                </Grid>
            </Grid>
        </section>
    );
};
