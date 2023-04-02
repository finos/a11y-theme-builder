/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React from 'react';
import { Chip, Avatar } from '@mui/material';
import { HeadingSection } from '../content/HeadingSection';
import { ExampleSection } from '../content/ExampleSection';
import DeleteIcon from '@mui/icons-material/AutoGraph';

interface Props {
}

export const ChipsComponent: React.FC<Props> = ({ }) => {

    return (
        <div>
            <HeadingSection title="Desktop" heading="Chips">
                This chip has a minimum click area of 44 x 44 but looks smaller and uses non-uppercased type.
            </HeadingSection>
            <ExampleSection>
                <h6>Standard Chip</h6>
                <div style={{ display: "flex", gap: "32px" }}>
                    <Chip label="No Icon" />
                    <Chip label="No Icon" onDelete={(event) => { }} />
                </div>
                <h6>Chip with Icon</h6>
                <div style={{ display: "flex", gap: "32px" }}>
                    <Chip icon={<DeleteIcon />} label="Icon" />
                    <Chip icon={<DeleteIcon />} label="Icon" onDelete={(event) => { }} />
                </div>
                <h6>Chip with Avatar</h6>
                <div style={{ display: "flex", gap: "32px" }}>
                    <Chip avatar={<Avatar />} label="Avatar" />
                    <Chip avatar={<Avatar />} label="Avatar" onDelete={(event) => { }} />
                </div>
            </ExampleSection>
        </div>
    )
}
