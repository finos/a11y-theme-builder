/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, {useState, useEffect } from 'react';

interface Props {
    styles?: any;
    setStyles?(newStyles:any): Promise<void>;
}

export const WelcomeNavbar: React.FC<Props> = ({styles, setStyles}) => {

    return (
        <div className='titleBarDiv'>
            <div className="left-titlebar">
                <img src="/tb-logo.svg" alt="ThemeBuilder Logo" className="tb-logo" />
            </div>
            <div className="center-titlebar">
                <h6 style={{margin:"0px"}}>ThemeBuilder Application</h6>
            </div>
            <div className="right-titlebar">
            </div>
        </div>
    )
}

export default WelcomeNavbar;



