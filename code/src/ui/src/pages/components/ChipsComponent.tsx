import React from 'react';
import { Chip, Avatar } from '@mui/material';
import { HeadingSection } from '../content/HeadingSection';
import DeleteIcon from '@mui/icons-material/AutoGraph';

interface Props {
}

export const ChipsComponent: React.FC<Props> = ({ }) => {

    return (
        <div>
            <HeadingSection title="" heading="Chips">
                This chip has a minimum click area of 44 x 44 but looks smaller and uses non-uppercased type.
            </HeadingSection>
                <div>
                    <h4>Standard Chip</h4>
                    <div style={{display:"flex", gap:"32px"}}>
                        <Chip label="No Icon" />
                        <Chip label="No Icon" onDelete={(event) => {}} />                   
                    </div>
                    <h4>Chip with Icon</h4>
                    <div style={{display:"flex", gap:"32px"}}>
                        <Chip icon={<DeleteIcon/>} label="Icon" />
                        <Chip icon={<DeleteIcon/>} label="Icon" onDelete={(event) => {}} />
                    </div>
                    <h4>Chip with Avatar</h4>
                    <div style={{display:"flex", gap:"32px"}}>
                        <Chip avatar={<Avatar/>} label="Avatar" />
                        <Chip avatar={<Avatar/>} label="Avatar" onDelete={(event) => {}} />
                    </div>
                </div>
        </div>
    )

}
