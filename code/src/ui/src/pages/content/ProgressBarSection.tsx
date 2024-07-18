/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */

import React, { ReactNode, useEffect, useState } from 'react';
import { Tabs, Tab, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { Box, Typography, Stepper, Step, StepLabel, StepConnector, StepIcon, stepConnectorClasses } from '@mui/material';
import { styled } from '@mui/material/styles';
import Check from '@mui/icons-material/Check';
import { Atom, BodyStyles, Molecule, Organism } from '@finos/a11y-theme-builder-sdk';
//import { FormattedMessage } from 'react-intl';
import { LocaleMessage } from '../../locales/LocaleMessage';
// import { Box } from '@mui/system';

interface Props {
    activeStep: number;
}


const steps = ['1', '2', '3'];
export const ProgressBarSection: React.FC<Props> = ({ activeStep }) => {

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep} connector={<CustomStepConnector />}>
                {steps.map((label, index) => (
                    <CustomStep key={label}>
                        <CustomStepLabel StepIconComponent={StepIconCustom} StepIconProps={{
                            sx: {
                                border: 2,
                                borderRadius: '100%',
                                color: '#121212',
                                borderColor: index <= activeStep ? '#EA6A28' : 'rgba(18, 18, 18, 0.3)',
                                // color:'rgba(217, 217, 217, 0)', 
                                '& .MuiStepIcon-text': {
                                    fill: 'black', // Set text color to black
                                },
                            },
                        }}
                        ></CustomStepLabel>
                    </CustomStep>
                ))}
            </Stepper>
        </Box>
    )
}
const CustomStepConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: 'calc(-50% )',
        right: 'calc(50% )',
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#EA6A28',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#EA6A28',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#B3B3B3',
        borderTopWidth: 3,
        borderRadius: 1,
    },
}));

const CustomStepLabel = styled(StepLabel)(({ theme }) => ({
    [`& .MuiStepLabel-iconContainer`]: {
        padding: 0, // Remove padding
        margin: 0,  // Remove margin
    },
}));

const CustomStep = styled(Step)(({ theme })=> ({
    [`& .MuiStep-root`]: {
        padding: 0, // Remove padding from Step
    },
}));

const StepIconCustom = (props: any) => {
    const { active, completed, className } = props;
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            // minHeight="100vh"
            sx={{
                padding: 0,
                margin: 0,
                fontSize: 16,
                fontWeight: 700,
                border: 2,
                borderRadius: '100%',
                borderColor: (completed || active) ? '#EA6A28' : '#B3B3B3',
                backgroundColor: (completed) ? '#EA6A28' : 'FFFFFF',
                height: 40,
                width: 40,
            }}
        >
            {props.icon}
        </Box>
    );
};