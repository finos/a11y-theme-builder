/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { HeadingSection } from '../content/HeadingSection';
import { Button, Grid, Popover, Typography } from '@mui/material';
import { ExampleSection } from '../content/ExampleSection';

interface Props {
}

export const PopoversComponent: React.FC<Props> = () => {
    const [anchorTop, setAnchorTop]             = useState(null)
    const openPopoverTop = (event: any)         => { setAnchorTop(event.currentTarget) }
    const [anchorRight, setAnchorRight]         = useState(null)
    const openPopoverRight = (event: any)       => { setAnchorRight(event.currentTarget) }
    const [anchorBottom, setAnchorBottom]       = useState(null)
    const openPopoverBottom = (event: any)      => { setAnchorBottom(event.currentTarget) }
    const [anchorLeft, setAnchorLeft]           = useState(null)
    const openPopoverLeft = (event: any)        => { setAnchorLeft(event.currentTarget) }

    const [anchorTopTitle, setAnchorTopTitle]       = useState(null)
    const openPopoverTopTitle = (event: any)        => { setAnchorTopTitle(event.currentTarget) }
    const [anchorRightTitle, setAnchorRightTitle]   = useState(null)
    const openPopoverRightTitle = (event: any)      => { setAnchorRightTitle(event.currentTarget) }
    const [anchorBottomTitle, setAnchorBottomTitle] = useState(null)
    const openPopoverBottomTitle = (event: any)     => { setAnchorBottomTitle(event.currentTarget) }
    const [anchorLeftTitle, setAnchorLeftTitle]     = useState(null)
    const openPopoverLeftTitle = (event: any)       => { setAnchorLeftTitle(event.currentTarget) }

    const refContainer = React.useRef(null);

    return (
        <div className="content">
            <HeadingSection title='Desktop' heading='Popovers'></HeadingSection>
            <ExampleSection>
                <h6>Popover</h6>
                <Grid container rowSpacing={1} columnSpacing={3}>
                    <Grid item>
                        <Button variant="contained" onClick={openPopoverTop}>
                            Popover on Top
                        </Button>
                        <Popover
                            open={Boolean(anchorTop)}
                            onClose={() => setAnchorTop(null)}
                            anchorEl={anchorTop}
                            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                            transformOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            container={refContainer.current}
                        >
                            <Typography sx={{ p: 2 }}>Top Popover</Typography>
                        </Popover>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" onClick={openPopoverRight}>
                            Popover on Right
                        </Button>
                        <Popover
                            open={Boolean(anchorRight)}
                            onClose={() => setAnchorRight(null)}
                            anchorEl={anchorRight}
                            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                            container={refContainer.current}
                        >
                            <Typography sx={{ p: 2 }}>Right Popover</Typography>
                        </Popover>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" onClick={openPopoverBottom}>
                            Popover on Bottom
                        </Button>
                        <Popover
                            open={Boolean(anchorBottom)}
                            onClose={() => setAnchorBottom(null)}
                            anchorEl={anchorBottom}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                            container={refContainer.current}
                        >
                            <Typography sx={{ p: 2 }}>Bottom Popover</Typography>
                        </Popover>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" onClick={openPopoverLeft}>
                            Popover on Left
                        </Button>
                        <Popover
                            open={Boolean(anchorLeft)}
                            onClose={() => setAnchorLeft(null)}
                            anchorEl={anchorLeft}
                            anchorOrigin={{ vertical: 'center', horizontal: 'left' }}
                            transformOrigin={{ vertical: 'center', horizontal: 'right' }}
                            container={refContainer.current}
                        >
                            <Typography sx={{ p: 2 }}>Left Popover</Typography>
                        </Popover>
                    </Grid>
                </Grid>
                
                <h6>Popover with Title</h6>
                <Grid container rowSpacing={1} columnSpacing={3}>
                    <Grid item>
                        <Button variant="contained" onClick={openPopoverTopTitle}>
                            Popover on Top
                        </Button>
                        <Popover
                            open={Boolean(anchorTopTitle)}
                            onClose={() => setAnchorTopTitle(null)}
                            anchorEl={anchorTopTitle}
                            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                            transformOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            container={refContainer.current}
                        >
                            <Typography sx={{ p: 2 }}><h4>Popover Title</h4>Top Popover</Typography>
                        </Popover>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" onClick={openPopoverRightTitle}>
                            Popover on Right
                        </Button>
                        <Popover
                            open={Boolean(anchorRightTitle)}
                            onClose={() => setAnchorRightTitle(null)}
                            anchorEl={anchorRightTitle}
                            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                            container={refContainer.current}
                        >
                            <Typography sx={{ p: 2 }}><h4>Popover Title</h4>Right Popover</Typography>
                        </Popover>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" onClick={openPopoverBottomTitle}>
                            Popover on Bottom
                        </Button>
                        <Popover
                            open={Boolean(anchorBottomTitle)}
                            onClose={() => setAnchorBottomTitle(null)}
                            anchorEl={anchorBottomTitle}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                            container={refContainer.current}
                        >
                            <Typography sx={{ p: 2 }}><h4>Popover Title</h4>Bottom Popover</Typography>
                        </Popover>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" onClick={openPopoverLeftTitle}>
                            Popover on Left
                        </Button>
                        <Popover
                            open={Boolean(anchorLeftTitle)}
                            onClose={() => setAnchorLeftTitle(null)}
                            anchorEl={anchorLeftTitle}
                            anchorOrigin={{ vertical: 'center', horizontal: 'left' }}
                            transformOrigin={{ vertical: 'center', horizontal: 'right' }}
                            container={refContainer.current}
                        >
                            <Typography sx={{ p: 2 }}><h4>Popover Title</h4>Left Popover</Typography>
                        </Popover>
                    </Grid>
                </Grid>
                <Typography ref={refContainer} component="span"></Typography>
            </ExampleSection>
        </div>
    )
}
