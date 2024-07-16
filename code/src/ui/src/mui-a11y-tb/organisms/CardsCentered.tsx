/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React from 'react';
import { Grid } from '@mui/material';
import { CardSample } from '../../pages/components/cards/CardSample';
interface Props {
    style?: any;
    children?: React.ReactNode;
    className?: string;
}

export const CardsCentered: React.FC<Props> = ({ className = '' }) => {
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
                    lg={8}
                    md={6}
                    sm={12}
                >
                    <h2>Cards Centered</h2>
                    <div className="body1">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut
                            aliquip.
                        </p>
                    </div>
                    <Grid item lg={4} md={3} sm={6} xs={12}>
                        <CardSample
                            color="primary"
                            title="Title"
                            clickable={false}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua
                        </CardSample>
                    </Grid>
                </Grid>
            </Grid>
        </section>
    );
};
