/**
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useEffect, useState } from 'react';
import { ColorThemes, ColorPalette } from '@finos/a11y-theme-builder-sdk';
import { CreateColorTheme } from '../../components/CreateColorTheme';
import { DisplayColorTheme } from '../../components/DisplayColorTheme';

interface Props {
    atom: ColorThemes;
    colorPalette: ColorPalette;
    defaultColor?: string;
}

export const ColorThemeAtom: React.FC<Props> = ({ atom, colorPalette }) => {
    const [_themeInitialized, _setThemeInitialized] = useState<boolean>(false);

    useEffect(() => {
        _setThemeInitialized(
            atom.getDefaultTheme()?.addTheme.isEnabled() || false
        );
    }, []);

    const handleDefaultThemeInitialized = () => {
        _setThemeInitialized(
            atom.getDefaultTheme()?.addTheme.isEnabled() || false
        );
    };

    if (_themeInitialized) {
        return <DisplayColorTheme atom={atom} />;
    }
    return (
        <CreateColorTheme
            atom={atom}
            colorPalette={colorPalette}
            handleDefaultThemeInitialized={handleDefaultThemeInitialized}
        />
    );
};
