/**
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React from 'react';
import { useId } from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const questions = [
    {
        question: 'Why is my transfer still pending?',
        answer:
            'Some transfers need an additional review before they are complete. Open the transfer details to see its current status and any next steps.',
    },
    {
        question: 'How do I invite a teammate?',
        answer:
            'An administrator can invite a teammate from the team settings. You can choose their role before sending the invitation.',
    },
    {
        question: 'Where can I update my business details?',
        answer:
            'Open your business profile to review the details on file. If a field is locked, contact support so the change can be verified.',
    },
    {
        question: 'Who can see my account activity?',
        answer:
            'People with access to your account can see activity allowed by their assigned role. An administrator can review or change team access in the team settings.',
    },
];

export const FaqList: React.FC = () => {
    const idPrefix = useId().replace(/:/g, '');

    return (
        <div className="faq-list">
            {questions.map(({ question, answer }, index) => {
                const panelId = `${idPrefix}-faq-panel-${index + 1}`;
                const questionId = `${idPrefix}-faq-question-${index + 1}`;

                return (
                    <Accordion
                        key={questionId}
                        disableGutters
                        elevation={0}
                        sx={{
                            backgroundColor: 'transparent',
                            borderBottom: 1,
                            borderColor: 'divider',
                            '&:before': { display: 'none' },
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={panelId}
                            id={questionId}
                        >
                            <Typography variant="subtitle1">
                                {question}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails id={panelId}>
                            <Typography component="p" variant="body1">
                                {answer}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                );
            })}
        </div>
    );
};

export default FaqList;
