/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { Color, ColorPalette, DesignSystem } from 'a11y-theme-builder-sdk';
import { HeadingSection } from '../../content/HeadingSection';
import { ColorSwatch } from '../../../components/ColorSwatch';

interface Props {
    designSystem: DesignSystem;
}

export const ExtendedPaletteComponent: React.FC<Props> = ({designSystem}) => {

    const [_colorPalette, _setColorPalette] = useState<ColorPalette>(designSystem.atoms.colorPalette);

    if (_colorPalette && _colorPalette.getColors().length > 0) {
        return (
            <div>
                <HeadingSection title="Colors" heading="Extended Palette Colors" />
                {_colorPalette.getColors().map((color) => {
                    return (
                        <div>
                            <div className="subtitle1 top40">{color.name}</div>
                            <div className="theme-colors">
                                {color.light.shades.map((shade) => {
                                    return (
                                        <ColorSwatch shade={shade} label={shade.id}></ColorSwatch>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    } else {
        return (
            <div>No ColorStatesComponent</div>
        );
    }
}
