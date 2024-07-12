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

export const CardsStatsIconsComponent: React.FC<Props> = () => {
    const [colorMode, setColorMode] = useState<string>('colored');

    return (
        <div>
            <HeadingSection title="Desktop" heading="Cards with Stats" />
            <CardColorModeSelector
                colorMode={colorMode}
                setColorMode={setColorMode}
            ></CardColorModeSelector>
            <ExampleSection>
                <div className="subtitle1 top40">
                    Left Aligned Stat Card with Icon and two Buttons
                </div>
                <CardSample
                    color={colorMode}
                    title="1M"
                    icon={true}
                    stat={true}
                    className={colorMode}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt magna aliqua
                </CardSample>
                <div className="subtitle1 top40">
                    Left Aligned Stat Card with Icon and Button
                </div>
                <CardSample
                    color={colorMode}
                    title="1M"
                    icon={true}
                    stat={true}
                    hideSecondary={true}
                    className={colorMode}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt magna aliqua
                </CardSample>
                <div className="subtitle1 top40">
                    Left Aligned Stat Card with Icon and Hotlink
                </div>
                <CardSample
                    color={colorMode}
                    title="1M"
                    icon={true}
                    stat={true}
                    hotlink={true}
                    className={colorMode}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt magna aliqua
                </CardSample>
                <div className="subtitle1 top40">
                    Left Aligned Stat Card with Icon, Clickable
                </div>
                <CardSample
                    color={colorMode}
                    title="1M"
                    icon={true}
                    stat={true}
                    hotlink={true}
                    clickable={true}
                    className={colorMode}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt magna aliqua
                </CardSample>
                <div className="subtitle1 top40">
                    Center Aligned Stat Card with Icon and two Buttons
                </div>
                <CardSample
                    color={colorMode}
                    title="1M"
                    icon={true}
                    stat={true}
                    className={'centerAligned ' + colorMode}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt magna aliqua
                </CardSample>
                <div className="subtitle1 top40">
                    Center Aligned Stat Card with Icon and Button
                </div>
                <CardSample
                    color={colorMode}
                    title="1M"
                    icon={true}
                    stat={true}
                    hideSecondary={true}
                    className={'centerAligned ' + colorMode}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt magna aliqua
                </CardSample>
                <div className="subtitle1 top40">
                    Center Aligned Stat Card with Icon and Hotlink
                </div>
                <CardSample
                    color={colorMode}
                    title="1M"
                    icon={true}
                    stat={true}
                    hotlink={true}
                    className={'centerAligned ' + colorMode}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt magna aliqua
                </CardSample>
                <div className="subtitle1 top40">
                    Center Aligned Stat Card with Icon, Clickable
                </div>
                <CardSample
                    color={colorMode}
                    title="1M"
                    icon={true}
                    stat={true}
                    hotlink={true}
                    clickable={true}
                    className={'centerAligned ' + colorMode}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt magna aliqua
                </CardSample>
            </ExampleSection>
        </div>
    );
};
