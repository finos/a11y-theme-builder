/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useState, useEffect } from 'react';
import { Breadcrumbs, Button, Link, Typography, Grid} from '@mui/material';
import { Avatar} from '@mui/material';
interface Props {
    style?: any;
    children?: React.ReactNode;
    className?: string;
}

export const Testimonial: React.FC<Props> = ({className=""}) => {
    return (
        <section className={className}>
          <Grid justifyContent="center"  container spacing={2} columns={12} margin={2}>
              <Grid item className="center" xl={3} lg={4} md={6} sm={12}>
                <Avatar className="avatar xxl"  />
              </Grid>
              <Grid item className="v-center" xl={8} lg={8} md={6} sm={12}>
              <div className="body quote">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                </p>
                <div className="subtitle1">John Doe</div>
                <div className="body2">Job Title</div>

              </div>
              </Grid>
          </Grid>
        </section>
    )
}
