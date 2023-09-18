/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React from 'react';
import { Grid } from '@mui/material';
import { HeadingSection } from '../../content/HeadingSection';
import { ExampleSection } from '../../content/ExampleSection';

interface Props {
}

export const RidgeComponent: React.FC<Props> = () => {

        return (
            <div>
                <HeadingSection title="Shadows" heading="Ridges" />
                <ExampleSection>
                  <Grid container spacing={2} columns={12} margin={2}>
                    <Grid lg={6} md={8} sm={12}>
                      <div className="subtitle1 top40">Ridge 1</div>
                      <div className="gradient-group top16">
                          <div className="card primary ridge-1" ></div>
                      </div>
                      <div className="subtitle1 top40">Ridge 2</div>
                      <div className="gradient-group top16">
                          <div className="card primary ridge-2" ></div>
                      </div>
                      <div className="subtitle1 top40">Ridge 3</div>
                      <div className="gradient-group top16">
                          <div className="card primary ridge-3" ></div>
                      </div>
                      <div className="subtitle1 top40">Ridge 4</div>
                      <div className="gradient-group top16">
                          <div className="card primary ridge-4" ></div>
                      </div>
                      <div className="subtitle1 top40">Ridge 5</div>
                      <div className="gradient-group top16">
                          <div className="card primary ridge-5" ></div>
                      </div>
                      <div className="subtitle1 top40">Ridge 6</div>
                      <div className="gradient-group top16">
                          <div className="card primary ridge-6" ></div>
                      </div>
                      <div className="subtitle1 top40">Ridge 7</div>
                      <div className="gradient-group top16">
                          <div className="card primary ridge-7" ></div>
                      </div>
                      <div className="subtitle1 top40">Ridge 8</div>
                      <div className="gradient-group top16">
                          <div className="card primary ridge-8" ></div>
                      </div>
                      <div className="subtitle1 top40">Ridge 9</div>
                      <div className="gradient-group top16">
                          <div className="card primary ridge-9" ></div>
                      </div>
                    </Grid>
                  </Grid>
                </ExampleSection>  
            </div>
        );
}
