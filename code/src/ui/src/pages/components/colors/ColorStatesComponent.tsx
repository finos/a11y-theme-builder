import React, { useState } from 'react';
import { DesignSystem, StateSettings } from '../../../sdk/';
import { HeadingSection } from '../../content/HeadingSection';
import { ColorSwatch } from '../../../components/ColorSwatch';

interface Props {
    designSystem: DesignSystem;
}

export const ColorStatesComponent: React.FC<Props> = ({designSystem}) => {

    const [_stateSettings, _setStateSettings] = useState<StateSettings>(designSystem.atoms.stateSettings);

    if (_stateSettings) {
        return (
            <div>
                <HeadingSection title="Colors" heading="State Colors" />
                <div className="theme-colors">
                    <ColorSwatch shade={_stateSettings.info.lmShade}></ColorSwatch>
                    <ColorSwatch shade={_stateSettings.success.lmShade}></ColorSwatch>
                    <ColorSwatch shade={_stateSettings.warning.lmShade}></ColorSwatch>
                    <ColorSwatch shade={_stateSettings.danger.lmShade}></ColorSwatch>
                </div>
            </div>
        );
    } else {
        return (
            <div>No ColorStatesComponent</div>
        );
    }
}
