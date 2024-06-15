/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { HeadingSection } from '../../content/HeadingSection';
import { ExampleSection } from '../../content/ExampleSection';
import { CardColorModeSelector } from '../../content/CardColorModeSelector';
import { CardSample } from './CardSample';

interface Props {
}

export const CardsStandardIconComponent: React.FC<Props> = () => {
    const [colorMode, setColorMode] = useState<string>("colored");

    const [_clickableCards, _setClickableCards] = useState<boolean>(false);

    return (
        <div>
            <HeadingSection title="Desktop" heading="Cards with Icons" />
            <CardColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
            </CardColorModeSelector>
            <ExampleSection>

                <div className="subtitle1 top40">Left Aligned with Icon and one Buttons</div>
                <CardSample color={colorMode} title="Title" icon={ true } hideSecondary={true} hotlink={true}  data-background={colorMode}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua
                </CardSample>
                <div className="subtitle1 top40">Left Aligned with Icon and Hotlink</div>
                <CardSample color={colorMode} title="Title" icon={ true }  hotlink={true}  data-background={colorMode}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua
                </CardSample>
                <div className="subtitle1 top40">Left Aligned, Clickable</div>
                <CardSample color={colorMode} title="Title" icon={ true }  data-background={colorMode} clickable={true}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua
                </CardSample>
                <div className="subtitle1 top40">Center Aligned with Icon and Two Buttons</div>
                <CardSample color={colorMode} title="Title" icon={ true } className={"centerAligned " + colorMode} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua
                </CardSample>
                <div className="subtitle1 top40">Center Aligned with Icon and one Buttons</div>
                <CardSample color={colorMode} title="Title" icon={ true } className={"centerAligned " + colorMode} hideSecondary={true} hotlink={true}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua
                </CardSample>
                <div className="subtitle1 top40">Center Aligned with Icon and Hotlink</div>
                <CardSample color={colorMode} title="Title" icon={ true } className={"centerAligned " + colorMode} hotlink={true}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua
                </CardSample>
                <div className="subtitle1 top40">Center Aligned, Clickable</div>
                <CardSample color={colorMode} title="Title" icon={ true }  className={"centerAligned " + colorMode} clickable={true}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua
                </CardSample>
            </ExampleSection>
        </div>
    )
}
