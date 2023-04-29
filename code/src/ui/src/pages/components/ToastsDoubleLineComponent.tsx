/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React from 'react';
import { HeadingSection } from '../content/HeadingSection';
import { ExampleSection } from '../content/ExampleSection';
import { Alert, Button, IconButton } from '@mui/material';
import { Stack } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';


interface Props {
}

export const ToastsDoubleLineComponent: React.FC<Props> = () => {

    return (
        <div className="content">
            <HeadingSection title='Desktop' heading='Toasts - Double Line'></HeadingSection>
            <ExampleSection>
            <section>
                <div className="row">
                    <div className="col-lg-6">
                        <h6>Standard Single Line</h6>
                        <Stack sx={{ width: '100%' }} spacing={2}>
                            <Alert severity="error">
                                <div className="overline">OVERLINE</div> Toast Title</Alert>
                            <Alert severity="warning">
                                <div className="overline">OVERLINE</div> Toast Title</Alert>
                            <Alert severity="success">
                                <div className="overline">OVERLINE</div> Toast Title</Alert>
                            <Alert severity="info">
                                <div className="overline">OVERLINE</div> Toast Title</Alert>
                        </Stack>
                    </div>
                </div>
            </section>
            <section>
                <div className="row">
                    <div className="col-lg-6">
                        <h6>Single Line with Close</h6>
                        <Stack sx={{ width: '100%' }} spacing={2}>
                            <Alert severity="error"
                                action={<IconButton className="small-btn MuiButton-text icon"><CloseIcon/></IconButton>}>
                                <div className="overline">OVERLINE</div> Toast Title</Alert>
                            <Alert severity="warning" action={<IconButton className="small-btn MuiButton-text icon"><CloseIcon/></IconButton>}>
                                <div className="overline">OVERLINE</div> Toast Title</Alert>
                            <Alert severity="success" action={<IconButton className="small-btn MuiButton-text icon"><CloseIcon/></IconButton>}>
                                <div className="overline">OVERLINE</div> Toast Title</Alert>
                            <Alert severity="info" action={<IconButton className="small-btn MuiButton-text icon"><CloseIcon/></IconButton>}>
                                <div className="overline">OVERLINE</div> Toast Title</Alert>
                        </Stack>
                    </div>
                </div>
            </section>
            <section>
                <div className="row">
                    <div className="col-lg-6">
                        <h6>Single Line with Button</h6>
                        <Stack sx={{ width: '100%' }} spacing={2}>
                            <Alert severity="error"
                                action={<IconButton className="small-btn MuiButton-text icon"><CloseIcon/></IconButton>}>
                                <div className="overline">OVERLINE</div>
                                Toast Title <br/><Button className="small-btn">Button</Button></Alert>
                            <Alert severity="warning" action={<IconButton className="small-btn MuiButton-text icon"><CloseIcon/></IconButton>}>
                                <div className="overline">OVERLINE</div>
                                Toast Title <br/><Button className="small-btn">Button</Button></Alert>
                            <Alert severity="success" action={<IconButton className="small-btn MuiButton-text icon"><CloseIcon/></IconButton>}>
                                <div className="overline">OVERLINE</div>
                                Toast Title <br/><Button className="small-btn">Button</Button></Alert>
                            <Alert severity="info" action={<IconButton className="small-btn MuiButton-text icon"><CloseIcon/></IconButton>}>
                                <div className="overline">OVERLINE</div>
                                Toast Title <br/><Button className="small-btn">Button</Button></Alert>
                        </Stack>
                    </div>
                </div>
            </section>
            </ExampleSection>
        </div>
    )
}
