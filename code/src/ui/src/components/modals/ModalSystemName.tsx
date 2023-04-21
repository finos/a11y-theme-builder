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
    cmd?: string;       // copy or rename or import.  If not set, then create a new design system
    source?: string;    // name of design system
    title?: string;     // optional title to display
    message?: string;   // optional message to display
    error?: string;     // optional error string to display
}

const ModalSystemName: React.FC<Props> = ({ isOpen, onClose, cmd, source, title, message, error }) => {

    const [systemName, setSystemName] = useState('');
    const [data, setData] = useState("");

    const handleSubmit = async () => {
        if (cmd) {
            if (cmd == "copy" || cmd == "rename") {
                console.log(cmd + " Design System " + source + " to " + systemName);
                await onClose(cmd, systemName);
            }
            else if (cmd == "import") {
                console.log(cmd + " Design System as " + systemName);
                await onClose(cmd, systemName, data);
            }
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
        setSystemName("");
        setData("");
    }

    if (!isOpen) return null
    return (
        <>
            <div className="overlay" onClick={onClose}></div>
            <div className='modal modal-systemName'>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title fs-5">{title || "Design System Name"}</h5>
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
                                style={{width: "100%"}}
                                onChange={(e) => setSystemName(e.target.value)}
                            />
                            {cmd=="import" && <div>
                                <br />
                                <label className='label-1' htmlFor="import-data">Design System data</label>
                                <br/>
                                <textarea className="input-1" id="import-data" 
                                    value={data}
                                    style={{
                                        width:"100%", 
                                        paddingLeft:"8px", 
                                        border:"1px solid var(--border)", 
                                        height:"100px", 
                                        borderRadius:"var(--spacing-half)",
                                        fontFamily: "var(--primaryFont)",
                                        fontSize: "var(--baseFont)",
                                    }} 
                                    placeholder="Copy & paste design system data here"
                                    onChange={(e) => setData(e.target.value)}
                                />
                                </div>
                            }
                        </div>
                        {error && <div style={{color:"red"}}>
                            {error}
                        </div>}
                        <div className="modal-footer">
                            <Button onClick={handleSubmit}>Next</Button>
                            <Button onClick={handleCancel} className="MuiButton-outlined">Cancel</Button>

                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ModalSystemName;
