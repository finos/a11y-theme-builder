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
            <HeadingSection title="Design System" heading="Welcome" />
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

            {/* <h5>Get started with a few simple steps</h5>
            <div style={{ background: "red", color: "yellow" }}>TODO: Verify and document these steps</div>
            <h6 className='top40'>Step 1. Build your theme</h6>
            <ul>
              <li>Build your theme and REMEMBER to click SAVE!</li>
            </ul>
            <h6>Step 2. Sign up / Sign in to Figma</h6>
              <ul>
                <li><a href="http://www.figma.com">Go to Figma</a></li>
              </ul>
            <h6>Step 3. Install Tokens Studio Pro</h6>
            <ul>
              <li><a href="https://tokens.studio/">Go to Tokens Studio</a></li>
            </ul>
            <h6>Step 4. Duplicate our Figma Theme Builder File</h6>
            <ul>
              <li><a href="https://www.figma.com/community/file/1228341192167108876" target="new">Theme Builder - Figma Component Library</a></li>
            </ul>
            <h6>Step 5. Apply your theme to the Figma Theme Builder File</h6>
            <div className="videoWrapper">
              <video width="320" height="240" controls>
                <source src="/ApplyTheme.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div> */}
            <div className="button-area">
                <Button onClick={(event) => changeTab(event, "jumpStart")}>Explore Samples</Button>
                <Button onClick={(event) => changeTab(event, "getStarted")}>Explore Your Design Systems</Button>
            </div>
        </div>
    );
}

export default Welcome;
