/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { Breadcrumbs, Button, Link, Typography, Grid } from '@mui/material';
import { HeroColorModeSelector } from '../content/HeroColorModeSelector';
import { Hero } from "../../mui-a11y-tb/components/Hero";
import { HeroImage } from "../../mui-a11y-tb/components/HeroImage";
import { HeroVideo } from "../../mui-a11y-tb/components/HeroVideo";
import { HeroInlineImage } from "../../mui-a11y-tb/components/HeroInlineImage";
import { HeroBackgroundVideo } from "../../mui-a11y-tb/components/HeroBackgroundVideo";
import { ExampleSection } from '../content/ExampleSection';

interface Props {
    colorMode?: string;
}

export const HeroExample: React.FC<Props> = ({colorMode=""}) => {
    return (


      <div>
        <h5>Standard Hero</h5>
        <Hero className={"colored " + colorMode} >
          <Grid container spacing={2} columns={12} margin={2}>
            <Grid xs={12}>
              <Breadcrumbs aria-label="breadcrumb" className="breadcrumbs">
                  <Link>Home</Link>
                  <Link>Page</Link>
                  <Typography>Page</Typography>
              </Breadcrumbs>
            </Grid>
            <Grid spacing={2} className="heroBox" lg={8} md={10} sm={12}>
              <div className="title">Hero title</div>
              <div className="body">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                </p>
                <Button>Get Started</Button>
              </div>
            </Grid>
          </Grid>
        </Hero>
        <div className={"herowithOverlay " + colorMode } >
          <h5 className="top40">Hero with Background Image</h5>
          <HeroImage className={"backgroundImage colored " + colorMode}>
            <Grid container spacing={2} columns={12} margin={2}>
              <Grid  xs={12}>
                <Breadcrumbs aria-label="breadcrumb" className="breadcrumbs">
                    <Link>Home</Link>
                    <Link>Page</Link>
                    <Typography>Page</Typography>
                </Breadcrumbs>
              </Grid>
              <Grid lg={8} md={10} sm={12}>
                <div className="title">Hero title</div>
                <div className="body">
                  <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                  </p>
                  <Button>Get Started</Button>
                </div>
              </Grid>
            </Grid>
          </HeroImage>
        </div>
        <h5 className="top40">Hero with Image</h5>
        <HeroInlineImage className={"HeroInlineImage colored " + colorMode} >
          <Grid container spacing={2} columns={12} margin={1}>
            <Grid item xs={12}>
              <Breadcrumbs aria-label="breadcrumb" className="breadcrumbs">
                  <Link>Home</Link>
                  <Link>Page</Link>
                  <Typography>Page</Typography>
              </Breadcrumbs>
            </Grid>
            <Grid item lg={8} md={12}>
              <div className="title">Hero title</div>
            </Grid>
            <Grid item lg={8} md={6}   sx={{ order: { sm: 5, md: 4, lg: 4 } }} >
              <div className="body">
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
        <h5 className="top40">Hero with Video</h5>
        <HeroVideo className={"inlineVideo colored " + colorMode} >
          <Grid container spacing={2} columns={12} margin={2}>
            <Grid item xs={12}>
              <Breadcrumbs aria-label="breadcrumb" className="breadcrumbs">
                  <Link>Home</Link>
                  <Link>Page</Link>
                  <Typography>Page</Typography>
              </Breadcrumbs>
            </Grid>
            <Grid lg={8} md={12}>
              <div className="title">Hero title</div>
            </Grid>
            <Grid lg={8} md={12}>
              <div className="body">
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
        <div className={"herowithOverlay " + colorMode } >
          <h5 className="backgroundVideo top40">Full Page Hero with Background Video</h5>
          <HeroBackgroundVideo className={"backgroundVideo colored " + colorMode} >
            <video className="bgVideo" src="https://css-tricks-post-videos.s3.us-east-1.amazonaws.com/blurry-trees.mov" autoPlay loop playsInline muted></video>
            <Grid className="videoHeader" container spacing={2} columns={12} margin={2}>
              <Grid lg={8} md={12}>
                <div className="title">Hero title</div>
              </Grid>
              <Grid lg={8} md={12}>
                <div className="body">
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
    )
}
