/**
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { ResponsiveAppBar } from '../../../pages/components/ResponsiveAppBar';
import FaqList from '../../../components/FaqList';

export const FaqTemplate: React.FC = () => (
    <div className="faq-template">
        <ResponsiveAppBar color="colored" />
        <main data-background="primary" className="faq-template-main">
            <Grid container spacing={2} columns={12}>
                <Grid item xs={12} md={8}>
                    <Typography component="h1" variant="h3">
                        How can we help?
                    </Typography>
                    <Typography component="p" variant="body1">
                        Find answers about transfers, your team, and your
                        business account.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography component="h2" variant="h5" id="faq-heading">
                        Common questions
                    </Typography>
                    <FaqList />
                </Grid>
                <Grid item xs={12}>
                    <div className="faq-template-contact">
                        <div>
                            <Typography component="h2" variant="h6">
                                Still need help?
                            </Typography>
                            <Typography component="p" variant="body1">
                                Our support team can help you find the next step.
                            </Typography>
                        </div>
                        <Button variant="contained">Contact support</Button>
                    </div>
                </Grid>
            </Grid>
        </main>
        <footer className="faq-template-footer">
            <Typography component="p" variant="body2">
                © Copyright Company Name. All rights reserved.
            </Typography>
        </footer>
    </div>
);

export default FaqTemplate;
