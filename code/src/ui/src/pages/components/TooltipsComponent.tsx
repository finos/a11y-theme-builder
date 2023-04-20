/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import { Button, Grid } from '@mui/material';
import React from 'react';
import { HeadingSection } from '../content/HeadingSection';
import { ExampleSection } from '../content/ExampleSection';
import { Tooltip } from '../../mui-a11y-tb/components/Tooltip';

interface Props {
}

export const TooltipsComponent: React.FC<Props> = () => {
    return (
        <div className="content">
            <HeadingSection title='Desktop' heading='Tooltips'></HeadingSection>
            <ExampleSection>
            <Grid container justifyContent="center" sx={{marginBottom: "12px"}}>
                <Grid item>
                    <Tooltip title="Tooltip on Top" placement="top">
                        <Button>Tooltip on Top</Button>
                    </Tooltip>
                </Grid>
            </Grid>
            <Grid container justifyContent="center" spacing={2}>
                <Grid item xs={3}>
                    <Tooltip title="Tooltip on Left" placement="left">
                        <Button>Tooltip on Left</Button>
                    </Tooltip>
                </Grid>
                <Grid item container xs={3} alignItems="flex-end" direction="column">
                    <Grid item>
                        <Tooltip title="Tooltip on Right" placement="right">
                            <Button>Tooltip on Right</Button>
                        </Tooltip>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container justifyContent="center"sx={{marginTop: "12px"}}>
                <Grid item>
                    <Tooltip title="Tooltip on Bottom" placement="bottom">
                        <Button>Tooltip on Bottom</Button>
                    </Tooltip>
                </Grid>
            </Grid>
            </ExampleSection>
        </div>
    )
}
