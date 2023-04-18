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

export const CardsStandardComponent: React.FC<Props> = () => {

    const [_clickableCards, _setClickableCards] = useState<boolean>(false);

    return (
        <div>
            <HeadingSection title="Desktop" heading="Standard Cards" />
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
                <CardSample label="Left Aligned" title="Title" clickable={_clickableCards}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua
                </CardSample>
                <CardSample label="Left Aligned with Icon" title="Title" icon={ true } clickable={_clickableCards}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua
                </CardSample>
                <CardSample label="Center Aligned" title="Title" className="centerAligned" clickable={_clickableCards}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua
                </CardSample>
                <CardSample label="Center Aligned with Icon" title="Lorem ipsum dolor" className="centerAligned" icon={ true } clickable={_clickableCards}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua
                </CardSample>
                <CardSample
                    label="Black Background"
                    title="Lorem ipsum dolor"
                    className="black centerAligned"
                    icon={ true }
                    iconButton={ true }
                    clickable={_clickableCards}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt <a href="#">ut labore et dolore</a>
                    magna aliqua
                </CardSample>
                <CardSample
                    label="Tertiary Background"
                    title="Lorem ipsum dolor"
                    className="colored"
                    icon={ true }
                    clickable={_clickableCards}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt <a href="#">ut labore et dolore</a>
                    magna aliqua
                </CardSample>
                <CardSample
                    label="Gradient-1 Background"
                    title="Lorem ipsum dolor"
                    className="gradient-1"
                    icon={ true }
                    clickable={_clickableCards}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt <a href="#">ut labore et dolore</a>
                    magna aliqua
                </CardSample>
                <CardSample
                    label="Gradient-2 Background"
                    title="Lorem ipsum dolor"
                    className="gradient-2"
                    icon={ true }
                    clickable={_clickableCards}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt <a href="#">ut labore et dolore</a>
                    magna aliqua
                </CardSample>
                <CardSample
                    label="Gradient-3 Background"
                    title="Lorem ipsum dolor"
                    className="gradient-3"
                    icon={ true }
                    clickable={_clickableCards}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt <a href="#">ut labore et dolore</a>
                    magna aliqua
                </CardSample>
            </ExampleSection>
        </div>
    )
}
