/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useState, useEffect } from 'react';
import { Breadcrumbs, Button, Link, Typography, Grid } from '@mui/material';
import { ListComponent } from '../../pages/components/ListComponent';
import { CardPricing } from '../../pages/components/cards/CardPricing';

interface Props {
  style?: any;
  children?: React.ReactNode;
  className?: string;
}

export const PricingCards: React.FC<Props> = ({ className = '' }) => {
  return (
    <section className={'centered ' + className}>
      <Grid
        justifyContent="center"
        container
        spacing={2}
        columns={12}
        margin={2}
      >
        <Grid item spacing={2} lg={8} md={12} sm={12}>
          <h2>Title</h2>
          <div className="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </Grid>
      </Grid>
      <Grid
        justifyContent="center"
        container
        spacing={2}
        columns={12}
        margin={2}
        className="pricingSection"
      >
        <Grid
          justifyContent="center"
          className="centerd"
          item
          spacing={2}
          xl={3}
          lg={4}
          md={6}
          sm={12}
          xs={12}
        >
          <CardPricing
            title="Standard"
            cost="Free"
            billing="No Bill"
            button="Get Standard"
            hotlink="Learn more"
            color="primary"
          >
            <ul>
              <li>Feature description</li>
              <li>Feature description</li>
              <li>Feature description</li>
              <li>Feature description</li>
              <li>Feature description</li>
              <li>Feature description</li>
            </ul>
          </CardPricing>
        </Grid>
        <Grid
          item
          spacing={2}
          xl={3}
          lg={4}
          md={6}
          sm={12}
          xs={12}
          className="cardSection"
        >
          <CardPricing
            title="Pro"
            cost="$149 Monlth"
            billing="Billed Annually"
            button="Get Pro"
            hotlink="Learn more"
            color="primary"
          >
            <ul>
              <li>Feature description</li>
              <li>Feature description</li>
              <li>Feature description</li>
              <li>Feature description</li>
              <li>Feature description</li>
              <li>Feature description</li>
              <li>Feature description</li>
            </ul>
          </CardPricing>
        </Grid>
        <Grid
          item
          spacing={2}
          xl={3}
          lg={4}
          md={6}
          sm={12}
          xs={12}
          className="cardSection"
        >
          <CardPricing
            title="Enterprise"
            cost="$199 Monlth"
            billing="Billed Annually"
            button="Get Enterprise"
            hotlink="Learn more"
            color="primary"
          >
            <ul>
              <li>Feature description</li>
              <li>Feature description</li>
              <li>Feature description</li>
              <li>Feature description</li>
              <li>Feature description</li>
              <li>Feature description</li>
              <li>Feature description</li>
              <li>Feature description</li>
              <li>Feature description</li>
            </ul>
          </CardPricing>
        </Grid>
      </Grid>
    </section>
  );
};
