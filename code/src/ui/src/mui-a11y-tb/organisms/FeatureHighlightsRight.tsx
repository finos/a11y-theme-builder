/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useState, useEffect } from 'react';
import { Breadcrumbs, Button, Link, Typography, Grid, Divider } from '@mui/material';
import { Avatar, Stack } from '@mui/material';
import { ListComponent } from '../../pages/components/ListComponent';
interface Props {
    style?: any;
    children?: React.ReactNode;
    className?: string;
}

export const FeatureHighlightsRight: React.FC<Props> = ({className=""}) => {
    return (
        <section className={className}>
          <Grid justifyContent="center" className="v-center" container spacing={2} columns={12} margin={2}>
            <Grid item spacing={2} lg={6} sm={12}>
              <div className="overline-large">Features</div>
              <h2>Title</h2>
              <div className="body1">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                </p>
              </div>
            </Grid>
            <Grid item spacing={2} className="centered" lg={6} sm={12}>
              <div className="card feature-card white glow-9">
                <h3 className="gradient-title">Title</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                </p>
                <div className="body1">
                  <ListComponent hasIcon isLarge type={3} title={'Episode 1'}  overline={'Season 1'}  body={'testing'}  ></ListComponent>
                  <Divider />
                  <ListComponent hasIcon isLarge type={3} title={'Episode 2'}  overline={'Season 1'}  body={'testing'}  ></ListComponent>
                  <Divider />
                  <ListComponent hasIcon isLarge type={3} title={'Episode 3'}  overline={'Season 1'}  body={'testing'}  ></ListComponent>
                  <Divider />
                  <ListComponent hasIcon isLarge type={3} title={'Episode 4'}  overline={'Season 1'}  body={'testing'}  ></ListComponent>
                </div>
              </div>
            </Grid>

          </Grid>
        </section>
    )
}
