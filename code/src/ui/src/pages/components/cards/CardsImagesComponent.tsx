/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { HeadingSection } from '../../content/HeadingSection';
import { ExampleSection } from '../../content/ExampleSection';
import { CardSample } from './CardSample';
import { CardColorModeSelector } from '../../content/CardColorModeSelector';

interface Props {
}

export const CardsImagesComponent: React.FC<Props> = () => {

  const [colorMode, setColorMode] = useState<string>("colored");

  const [_clickableCards, _setClickableCards] = useState<boolean>(false);

    return (
        <div>
            <HeadingSection title="Desktop" heading="Cards with Images" />
            <CardColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
            </CardColorModeSelector>
            <ExampleSection>
              <div className="top40 subtitle1">Left Aligned 9:16 Ratio with two Buttons</div>
              <CardSample color={colorMode} title="Title" imagePath="/sample.jpg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt magna aliqua
              </CardSample>
              <div className="top40 subtitle1">Left Aligned 9:16 Ratio with one Button</div>
              <CardSample color={colorMode} title="Title" imagePath="/sample.jpg"  hideSecondary={true}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt magna aliqua
              </CardSample>
              <div className="top40 subtitle1">Left Aligned 9:16 Ratio with hotlink</div>
              <CardSample color={colorMode} title="Title" imagePath="/sample.jpg" hotlink={true} hideSecondary={true}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt magna aliqua
              </CardSample>
              <div className="top40 subtitle1">Left Aligned 9:16 Ratio, clickable</div>
              <CardSample color={colorMode} title="Title" imagePath="/sample.jpg" hotlink={true} clickable={true}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt magna aliqua
              </CardSample>
              <div className="top40 subtitle1">Center Aligned 9:16 Ratio with two Buttons</div>
              <CardSample color={colorMode} title="Title" imagePath="/sample.jpg" className="centerAligned">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt magna aliqua
              </CardSample>
              <div className="top40 subtitle1">Center Aligned 9:16 Ratio with one Button</div>
              <CardSample color={colorMode} title="Title" imagePath="/sample.jpg" hideSecondary={true} className="centerAligned">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt magna aliqua
              </CardSample>
              <div className="top40 subtitle1">Center Aligned 9:16 Ratio with hotlink</div>
              <CardSample color={colorMode} title="Title" imagePath="/sample.jpg" hideSecondary={true} hotlink={true} className="centerAligned">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt magna aliqua
              </CardSample>
              <div className="top40 subtitle1">Center Aligned 9:16 Ratio, clickable</div>
              <CardSample color={colorMode} title="Title" imagePath="/sample.jpg" hideSecondary={true} hotlink={true} className="centerAligned" clickable={true}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt magna aliqua
              </CardSample>

            </ExampleSection>
        </div>
    )
}
