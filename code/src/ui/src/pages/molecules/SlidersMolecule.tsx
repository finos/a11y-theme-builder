/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import { Slider } from '@mui/material';
import React from 'react';
import { NumberScaledSelectable } from '../../components/editors/NumberScaledSelectable';
import { StringSelectable } from '../../components/editors/StringSelectable';
import { Sliders } from 'a11y-theme-builder-sdk';
import { ExampleSection } from '../content/ExampleSection';
import { GeneratedCodeSection } from '../content/GeneratedCodeSection';
import { HeadingSection } from '../content/HeadingSection';
import { SettingsSection } from '../content/SettingsSection';
import { getCssValue } from '../../mui-a11y-tb/themes/Theme';

interface Props {
    slidersMolecule: Sliders;
}

export const SlidersMolecule: React.FC<Props> = ({ slidersMolecule }) => {
    const grid = parseInt(getCssValue("--spacing-1"));
    const radius = parseInt(getCssValue("--radius-1"));

    return (
        <>
            <HeadingSection item={slidersMolecule} title="Apply Styles">
                A Slider is an interface that allows a numerical value to be changed by dragging a thumb along an axis.
            </HeadingSection>
            <ExampleSection>
                <div className="caption">Sample Slider</div>
                <Slider defaultValue={30} valueLabelDisplay="auto" sx={{maxWidth:400}}/>
                <div className="caption top40">Sample Range Slider</div>
                <Slider defaultValue={[20,40]} valueLabelDisplay="auto" sx={{maxWidth:400}}/>
            </ExampleSection>
            <SettingsSection>
                <div className="form-row">
                    <NumberScaledSelectable property={slidersMolecule.handleBorderRadius} units="px" defaultValue={1} scale={radius}/>
                </div>
                <div className="form-row">
                    <NumberScaledSelectable property={slidersMolecule.visibleHeight} units="px" defaultValue={3} scale={grid}/>
                </div>
                <div className="form-row">
                    <StringSelectable property={slidersMolecule.handleElevation} defaultValue="No Elevation" />
                </div>
                <div className="form-row">
                    <NumberScaledSelectable property={slidersMolecule.barHeight} units="px" defaultValue={1} scale={grid}/>
                </div>
                <div className="form-row">
                    <StringSelectable property={slidersMolecule.barInsetShadow} defaultValue="None" />
                </div>
            </SettingsSection>
            <GeneratedCodeSection item={slidersMolecule} />
        </>
    )

}
