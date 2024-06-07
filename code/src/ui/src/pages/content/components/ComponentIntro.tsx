/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React from 'react'
import { Grid } from '@mui/material';

const ComponentIntro: React.FC = () => {

    return (
        <>
          <Grid container spacing={2} columns={12} margin={2}>
            <Grid item spacing={2} lg={12} md={12} sm={12}>
              <h1>Components</h1>
                <div>
                      <p> These are the core components of your design language, the most common widgets used in web and mobile applications.
                          The input that we gather from you for Atom and Molecule settings help us define design system styles that will be 
                          applied to components. This section is meant only to reflect the 
                         values that have already been chosen and does not allow you to further configure the design system.
                      </p>
                 </div>
            </Grid>
          </Grid>
        </>
    )
}

export default ComponentIntro;
