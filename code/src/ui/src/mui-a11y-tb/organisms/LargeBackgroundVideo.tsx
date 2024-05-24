/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React from 'react';
import { Grid } from '@mui/material';

interface Props {
    style?: any;
    children?: React.ReactNode;
    className?: string;
}

export const LargeBackgroundVideo: React.FC<Props> = ({className=""}) => {
    return (
        <section className={className}>
          <Grid className="v-center backgroundImage " container spacing={2} columns={12} margin={2}>
            <video src="https://css-tricks-post-videos.s3.us-east-1.amazonaws.com/blurry-trees.mov" autoPlay loop playsInline muted></video>
          </Grid>
        </section>
    )
}
