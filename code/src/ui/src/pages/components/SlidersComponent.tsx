/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React from 'react';
import { HeadingSection } from '../content/HeadingSection';
import { Slider } from '@mui/material';
import { ExampleSection } from '../content/ExampleSection';


interface Props {
}

export const SlidersComponent: React.FC<Props> = () => {
    return (
        <div className="content">
            <HeadingSection title='Desktop' heading='Switch'></HeadingSection>
            <ExampleSection>
                <div className="caption">Slider</div>
                <Slider defaultValue={30} valueLabelDisplay="auto" sx={{maxWidth:400}}/>
                <div className="caption top40">Range Slider</div>
                <Slider defaultValue={[20,40]} valueLabelDisplay="auto" sx={{maxWidth:400}}/>
            </ExampleSection>
        </div>
    )
}
