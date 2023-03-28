import React from 'react';
import SystemCard from '../components/SystemCard';
import { ExampleSection } from './content/ExampleSection';
import { HeadingSection } from './content/HeadingSection';

interface Props {
    user: any;
}

const JumpStart: React.FC<Props> = ({ user }) => {

    return (
        <div>
            <HeadingSection title="Sample and Template Design System" heading="Jump Start">
                Explore our sample design systems.  You can duplicate theme
                to make your own or start from scratch to build your own systems.
            </HeadingSection>
            <div className="top40" />
            <ExampleSection title="Sample Design Systems">
            <div className="card-container">
                <SystemCard
                    name="Sample"
                    title="Sample"
                    onClickHandler={async (event, name) => { window.location.href = "/designSystem/Sample" }}
                />
            </div>
            </ExampleSection>
        </div>
    );
}

export default JumpStart;
