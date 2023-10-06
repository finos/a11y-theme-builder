/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { Breadcrumbs, Button, Link, Typography, Grid } from '@mui/material';
import { SectionColorModeSelector } from '../content/SectionColorModeSelector';
import { HeadingSection } from '../../pages/content/HeadingSection';
import { ExampleSection } from '../content/ExampleSection';
import { Hero } from "../../mui-a11y-tb/components/Hero";
import { HeroImage } from "../../mui-a11y-tb/components/HeroImage";
import { HeroVideo } from "../../mui-a11y-tb/components/HeroVideo";
import { HeroInlineImage } from "../../mui-a11y-tb/components/HeroInlineImage";
import { HeroBackgroundVideo } from "../../mui-a11y-tb/components/HeroBackgroundVideo";

interface Props {
    colorMode?: string;
}


export const HeroExample: React.FC<Props> = ({ }) => {
    const [colorMode, setColorMode] = useState<string>("colored");

    return (
      <div>
        <HeadingSection title="organisms" heading="Hero" />
        <SectionColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
        </SectionColorModeSelector>
        <div className="section-demos" data-background={colorMode}>
            <div className="demo-title subtitle1 top40">Standard Hero</div>
            <Hero color={colorMode} >
              <Grid container spacing={2} columns={12} margin={2}>
                <Grid xs={12}>
                  <Breadcrumbs aria-label="breadcrumb" className="breadcrumbs">
                      <Link>Home</Link>
                      <Link>Page</Link>
                      <Typography>Page</Typography>
                  </Breadcrumbs>
                </Grid>
                <Grid spacing={2} className="heroBox" lg={8} md={10} sm={12}>
                  <h1>Hero title</h1>
                  <div className="body1">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                    </p>
                    <Button>Get Started</Button>
                  </div>
                </Grid>
              </Grid>
            </Hero>
            <div className="herowithOverlay" data-background={colorMode} >
              <div className="demo-title subtitle1 top40">Hero with Background Image</div>
              <HeroImage className="backgroundImage" data-background={colorMode}>
                <svg className="image-overlay" width="100%" height="100%">
                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stop-color="var(--color-1)"></stop>
                      <stop offset="100%" stop-color="var(--color-2)"></stop>
                    </linearGradient>

                    <pattern id="checkerboard" patternUnits="userSpaceOnUse"
                    width="2" height="2">
                        <rect x="0" y="0" width="1" height="1" />
                        <rect x="1" y="1" width="1" height="1" />
                    </pattern>

                    <mask id="mask">
                      <rect width="100%" height="100%" fill="url(#checkerboard)" />
                    </mask>
                  </defs>
                  <rect x={0} y={0} width="100%" height="100%" fill="url(#grad)" mask="url(#mask)"/>
                </svg>
                <Grid container spacing={2} columns={12} margin={2}>
                  <Grid  xs={12}>
                    <Breadcrumbs aria-label="breadcrumb" className="breadcrumbs">
                        <Link>Home</Link>
                        <Link>Page</Link>
                        <Typography>Page</Typography>
                    </Breadcrumbs>
                  </Grid>
                  <Grid lg={8} md={10} sm={12}>
                    <h1>Hero title</h1>
                    <div className="body1">
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                      </p>
                      <Button>Get Started</Button>
                    </div>
                  </Grid>
                </Grid>

              </HeroImage>
            </div>
            <div className="demo-title subtitle1 top40">Hero with Image</div>
            <HeroInlineImage className="HeroInlineImage" data-background={colorMode} >
              <Grid container spacing={2} columns={12} margin={2}>
                <Grid item xs={12}>
                  <Breadcrumbs aria-label="breadcrumb" className="breadcrumbs">
                      <Link>Home</Link>
                      <Link>Page</Link>
                      <Typography>Page</Typography>
                  </Breadcrumbs>
                </Grid>
                <Grid item lg={8} md={12}>
                  <h1>Hero title</h1>
                </Grid>
                <Grid item lg={8} md={6}   sx={{ order: { sm: 5, md: 4, lg: 4 } }} >
                  <div className="body1">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                    </p>
                    <Button>Get Started</Button>
                  </div>
                </Grid>
                <Grid item lg={4} md={6} sm={12} sx={{ order: { sm: 4, md: 5, lg: 5 } }} >
                  <div className="inline-image">
                    <img src="/sample.jpg" alt="Sample Image"/>
                  </div>
                </Grid>
              </Grid>
            </HeroInlineImage>
              <div className="demo-title subtitle1 top40">Hero with Video</div>
            <HeroVideo className="inlineVideo" data-background={colorMode} >
              <Grid container spacing={2} columns={12} margin={2}>
                <Grid item xs={12}>
                  <Breadcrumbs aria-label="breadcrumb" className="breadcrumbs">
                      <Link>Home</Link>
                      <Link>Page</Link>
                      <Typography>Page</Typography>
                  </Breadcrumbs>
                </Grid>
                <Grid lg={8} md={12}>
                  <h1>Hero title</h1>
                </Grid>
                <Grid lg={8} md={12}>
                  <div className="body1">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                    </p>
                    <div className="video-container">
                    <iframe className="video" src="https://player.vimeo.com/video/285086929"></iframe>

                    </div>
                  </div>
                </Grid>
                <Grid sm={12}>
                  <Button>Get Started</Button>
                </Grid>
              </Grid>
            </HeroVideo>
            <div className="herowithOverlay" >
              <div className="demo-title subtitle1 backgroundVideo top40">Full Page Hero with Background Video</div>
              <HeroBackgroundVideo className="backgroundVideo"  data-background={colorMode}>
                <video className="bgVideo" src="https://css-tricks-post-videos.s3.us-east-1.amazonaws.com/blurry-trees.mov" autoPlay loop playsInline muted></video>
                <div className="overlay-holder">
                  <svg className="image-overlay" width="100%" height="100%">
                    <defs>
                      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="var(--color-1)"></stop>
                        <stop offset="100%" stop-color="var(--color-2)"></stop>
                      </linearGradient>

                      <pattern id="checkerboard" patternUnits="userSpaceOnUse"
                      width="3" height="3">
                          <rect x="0" y="0" width="1.5" height="1.5" />
                          <rect x="1.5" y="1.5" width="1.5" height="1.5" />
                      </pattern>

                      <mask id="mask">
                        <rect width="100%" height="100%" fill="url(#checkerboard)" />
                      </mask>
                    </defs>
                    <rect x={0} y={0} width="100%" height="100%" fill="url(#grad)" mask="url(#mask)"/>
                  </svg>
                </div>
                <Grid className="videoHeader" container spacing={2} columns={12} margin={2}>
                  <Grid lg={8} md={12}>
                    <h1>Hero title</h1>
                  </Grid>
                  <Grid lg={8} md={12}>
                    <div className="body1">
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                      </p>
                    </div>
                  </Grid>
                  <Grid sm={12}>
                    <Button>Get Started</Button>
                  </Grid>
                </Grid>
              </HeroBackgroundVideo>
            </div>
        </div>
      </div>


    )
}
