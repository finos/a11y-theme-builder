/**
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React from 'react';
import { Grid } from '@mui/material';

interface Props {
    changeTab(newTabIndex: string): void;
}

const AtomicIntro: React.FC<Props> = ({ changeTab }) => {
    return (
        <>
            <Grid container spacing={2} columns={12} margin={2}>
                <Grid item spacing={2} lg={12} md={12} sm={12}>
                    <h1>Atoms</h1>
                    <div>
                        <h5>Getting Started with Atoms</h5>
                        <p>
                            To get started you will define your atoms, which are
                            the very basic building blocks of your design
                            language.
                        </p>
                        <p>
                            Complete the following two steps to unlock the rest
                            of the tool:
                        </p>
                        <ol>
                            <li>
                                Define your{' '}
                                <a
                                    onClick={(event) =>
                                        changeTab('colorPalette')
                                    }
                                >
                                    Color Palette
                                </a>
                            </li>
                            <li>
                                Define your{' '}
                                <a
                                    onClick={(event) =>
                                        changeTab('colorThemes')
                                    }
                                >
                                    Color Theme
                                </a>
                            </li>
                        </ol>
                        <p></p>
                        <h6>Have Fun!</h6>
                    </div>
                </Grid>
            </Grid>
        </>
    );
};

export default AtomicIntro;
