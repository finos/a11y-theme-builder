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

export const StandardCards: React.FC<Props> = ({ className = '' }) => {
    return (
        <section className={className}>
            <Grid container spacing={2} columns={12} margin={2}>
                <Grid item spacing={2} lg={10} md={10} sm={12}>
                    <h2>Responsive Cards, Left Aligned, Two Buttons</h2>
                    <div className="body1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </div>
                </Grid>
                <Grid
                    item
                    spacing={2}
                    xl={3}
                    lg={4}
                    md={6}
                    sm={12}
                    xs={12}
                    className="cardSection"
                >
                    <CardSample color="primary" title="Title">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </CardSample>
                </Grid>
                <Grid
                    item
                    spacing={2}
                    xl={3}
                    lg={4}
                    md={6}
                    sm={12}
                    xs={12}
                    className="cardSection"
                >
                    <CardSample color="primary" title="Title">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </CardSample>
                </Grid>
                <Grid
                    item
                    spacing={2}
                    xl={3}
                    lg={4}
                    md={6}
                    sm={12}
                    xs={12}
                    className="cardSection"
                >
                    <CardSample color="primary" title="Title">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </CardSample>
                </Grid>
                <Grid
                    item
                    spacing={2}
                    xl={3}
                    lg={4}
                    md={6}
                    sm={12}
                    xs={12}
                    className="cardSection"
                >
                    <CardSample color="primary" title="Title">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </CardSample>
                </Grid>
            </Grid>
            <Grid container spacing={2} columns={12} margin={2}>
                <Grid item spacing={2} lg={12} md={12} sm={12}>
                    <h2>Responsive Cards, Left Aligned, One Buttons</h2>
                    <div className="body1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </div>
                </Grid>
                <Grid
                    item
                    spacing={2}
                    xl={3}
                    lg={4}
                    md={6}
                    sm={12}
                    xs={12}
                    className="cardSection"
                >
                    <CardSample
                        color="primary"
                        title="Title"
                        hideSecondary={true}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </CardSample>
                </Grid>
                <Grid
                    item
                    spacing={2}
                    xl={3}
                    lg={4}
                    md={6}
                    sm={12}
                    xs={12}
                    className="cardSection"
                >
                    <CardSample
                        color="primary"
                        title="Title"
                        hideSecondary={true}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </CardSample>
                </Grid>
                <Grid
                    item
                    spacing={2}
                    xl={3}
                    lg={4}
                    md={6}
                    sm={12}
                    xs={12}
                    className="cardSection"
                >
                    <CardSample
                        color="primary"
                        title="Title"
                        hideSecondary={true}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </CardSample>
                </Grid>
                <Grid
                    item
                    spacing={2}
                    xl={3}
                    lg={4}
                    md={6}
                    sm={12}
                    xs={12}
                    className="cardSection"
                >
                    <CardSample
                        color="primary"
                        title="Title"
                        hideSecondary={true}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </CardSample>
                </Grid>
            </Grid>
            <Grid container spacing={2} columns={12} margin={2}>
                <Grid item spacing={2} lg={12} md={12} sm={12}>
                    <h2>Responsive Cards, Left Aligned, Hotlink</h2>
                    <div className="body1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </div>
                </Grid>
                <Grid
                    item
                    spacing={2}
                    xl={3}
                    lg={4}
                    md={6}
                    sm={12}
                    xs={12}
                    className="cardSection"
                >
                    <CardSample color="primary" title="Title" hotlink={true}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </CardSample>
                </Grid>
                <Grid
                    item
                    spacing={2}
                    xl={3}
                    lg={4}
                    md={6}
                    sm={12}
                    xs={12}
                    className="cardSection"
                >
                    <CardSample color="primary" title="Title" hotlink={true}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </CardSample>
                </Grid>
                <Grid
                    item
                    spacing={2}
                    xl={3}
                    lg={4}
                    md={6}
                    sm={12}
                    xs={12}
                    className="cardSection"
                >
                    <CardSample color="primary" title="Title" hotlink={true}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </CardSample>
                </Grid>
                <Grid
                    item
                    spacing={2}
                    xl={3}
                    lg={4}
                    md={6}
                    sm={12}
                    xs={12}
                    className="cardSection"
                >
                    <CardSample color="primary" title="Title" hotlink={true}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </CardSample>
                </Grid>
                <Grid container spacing={2} columns={12} margin={2}>
                    <Grid item spacing={2} lg={12} md={12} sm={12}>
                        <h2>Responsive Cards, Left Aligned, Clickable</h2>
                        <div className="body1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </div>
                    </Grid>
                    <Grid
                        item
                        spacing={2}
                        xl={3}
                        lg={4}
                        md={6}
                        sm={12}
                        xs={12}
                        className="cardSection"
                    >
                        <CardSample
                            color="primary"
                            title="Title"
                            clickable={true}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua
                        </CardSample>
                    </Grid>
                    <Grid
                        item
                        spacing={2}
                        xl={3}
                        lg={4}
                        md={6}
                        sm={12}
                        xs={12}
                        className="cardSection"
                    >
                        <CardSample
                            color="primary"
                            title="Title"
                            clickable={true}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua
                        </CardSample>
                    </Grid>
                    <Grid
                        item
                        spacing={2}
                        xl={3}
                        lg={4}
                        md={6}
                        sm={12}
                        xs={12}
                        className="cardSection"
                    >
                        <CardSample
                            color="primary"
                            title="Title"
                            clickable={true}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua
                        </CardSample>
                    </Grid>
                    <Grid
                        item
                        spacing={2}
                        xl={3}
                        lg={4}
                        md={6}
                        sm={12}
                        xs={12}
                        className="cardSection"
                    >
                        <CardSample
                            color="primary"
                            title="Title"
                            clickable={true}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua
                        </CardSample>
                    </Grid>
                </Grid>
            </Grid>
        </section>
    );
};
