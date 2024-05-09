/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useState, useEffect } from 'react';
import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { DesignSystem } from '@finos/a11y-theme-builder-sdk';
import './AccessibilityLayersButton.css';
import { StringSelectable } from './editors/StringSelectable';

const name = 'AccessibilityLayersButton';

interface Props {
  designSystem: DesignSystem;
}

export const AccessibilityLayersButton: React.FC<Props> = ({
  designSystem,
}) => {
  //TODO until we support color blindness styling, don't offer it as an
  // accessibility layer option to select from
  //const layersProperty = (designSystem.layers).properties;
  const layersProperty = [
    designSystem.layers.dyslexia,
    designSystem.layers.motionSensitivity,
  ];
  const getValueFromLayersProperty = () => {
    let r = [];
    for (var i = 0; i < layersProperty.length; i++) {
      let v = layersProperty[i].getValue();
      if (v === undefined) {
        v = layersProperty[i].getDefaultValue();
      }
      if (v) {
        r.push(layersProperty[i].name);
      }
    }
    return r;
  };
  const [a11yLayers, setA11yLayers] = useState<string[]>(
    getValueFromLayersProperty()
  );

  const handleChange = async (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value as string[];
    console.log(`${name} - Changed by UI to ${value}`);
    for (var i = 0; i < layersProperty.length; i++) {
      const p = layersProperty[i];
      const selectedValue = value.indexOf(p.name) > -1;
      const propValue = p.getValue();
      if (propValue != selectedValue || propValue == undefined) {
        console.log(
          `${name} - Setting value for ${p.name}: current=${propValue} new=${selectedValue}`
        );
        p.setValue(selectedValue);
      }
    }
    setA11yLayers(value);
  };

  return (
    <div>
      <div id="a11y-layers-multiple-checkbox-label" className="label">
        Theme Layers:
      </div>
      <FormControl sx={{ width: 400, paddingRight: '4px' }}>
        <Select
          labelId="a11y-layers-multiple-checkbox-label"
          id="a11y-layers-multiple-checkbox"
          size="small"
          multiple
          value={a11yLayers}
          onChange={handleChange}
          displayEmpty
          renderValue={selected => {
            if (selected.length === 0) {
              return <em>None</em>;
            }
            return selected.join(', ');
          }}
        >
          {layersProperty.map((prop: any) => (
            <MenuItem key={prop.name} value={prop.name}>
              <Checkbox
                checked={a11yLayers.indexOf(prop.name) > -1}
                disableRipple
                sx={{
                  marginLeft: '-12px',
                  padding: 0,
                  '&:hover': {
                    backgroundColor: 'transparent !important',
                  },
                }}
              />
              <ListItemText primary={prop.name} />
            </MenuItem>
          ))}
          <MenuItem
            key={designSystem.layers.deviceTarget.name}
            value={designSystem.layers.deviceTarget.name}
          >
            <StringSelectable
              property={designSystem.layers.deviceTarget}
              variant="radio"
              defaultValue="desktop"
            />
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
