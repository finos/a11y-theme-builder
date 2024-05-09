/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useState, useEffect } from 'react';
import {
  Breadcrumbs,
  Button,
  Link,
  Typography,
  Grid,
  Divider,
} from '@mui/material';
import { ListComponent } from '../../pages/components/ListComponent';
interface Props {
  style?: any;
  children?: React.ReactNode;
  className?: string;
}

export const Footer3Columns: React.FC<Props> = ({ className = '' }) => {
  return (
    <footer>
      <Grid
        className="v-center"
        container
        spacing={2}
        columns={{ lg: 5, md: 3, xs: 4 }}
        margin={2}
      >
        <Grid item spacing={2} className="v-center" lg={2} md={3} xs={4}>
          <h5>Company Name</h5>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
          <div className="socialIcons">
            <Button variant="contained" className="icon">
              <i className="fa-brands fa-twitter"></i>
            </Button>
            <Button variant="contained" className="icon">
              <i className="fa-brands fa-linkedin"></i>
            </Button>
            <Button variant="contained" className="icon">
              <i className="fa-brands fa-square-facebook"></i>
            </Button>
          </div>
        </Grid>
        <Grid item spacing={2} className="v-center" lg={1} md={1} xs={2}>
          <div className="subtitle1">Catagory Title</div>
          <div className="list-content">
            <ListComponent
              isClickable={true}
              type={1}
              title={'Section'}
              overline={''}
              body={''}
            ></ListComponent>
            <ListComponent
              isClickable={true}
              type={1}
              title={'Section'}
              overline={''}
              body={''}
            ></ListComponent>
            <ListComponent
              isClickable={true}
              type={1}
              title={'Section'}
              overline={''}
              body={''}
            ></ListComponent>
            <ListComponent
              isClickable={true}
              type={1}
              title={'Section'}
              overline={''}
              body={''}
            ></ListComponent>
          </div>
        </Grid>
        <Grid item spacing={2} className="v-center" lg={1} md={1} xs={2}>
          <div className="subtitle1">Catagory Title</div>
          <div className="list-content">
            <ListComponent
              isClickable={true}
              type={1}
              title={'Section'}
              overline={''}
              body={''}
            ></ListComponent>
            <ListComponent
              isClickable={true}
              type={1}
              title={'Section'}
              overline={''}
              body={''}
            ></ListComponent>
            <ListComponent
              isClickable={true}
              type={1}
              title={'Section'}
              overline={''}
              body={''}
            ></ListComponent>
            <ListComponent
              isClickable={true}
              type={1}
              title={'Section'}
              overline={''}
              body={''}
            ></ListComponent>
            <ListComponent
              isClickable={true}
              type={1}
              title={'Section'}
              overline={''}
              body={''}
            ></ListComponent>
            <ListComponent
              isClickable={true}
              type={1}
              title={'Section'}
              overline={''}
              body={''}
            ></ListComponent>
            <ListComponent
              isClickable={true}
              type={1}
              title={'Section'}
              overline={''}
              body={''}
            ></ListComponent>
          </div>
        </Grid>
        <Grid item spacing={2} className="v-center" lg={1} md={1} xs={2}>
          <div className="subtitle1">Catagory Title</div>
          <div className="list-content">
            <ListComponent
              isClickable={true}
              type={1}
              title={'Section'}
              overline={''}
              body={''}
            ></ListComponent>
            <ListComponent
              isClickable={true}
              type={1}
              title={'Section'}
              overline={''}
              body={''}
            ></ListComponent>
            <ListComponent
              isClickable={true}
              type={1}
              title={'Section'}
              overline={''}
              body={''}
            ></ListComponent>
            <ListComponent
              isClickable={true}
              type={1}
              title={'Section'}
              overline={''}
              body={''}
            ></ListComponent>
            <ListComponent
              isClickable={true}
              type={1}
              title={'Section'}
              overline={''}
              body={''}
            ></ListComponent>
          </div>
        </Grid>
        <Grid item spacing={2} className="v-center" lg={6} md={3} xs={4}>
          <Divider />
          <div className="copyright">
            &#169; Copyright Company Name. All rights reserved.
          </div>
        </Grid>
      </Grid>
    </footer>
  );
};
