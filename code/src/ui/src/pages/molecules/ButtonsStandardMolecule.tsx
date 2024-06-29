/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useEffect, useState } from 'react';
import { Button, FormControl, MenuItem, Select } from '@mui/material';
import { DesignSystem, StandardButtons } from '@finos/a11y-theme-builder-sdk';
import { NumberScaledSelectable } from '../../components/editors/NumberScaledSelectable';
import { StringSelectable } from '../../components/editors/StringSelectable';
import { StringCategorySelectable } from '../../components/editors/StringCategorySelectable';
import { ExampleSection } from '../content/ExampleSection';
import { GeneratedCodeSection } from '../content/GeneratedCodeSection';
import { SettingsSection } from '../content/SettingsSection';
import { HeadingSection } from '../content/HeadingSection';

interface Props {
    molecule: StandardButtons;
    designSystem: DesignSystem;
}

export const ButtonsStandardMolecule: React.FC<Props> = ({
    molecule,
    designSystem,
}) => {
    useEffect(() => {
        console.log('ButtonsStandardMolecule mounted');
    }, []);

    const grid = designSystem.atoms.gridSettings.grid.getValue() || 8;
    const border = designSystem.atoms.borderSettings.baseBorderWidth.getValue();
    const minTarget =
        designSystem.atoms.minimumTarget.minHeight.getValue() || 44;

    const buttonHeightProperty = molecule.height;
    const [buttonHeight, setButtonHeight] = useState<number>(
        buttonHeightProperty.getValue() || 44 / 8
    );

    async function handleButtonHeightChange(event: any): Promise<void> {
        const value = parseFloat(event.target.value);
        setButtonHeight(value);
        buttonHeightProperty.setValue(value);
    }

    // The selectables vary according to the gridSize and minHeight and so must be calculated here:
    //  minHeight restricts the selectables to above that value
    //  gridSize defines the values based on multiples of 3-7
    //  44 and 48 must always be included
    // Note: the value required is a float, which is then multiplied by the grid size to get the
    //  value we see in the UI
    const renderButtonHeightSelectables = () => {
        var r = [];
        var selectables = [44 / grid, 48 / grid];
        for (var j = 3; j <= 7; j++) {
            if (j !== 44 / grid && j !== 48 / grid) selectables.push(j);
        }
        selectables = selectables.sort();
        if (!selectables) return;
        for (var i = 0; i < selectables.length; i++) {
            if (selectables[i] * grid < minTarget) {
                continue;
            }
            var s = (selectables[i] * grid).toString() + 'px';
            r.push(
                <MenuItem key={s} value={selectables[i]}>
                    {' '}
                    {s}{' '}
                </MenuItem>
            );
        }
        return (
            <FormControl sx={{ m: 2, minWidth: 120 }}>
                <div className="subtitle">{buttonHeightProperty.name}</div>
                <Select
                    sx={{ width: '100px' }}
                    label={buttonHeightProperty.name}
                    labelId={`minHeightLabel`}
                    value={buttonHeight}
                    onChange={handleButtonHeightChange}
                >
                    {r}
                </Select>
            </FormControl>
        );
    };

    return (
        <div>
            <HeadingSection item={molecule} title="Apply Styles">
                <p>
                    Configure settings that affect the appearance of
                    standard-size buttons
                </p>
            </HeadingSection>
            <ExampleSection>
                <div className="buttonDemo">
                    <Button variant="contained">Primary</Button>
                    <Button variant="outlined">Secondary</Button>
                    <Button variant="text">Tertiary</Button>
                </div>
                <SettingsSection>
                    <div className="row">
                        <div className="col-6 top16">
                            <div className="overline-XL">
                                General Button Styling
                            </div>
                            <div className="formRow top16">
                                <NumberScaledSelectable
                                    property={molecule.minWidth}
                                    units="px"
                                    scale={grid}
                                />
                            </div>
                            <div className="formRow top16">
                                {renderButtonHeightSelectables()}
                            </div>
                            <div className="formRow">
                                <NumberScaledSelectable
                                    property={molecule.radius}
                                    units="px"
                                    scale={grid}
                                />
                            </div>
                            <div className="formRow">
                                <NumberScaledSelectable
                                    property={molecule.horizontalPadding}
                                    units="px"
                                    scale={grid}
                                />
                            </div>
                            <div className="formRow">
                                <StringSelectable
                                    property={molecule.buttonText}
                                    defaultValue=""
                                />
                            </div>
                            <div className="formRow">
                                <StringCategorySelectable
                                    property={molecule.buttonShadow}
                                    defaultValue="None"
                                />
                            </div>
                            <div className="overline-XL top40">
                                Outline Button Styling
                            </div>
                            <div className="formRow">
                                <NumberScaledSelectable
                                    property={molecule.secondaryBorder}
                                    units="px"
                                    scale={border}
                                />
                            </div>
                        </div>
                    </div>
                </SettingsSection>
                <GeneratedCodeSection item={molecule} />
            </ExampleSection>
        </div>
    );
};
