import React, {useState, useEffect } from 'react';

interface Props {
    styles?: any;
    setStyles?(newStyles:any): Promise<void>;
}

export const WelcomeNavbar: React.FC<Props> = ({styles, setStyles}) => {

    return (
        <nav className="welcome-navbar-container">
            <figure className="logoContainer container-flex">
                <img src="/tb-logo.svg" alt="ThemeBuilder Logo" className="tb-logo" />
            </figure>
        </nav>
    );
}

export default WelcomeNavbar;



