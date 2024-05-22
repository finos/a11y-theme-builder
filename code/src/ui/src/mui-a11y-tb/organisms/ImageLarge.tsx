/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React from 'react';
import { Grid } from '@mui/material';

interface Props {
    style?: any;
    children?: React.ReactNode;
    className?: string;
}

export const ImageLarge: React.FC<Props> = ({className=""}) => {
    return (
        <section className={className}>
          <Grid className="v-center" container spacing={2} columns={12} margin={2}>
            <Grid item spacing={2} justifyContent="center" className="v-center" lg={12} >
              <div className="inline-image" style={{ width: '100%', height: 'auto', maxHeight: '500px' }}>
                  <img src="/sample.jpg" />
              </div>
            </Grid>
          </Grid>
        </section>
    )
}
