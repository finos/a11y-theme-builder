/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { HeadingSection } from '../content/HeadingSection';
import { SettingsSection } from '../content/SettingsSection';
import { ExampleSection } from '../content/ExampleSection';

interface Props {
}

export const ImageDecorationsComponent: React.FC<Props> = (clickable) => {

  const [_clickableImages, _setClickableImages] = useState<boolean>(false);

  let className = ("");
  if (clickable) className = ("clickable");

    return (
        <div className="content">
        <HeadingSection title='Desktop' heading='Images'></HeadingSection>
        <SettingsSection>
        <FormControl>
            <RadioGroup
                name="cards-standard-radio-buttons-group"
                value={_clickableImages}
                onChange={(event) => { _setClickableImages(event.target.value === "true") }}
            >
                <FormControlLabel value="false" control={<Radio />} label="Non-clickable Images" />
                <FormControlLabel value="true" control={<Radio />} label="Clickable Images" />
            </RadioGroup>
        </FormControl>
        </SettingsSection>
        <ExampleSection>
          <div className="subtitle1">Default</div>
          <div className={"sample-image top16 " + className} >
            <img src="/sample.jpg" />
          </div>

        </ExampleSection>



        </div>
    )
}
