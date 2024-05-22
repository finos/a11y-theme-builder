/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */

import React from 'react';
import { Atom, Molecule, Organism } from '@finos/a11y-theme-builder-sdk';
import { Grid } from '@mui/material';


interface Props {
    item?: Atom | Molecule | Organism;
    children?: React.ReactNode;
    title?: string;
}

export const ExampleSection: React.FC<Props> = ({item, children, title}) => {

    const heading = title ? title : "Example"
    return (
        <>
        <Grid container spacing={2} columns={12} margin={2}>
          <Grid item spacing={2} lg={12} md={12} sm={12}>
            <h6 className="section-header">{heading}</h6>
            <div className="top40 section-body">
                {children}
            </div>
          </Grid>
        </Grid>
        </>
    )
}
