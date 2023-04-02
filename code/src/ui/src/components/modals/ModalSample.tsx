/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import { Button } from '@mui/material';
import React from 'react'
import './Modals.css';
import { Modal } from 'a11y-theme-builder-sdk';

interface Props {
    isOpen: any;
    onClose: any;
    modalMolecule: Modal;
}

const ModalSample: React.FC<Props> = ({isOpen, onClose, modalMolecule}) => {

    if (!isOpen) return null
    return (
        <>
            <div className="overlay" onClick={onClose} style={{backgroundColor: modalMolecule.color.getValue()?.hex+"d0"}}></div>
            <div className='modal modal-sample' style={{borderRadius: modalMolecule.borderRadius.getValue() + "px"}}>
                <div className="modal-content">
                    <div className="modal-header">
                    <h1 className="modal-title fs-5">Modal title</h1>
                        
                    </div>
                    <div className="modal-body">
                        ...
                    </div>
                    <div className="modal-footer">
                        <div className="button-area">
                            <Button onClick={onClose}>Close</Button>
                            <Button variant="contained">Save Changes</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) 
}

export default ModalSample;