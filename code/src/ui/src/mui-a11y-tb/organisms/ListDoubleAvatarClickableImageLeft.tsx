/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React from 'react';
import { Grid , Divider } from '@mui/material';
import { ListComponent } from '../../pages/components/ListComponent';


interface Props {
    style?: any;
    children?: React.ReactNode;
    className?: string;
}

export const ListDoubleAvatarClickableImageLeft: React.FC<Props> = ({className=""}) => {
    return (
        <section className={"list-section " + className}>
          <Grid container spacing={2} columns={12} margin={2}>
            <Grid item spacing={2} lg={4} md={12} sm={12}>
              <div className="inline-image" style={{ width: '100%', height: 'auto' }}>
                  <img src="/sample.jpg" />
              </div>
            </Grid>
            <Grid item spacing={2} lg={8} md={12} sm={12}>
              <h6>Title</h6>
              <div className="body1">
                <ListComponent isClickable={true} hasAvatar type={2} title={'Episode 1'}  overline={'Season 1'}  body={'testing'}  ></ListComponent>
                <Divider />
                <ListComponent isClickable={true} hasAvatar type={2} title={'Episode 2'}  overline={'Season 1'}  body={'testing'}  ></ListComponent>
                <Divider />
                <ListComponent isClickable={true} hasAvatar type={2} title={'Episode 3'}  overline={'Season 1'}  body={'testing'}  ></ListComponent>
                <Divider />
                <ListComponent isClickable={true} hasAvatar type={2} title={'Episode 4'}  overline={'Season 1'}  body={'testing'}  ></ListComponent>
              </div>
            </Grid>

          </Grid>
        </section>
    )
}
