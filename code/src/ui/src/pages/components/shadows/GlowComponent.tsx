/**
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React from 'react';
import { Grid } from '@mui/material';
import { HeadingSection } from '../../content/HeadingSection';
import { ExampleSection } from '../../content/ExampleSection';

interface Props {}

export const GlowComponent: React.FC<Props> = () => {
    return (
        <div>
            <HeadingSection title="Colors" heading="Glows" />
            <ExampleSection>
                <Grid container spacing={2} columns={12} margin={2}>
                    <Grid lg={6} md={8} sm={12}>
                        <div className="subtitle1 top40">Glow 1</div>
                        <div className="gradient-group top16">
                            <div className="card white glow-1"></div>
                        </div>
                        <div className="subtitle1 top40">Glow 2</div>
                        <div className="gradient-group top16">
                            <div className="card white glow-2"></div>
                        </div>
                        <div className="subtitle1 top40">Glow 3</div>
                        <div className="gradient-group top16">
                            <div className="card white glow-3"></div>
                        </div>
                        <div className="subtitle1 top40">Glow 4</div>
                        <div className="gradient-group top16">
                            <div className="card white glow-4"></div>
                        </div>
                        <div className="subtitle1 top40">Glow 5</div>
                        <div className="gradient-group top16">
                            <div className="card white glow-5"></div>
                        </div>
                        <div className="subtitle1 top40">Glow 6</div>
                        <div className="gradient-group top16">
                            <div className="card white glow-6"></div>
                        </div>
                        <div className="subtitle1 top40">Glow 7</div>
                        <div className="gradient-group top16">
                            <div className="card white glow-7"></div>
                        </div>
                        <div className="subtitle1 top40">Glow 8</div>
                        <div className="gradient-group top16">
                            <div className="card white glow-8"></div>
                        </div>
                        <div className="subtitle1 top40">Glow 9</div>
                        <div className="gradient-group top16">
                            <div className="card white glow-9"></div>
                        </div>
                    </Grid>
                </Grid>
            </ExampleSection>
        </div>
    );
};
