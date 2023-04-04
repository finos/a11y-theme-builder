import React from 'react';
import { AppBar, Box, Tab, Tabs } from '@mui/material';

interface Props {
    style?: any;
    isSecondary?: boolean
}

export const NavbarExample: React.FC<Props> = ({style, isSecondary}) => {

    const [tabValue, setTabValue] = React.useState('1');
    const handleTabChange = (event: any, newValue: string) => {
        setTabValue(newValue);
    };

    return (
        <div className='elevation-2'>
            {isSecondary || <div className="caption">Sample Primary Navbar</div>}
            {!isSecondary || <div className="caption">Sample Secondary Navbar</div>}
            <Box>
                <Tabs centered
                    value={tabValue}
                    onChange={handleTabChange}
                    aria-label="navbar"
                >
                    <Tab label="Tab 1" value="1" />
                    <Tab label="Tab 2" value="2" />
                    <Tab label="Tab 3" value="3" />
                    <Tab label="Tab 4" value="4" />
                </Tabs>
            </Box>
        </div>
    )
}
