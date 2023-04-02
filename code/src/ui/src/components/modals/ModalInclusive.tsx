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

const ModalInclusive: React.FC<Props> = ({isOpen, onClose}) => {

    if (!isOpen) return null
    return (
        <>
            <div className="overlay" onClick={onClose}></div>
            <div className='modal modal-inclusive'>
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className='modal-title fs-5'>Accessible Themes</h1>
                    </div>
                    <div className="modal-body">
                        <p>
                            Creating inclusive experiences is a passion of mine, but creating one experience that 
                            caters visual, learning and neurological disabilities is hard.  
                            So we have created themes for each system you create that are designed 
                            for color blindness, dislexia and motion sensitivity.
                        </p>
                        <p></p>
                        <div className="subtitle1">
                            Color Blind Theme
                        </div>
                        <p>
                            Our color blind palette is designed to create the best possible contrast of 
                            colors for end users with color blindness.
                        </p>
                        <p>
                            The colors in the leftmost column are the "true" colors; these are displayed in 
                            the remaining three columns the way that a person with protanopia, deuteranopia, 
                            or tritanopia would see them, respectively.
                        </p>
                        <p>
                            By default we have randomly created a theme and applied these colors to define 
                            infomation, success, warning and danger states.
                        </p>
                        <p>
                            You should update the way these colors are applied to your color blind theme.
                        </p>
                        <img src="/colorBlind.png" alt="Color Blind Pallete" className='colorBlind'/>
                        <div className="small">
                            Source: &nbsp;
                            <a
                                href="https://davidmathlogic.com/colorblind/#%23D81B60-%231E88E5-%23FFC107-%23004D40"
                                target="new"
                            >
                                https://davidmathlogic.com/colorblind/#%23D81B60-%231E88E5-%23FFC107-%23004D40
                            </a>
                        </div>
                        <div className="subtitle1 top40">
                            Dyslexic Theme
                        </div>
                        <p>
                            In this theme we utilizing a dyslexic font, "OpenDyslexic" for the headers and body text.
                        </p>
                        <ul>

                            <li>
                                You can download &nbsp;
                                <a
                                    href="https://www.dafont.com/open-dyslexic.font"
                                >
                                    OpenDyslexic here
                                </a>
                            </li>
                            <li>
                                Make sure to &nbsp;
                                <a
                                    href="https://help.figma.com/hc/en-us/articles/360039956774-Upload-custom-fonts-to-an-organization"
                                    target="new"
                                >
                                    upload
                                </a>
                                &nbsp; the OpenDyslexic font to Figma
                            </li>
                        </ul>
                        <div className="subtitle1 top40">
                            Motion Sensitivity
                        </div>
                        <p>
                            For our motion sensitivity theme we have removed transition 
                            animations which are enabled by default.
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

export default ModalInclusive;