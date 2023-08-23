/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useState, useEffect } from 'react';
import { Breadcrumbs, Button, Link, Typography, Grid } from '@mui/material';
import { ListComponent } from '../../pages/components/ListComponent';
import { CardSample } from '../../pages/components/cards/CardSample';

interface Props {
    style?: any;
    children?: React.ReactNode;
    className?: string;
}

export const ImageCardsCentered: React.FC<Props> = ({className=""}) => {
    return (
        <section className={"centered " +  className}>
          <Grid justifyContent="center" container spacing={2} columns={12} margin={2}>
            <Grid justifyContent="center" item spacing={2} xl={10} sm={12}>
              <h3>Cards, Fixed Width, Centered with Two Buttons</h3>
              <div className="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </Grid>
            <Grid item spacing={2} xl={10} sm={12} className="cardSection">
              <CardSample className="fixed" title="Title" imagePath="/sample.jpg" imageClassName="cinemascope">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>

              <CardSample className="fixed"  title="Title" imagePath="/sample.jpg" imageClassName="cinemascope">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>

              <CardSample className="fixed"  title="Title" imagePath="/sample.jpg" imageClassName="cinemascope" >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>

              <CardSample className="fixed"  title="Title" imagePath="/sample.jpg" imageClassName="cinemascope">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
            </Grid>
          </Grid>
          <Grid justifyContent="center" container spacing={2} columns={12} margin={2}>
            <Grid justifyContent="center" item spacing={2} xl={10} sm={12}>
              <h3>Cards, Fixed Width, Centered with One Button</h3>
              <div className="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </Grid>
            <Grid item spacing={2} xl={10} sm={12} className="cardSection">
              <CardSample  hideSecondary={true} className="fixed" title="Title" imagePath="/sample.jpg" imageClassName="cinemascope">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>

              <CardSample  hideSecondary={true} className="fixed"  title="Title" imagePath="/sample.jpg" imageClassName="cinemascope">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>

              <CardSample  hideSecondary={true} className="fixed"  title="Title" imagePath="/sample.jpg" imageClassName="cinemascope" >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>

              <CardSample  hideSecondary={true} className="fixed"  title="Title" imagePath="/sample.jpg" imageClassName="cinemascope">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
            </Grid>
          </Grid>
          <Grid justifyContent="center" container spacing={2} columns={12} margin={2}>
            <Grid justifyContent="center" item spacing={2} xl={10} sm={12}>
              <h3>Cards, Fixed Width, Centered with Hotlink</h3>
              <div className="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </Grid>
            <Grid item spacing={2} xl={10} sm={12} className="cardSection">
              <CardSample hotlink={true} className="fixed" title="Title" imagePath="/sample.jpg" imageClassName="cinemascope">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>

              <CardSample hotlink={true} className="fixed"  title="Title" imagePath="/sample.jpg" imageClassName="cinemascope">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>

              <CardSample hotlink={true} className="fixed"  title="Title" imagePath="/sample.jpg" imageClassName="cinemascope" >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>

              <CardSample hotlink={true} className="fixed"  title="Title" imagePath="/sample.jpg" imageClassName="cinemascope">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
            </Grid>
          </Grid>
          <Grid justifyContent="center" container spacing={2} columns={12} margin={2}>
            <Grid justifyContent="center" item spacing={2} xl={10} sm={12}>
              <h3>Cards, Fixed Width, Centered, Clickable</h3>
              <div className="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </Grid>
            <Grid item spacing={2} xl={10} sm={12} className="cardSection">
              <CardSample clickable={true} className="fixed" title="Title" imagePath="/sample.jpg" imageClassName="cinemascope">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>

              <CardSample clickable={true} className="fixed"  title="Title" imagePath="/sample.jpg" imageClassName="cinemascope">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>

              <CardSample clickable={true} className="fixed"  title="Title" imagePath="/sample.jpg" imageClassName="cinemascope" >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>

              <CardSample clickable={true} className="fixed"  title="Title" imagePath="/sample.jpg" imageClassName="cinemascope">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
            </Grid>
          </Grid>
        </section>
    )
}
