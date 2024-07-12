/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { HeadingSection } from '../content/HeadingSection';
import { ColorModeSelector } from '../content/ColorModeSelector';
import { ExampleSection } from '../content/ExampleSection';
import {
    Tab,
    Tabs,
} from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';

interface Props {}

export const SecondaryTabsComponent: React.FC<Props> = () => {
    const [colorMode, setColorMode] = useState<string>('colored');

    const [tabValue, setTabValue] = React.useState('1');
    const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
        setTabValue(newValue);
    };
    const [tabIconsValue, setTabIconsValue] = React.useState('1');
    const handleTabIconsChange = (
        event: React.SyntheticEvent,
        newValue: string
    ) => {
        setTabIconsValue(newValue);
    };

    //TODO: Find out how Secondary Tabs are supposed to differ from Primary Tabs

    return (
        <div className="content">
            <HeadingSection
                title="Desktop"
                heading="Horizontal Secondary Tabs"
            ></HeadingSection>
            <ExampleSection>
                <ColorModeSelector
                    colorMode={colorMode}
                    setColorMode={setColorMode}
                ></ColorModeSelector>
                <section>
                    <h6>Tab Bar</h6>

                    <Tabs
                        centered
                        value={tabValue}
                        onChange={handleTabChange}
                        aria-label="tab bar"
                        data-background={colorMode}
                    >
                        <Tab className="secondaryTab" label="Tab 1" value="1" />
                        <Tab className="secondaryTab" label="Tab 2" value="2" />
                        <Tab className="secondaryTab" label="Tab 3" value="3" />
                        <Tab className="secondaryTab" label="Tab 4" value="4" />
                    </Tabs>

                    <h6>Tab Bar - with Icons</h6>

                    <Tabs
                        centered
                        value={tabIconsValue}
                        onChange={handleTabIconsChange}
                        aria-label="tab bar with icons"
                        data-background={colorMode}
                    >
                        <Tab
                            className="secondaryTab left-icon"
                            label="Tab 1"
                            value="1"
                            icon={<BarChartIcon />}
                            iconPosition="start"
                        />
                        <Tab
                            className="secondaryTab left-icon"
                            label="Tab 2"
                            value="2"
                            icon={<BarChartIcon />}
                            iconPosition="start"
                        />
                        <Tab
                            className="secondaryTab left-icon"
                            label="Tab 3"
                            value="3"
                            icon={<BarChartIcon />}
                            iconPosition="start"
                        />
                        <Tab
                            className="secondaryTab left-icon"
                            label="Tab 4"
                            value="4"
                            icon={<BarChartIcon />}
                            iconPosition="start"
                        />
                    </Tabs>
                </section>
            </ExampleSection>
        </div>
    );
};
