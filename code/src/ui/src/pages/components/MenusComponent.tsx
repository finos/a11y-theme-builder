/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React from 'react';
import { HeadingSection } from '../content/HeadingSection';
import { ExampleSection } from '../content/ExampleSection';
import { Button, ListItemIcon, ListItemText, MenuItem } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Menu } from '../../mui-a11y-tb/components/Menu';


interface Props {
}

export const MenusComponent: React.FC<Props> = () => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // Same as above but for Menu with Icons
    const [anchorElIcon, setAnchorElIcon] = React.useState<null | HTMLElement>(null);
    const openIcon = Boolean(anchorElIcon);
    const handleClickIcon = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElIcon(event.currentTarget);
    };
    const handleCloseIcon = () => {
        setAnchorElIcon(null);
    };
    

    return (
        <div className="content">
            <HeadingSection title='Desktop' heading='Menus'></HeadingSection>
            <ExampleSection>
                <div>
                    <h6>Menu with No Icons</h6>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        Menu
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Action</MenuItem>
                        <MenuItem onClick={handleClose}>Another Action</MenuItem>
                        <MenuItem onClick={handleClose}>Something Else</MenuItem>
                    </Menu>
                </div>
                <div>
                    <h6>Menu with Icons</h6>
                    <Button
                        id="icon-button"
                        aria-controls={openIcon ? 'icon-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openIcon ? 'true' : undefined}
                        onClick={handleClickIcon}
                    >
                        Menu with Icons
                    </Button>
                    <Menu
                        id="icon-menu"
                        anchorEl={anchorElIcon}
                        open={openIcon}
                        onClose={handleCloseIcon}
                        MenuListProps={{
                        'aria-labelledby': 'icon-button',
                        }}
                    >
                        <MenuItem onClick={handleCloseIcon}>
                            <ListItemIcon><BarChartIcon fontSize="small" /></ListItemIcon>
                            <ListItemText>Action</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={handleCloseIcon}>
                            <ListItemIcon><BarChartIcon fontSize="small" /></ListItemIcon>
                            <ListItemText>Another Action</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={handleCloseIcon}>
                            <ListItemIcon><BarChartIcon fontSize="small" /></ListItemIcon>
                            <ListItemText>Something Else</ListItemText>
                        </MenuItem>
                    </Menu>
                </div>
            </ExampleSection>
        </div>
    )
}
