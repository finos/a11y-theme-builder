/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React from 'react';
import { styled, Switch, Stack, Typography } from '@mui/material';

interface Props {
    leftLabel?: string;
    rightLabel?: string;
    leftColor?: string;
    rightColor?: string;
    size?: number;
    inputProps?: any;
    checked?: boolean;
    onChange?: Function;
}

export const NavSwitch: React.FC<Props> = ({leftLabel, rightLabel, leftColor, rightColor, size, checked, onChange}) => {
    const handleOnChange = (event:any) => {
        const value = event.target.value;
        if (onChange) {
            onChange();
        }
    }

    const sz = size || 1.5;
    const MySwitch = styled(Switch)(({ theme }) => ({
        padding: 0,
        display: 'flex',
    }))

    return (
        <Stack direction="row" spacing={1} alignItems="center">
            {leftLabel && <Typography>{leftLabel}</Typography>}
            <MySwitch
                checked={checked}
                onChange={handleOnChange}
                inputProps={{ 'aria-label': '' }}
            />
            {rightLabel && <Typography>{rightLabel}</Typography>}
         </Stack>
    )

}
