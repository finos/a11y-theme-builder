/**
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React from 'react';
import { Grid } from '@mui/material';
import { CardSample } from '../../pages/components/cards/CardSample';

interface Props {
    style?: any;
    children?: React.ReactNode;
    className?: string;
}

export const StatIconCardsClickable: React.FC<Props> = ({ className = '' }) => {
    return (
        <section className={'centered ' + className}>
            <Grid
                justifyContent="center"
                container
                spacing={2}
                columns={12}
                margin={2}
            >
                <Grid justifyContent="center" item spacing={2} xl={10} sm={12}>
                    <h2>Title</h2>
                    <div className="body1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </div>
                </Grid>
                <Grid
                    justifyContent="center"
                    item
                    spacing={2}
                    xl={10}
                    sm={12}
                    className="cardSection"
                >
                    <CardSample
                        color="primary"
                        icon={true}
                        stat={true}
                        className="fixed"
                        title="Title"
                        clickable={true}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </CardSample>
                    <CardSample
                        color="primary"
                        icon={true}
                        stat={true}
                        className="fixed"
                        title="Title"
                        clickable={true}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </CardSample>
                    <CardSample
                        color="primary"
                        icon={true}
                        stat={true}
                        className="fixed"
                        title="Title"
                        clickable={true}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </CardSample>
                    <CardSample
                        color="primary"
                        icon={true}
                        stat={true}
                        className="fixed"
                        title="Title"
                        clickable={true}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </CardSample>
                </Grid>
            </Grid>
        </section>
    );
};
