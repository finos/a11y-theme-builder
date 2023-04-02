/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, FormControl, FormControlLabel, IconButton, Radio, RadioGroup, SvgIcon, Typography } from '@mui/material';
import { HeadingSection } from '../../content/HeadingSection';
import { ExampleSection } from '../../content/ExampleSection';
import { SettingsSection } from '../../content/SettingsSection';
import { CardSample } from './CardSample';

interface Props {
}

export const CardsStatsComponent: React.FC<Props> = () => {

    const [_clickableCards, _setClickableCards] = useState<boolean>(false);

    return (
        <div>
            <HeadingSection title="Desktop" heading="Cards with Stats" />
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
            <CardSample label="Left Aligned Stat Card with Button" title="Title" icon={true} hideSecondary={true} clickable={_clickableCards}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt magna aliqua
            </CardSample>
            <CardSample label="Left Aligned Stat Card with Hotlink" title="Title" icon={true} hotlink={true} clickable={_clickableCards}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt magna aliqua
            </CardSample>
            <CardSample label="Center Aligned Stat Card with Button" title="Title" className="centerAligned" icon={true} hideSecondary={true} clickable={_clickableCards}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt magna aliqua
            </CardSample>
            <CardSample label="Center Aligned Stat Card with Hotlink" title="Title" className="centerAligned" icon={true} hotlink={true} clickable={_clickableCards}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt magna aliqua
            </CardSample>
            </ExampleSection>
        </div>
    )
}
