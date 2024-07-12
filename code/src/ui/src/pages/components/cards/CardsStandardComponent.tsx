/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { HeadingSection } from '../../content/HeadingSection';
import { ExampleSection } from '../../content/ExampleSection';
import { CardColorModeSelector } from '../../content/CardColorModeSelector';
import { CardSample } from './CardSample';

interface Props {}

export const CardsStandardComponent: React.FC<Props> = () => {
    const [colorMode, setColorMode] = useState<string>('colored');

    return (
        <div>
            <HeadingSection title="Desktop" heading="Standard Cards" />
            <CardColorModeSelector
                colorMode={colorMode}
                setColorMode={setColorMode}
            ></CardColorModeSelector>
            <ExampleSection>
                <div>
                    NOTE: Only use colored and gradient cards on the primary,
                    alt, black or white backgrounds.
                </div>

                <div className="subtitle1 top40">
                    Left Aligned with Two Buttons
                </div>
                <CardSample
                    color={colorMode}
                    title="Title"
                    data-background={colorMode}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                </CardSample>
                <div className="subtitle1 top40">
                    Left Aligned with one Button
                </div>
                <CardSample
                    color={colorMode}
                    title="Title"
                    data-background={colorMode}
                    hideSecondary={true}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                </CardSample>
                <div className="subtitle1 top40">Left Aligned with Hotlink</div>
                <CardSample
                    color={colorMode}
                    title="Title"
                    data-background={colorMode}
                    hotlink={true}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                </CardSample>
                <div className="subtitle1 top40">Left Aligned, Clickable</div>
                <CardSample
                    color={colorMode}
                    title="Title"
                    data-background={colorMode}
                    clickable={true}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                </CardSample>

                <div className="subtitle1 top40">
                    Center Aligned with Two Buttons
                </div>
                <CardSample
                    color={colorMode}
                    title="Title"
                    className={'centerAligned ' + colorMode}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                </CardSample>
                <div className="subtitle1 top40">
                    Center Aligned with one Button
                </div>
                <CardSample
                    color={colorMode}
                    title="Lorem ipsum dolor"
                    className={'centerAligned ' + colorMode}
                    hideSecondary={true}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                </CardSample>
                <div className="subtitle1 top40">
                    Center Aligned with hotlink
                </div>
                <CardSample
                    color={colorMode}
                    title="Lorem ipsum dolor"
                    className={'centerAligned ' + colorMode}
                    hotlink={true}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                </CardSample>
                <div className="subtitle1 top40">Center Aligned, Clickable</div>
                <CardSample
                    color={colorMode}
                    title="Lorem ipsum dolor"
                    className={'centerAligned ' + colorMode}
                    clickable={true}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                </CardSample>
                <div className="subtitle1 top40">
                    Left Aligned with Icon and Two Buttons
                </div>
                <CardSample
                    color={colorMode}
                    title="Title"
                    icon={true}
                    className={colorMode}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                </CardSample>
                <div className="subtitle1 top40">
                    Left Aligned with Icon and one Buttons
                </div>
                <CardSample
                    color={colorMode}
                    title="Title"
                    icon={true}
                    className={colorMode}
                    hideSecondary={true}
                    hotlink={true}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                </CardSample>
                <div className="subtitle1 top40">
                    Left Aligned with Icon and Hotlink
                </div>
                <CardSample
                    color={colorMode}
                    title="Title"
                    icon={true}
                    className={colorMode}
                    hotlink={true}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                </CardSample>
                <div className="subtitle1 top40">Left Aligned, Clickable</div>
                <CardSample
                    color={colorMode}
                    title="Title"
                    icon={true}
                    className={colorMode}
                    clickable={true}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                </CardSample>
                <div className="subtitle1 top40">
                    Center Aligned with Icon and Two Buttons
                </div>
                <CardSample
                    color={colorMode}
                    title="Title"
                    icon={true}
                    className={'centerAligned ' + colorMode}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                </CardSample>
                <div className="subtitle1 top40">
                    Center Aligned with Icon and one Buttons
                </div>
                <CardSample
                    color={colorMode}
                    title="Title"
                    icon={true}
                    className={'centerAligned ' + colorMode}
                    hideSecondary={true}
                    hotlink={true}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                </CardSample>
                <div className="subtitle1 top40">
                    Center Aligned with Icon and Hotlink
                </div>
                <CardSample
                    color={colorMode}
                    title="Title"
                    icon={true}
                    className={'centerAligned ' + colorMode}
                    hotlink={true}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                </CardSample>
                <div className="subtitle1 top40">Center Aligned, Clickable</div>
                <CardSample
                    color={colorMode}
                    title="Title"
                    icon={true}
                    className={'centerAligned ' + colorMode}
                    clickable={true}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                </CardSample>
            </ExampleSection>
        </div>
    );
};
