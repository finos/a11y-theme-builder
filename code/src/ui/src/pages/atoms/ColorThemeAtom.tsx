import React, { useEffect, useState } from 'react';
import { ColorThemes } from '../../sdk';
import { CreateColorTheme } from '../../components/CreateColorTheme';
import { DisplayColorTheme } from '../../components/DisplayColorTheme';

interface Props {
    atom: ColorThemes;
    defaultColor?: string;
}

export const ColorThemeAtom: React.FC<Props> = ({ atom }) => {

    const [_themeInitialized, _setThemeInitialized] = useState<boolean>(false);

    useEffect(() => {
        _setThemeInitialized(atom.getDefaultTheme()?.addTheme.isEnabled() || false);
    }, []);

    const handleDefaultThemeInitialized = () => {
        _setThemeInitialized(atom.getDefaultTheme()?.addTheme.isEnabled() || false);
    }

    if (_themeInitialized) {
        return (
            <DisplayColorTheme atom={atom} />
        );
    }
    return (
        <CreateColorTheme atom={atom} handleDefaultThemeInitialized={handleDefaultThemeInitialized} />
    );
}

