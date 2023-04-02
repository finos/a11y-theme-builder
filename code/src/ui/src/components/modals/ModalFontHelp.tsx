/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import { Button } from '@mui/material';
import React from 'react'
import './Modals.css';

interface Props {
    isOpen: any;
    onClose: any;
}

const ModalFontHelp: React.FC<Props> = ({isOpen, onClose}) => {

    if (!isOpen) return null
    return (
        <>
            <div className="overlay" onClick={onClose}></div>
            <div className='modal modal-fontHelp'>
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="systemNameLabel">
                            Identifying the available font weights
                        </h1>
                    </div>
                    <div className="modal-body">
                        <p>
                            I have downloads, installed and added the 'Oswald' font to my&nbsp;
                            <a
                                href="https://help.figma.com/hc/en-us/articles/360039956774-Upload-custom-fonts-to-an-organization"
                                target="new"
                            >
                                organization's account.
                            </a>
                            &nbsp;Next, I will select Oswald in the Text dropdown in the Design panel.
                        </p>
                        <img src="/oswald.png" alt="Oswald" className='fontImage'></img>
                        <p>
                            I can then click to see the available font weights, by name.  
                            I select Light.
                        </p>
                        <img src="/light.png" alt="Light" className='fontImage'></img>
                        <p>
                            In order to coralate the  font weight names with a number 
                            I click on the inspect tab and review the information provided 
                            under Typography.
                        </p>
                        <p>
                            Here I see that Light means a font weight of 200.
                        </p>
                        <img src="/200.png" alt="200" className='fontImage'></img>
                        <p>
                            Oswald's available font weights include:
                        </p>
                        <ul>
                            <li>Extra Light = 200</li>
                            <li>Light = 300</li>
                            <li>Regular = 400</li>
                            <li>Medium = 500</li>
                            <li>Semibold = 600</li>
                            <li>Bold = 700</li>
                        </ul>
                        <p>
                            I should only use these values in the atomic font weight seciton 
                            of the Theme Builder. If for example, I select the value 100 the 
                            Oswald font will not render in Figma.
                        </p>
                    </div>
                    <div className="modal-footer">
                        <Button onClick={onClose}>Got It!</Button>
                    </div>
                </div>
            </div>
        </>
    ) 
}

export default ModalFontHelp;