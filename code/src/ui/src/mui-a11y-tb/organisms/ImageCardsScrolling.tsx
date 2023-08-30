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

export const ImageCardsScrolling: React.FC<Props> = ({className=""}) => {
    return (
        <section className={className}>
          <Grid container spacing={2} columns={12} margin={2}>
            <Grid item spacing={2} lg={12} md={12} sm={12}>
              <h2>Cards, Fixed Width, Scrolling with Two Buttons</h2>
              <div className="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </Grid>
            <div className="cardScroll">
              <CardSample className="fixed" title="Title"  imagePath="/sample.jpg" imageClassName="cinemascope">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
              <CardSample className="fixed"  title="Title" imagePath="/sample.jpg" imageClassName="cinemascope">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
              <CardSample className="fixed"  title="Title" imagePath="/sample.jpg" imageClassName="cinemascope">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
              <CardSample className="fixed"  title="Title" imagePath="/sample.jpg" imageClassName="cinemascope">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
              <CardSample className="fixed"  title="Title" imagePath="/sample.jpg" imageClassName="cinemascope">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
              <CardSample className="fixed"  title="Title" imagePath="/sample.jpg" imageClassName="cinemascope">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
            </div>
          </Grid>
          <Grid container spacing={2} columns={12} margin={2}>
            <Grid item spacing={2} lg={12} md={12} sm={12}>
              <h2>Cards, Fixed Width, Scrolling with One Button</h2>
              <div className="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </Grid>
            <div className="cardScroll">
              <CardSample  hideSecondary={true} className="fixed" title="Title"  imagePath="/sample.jpg" imageClassName="cinemascope">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
              <CardSample  hideSecondary={true} className="fixed"  title="Title" imagePath="/sample.jpg" imageClassName="cinemascope">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
              <CardSample  hideSecondary={true} className="fixed"  title="Title" imagePath="/sample.jpg" imageClassName="cinemascope">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
              <CardSample  hideSecondary={true} className="fixed"  title="Title" imagePath="/sample.jpg" imageClassName="cinemascope">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
              <CardSample  hideSecondary={true} className="fixed"  title="Title" imagePath="/sample.jpg" imageClassName="cinemascope">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
              <CardSample  hideSecondary={true} className="fixed"  title="Title" imagePath="/sample.jpg" imageClassName="cinemascope">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
            </div>
          </Grid>
          <Grid container spacing={2} columns={12} margin={2}>
            <Grid item spacing={2} lg={12} md={12} sm={12}>
              <h2>Cards, Fixed Width, Scrolling with Hotlinks</h2>
              <div className="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </Grid>
            <div className="cardScroll">
              <CardSample hotlink={true} className="fixed" title="Title"  imagePath="/sample.jpg" imageClassName="cinemascope">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
              <CardSample hotlink={true} className="fixed"  title="Title" imagePath="/sample.jpg" imageClassName="cinemascope">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
              <CardSample hotlink={true} className="fixed"  title="Title" imagePath="/sample.jpg" imageClassName="cinemascope">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
              <CardSample hotlink={true} className="fixed"  title="Title" imagePath="/sample.jpg" imageClassName="cinemascope">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
              <CardSample hotlink={true} className="fixed"  title="Title" imagePath="/sample.jpg" imageClassName="cinemascope">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
              <CardSample hotlink={true} className="fixed"  title="Title" imagePath="/sample.jpg" imageClassName="cinemascope">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
            </div>
          </Grid>
          <Grid container spacing={2} columns={12} margin={2}>
            <Grid item spacing={2} lg={12} md={12} sm={12}>
              <h2>Cards, Fixed Width, Scrolling, Clickable</h2>
              <div className="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </Grid>
            <div className="cardScroll">
              <CardSample clickable={true} className="fixed" title="Title"  imagePath="/sample.jpg" imageClassName="cinemascope">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
              <CardSample clickable={true} className="fixed"  title="Title" imagePath="/sample.jpg" imageClassName="cinemascope">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
              <CardSample clickable={true} className="fixed"  title="Title" imagePath="/sample.jpg" imageClassName="cinemascope">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
              <CardSample clickable={true} className="fixed"  title="Title" imagePath="/sample.jpg" imageClassName="cinemascope">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
              <CardSample clickable={true} className="fixed"  title="Title" imagePath="/sample.jpg" imageClassName="cinemascope">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
              <CardSample clickable={true} className="fixed"  title="Title" imagePath="/sample.jpg" imageClassName="cinemascope">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
            </div>
          </Grid>
        </section>
    )
}
