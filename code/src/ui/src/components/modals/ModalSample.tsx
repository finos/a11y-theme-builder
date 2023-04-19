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
                    <h5 className="modal-title fs-5">Sample modal title</h5>

                    </div>
                    <div className="modal-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                    <div className="modal-footer">
                        <div className="button-area">
                            <Button variant="contained">Save Changes</Button>
                            <Button variant="outlined" onClick={onClose}>Close</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalSample;
