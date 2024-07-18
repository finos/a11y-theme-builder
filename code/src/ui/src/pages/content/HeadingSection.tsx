/**
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
    heading?: string;
}

export const HeadingSection: React.FC<Props> = ({
    item,
    children,
    title,
    heading,
}) => {
    const getType = () => {
        if (item instanceof Atom) {
            return 'Atom';
        }
        if (item instanceof Molecule) {
            return 'Molecule';
        }
        if (item instanceof Organism) {
            return 'Organism';
        }
        return '';
    };

    return (
        <>
            <Grid container spacing={2} columns={12} margin={2}>
                <Grid item spacing={2} lg={12} md={12} sm={12}>
                    <div className="overline-large">{title || item?.name}</div>
                    <h1>{heading || item?.name}</h1>
                    <div>
                        {children}
                        {!children && item && (
                            <div>
                                TODO: Add description for{' '}
                                {item?.name || heading} {getType()}.
                            </div>
                        )}
                    </div>
                </Grid>
            </Grid>
        </>
    );
};
