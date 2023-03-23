import { InputLabel, MenuItem, Select, Slider } from '@mui/material';
import React, { useState } from 'react';
import { NumberSelectable } from '../../components/editors/NumberSelectable';
import { StringSelectable } from '../../components/editors/StringSelectable';
import { Sliders } from '../../sdk';
import { ExampleSection } from '../content/ExampleSection';
import { GeneratedCodeSection } from '../content/GeneratedCodeSection';
import { HeadingSection } from '../content/HeadingSection';
import { SettingsSection } from '../content/SettingsSection';

const name = "SlidersMolecule";

interface Props {
    slidersMolecule: Sliders;
}

export const SlidersMolecule: React.FC<Props> = ({ slidersMolecule }) => {
    // console.log(`${name} - >>> enter()`)

    return (
        <>
            <HeadingSection item={slidersMolecule} title="Apply Styles"/>
            <ExampleSection>
                <div className="caption">Sample Slider</div>
                <Slider defaultValue={30} valueLabelDisplay="auto" sx={{maxWidth:400}}/>
                <div className="caption top40">Sample Range Slider</div>
                <Slider defaultValue={[20,40]} valueLabelDisplay="auto" sx={{maxWidth:400}}/>
            </ExampleSection>
            <SettingsSection>
                <div className="form-row">
                    <NumberSelectable property={slidersMolecule.handleBorderRadius} units="px" defaultValue={8} />
                </div>
                <div className="form-row">
                    <NumberSelectable property={slidersMolecule.visibleHeight} units="px" defaultValue={32} />
                </div>
                <div className="form-row">
                    <StringSelectable property={slidersMolecule.handleElevation} defaultValue="No Elevation" />
                </div>
                <div className="form-row">
                    <NumberSelectable property={slidersMolecule.barHeight} units="px" defaultValue={32} />
                </div>
                <div className="form-row">
                    <StringSelectable property={slidersMolecule.barInsetShadow} defaultValue="None" />
                </div>
            </SettingsSection>
            <GeneratedCodeSection item={slidersMolecule} />
        </>
    )

}
