/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useState, useEffect } from 'react';
import { Breadcrumbs, Button, Link, Typography, Grid } from '@mui/material';
import { Avatar, Stack } from '@mui/material';
interface Props {
    style?: any;
    children?: React.ReactNode;
    className?: string;
}

export const TeamsLarge: React.FC<Props> = ({className=""}) => {
    return (
        <section className={className}>
          <Grid justifyContent="center" container spacing={2} columns={12} margin={2}>
            <Grid item spacing={2} className="centered" lg={10} sm={12}>
              <h2>Title</h2>
              <div className="body">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                </p>
              </div>
            </Grid>
          </Grid>
          <Grid justifyContent="center" container spacing={2} columns={12} margin={2}>
            <Grid className="centered" item spacing={2} lg={2} md={3} sm={6}>
              <Avatar className="avatar lg"  />
              <div className="subtitle1">John Doe</div>
              <div className="body2">Job Title</div>
            </Grid>
            <Grid className="centered" item spacing={2} lg={2} md={3} sm={6}>
              <Avatar className="avatar lg"  />
              <div className="subtitle1">John Doe</div>
              <div className="body2">Job Title</div>
            </Grid>
            <Grid className="centered" item spacing={2} lg={2} md={3} sm={6}>
              <Avatar className="avatar lg"  />
              <div className="subtitle1">John Doe</div>
              <div className="body2">Job Title</div>
            </Grid>
            <Grid className="centered" item spacing={2} lg={2} md={3} sm={6}>
              <Avatar className="avatar lg"  />
              <div className="subtitle1">John Doe</div>
              <div className="body2">Job Title</div>
            </Grid>
            <Grid className="centered" item spacing={2} lg={2} md={3} sm={6}>
              <Avatar className="avatar lg"  />
              <div className="subtitle1">John Doe</div>
              <div className="body2">Job Title</div>
            </Grid>
            <Grid className="centered" item spacing={2} lg={2} md={3} sm={6}>
              <Avatar className="avatar lg"  />
              <div className="subtitle1">John Doe</div>
              <div className="body2">Job Title</div>
            </Grid>
            <Grid className="centered" item spacing={2} lg={2} md={3} sm={6}>
              <Avatar className="avatar lg"  />
              <div className="subtitle1">John Doe</div>
              <div className="body2">Job Title</div>
            </Grid>
            <Grid className="centered" item spacing={2} lg={2} md={3} sm={6}>
              <Avatar className="avatar lg"  />
              <div className="subtitle1">John Doe</div>
              <div className="body2">Job Title</div>
            </Grid>
          </Grid>
        </section>
    )
}
