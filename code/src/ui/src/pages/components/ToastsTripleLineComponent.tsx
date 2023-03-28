import React from 'react';
import { HeadingSection } from '../content/HeadingSection';
import { Alert, Button, IconButton } from '@mui/material';
import { Stack } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';


interface Props {
}

export const ToastsTripleLineComponent: React.FC<Props> = () => {

    const bodyText   = <div className="body2">Lorem ipsum dolor sit amet consectetur.</div>

    return (
        <div className="content">
            <HeadingSection title='Desktop' heading='Toasts - Triple Line'></HeadingSection>
            <section>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="subtitle1">Standard Single Line</div>
                        <Stack sx={{ width: '100%' }} spacing={2}>
                            <Alert severity="error">
                                <div className="overline">OVERLINE</div> Toast Title {bodyText}
                                </Alert>
                            <Alert severity="warning">
                                <div className="overline">OVERLINE</div> Toast Title {bodyText}</Alert>
                            <Alert severity="success">
                                <div className="overline">OVERLINE</div> Toast Title {bodyText}</Alert>
                            <Alert severity="info">
                                <div className="overline">OVERLINE</div> Toast Title {bodyText}</Alert>
                        </Stack>
                    </div>
                </div>
            </section>
            <section>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="subtitle1">Single Line with Close</div>
                        <Stack sx={{ width: '100%' }} spacing={2}>
                            <Alert severity="error" 
                                action={<IconButton><CloseIcon/></IconButton>}>
                                <div className="overline">OVERLINE</div> Toast Title {bodyText}</Alert>
                            <Alert severity="warning" action={<IconButton><CloseIcon/></IconButton>}>
                                <div className="overline">OVERLINE</div> Toast Title {bodyText}</Alert>
                            <Alert severity="success" action={<IconButton><CloseIcon/></IconButton>}>
                                <div className="overline">OVERLINE</div> Toast Title {bodyText}</Alert>
                            <Alert severity="info" action={<IconButton><CloseIcon/></IconButton>}>
                                <div className="overline">OVERLINE</div> Toast Title {bodyText}</Alert>
                        </Stack>
                    </div>
                </div>
            </section>
            <section>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="subtitle1">Single Line with Button</div>
                        <Stack sx={{ width: '100%' }} spacing={2}>
                            <Alert severity="error" 
                                action={<IconButton><CloseIcon/></IconButton>}>
                                <div className="overline">OVERLINE</div> 
                                Toast Title {bodyText} <br/><Button sx={{margin: "12px"}}>Button</Button></Alert>
                            <Alert severity="warning" action={<IconButton><CloseIcon/></IconButton>}>
                                <div className="overline">OVERLINE</div> 
                                Toast Title {bodyText} <br/><Button sx={{margin: "12px"}}>Button</Button></Alert>
                            <Alert severity="success" action={<IconButton><CloseIcon/></IconButton>}>
                                <div className="overline">OVERLINE</div> 
                                Toast Title {bodyText} <br/><Button sx={{margin: "12px"}}>Button</Button></Alert>
                            <Alert severity="info" action={<IconButton><CloseIcon/></IconButton>}>
                                <div className="overline">OVERLINE</div> 
                                Toast Title {bodyText} <br/><Button sx={{margin: "12px"}}>Button</Button></Alert>
                        </Stack>
                    </div>
                </div>
            </section>
        </div>
    )
}
