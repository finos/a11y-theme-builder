/**
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React from 'react';
import { Grid } from '@mui/material';
import { HeadingSection } from '../../content/HeadingSection';
import { ExampleSection } from '../../content/ExampleSection';

interface Props {}

export const InvertedBevelComponent: React.FC<Props> = () => {
    return (
        <div>
            <HeadingSection title="Shadows" heading="Inverted Bevels" />
            <ExampleSection>
                <Grid container spacing={2} columns={12} margin={2}>
                    <Grid lg={6} md={8} sm={12}>
                        <div className="subtitle1 top40">Inverted Bevel 1</div>
                        <div className="gradient-group top16">
                            <div className="card primary bevel-1-inverse"></div>
                        </div>
                        <div className="subtitle1 top40">Inverted Bevel 2</div>
                        <div className="gradient-group top16">
                            <div className="card primary  bevel-2-inverse"></div>
                        </div>
                        <div className="subtitle1 top40">Inverted Bevel 3</div>
                        <div className="gradient-group top16">
                            <div className="card primary  bevel-3-inverse"></div>
                        </div>
                        <div className="subtitle1 top40">Inverted Bevel 4</div>
                        <div className="gradient-group top16">
                            <div className="card primary  bevel-4-inverse"></div>
                        </div>
                        <div className="subtitle1 top40">Inverted Bevel 5</div>
                        <div className="gradient-group top16">
                            <div className="card primary  bevel-5-inverse"></div>
                        </div>
                        <div className="subtitle1 top40">Inverted Bevel 6</div>
                        <div className="gradient-group top16">
                            <div className="card primary  bevel-6-inverse"></div>
                        </div>
                        <div className="subtitle1 top40">Inverted Bevel 7</div>
                        <div className="gradient-group top16">
                            <div className="card primary  bevel-7-inverse"></div>
                        </div>
                        <div className="subtitle1 top40">Inverted Bevel 8</div>
                        <div className="gradient-group top16">
                            <div className="card primary  bevel-8-inverse"></div>
                        </div>
                        <div className="subtitle1 top40">Inverted Bevel 9</div>
                        <div className="gradient-group top16">
                            <div className="card primary  bevel-9-inverse"></div>
                        </div>
                    </Grid>
                </Grid>
            </ExampleSection>
        </div>
    );
};
