/**
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React from 'react';
import { Grid } from '@mui/material';
import { HeadingSection } from '../../content/HeadingSection';
import { ExampleSection } from '../../content/ExampleSection';

interface Props {}

export const BevelComponent: React.FC<Props> = () => {
    return (
        <div>
            <HeadingSection title="Shadows" heading="Bevels" />
            <ExampleSection>
                <Grid container spacing={2} columns={12} margin={2}>
                    <Grid lg={6} md={8} sm={12}>
                        <div className="subtitle1 top40">Bevel 1</div>
                        <div className="gradient-group top16">
                            <div className="card primary bevel-1"></div>
                        </div>
                        <div className="subtitle1 top40">Bevel 2</div>
                        <div className="gradient-group top16">
                            <div className="card primary  bevel-2"></div>
                        </div>
                        <div className="subtitle1 top40">Bevel 3</div>
                        <div className="gradient-group top16">
                            <div className="card primary  bevel-3"></div>
                        </div>
                        <div className="subtitle1 top40">Bevel 4</div>
                        <div className="gradient-group top16">
                            <div className="card primary  bevel-4"></div>
                        </div>
                        <div className="subtitle1 top40">Bevel 5</div>
                        <div className="gradient-group top16">
                            <div className="card primary  bevel-5"></div>
                        </div>
                        <div className="subtitle1 top40">Bevel 6</div>
                        <div className="gradient-group top16">
                            <div className="card primary  bevel-6"></div>
                        </div>
                        <div className="subtitle1 top40">Bevel 7</div>
                        <div className="gradient-group top16">
                            <div className="card primary  bevel-7"></div>
                        </div>
                        <div className="subtitle1 top40">Bevel 8</div>
                        <div className="gradient-group top16">
                            <div className="card primary  bevel-8"></div>
                        </div>
                        <div className="subtitle1 top40">Bevel 9</div>
                        <div className="gradient-group top16">
                            <div className="card primary  bevel-9"></div>
                        </div>
                    </Grid>
                </Grid>
            </ExampleSection>
        </div>
    );
};
