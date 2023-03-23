import React from 'react';
import { HeadingSection } from '../content/HeadingSection';
import { ExampleSection } from '../content/ExampleSection';
import { Avatar } from '@mui/material';


interface Props {
}

export const ListsTripleComponent: React.FC<Props> = ({ }) => {
    return (
        <div className="content">
            <HeadingSection title='Desktop' heading='Lists - Triple Line'></HeadingSection>
            <ExampleSection>
                
            </ExampleSection>
        </div>
    )
}
