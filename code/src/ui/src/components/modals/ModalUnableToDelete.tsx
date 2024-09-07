/**
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import { Button } from '@mui/material';
import React from 'react';
import './Modals.css';

interface Props {
    title?: string;
    isOpen: any;
    onClose: (confirmed: boolean) => void;
    cancelButton?: Boolean;
    children?: React.ReactNode;
}

const ModalUnableToDelete: React.FC<Props> = ({ title, isOpen, onClose,cancelButton, children }) => {

    const handleSubmit = () => {
        onClose(true);
        console.log(
            'ModalConfirmation, calling onClose handler with value true'
        );
    };

    const handleCancel = () => {
        console.log(
            'ModalConfirmation, calling onClose handler with value false'
        );
        onClose(false);
    };

    if (!isOpen) return null;
    return (
        <>
            <div className="overlay" onClick={handleCancel}></div>
            <div className='modal'>
                <div className="modal-content" style={{ display: "flex", gap: "40px", flexDirection: "column" }}>
                    <div className='sub-heading'></div>
                    <h4 style={{ margin: "0px" }}>{"Unable to Delete"||title}</h4>
                    <div className="modal-body">
                        {children}
                    </div>
                    <div className="modal-footer" style={{ display: "flex", gap:"var(--spacing-2)" }}>
                        <Button onClick={handleSubmit}>OKAY</Button>
                        {cancelButton &&<Button className="MuiButton-outlined" onClick={handleCancel}>Cancel</Button>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalUnableToDelete;
