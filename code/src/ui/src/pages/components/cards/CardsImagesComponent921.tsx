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

export const CardsImagesComponent921: React.FC<Props> = () => {

    const [_clickableCards, _setClickableCards] = useState<boolean>(false);

    return (
        <div>
            <HeadingSection title="Desktop" heading="Cards with Images" />
            <ExampleSection>
              <div className="top40 subtitle1">Left Aligned 9:21 Ratio with two Buttons</div>
              <CardSample title="Title" imagePath="/sample.jpg" imageClassName="cinemascope">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt magna aliqua
              </CardSample>
              <div className="top40 subtitle1">Left Aligned 9:21 Ratio with one Button</div>
              <CardSample title="Title" imagePath="/sample.jpg"  hideSecondary={true} imageClassName="cinemascope">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt magna aliqua
              </CardSample>

              <div className="top40 subtitle1">Left Aligned 9:21 Ratio with Hotlink</div>
              <CardSample title="Title" imagePath="/sample.jpg"  hotlink={true} imageClassName="cinemascope">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt magna aliqua
              </CardSample>
              <div className="top40 subtitle1">Left Aligned 9:21 Ratio, Clickable</div>
              <CardSample title="Title" imagePath="/sample.jpg" imageClassName="cinemascope" clickable={true}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt magna aliqua
              </CardSample>
              <div className="top40 subtitle1">Center Aligned 9:21 Ratio with two Buttons</div>
              <CardSample title="Title" imagePath="/sample.jpg" className="centerAligned" imageClassName="cinemascope">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt magna aliqua
              </CardSample>

              <div className="top40 subtitle1">Center Aligned 9:21 Ratio with one Button</div>
              <CardSample
                  title="Title"
                  imagePath="/sample.jpg"
                  className="centerAligned"
                  imageClassName="cinemascope"
                  hideSecondary={true}
              >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt magna aliqua
              </CardSample>
              <div className="top40 subtitle1">Center Aligned 9:21 Ratio with Hotlink</div>
              <CardSample
                  title="Title"
                  hideSecondary={true}
                  hotlink={true}
                  imagePath="/sample.jpg"
                  className="centerAligned"
                  imageClassName="cinemascope"
                  clickable={_clickableCards}
              >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod te
                  mpor incididunt magna aliqua
              </CardSample>
              <div className="top40 subtitle1">Center Aligned 9:21 Ratio, Clickable</div>
              <CardSample
                  title="Title"
                  clickable={true}
                  imagePath="/sample.jpg"
                  className="centerAligned"
                  imageClassName="cinemascope"
              >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod te
                  mpor incididunt magna aliqua
              </CardSample>
            </ExampleSection>
        </div>
    )
}
