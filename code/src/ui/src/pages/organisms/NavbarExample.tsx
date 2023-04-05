import React from 'react';
import { Avatar, Box, Tab, Tabs } from '@mui/material';

interface Props {
    isSecondary?: boolean
}

export const NavbarExample: React.FC<Props> = ({isSecondary}) => {

    const [tabValue, setTabValue] = React.useState('1');
    const handleTabChange = (event: any, newValue: string) => {
        setTabValue(newValue);
    };

    return (
        <div className='elevation-2'>
            {isSecondary || <div className="caption">Sample Primary Navbar</div>}
            {!isSecondary || <div className="caption">Sample Secondary Navbar</div>}
            <Box>
                <Tabs className='top40' centered
                    value={tabValue}
                    onChange={handleTabChange}
                    aria-label="navbar"
                >
                    {isSecondary || <div style={{position: "absolute", left: 0}}>Brand</div>}
                    <Tab label="Tab 1" value="1" />
                    <Tab label="Tab 2" value="2" />
                    <Tab label="Tab 3" value="3" />
                    <Tab label="Tab 4" value="4" />
                    {isSecondary || <Avatar style={{position: "absolute", right: 10}}/>}
                </Tabs>
            </Box>
        </div>
    )
}
