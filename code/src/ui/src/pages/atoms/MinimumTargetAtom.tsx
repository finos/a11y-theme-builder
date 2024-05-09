/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { Atoms } from '@finos/a11y-theme-builder-sdk';
import { GeneratedCodeSection } from '../content/GeneratedCodeSection';
import { ExampleSection } from '../content/ExampleSection';
import { SettingsSection } from '../content/SettingsSection';
import { HeadingSection } from '../content/HeadingSection';
import { FormControl, MenuItem, Select } from '@mui/material';

interface Props {
  atoms: Atoms;
}

export const MinimumTargetAtom: React.FC<Props> = ({ atoms }) => {
  const minHeightProperty = atoms.minimumTarget.minHeight;
  const mobileMinHeightProperty = atoms.minimumTarget.mobileMinHeight;

  const [minHeight, setMinHeight] = useState<number>(
    minHeightProperty.getValue() || 44
  );
  const [mobileMinHeight, setMobileMinHeight] = useState<number>(
    mobileMinHeightProperty.getValue() || 44
  );

  async function handleMinHeightChange(event: any): Promise<void> {
    const value = parseInt(event.target.value);
    setMinHeight(value);
    minHeightProperty.setValue(value);
  }
  async function handleMobileMinHeightChange(event: any): Promise<void> {
    const value = parseInt(event.target.value);
    setMobileMinHeight(value);
    mobileMinHeightProperty.setValue(value);
  }
  const renderMinTargetSelectables = () => {
    var r = [];
    var selectables = [44, 48];
    for (var i = 3; i <= 7; i++) {
      const newVal = (atoms.gridSettings.grid.getValue() || 8) * i;
      if (newVal !== 44 && newVal !== 48) selectables.push(newVal);
    }
    selectables = selectables.sort();
    if (!selectables) return;
    for (var i = 0; i < selectables.length; i++) {
      const s = selectables[i].toString() + 'px';
      r.push(
        <MenuItem key={s} value={selectables[i]}>
          {' '}
          {s}{' '}
        </MenuItem>
      );
    }
    return (
      <FormControl sx={{ m: 2, minWidth: 120 }}>
        <div className="subtitle">Min Desktop Target</div>
        <Select
          sx={{ width: '100px' }}
          label={minHeightProperty.name}
          labelId={`minHeightLabel`}
          value={minHeight}
          onChange={handleMinHeightChange}
        >
          {r}
        </Select>
      </FormControl>
    );
  };
  const renderMobileMinTargetSelectables = () => {
    var r = [];
    var selectables = [44, 48];
    for (var i = 3; i <= 7; i++) {
      const newVal = (atoms.gridSettings.grid.getValue() || 8) * i;
      if (newVal !== 44 && newVal !== 48) selectables.push(newVal);
    }
    selectables = selectables.sort();
    if (!selectables) return;
    for (var i = 0; i < selectables.length; i++) {
      const s = selectables[i].toString() + 'px';
      r.push(
        <MenuItem key={s} value={selectables[i]}>
          {' '}
          {s}{' '}
        </MenuItem>
      );
    }
    return (
      <FormControl sx={{ m: 2, minWidth: 120 }}>
        <div className="subtitle">Min Mobile/Tablet Target</div>
        <Select
          sx={{ width: '100px' }}
          label={mobileMinHeightProperty.name}
          labelId={`mobileMinHeightLabel`}
          value={mobileMinHeight}
          onChange={handleMobileMinHeightChange}
        >
          {r}
        </Select>
      </FormControl>
    );
  };

  return (
    <div>
      <HeadingSection
        item={atoms.minimumTarget}
        title="Theme"
        heading="Minimum Click Area"
      >
        <div>Define the minimum click area for your desktop experience.</div>
        <div className="top16">
          WCAG AA requires a minimum target area of 24px, while WCAG AAA
          requires a 44px target area.
        </div>
        <div className="top16">
          Note: For tablet and mobile the target should be set to 44px.
        </div>
      </HeadingSection>
      <ExampleSection>
        None
        <SettingsSection>
          {renderMinTargetSelectables()}
          <br />
          <br />
          {renderMobileMinTargetSelectables()}
        </SettingsSection>
        <GeneratedCodeSection item={atoms.minimumTarget} />
      </ExampleSection>
    </div>
  );
};
