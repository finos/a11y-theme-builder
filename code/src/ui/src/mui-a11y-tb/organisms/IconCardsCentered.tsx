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
    colorMode?: string;
}

export const IconCardsCentered: React.FC<Props> = ({
    className = '',
    colorMode,
}) => {
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
                    <h2>
                        Cards Centered on Page, Left Aligned, Fixed Width, Two
                        Buttons
                    </h2>
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
                        className="fixed"
                        title="Title"
                        clickable={false}
                        data-background={colorMode}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </CardSample>

                    <CardSample
                        color="primary"
                        icon={true}
                        className="fixed"
                        title="Title"
                        data-background={colorMode}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </CardSample>

                    <CardSample
                        color="primary"
                        icon={true}
                        className="fixed"
                        title="Title"
                        data-background={colorMode}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </CardSample>

                    <CardSample
                        color="primary"
                        icon={true}
                        className="fixed"
                        title="Title"
                        data-background={colorMode}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </CardSample>
                </Grid>
            </Grid>
            <Grid
                justifyContent="center"
                container
                spacing={2}
                columns={12}
                margin={2}
            >
                <Grid justifyContent="center" item spacing={2} xl={10} sm={12}>
                    <h2>
                        Cards Centered on Page, Left Aligned, Fixed Width, One
                        Buttons
                    </h2>
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
                        className="fixed"
                        title="Title"
                        clickable={false}
                        hideSecondary={true}
                        data-background={colorMode}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </CardSample>
                    <CardSample
                        color="primary"
                        icon={true}
                        className="fixed"
                        title="Title"
                        hideSecondary={true}
                        data-background={colorMode}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </CardSample>
                    <CardSample
                        color="primary"
                        icon={true}
                        className="fixed"
                        title="Title"
                        hideSecondary={true}
                        data-background={colorMode}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </CardSample>
                    <CardSample
                        color="primary"
                        className="fixed"
                        title="Title"
                        hideSecondary={true}
                        data-background={colorMode}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </CardSample>
                </Grid>
            </Grid>
            <Grid
                justifyContent="center"
                container
                spacing={2}
                columns={12}
                margin={2}
            >
                <Grid justifyContent="center" item spacing={2} xl={10} sm={12}>
                    <h2>
                        Cards Centered on Page, Left Aligned, Fixed Width,
                        Hotlink
                    </h2>
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
                        className="fixed"
                        title="Title"
                        hotlink={true}
                        data-background={colorMode}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </CardSample>
                    <CardSample
                        color="primary"
                        icon={true}
                        className="fixed"
                        title="Title"
                        hotlink={true}
                        data-background={colorMode}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </CardSample>
                    <CardSample
                        color="primary"
                        icon={true}
                        className="fixed"
                        title="Title"
                        hotlink={true}
                        data-background={colorMode}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </CardSample>
                    <CardSample
                        color="primary"
                        icon={true}
                        className="fixed"
                        title="Title"
                        hotlink={true}
                        data-background={colorMode}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </CardSample>
                </Grid>
            </Grid>
            <Grid
                justifyContent="center"
                container
                spacing={2}
                columns={12}
                margin={2}
            >
                <Grid justifyContent="center" item spacing={2} xl={10} sm={12}>
                    <h2>
                        Cards Centered on Page, Left Aligned, Fixed Width,
                        Clickable
                    </h2>
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
                        className="fixed"
                        title="Title"
                        clickable={true}
                        data-background={colorMode}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </CardSample>
                    <CardSample
                        color="primary"
                        icon={true}
                        className="fixed"
                        title="Title"
                        clickable={true}
                        data-background={colorMode}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </CardSample>
                    <CardSample
                        color="primary"
                        icon={true}
                        className="fixed"
                        title="Title"
                        clickable={true}
                        data-background={colorMode}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </CardSample>
                    <CardSample
                        color="primary"
                        icon={true}
                        className="fixed"
                        title="Title"
                        clickable={true}
                        data-background={colorMode}
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
