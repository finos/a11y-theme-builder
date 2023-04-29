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

export const ToastsSingleLineComponent: React.FC<Props> = () => {

    return (
        <div className="content">
            <HeadingSection title='Desktop' heading='Toasts - Single Line'></HeadingSection>
            <ExampleSection>
            <section>
                <div className="row">
                    <div className="col-lg-6">
                        <h6>Standard Single Line</h6>
                        <Stack sx={{ width: '100%' }} spacing={2}>
                            <Alert severity="error">Toast Title</Alert>
                            <Alert severity="warning">Toast Title</Alert>
                            <Alert severity="success">Toast Title</Alert>
                            <Alert severity="info">Toast Title</Alert>
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
                                action={<IconButton className="small-btn MuiButton-text icon"><CloseIcon/></IconButton>}>Toast Title</Alert>
                            <Alert severity="warning" action={<IconButton className="small-btn MuiButton-text icon"><CloseIcon/></IconButton>}>Toast Title</Alert>
                            <Alert severity="success" action={<IconButton className="small-btn MuiButton-text icon"><CloseIcon/></IconButton>}>Toast Title</Alert>
                            <Alert severity="info" action={<IconButton className="small-btn MuiButton-text icon"><CloseIcon/></IconButton>}>Toast Title</Alert>
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
                                Toast Title <br/><Button className="small-btn">Button</Button></Alert>
                            <Alert severity="warning" action={<IconButton className="small-btn MuiButton-text icon"><CloseIcon/></IconButton>}>
                                Toast Title <br/><Button className="small-btn">Button</Button></Alert>
                            <Alert severity="success" action={<IconButton className="small-btn MuiButton-text icon"><CloseIcon/></IconButton>}>
                                Toast Title <br/><Button className="small-btn">Button</Button></Alert>
                            <Alert severity="info" action={<IconButton className="small-btn MuiButton-text icon"><CloseIcon/></IconButton>}>
                                Toast Title <br/><Button className="small-btn">Button</Button></Alert>
                        </Stack>
                    </div>
                </div>
            </section>
            </ExampleSection>
        </div>
    )
}
