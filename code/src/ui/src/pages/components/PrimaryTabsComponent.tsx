/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { HeadingSection } from '../content/HeadingSection';
import { ColorModeSelector } from '../content/ColorModeSelector';
import { ExampleSection } from '../content/ExampleSection';
import { Box, FormControl, FormControlLabel, InputLabel, Typography, FormLabel, Radio, RadioGroup, Tab, Tabs } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';


interface Props {
}

export const PrimaryTabsComponent: React.FC<Props> = () => {

    const [colorMode, setColorMode] = useState<string>("default");

    const [tabValue, setTabValue] = React.useState('1');
    const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
        setTabValue(newValue);
    };
    const [tabIconsValue, setTabIconsValue] = React.useState('1');
    const handleTabIconsChange = (event: React.SyntheticEvent, newValue: string) => {
        setTabIconsValue(newValue);
    };

    return (
        <div className="content">
            <HeadingSection title='Desktop' heading='Horizontal Primary Tabs'></HeadingSection>
            <ExampleSection>
              <ColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
              <section>
                  <div className="top40" />
                      <h6>Tab Bar</h6>
                      <Box>
                          <Tabs centered
                              className={colorMode}
                              value={tabValue}
                              onChange={handleTabChange}
                              aria-label="tab bar"
                          >
                              <Tab className={colorMode} label="Tab 1" value="1" />
                              <Tab className={colorMode} label="Tab 2" value="2" />
                              <Tab className={colorMode} label="Tab 3" value="3" />
                              <Tab className={colorMode} label="Tab 4" value="4" />
                          </Tabs>
                      </Box>
                  <h6>Tab Bar - with Icons</h6>
                  <Box>
                      <Tabs centered
                          className={colorMode}
                          value={tabIconsValue}
                          onChange={handleTabIconsChange}
                          aria-label="tab bar with icons"
                      >
                          <Tab className={"left-icon " + colorMode}  label={"Tab 1"} value="1" icon={<BarChartIcon />} iconPosition="start"/>
                          <Tab className={"left-icon " + colorMode}  label="Tab 2" value="2" icon={<BarChartIcon />} iconPosition="start"/>
                          <Tab className={"left-icon " + colorMode} label="Tab 3" value="3" icon={<BarChartIcon />} iconPosition="start"/>
                          <Tab className={"left-icon " + colorMode}  label="Tab 4" value="4" icon={<BarChartIcon />} iconPosition="start"/>
                      </Tabs>
                  </Box>
              </section>
              </ColorModeSelector>
            </ExampleSection>

        </div>
    )
}
