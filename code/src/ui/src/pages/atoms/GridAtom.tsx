/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useState, useEffect } from 'react';
import { FormControl, Radio, RadioGroup, FormControlLabel, FormLabel } from '@mui/material';
import { GridSettings } from 'a11y-theme-builder-sdk';
import { GeneratedCodeSection } from '../content/GeneratedCodeSection';
import { ExampleSection } from '../content/ExampleSection';
import { SettingsSection } from '../content/SettingsSection';
import { HeadingSection } from '../content/HeadingSection';

interface Props {
    atom: GridSettings;
}

export const GridAtom: React.FC<Props> = ({ atom }) => {

    const gridProperty = atom.grid;
    const [grid, setGrid] = useState<string>(""+(gridProperty.getValue() || gridProperty.getDefaultValue()));

    async function handleChanged(event: any): Promise<void> {
        const value = event.target.value;
        gridProperty.setValue(parseInt(value));
        setGrid(value);
    }

    function renderGridLines() {
        let boxWidth = 0;
        let lines = 8;
        if (grid == "8") {
            boxWidth = 304;
            lines = 38;
        }
        else if (grid == "10") {
            boxWidth = 300;
            lines = 30;
        }
        const _grid = parseInt(grid);
        const _gridm1 = _grid - 1;
        const _color = "red"

        const style:any = {
            backgroundImage: `repeating-linear-gradient(0deg,transparent,transparent ${_gridm1}px,${_color} ${_gridm1}px,${_color} ${_grid}px),repeating-linear-gradient(-90deg,transparent,transparent ${_gridm1}px,${_color} ${_gridm1}px,${_color} ${_grid}px)`,
            backgroundSize: `${_grid}px ${_grid}px`,
            height: `${boxWidth}px`,
            position: "absolute",
            width: `${boxWidth}px`,
            borderBottom: `1px solid ${_color}`,
            borderRight: `1px solid ${_color}`,
        }
    
        return(<div style={{position:"relative"}}><div style={style}></div></div>)
    }

    const renderSelectables = () => {
        var r = [];
        var selectables = gridProperty.getSelectableValues();
        for (var i=0; i<selectables.length; i++) {
            const s = selectables[i].toString();
            r.push(<FormControlLabel key={s} value={s} control={<Radio />} label={s+"px"} />)
        }
        return (<>{r}</>)
    }

    return (
        <div>
            <HeadingSection item={atom} title="Spacing">
                <p>The base value used to determine the distance between elements in the application.  This value is most used in margin, padding and gap styling.</p>
            </HeadingSection>
            <ExampleSection>
                This is the size of the grid spacing.
                <div className="top24" style={{height: "304px"}}>
                    {renderGridLines()}
                </div>
            </ExampleSection>
            <SettingsSection>
                <FormControl>
                    <FormLabel id="gridSettingsLabel">Grid Setting</FormLabel>
                    <RadioGroup
                        aria-aria-labelledby="gridSettingsLabel"
                        name="controlled-radio-buttons-group"
                        value={grid}
                        onChange={handleChanged}
                    >
                        {
                            renderSelectables()
                        }
                    </RadioGroup>
                </FormControl>
            </SettingsSection>
            <GeneratedCodeSection item={atom}/>
        </div>
    )

}
