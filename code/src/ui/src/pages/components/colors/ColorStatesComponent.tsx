/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { DesignSystem, StateSettings } from 'a11y-theme-builder-sdk';
import { HeadingSection } from '../../content/HeadingSection';
import { ComputedColorSwatch } from '../../../components/ComputedColorSwatch';

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
                    <ComputedColorSwatch
                        className="info"
                        label="Info"
                    />
                    <ComputedColorSwatch
                        className="success"
                        label="Success"
                    />
                    <ComputedColorSwatch
                        className="warning"
                        label="Warning"
                    />
                    <ComputedColorSwatch
                        className="danger"
                        label="Danger"
                    />
                </div>
            </div>
        );
    } else {
        return (
            <div>No ColorStatesComponent</div>
        );
    }
}
