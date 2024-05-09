/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React from 'react';
import { Grid } from '@mui/material';

const MoleculeIntro: React.FC = () => {
  return (
    <>
      <Grid container spacing={2} columns={12} margin={2}>
        <Grid item spacing={2} lg={12} md={12} sm={12}>
          <h1>Molecules</h1>
          <div>
            <h5>Getting Started with Molecules</h5>
            <p>
              Next, you will assign your atomic design values to the molecules
              to build the core components of your design language.
            </p>
            <p>There are both desktop and mobile components.</p>
            <p>
              At any point you can preview your designs, the components created
              and the outputted code.
            </p>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default MoleculeIntro;
