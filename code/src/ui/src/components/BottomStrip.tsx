/**
 * SPDX-License-Identifier: Apache-2.0
 * Copyright 2024 FINOS A11y Theme Builder contributors - see NOTICE file
 */
import React from 'react';
import Button from '@mui/material/Button';

interface BottomStripProps {
    onBack: () => void;
    onSave: () => void;
    onSaveAndContinue: () => void;
}

export const BottomStrip: React.FC<BottomStripProps> = ({ onBack, onSave, onSaveAndContinue }) => {
    return (
        <div
            style={{
                position: 'fixed',
                bottom: 0,
                width: '100%',
                maxWidth: '100%',
                margin: '0 auto',
                display: 'flex',
                gap:"8px",
                // justifyContent: 'space-between',
                padding: '8px',
                backgroundColor: '#fff',
                boxShadow: '0 -2px 5px rgba(0,0,0,0.1)',
                zIndex: 1300, // Ensure it stays on top of other content
            }}
        >
            <Button variant="text" onClick={onBack}>
                Back
            </Button>

            <Button variant="outlined" color="primary" onClick={onSave} style={{ marginRight: '8px' }}>
                Save
            </Button>
            <Button variant="contained" color="secondary" onClick={onSaveAndContinue}>
                Save and Continue
            </Button>

        </div>
    );
};

