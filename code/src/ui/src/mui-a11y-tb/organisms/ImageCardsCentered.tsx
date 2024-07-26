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

export const ImageCardsCentered: React.FC<Props> = ({ className = '' }) => {
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
                    <h3>Cards, Fixed Width, Centered with Two Buttons</h3>
                    <div className="body1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </div>
                </Grid>
                <Grid item spacing={2} xl={10} sm={12} className="cardSection">
                    <CardSample
                        color="primary"
                        className="fixed"
                        title="Title"
                        imagePath="/sample.jpg"
                        imageClassName="cinemascope"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </CardSample>

                    <CardSample
                        color="primary"
                        className="fixed"
                        title="Title"
                        imagePath="/sample.jpg"
                        imageClassName="cinemascope"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </CardSample>

                    <CardSample
                        color="primary"
                        className="fixed"
                        title="Title"
                        imagePath="/sample.jpg"
                        imageClassName="cinemascope"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </CardSample>

                    <CardSample
                        color="primary"
                        className="fixed"
                        title="Title"
                        imagePath="/sample.jpg"
                        imageClassName="cinemascope"
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
                    <h3>Cards, Fixed Width, Centered with One Button</h3>
                    <div className="body1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </div>
                </Grid>
                <Grid item spacing={2} xl={10} sm={12} className="cardSection">
                    <CardSample
                        color="primary"
                        hideSecondary={true}
                        className="fixed"
                        title="Title"
                        imagePath="/sample.jpg"
                        imageClassName="cinemascope"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </CardSample>

                    <CardSample
                        color="primary"
                        hideSecondary={true}
                        className="fixed"
                        title="Title"
                        imagePath="/sample.jpg"
                        imageClassName="cinemascope"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </CardSample>

                    <CardSample
                        color="primary"
                        hideSecondary={true}
                        className="fixed"
                        title="Title"
                        imagePath="/sample.jpg"
                        imageClassName="cinemascope"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </CardSample>

                    <CardSample
                        color="primary"
                        hideSecondary={true}
                        className="fixed"
                        title="Title"
                        imagePath="/sample.jpg"
                        imageClassName="cinemascope"
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
                    <h3>Cards, Fixed Width, Centered with Hotlink</h3>
                    <div className="body1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </div>
                </Grid>
                <Grid item spacing={2} xl={10} sm={12} className="cardSection">
                    <CardSample
                        color="primary"
                        hotlink={true}
                        className="fixed"
                        title="Title"
                        imagePath="/sample.jpg"
                        imageClassName="cinemascope"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </CardSample>

                    <CardSample
                        color="primary"
                        hotlink={true}
                        className="fixed"
                        title="Title"
                        imagePath="/sample.jpg"
                        imageClassName="cinemascope"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </CardSample>

                    <CardSample
                        color="primary"
                        hotlink={true}
                        className="fixed"
                        title="Title"
                        imagePath="/sample.jpg"
                        imageClassName="cinemascope"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </CardSample>

                    <CardSample
                        color="primary"
                        hotlink={true}
                        className="fixed"
                        title="Title"
                        imagePath="/sample.jpg"
                        imageClassName="cinemascope"
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
                    <h3>Cards, Fixed Width, Centered, Clickable</h3>
                    <div className="body1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </div>
                </Grid>
                <Grid item spacing={2} xl={10} sm={12} className="cardSection">
                    <CardSample
                        color="primary"
                        clickable={true}
                        className="fixed"
                        title="Title"
                        imagePath="/sample.jpg"
                        imageClassName="cinemascope"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </CardSample>

                    <CardSample
                        color="primary"
                        clickable={true}
                        className="fixed"
                        title="Title"
                        imagePath="/sample.jpg"
                        imageClassName="cinemascope"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </CardSample>

                    <CardSample
                        color="primary"
                        clickable={true}
                        className="fixed"
                        title="Title"
                        imagePath="/sample.jpg"
                        imageClassName="cinemascope"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </CardSample>

                    <CardSample
                        color="primary"
                        clickable={true}
                        className="fixed"
                        title="Title"
                        imagePath="/sample.jpg"
                        imageClassName="cinemascope"
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
