/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useEffect } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { LocaleMgr } from '../LocaleMgr';
import { Button, TextField } from '@mui/material';
import  { useState } from 'react'
import '../components/modals/Modals.css'

const prod = true;

interface ModalProps {
    isOpen: any;
    onClose: any;
    onSubmit: any;
    id: string;
    data: string;
}

const ModalDialog: React.FC<ModalProps> = ({isOpen, onClose, onSubmit, id, data}) => {

    const [text, setText] = useState(data);

    const handleSubmit = () => {
        onClose();
        onSubmit(text);
    }

    const handleCancel = () => {
        onClose();
    }

    const style:any = {
        width: "50%", 
        maxWidth: "600px", 
        overflow: "auto", 
        borderRadius: "var(--radius-2)", 
        display:"flex", 
        flexDirection:"column", 
        gap:"24px" 
    }

    if (!isOpen) return null
    return (
        <>
            <div className="overlay" onClick={onClose}></div>
            <div className='modal' style={style}>
                <h4 style={{margin:"0px"}}>Edit Locale Text</h4>
                <div>
                    Enter locale text for &nbsp; <b>{id}</b>:
                </div>
                <TextField
                    rows={6}
                    multiline
                    value={text}
                    sx={{ width: "100%" }}
                    onChange={(e) => setText(e.target.value)}
                />
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Button onClick={handleCancel}>Cancel</Button>
                    <Button onClick={handleSubmit}>Save</Button>
                </div>
            </div>
        </>
    )
}

interface Props {
    id: string;
}

export const LocaleMessage: React.FC<Props> = ({ id }) => {

    const [show, setShow] = useState<boolean>(false);
    const handleSubmit = (data:string) => {
        const lm = new LocaleMgr();
        lm.set({[id]: data});
    }

    const intl = useIntl();

    if (prod) {
        return(
            <FormattedMessage id={id} />
        );
    }

    const msg = intl.formatMessage({id:id});
    //console.log("LocaleMessage=",m);
    //@TODO: Consider a safer way to support HTML
    if (msg.indexOf("<") > -1) {
        return (
            <>
                <div dangerouslySetInnerHTML={{__html: msg}} onClick={() => setShow(true)} />
                <ModalDialog id={id} isOpen={show} onClose={() => setShow(false)} onSubmit={handleSubmit} data={msg}/>
            </>
        )
    }
    else {
        return (
            <span>
                <span onClick={() => setShow(true)}>{msg}</span>
                <ModalDialog id={id} isOpen={show} onClose={() => setShow(false)} onSubmit={handleSubmit} data={msg}/>
            </span>
        );
    }
}
