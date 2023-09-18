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

export const GrooveComponent: React.FC<Props> = () => {

        return (
            <div>
                <HeadingSection title="Shadows" heading="Grooves" />
                <ExampleSection>
                  <Grid container spacing={2} columns={12} margin={2}>
                    <Grid lg={6} md={8} sm={12}>
                      <div className="subtitle1 top40">Groove 1</div>
                      <div className="gradient-group top16">
                          <div className="card primary groove-1" ></div>
                      </div>
                      <div className="subtitle1 top40">Groove 2</div>
                      <div className="gradient-group top16">
                          <div className="card primary groove-2" ></div>
                      </div>
                      <div className="subtitle1 top40">Groove 3</div>
                      <div className="gradient-group top16">
                          <div className="card primary groove-3" ></div>
                      </div>
                      <div className="subtitle1 top40">Groove 4</div>
                      <div className="gradient-group top16">
                          <div className="card primary groove-4" ></div>
                      </div>
                      <div className="subtitle1 top40">Groove 5</div>
                      <div className="gradient-group top16">
                          <div className="card primary groove-5" ></div>
                      </div>
                      <div className="subtitle1 top40">Groove 6</div>
                      <div className="gradient-group top16">
                          <div className="card primary groove-6" ></div>
                      </div>
                      <div className="subtitle1 top40">Groove 7</div>
                      <div className="gradient-group top16">
                          <div className="card primary groove-7" ></div>
                      </div>
                      <div className="subtitle1 top40">Groove 8</div>
                      <div className="gradient-group top16">
                          <div className="card primary groove-8" ></div>
                      </div>
                      <div className="subtitle1 top40">Groove 9</div>
                      <div className="gradient-group top16">
                          <div className="card primary groove-9" ></div>
                      </div>
                    </Grid>
                  </Grid>
                </ExampleSection>
            </div>
        );
}
