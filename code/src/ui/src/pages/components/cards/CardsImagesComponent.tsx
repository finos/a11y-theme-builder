/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { HeadingSection } from '../../content/HeadingSection';
import { ExampleSection } from '../../content/ExampleSection';
import { SettingsSection } from '../../content/SettingsSection';
import { CardSample } from './CardSample';

interface Props {
}

export const CardsImagesComponent: React.FC<Props> = () => {

    const [_clickableCards, _setClickableCards] = useState<boolean>(false);

    return (
        <div>
            <HeadingSection title="Desktop" heading="Cards with Images" />
            <SettingsSection>
            <FormControl>
                <RadioGroup
                    name="cards-standard-radio-buttons-group"
                    value={_clickableCards}
                    onChange={(event) => { _setClickableCards(event.target.value === "true") }}
                >
                    <FormControlLabel value="false" control={<Radio />} label="Non-clickable Cards (with buttons)" />
                    <FormControlLabel value="true" control={<Radio />} label="Clickable Cards" />
                </RadioGroup>
            </FormControl>
            </SettingsSection>
            <ExampleSection>
            <CardSample label="Left Aligned 9:16 Ratio" title="Title" imagePath="/sample.jpg" clickable={_clickableCards}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt magna aliqua
            </CardSample>
            <CardSample label="Left Aligned 9:21 Ratio" title="Title" imagePath="/sample.jpg" imageClassName="cinemascope" clickable={_clickableCards}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt magna aliqua
            </CardSample>
            <CardSample label="Center Aligned 9:16 Ratio" title="Title" imagePath="/sample.jpg" className="centerAligned" clickable={_clickableCards}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt magna aliqua
            </CardSample>
            <CardSample
                label="Center Aligned 9:21 Ratio"
                title="Title"
                imagePath="/sample.jpg"
                className="centerAligned"
                imageClassName="cinemascope"
                clickable={_clickableCards}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt magna aliqua
            </CardSample>
            </ExampleSection>
        </div>
    )
}
