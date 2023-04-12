/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import { Button } from '@mui/material';
import React, { Children, useState } from 'react'
import './Modals.css';

interface Props {
    title?: string;
    isOpen: any;
    onClose: (confirmed: boolean) => void;
    children?: React.ReactNode;
}

const ModalConfirmation: React.FC<Props> = ({ title, isOpen, onClose, children }) => {

    const handleSubmit = () => {
        onClose(true);
        console.log("ModalConfirmation, calling onClose handler with value true");
    }

    const handleCancel = () => {
        console.log("ModalConfirmation, calling onClose handler with value false");
        onClose(false);
    }

    if (!isOpen) return null
    return (
        <>
            <div className="overlay" onClick={handleCancel}></div>
            <div className='modal'>
                <div className="modal-content" style={{ display: "flex", gap: "40px", flexDirection: "column" }}>
                    <h4 style={{ margin: "0px" }}>{title}</h4>
                    <div className="modal-body">
                        {children}
                    </div>
                    <div className="modal-footer" style={{ display: "flex", gap:"var(--spacing-2)" }}>
                        <Button className="MuiButton-outlined" onClick={handleCancel}>Cancel</Button>
                        <Button onClick={handleSubmit}>OK</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalConfirmation;
