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
                In addition, for each system we will provide a dylexic theme,
                a non-animated theme (for folks with motion sensitivities)
                and a color blind theme.  &nbsp;
                <a onClick={() => setInclusiveIsOpen(true)} >Learn more</a>
                &nbsp; about our inclusive themes.
            </p>
            <ModalInclusive isOpen={inclusiveIsOpen} onClose={() => setInclusiveIsOpen(false)} />
            <p>
                A Unified Design System is made up of a core Figma Design Library
                and paired with a complementing and consistent core CSS and core React Component Library.
            </p>
            <p>
                The Theme Builder give you the power to customize the Design System and the foundational JSON.
            </p>
            <p>
                Using GitHub the JSON that feeds these core systems keeps everythiung synchronized.
            </p>

            <h5>Get started with 3 simple steps</h5>
            <div style={{ background: "red", color: "yellow" }}>TODO: Verify and document these steps</div>
            <h6 className='top40'>Step 1. Duplicate</h6>
            <ul>
                <li>Duplicated our Core Figma Library</li>
                <li>Fork our Component Library</li>
            </ul>
            <h6>Step 2. Configure</h6>
            <ul>
                <li>Create a Storybook and point to the GitHub repot.</li>
                <li>Install the Figma Tokens Figma Plug-In</li>
                <li>Configure Figma Tokens to point to the cloned repo.</li>
            </ul>
            <h6>Step 3. Customize</h6>
            <ul>
                <li>Use the Theme Builder to customize your Design System.</li>
                <li>Copy the code from the Theme Builder and paste it into existing, 'Brand,' Token Set.</li>
                <li>Copy the dark mode JSON into the existing, 'Dark mode' Token Set.</li>
                <li>Apply the themes and observe the magic.</li>
                <li>Push the updates to GitHub.</li>
                <li>Go to Storybook and accept the updates and observe the transformation of your Digital component library.</li>
            </ul>
            <div className="button-area">
                <Button onClick={(event) => changeTab(event, "jumpStart")}>Explore Samples</Button>
                <Button onClick={(event) => changeTab(event, "getStarted")}>Explore Your Design Systems</Button>
            </div>
        </div>
    );
}

export default Welcome;
