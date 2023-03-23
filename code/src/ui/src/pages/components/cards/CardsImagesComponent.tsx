import React, { useState } from 'react';
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, FormControl, FormControlLabel, IconButton, Radio, RadioGroup, SvgIcon, Typography } from '@mui/material';
import { HeadingSection } from '../../content/HeadingSection';
import { CardSample } from './CardSample';

interface Props {
}

export const CardsImagesComponent: React.FC<Props> = ({ }) => {

    const [_clickableCards, _setClickableCards] = useState<boolean>(false);

    return (
        <div>
            <HeadingSection title="" heading="Cards with Images" />
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
            <CardSample label="Left Aligned 9:16 Ratio" title="Title" imagePath="/userTest-2.jpeg" clickable={_clickableCards}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt magna aliqua
            </CardSample>
            <CardSample label="Left Aligned 9:21 Ratio" title="Title" imagePath="/test.jpeg" imageClassName="cinemascope" clickable={_clickableCards}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt magna aliqua
            </CardSample>
            <CardSample label="Center Aligned 9:16 Ratio" title="Title" imagePath="/userTest-2.jpeg" className="centerAligned" clickable={_clickableCards}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt magna aliqua
            </CardSample>
            <CardSample
                label="Center Aligned 9:21 Ratio"
                title="Title"
                imagePath="/test.jpeg"
                className="centerAligned"
                imageClassName="cinemascope"
                clickable={_clickableCards}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt magna aliqua
            </CardSample>
        </div>
    )
}
