/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React from 'react';
import { Grid } from '@mui/material';
import { HeadingSection } from '../../content/HeadingSection';
import { ExampleSection } from '../../content/ExampleSection';

interface Props {
}

export const ElevationComponent: React.FC<Props> = () => {

        return (
            <div>
                <HeadingSection title="Shadows" heading="Elevations" />
                <ExampleSection>
                  <Grid container spacing={2} columns={12} margin={2}>
                    <Grid lg={6} md={8} sm={12}>
                      <div className="subtitle1 top40">Elevation 1</div>
                      <div className="gradient-group top16">
                          <div className="card white elevation-1"></div>
                      </div>
                      <div className="subtitle1 top40">Elevation 2</div>
                      <div className="gradient-group  top16">
                          <div className="card white  elevation-2"></div>
                      </div>
                      <div className="subtitle1 top40">Elevation 3</div>
                      <div className="gradient-group top16">
                          <div className="card white  elevation-3"></div>
                      </div>
                        <div className="subtitle1 top40">Elevation 4</div>
                      <div className="gradient-group top16">
                          <div className="card white  elevation-4"></div>
                      </div>
                        <div className="subtitle1 top40">Elevation 5</div>
                      <div className="gradient-group top16">
                          <div className="card white  elevation-5"></div>
                      </div>
                      <div className="subtitle1 top40">Elevation 6</div>
                      <div className="gradient-group top16">
                          <div className="card white  elevation-6"></div>
                      </div>
                      <div className="subtitle1 top40">Elevation 7</div>
                      <div className="gradient-group top16">
                          <div className="card white  elevation-7"></div>
                      </div>
                      <div className="subtitle1 top40">Elevation 8</div>
                      <div className="gradient-group top16">
                          <div className="card white  elevation-8"></div>
                      </div>
                      <div className="subtitle1 top40">Elevation 9</div>
                      <div className="gradient-group top16">
                          <div className="card white  elevation-9"></div>
                      </div>
                    </Grid>
                  </Grid>
                </ExampleSection>
            </div>
        );
}
