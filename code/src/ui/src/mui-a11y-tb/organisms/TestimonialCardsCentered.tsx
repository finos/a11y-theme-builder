/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React from 'react';
import { Grid, Divider } from '@mui/material';
import { ListComponent } from '../../pages/components/ListComponent';

interface Props {
    style?: any;
    children?: React.ReactNode;
    className?: string;
}

export const TestimonialCardsCentered: React.FC<Props> = ({className=""}) => {
    return (

        <section className={"centered " +  className}>
          <Grid justifyContent="center" container spacing={2} columns={12} margin={2} >
            <Grid item spacing={2} lg={8} md={12} sm={12}>
              <h2>Title</h2>
              <div className="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </div>
            </Grid>
          </Grid>
          <Grid justifyContent="center" container spacing={2} columns={12} margin={2}  className="pricingSection">
            <Grid item spacing={2} xl={3} lg={4} md={6} sm={12} xs={12}>
              <div className="card testimonial-card white">
                 <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                 </q>
                 <Divider />
                <ListComponent isClickable={true} hasAvatar type={2} title={'Jane Doe'}  overline={'Season 1'}  body={'testing'}  ></ListComponent>
              </div>
            </Grid>
            <Grid item spacing={2} xl={3} lg={4} md={6} sm={12} xs={12} className="cardSection">
              <div className="card testimonial-card white">
                <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </q>
                <Divider />
                <ListComponent isClickable={true} hasAvatar type={2} title={'Jane Doe'}  overline={'Season 1'}  body={'testing'}  ></ListComponent>

              </div>
            </Grid>
            <Grid item spacing={2} xl={3} lg={4}  md={6} sm={12} xs={12} className="cardSection">
              <div className="card testimonial-card white">
                 <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                 </q>
                   <Divider />
                <ListComponent isClickable={true} hasAvatar type={2} title={'Jane Doe'}  overline={'Season 1'}  body={'testing'}  ></ListComponent>

                </div>
            </Grid>
          </Grid>
        </section>
    )
}
