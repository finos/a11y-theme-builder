/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { HeadingSection } from '../../content/HeadingSection';
import { ExampleSection } from '../../content/ExampleSection';
import { SettingsSection } from '../../content/SettingsSection';
import { CardSample } from './CardSample';
import { CardColorModeSelector } from '../../content/CardColorModeSelector';

interface Props {}

export const CardsImagesComponent921: React.FC<Props> = () => {
  const [colorMode, setColorMode] = useState<string>('colored');

  const [_clickableCards, _setClickableCards] = useState<boolean>(false);

  return (
    <div>
      <HeadingSection title="Desktop" heading="Cards with Images" />
      <CardColorModeSelector
        colorMode={colorMode}
        setColorMode={setColorMode}
      ></CardColorModeSelector>
      <ExampleSection>
        <div className="top40 subtitle1">
          Left Aligned 9:21 Ratio with two Buttons
        </div>
        <CardSample
          color={colorMode}
          title="Title"
          imagePath="/sample.jpg"
          imageClassName="cinemascope"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt magna aliqua
        </CardSample>
        <div className="top40 subtitle1">
          Left Aligned 9:21 Ratio with one Button
        </div>
        <CardSample
          color="primary"
          title="Title"
          imagePath="/sample.jpg"
          hideSecondary={true}
          imageClassName="cinemascope"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt magna aliqua
        </CardSample>

        <div className="top40 subtitle1">
          Left Aligned 9:21 Ratio with Hotlink
        </div>
        <CardSample
          color="primary"
          title="Title"
          imagePath="/sample.jpg"
          hotlink={true}
          imageClassName="cinemascope"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt magna aliqua
        </CardSample>
        <div className="top40 subtitle1">
          Left Aligned 9:21 Ratio, Clickable
        </div>
        <CardSample
          color="primary"
          title="Title"
          imagePath="/sample.jpg"
          imageClassName="cinemascope"
          clickable={true}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt magna aliqua
        </CardSample>
        <div className="top40 subtitle1">
          Center Aligned 9:21 Ratio with two Buttons
        </div>
        <CardSample
          color="primary"
          title="Title"
          imagePath="/sample.jpg"
          className="centerAligned"
          imageClassName="cinemascope"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt magna aliqua
        </CardSample>

        <div className="top40 subtitle1">
          Center Aligned 9:21 Ratio with one Button
        </div>
        <CardSample
          color="primary"
          title="Title"
          imagePath="/sample.jpg"
          className="centerAligned"
          imageClassName="cinemascope"
          hideSecondary={true}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt magna aliqua
        </CardSample>
        <div className="top40 subtitle1">
          Center Aligned 9:21 Ratio with Hotlink
        </div>
        <CardSample
          color="primary"
          title="Title"
          hideSecondary={true}
          hotlink={true}
          imagePath="/sample.jpg"
          className="centerAligned"
          imageClassName="cinemascope"
          clickable={_clickableCards}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod te mpor incididunt magna aliqua
        </CardSample>
        <div className="top40 subtitle1">
          Center Aligned 9:21 Ratio, Clickable
        </div>
        <CardSample
          color="primary"
          title="Title"
          clickable={true}
          imagePath="/sample.jpg"
          className="centerAligned"
          imageClassName="cinemascope"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod te mpor incididunt magna aliqua
        </CardSample>
      </ExampleSection>
    </div>
  );
};
