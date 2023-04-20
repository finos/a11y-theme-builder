/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React from 'react';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import ModalInclusive from '../components/modals/ModalInclusive';
import { HeadingSection } from './content/HeadingSection';


interface Props {
    user: any;
    changeTab(event: any, newTabIndex: string): void;
}

const Welcome: React.FC<Props> = ({ user, changeTab }) => {

    const [inclusiveIsOpen, setInclusiveIsOpen] = useState(false);

    return (
        <div>
            <HeadingSection heading="Welcome" />
            <p>
                This tool was created to help teams quickly create a robust and accessible
                Unified Design System that supports light and dark mode, desktop and mobile applications.
            </p>
            <p>
                More information on the Theme Builder and its usage
                can be found in the &nbsp;
                <a href="https://discoverfinancial.github.io/a11y-theme-builder/"
                    target="_blank" rel="noreferrer noopener">
                    Docs
                </a>.
            </p>
            <h3>Getting Started</h3>
            <p>Watch our video and learn how to make a Design System with Theme Buidler</p>
            <div>
              <video controls>
                <source src="buildtheme.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="button-area top40">
                <Button onClick={(event) => changeTab(event, "getStarted")}>Explore Your Design Systems</Button>
                <Button  variant="outlined"  onClick={(event) => changeTab(event, "jumpStart")}>Explore Samples</Button>
            </div>
        </div>
    );
}

export default Welcome;
