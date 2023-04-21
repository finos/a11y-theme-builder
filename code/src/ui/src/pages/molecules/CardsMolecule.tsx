/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, InputAdornment, InputLabel, TextField, Typography } from '@mui/material';
import { DesignSystem, Cards } from 'a11y-theme-builder-sdk';
import { NumberSelectable } from '../../components/editors/NumberSelectable';
import { NumberScaledSelectable } from '../../components/editors/NumberScaledSelectable';
import { StringSelectable } from '../../components/editors/StringSelectable';
import { ExampleSection } from '../content/ExampleSection';
import { GeneratedCodeSection } from '../content/GeneratedCodeSection';
import { SettingsSection } from '../content/SettingsSection';
import { HeadingSection } from '../content/HeadingSection';

interface Props {
    molecule: Cards;
    designSystem: DesignSystem;
}

enum CardSettingsKey {
    minWidth = "cards-molecules-min-width",
    minHeight = "cards-molecules-min-height"
}

export const CardsMolecule: React.FC<Props> = ({ molecule, designSystem }) => {
    const grid = designSystem.atoms.gridSettings.grid.getValue();

    const [_minWidth, _setMinWidth] = useState<number>(molecule.minWidth.getValue() || molecule.minWidth.getDefaultValue() || 80);
    const [_minHeight, _setMinHeight] = useState<number>(molecule.minHeight.getValue() || molecule.minHeight.getDefaultValue() || 80);

    useEffect(() => {
        console.log("CardsMolecule mounted");
    }, []);

    // Called when user focus leaves the minWidth or
    //  minHeight input fields.  Updates the sdk with
    //  any new value.
    const handleValueChange = (key: string, value: number) => {
        console.log(`handling value change key: ${key}, value: ${value}`);
        if (key === CardSettingsKey.minWidth) {
            _setMinWidth(value);
            molecule.minWidth.setValue(value);
        } else if (key === CardSettingsKey.minHeight) {
            _setMinHeight(value);
            molecule.minHeight.setValue(value);
        }
    }

    return (
        <div>
            <HeadingSection item={molecule} title="Apply Styles">
                <p>Configure settings that affect the appearance of cards.</p>
            </HeadingSection>
            <ExampleSection>
                <Card>
                    <CardHeader title="Card Title" />
                    <CardContent>
                        <Typography variant="body2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                        </Typography>
                    </CardContent>
                </Card>
            </ExampleSection>
            <SettingsSection>
                <div className="row">
                    <div className="col-6 top16">
                        <div className="formRow">
                            <InputLabel className="label-1">Min Width</InputLabel>
                            <TextField
                                id="cards-molecules-min-width"
                                type="number"
                                defaultValue={_minWidth}
                                onBlur={(event) => { handleValueChange(event.target.id, parseInt(event.target.value)) }}
                                InputProps={{
                                    endAdornment: <InputAdornment position="start">px</InputAdornment>,
                                }}
                                sx={{ width: 300 }} />
                        </div>
                        <div className="formRow">
                            <InputLabel className="label-1">Min Height</InputLabel>
                            <TextField
                                id="cards-molecules-min-height"
                                type="number"
                                defaultValue={_minHeight}
                                onBlur={(event) => { handleValueChange(event.target.id, parseInt(event.target.value)) }}
                                InputProps={{
                                    endAdornment: <InputAdornment position="start">px</InputAdornment>,
                                }}
                                sx={{ width: 300 }} />
                        </div>
                        <div className="formRow">
                            <NumberScaledSelectable property={molecule.borderRadius} units="px" scale={grid}/>
                        </div>
                        <div className="formRow">
                            <NumberScaledSelectable property={molecule.padding} units="px" scale={grid}/>
                        </div>
                        <div className="formRow">
                            <NumberScaledSelectable property={molecule.contentGap} units="px" scale={grid}/>
                        </div>
                        <div className="formRow">
                            <StringSelectable property={molecule.elevation} defaultValue="" />
                        </div>
                        <div className="formRow">
                            <StringSelectable property={molecule.bevel} defaultValue="" />
                        </div>

                    </div>
                </div>
            </SettingsSection>
            <GeneratedCodeSection item={molecule} />
        </div >
    );
}
