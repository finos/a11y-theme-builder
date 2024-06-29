/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React from 'react';
import { Grid } from '@mui/material';

const OrganismIntro: React.FC = () => {
    return (
        <>
            <Grid container spacing={2} columns={12} margin={2}>
                <Grid item spacing={2} lg={12} md={12} sm={12}>
                    <h1>Organisms</h1>
                    <div>
                        <div>
                            <p>
                                The input that we gather from the user as Atom
                                and Molecule settings help us create design
                                system styles and components. These components
                                can be combined together to create organisms,
                                which represnt common design patterns with
                                various background colors. In organisms we layer
                                the components on these backgrounds in a way to
                                assure accessibility contrast and spacing
                                requirements are met.
                            </p>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </>
    );
};

export default OrganismIntro;
