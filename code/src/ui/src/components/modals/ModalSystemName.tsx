/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import { Button } from '@mui/material';
import React, { useState } from 'react'
import './Modals.css';

interface Props {
    isOpen: any;
    onClose: any;
    cmd?: string;       // copy or rename.  If not set, then create a new design system
    source?: string;    // name of design system
    title?: string;     // optional title to display
    message?: string;   // optional message to display
}

const ModalSystemName: React.FC<Props> = ({ isOpen, onClose, cmd, source, title, message }) => {

    const [systemName, setSystemName] = useState('');

    const handleSubmit = async () => {
        if (cmd) {
            console.log(cmd + " Design System " + source + " to " + systemName);
            await onClose(cmd, systemName);
        }
        else {
            onClose();
            console.log("Creating new Design System:", systemName);
            // TODO: Check for name already exist
            window.location.href = `/designSystem/${systemName}`;
        }
    }

    const handleCancel = () => {
        if (cmd) {
            onClose(cmd);
        }
        else {
            onClose();
        }
    }

    if (!isOpen) return null
    return (
        <>
            <div className="overlay" onClick={onClose}></div>
            <div className='modal modal-systemName'>
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5">{title || "Design System Name"}</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="modal-body">
                            <p>{message || "Let's get started by naming your Design Systems."}</p>
                            <label className='label-1' htmlFor="name">Name</label>
                            <br />
                            <input
                                type="text"
                                id='new-name'
                                placeholder='Enter design system name'
                                className='input-1'
                                required
                                value={systemName}
                                onChange={(e) => setSystemName(e.target.value)}
                            />
                        </div>
                        <div className="modal-footer">
                            <Button onClick={handleCancel}>Cancel</Button>
                            <Button onClick={handleSubmit}>Next</Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ModalSystemName;