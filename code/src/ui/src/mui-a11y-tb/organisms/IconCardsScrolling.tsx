/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
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

export const IconCardsScrolling: React.FC<Props> = ({className=""}) => {
    return (
        <section className={className}>
          <Grid container spacing={2} columns={12} margin={2}>
            <Grid item spacing={2} lg={12} md={12} sm={12}>
              <h2>Cards, Fixed Width, Scrolling, Two Buttons</h2>
              <div className="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </Grid>
            <div className="cardScroll">
              <CardSample color="primary" icon={true} className="fixed" title="Title" >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
              <CardSample color="primary" icon={true} className="fixed"  title="Title" >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
              <CardSample color="primary" icon={true} className="fixed"  title="Title" >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
              <CardSample color="primary" icon={true} className="fixed"  title="Title" >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
              <CardSample color="primary" icon={true} className="fixed"  title="Title" >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
              <CardSample color="primary" icon={true} className="fixed"  title="Title" >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
            </div>
          </Grid>
          <Grid container spacing={2} columns={12} margin={2}>
            <Grid item spacing={2} lg={12} md={12} sm={12}>
              <h2>Cards, Fixed Width, Scrolling, One Button</h2>
              <div className="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </Grid>
            <div className="cardScroll">
              <CardSample color="primary" icon={true} className="fixed" title="Title"   hideSecondary={true}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
              <CardSample color="primary" icon={true} className="fixed"  title="Title"  hideSecondary={true} >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
              <CardSample color="primary" icon={true} className="fixed"  title="Title"  hideSecondary={true} >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
              <CardSample color="primary" icon={true} className="fixed"  title="Title"  hideSecondary={true} >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
              <CardSample color="primary" icon={true} className="fixed"  title="Title"   hideSecondary={true}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
              <CardSample color="primary" icon={true} className="fixed"  title="Title"   hideSecondary={true}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
            </div>
          </Grid>
          <Grid container spacing={2} columns={12} margin={2}>
            <Grid item spacing={2} lg={12} md={12} sm={12}>
              <h2>Cards, Fixed Width, Scrolling, Hotlink</h2>
              <div className="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </Grid>
            <div className="cardScroll">
              <CardSample color="primary" icon={true} className="fixed" title="Title"  hotlink={true}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
              <CardSample color="primary" icon={true} className="fixed"  title="Title"  hotlink={true}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
              <CardSample color="primary" icon={true} className="fixed"  title="Title"  hotlink={true}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
              <CardSample color="primary" icon={true} className="fixed"  title="Title" hotlink={true} >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
              <CardSample color="primary" className="fixed"  title="Title" hotlink={true} >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
              <CardSample color="primary" icon={true} className="fixed"  title="Title" hotlink={true}>
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
              <CardSample color="primary" icon={true} className="fixed" title="Title"  clickable={true}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
              <CardSample color="primary" icon={true} className="fixed"  title="Title" clickable={true}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
              <CardSample color="primary" icon={true} className="fixed"  title="Title"  clickable={true}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
              <CardSample color="primary" icon={true} className="fixed"  title="Title" clickable={true} >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
              <CardSample color="primary" icon={true} className="fixed"  title="Title" clickable={true} >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
              <CardSample color="primary" icon={true} className="fixed"  title="Title" hotlink={true}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
              </CardSample>
            </div>
          </Grid>
        </section>
    )
}
