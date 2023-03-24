import { Button } from '@mui/material';
import React, { useState } from 'react'
import './Modals.css';

interface Props {
    isOpen: any;
    onClose: any;
}

const ModalSystemName: React.FC<Props> = ({isOpen, onClose}) => {

    const [systemName, setSystemName] = useState('');

    const handleSubmit = () => {
        onClose();
        console.log("Creating new Design System:", systemName);
        // TODO: Check for name already exist
        window.location.href = `/designSystem/${systemName}`;
    }

    const handleCancel = () => {
        onClose();
    }

    if (!isOpen) return null
    return (
        <>
            <div className="overlay" onClick={onClose}></div>
            <div className='modal modal-systemName'> 
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5">
                            Design System Name
                        </h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="modal-body">
                            <p>
                                Let's get started by naming your Design Systems.
                            </p>
                                <label className='label-1' htmlFor="name">
                                    Name
                                </label>
                                <br />
                                <input
                                    type="text"
                                    id='new-name'
                                    placeholder='System Name'
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