/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { HeadingSection } from '../../content/HeadingSection';
import { ExampleSection } from '../../content/ExampleSection';
import { CardColorModeSelector } from '../../content/CardColorModeSelector';
import { CardSample } from './CardSample';

interface Props {
}

export const CardsStandardComponent: React.FC<Props> = () => {
      const [colorMode, setColorMode] = useState<string>("colored");

    const [_clickableCards, _setClickableCards] = useState<boolean>(false);

    return (
        <div>
            <HeadingSection title="Desktop" heading="Standard Cards" />
            <CardColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
            </CardColorModeSelector>
            <ExampleSection>
                <div className="subtitle1 top40">Left Aligned with Two Buttons</div>
                <CardSample title="Title"  className={colorMode}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua
                </CardSample>
                <div className="subtitle1 top40">Left Aligned with one Button</div>
                <CardSample title="Title"  className={colorMode} hideSecondary={true}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua
                </CardSample>
                <div className="subtitle1 top40">Left Aligned with Hotlink</div>
                <CardSample title="Title"  className={colorMode} hotlink={true}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua
                </CardSample>
                <div className="subtitle1 top40">Left Aligned, Clickable</div>
                <CardSample title="Title"  className={colorMode} clickable={true}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua
                </CardSample>

                <div className="subtitle1 top40">Center Aligned with Two Buttons</div>
                <CardSample  title="Title" className={"centerAligned " + colorMode}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua
                </CardSample>
                <div className="subtitle1 top40">Center Aligned with one Button</div>
                <CardSample  title="Lorem ipsum dolor" className={"centerAligned " + colorMode} hideSecondary={true}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua
                </CardSample>
                <div className="subtitle1 top40">Center Aligned with hotlink</div>
                <CardSample  title="Lorem ipsum dolor" className={"centerAligned " + colorMode} hotlink={true}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua
                </CardSample>
                <div className="subtitle1 top40">Center Aligned, Clickable</div>
                <CardSample  title="Lorem ipsum dolor" className={"centerAligned " + colorMode} clickable={true}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua
                </CardSample>
                <div className="subtitle1 top40">Left Aligned with Icon and Two Buttons</div>
                <CardSample title="Title" icon={ true }   className={colorMode} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua
                </CardSample>
                <div className="subtitle1 top40">Left Aligned with Icon and one Buttons</div>
                <CardSample title="Title" icon={ true }   className={colorMode} hideSecondary={true} hotlink={true}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua
                </CardSample>
                <div className="subtitle1 top40">Left Aligned with Icon and Hotlink</div>
                <CardSample title="Title" icon={ true }   className={colorMode}  hotlink={true}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua
                </CardSample>
                <div className="subtitle1 top40">Left Aligned, Clickable</div>
                <CardSample title="Title" icon={ true }   className={colorMode} clickable={true}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua
                </CardSample>
                <div className="subtitle1 top40">Center Aligned with Icon and Two Buttons</div>
                <CardSample title="Title" icon={ true } className={"centerAligned " + colorMode} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua
                </CardSample>
                <div className="subtitle1 top40">Center Aligned with Icon and one Buttons</div>
                <CardSample title="Title" icon={ true } className={"centerAligned " + colorMode} hideSecondary={true} hotlink={true}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua
                </CardSample>
                <div className="subtitle1 top40">Center Aligned with Icon and Hotlink</div>
                <CardSample title="Title" icon={ true } className={"centerAligned " + colorMode} hotlink={true}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua
                </CardSample>
                <div className="subtitle1 top40">Center Aligned, Clickable</div>
                <CardSample title="Title" icon={ true }  className={"centerAligned " + colorMode} clickable={true}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua
                </CardSample>
            </ExampleSection>
        </div>
    )
}
