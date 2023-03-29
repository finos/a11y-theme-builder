import { Card, CardContent, CardHeader, IconButton, Box, Menu, MenuItem } from "@mui/material";
import React, { useState, MouseEvent } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { FormattedTime, FormattedDate } from "react-intl";
import { ThemeBuilder } from "a11y-theme-builder-sdk";

interface Props {
    themeBuilder?: ThemeBuilder;
    designSystem: any;
    refresh: Function;
}

const options = [
    {label: "Load Design System", value: "load"},
    {label: "Add to Samples Page", value: "add"},
    {label: "Remove from Samples Page", value: "remove"},
    {label: "Delete Design System", value: "delete"},
];

export const SystemCard: React.FC<Props> = ({themeBuilder, designSystem, refresh}) => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = async (event:any) => {
        const value = event.currentTarget.dataset.value;
        setAnchorEl(null);
        if (value) {
            if (value == "load") {
                window.location.href = "/designSystem/" + designSystem.id;
            }
            else if (value == "add") {
                const ds = await themeBuilder?.getDesignSystem(designSystem.id);
                ds?.setIsSample(true);
                await ds?.store();
                refresh();
            }
            else if (value == "remove") {
                const ds = await themeBuilder?.getDesignSystem(designSystem.id);
                ds?.setIsSample(false);
                await ds?.store();
                refresh();
            }
            else if (value == "delete") {
                await themeBuilder?.deleteDesignSystem(designSystem.id);
                refresh();
            }
        }
    }

    const renderDate = (d:number) => {
        if (d) {
            const date = new Date(d);
            return (
                <span>
                    <FormattedDate value={date} day="numeric" month="short" year="numeric"/> &nbsp;
                    <FormattedTime value={date}/>
                </span>
            )
        }
        return null;
    }

    const metadata = designSystem.metadata;
    let primary = null;
    let secondary = "";
    let tertiary = "";
    let background = "";
    if (metadata && metadata.colors) {
        primary = metadata.colors.primary;
        secondary = metadata.colors.secondary;
        tertiary = metadata.colors.tertiary;
        background = metadata.colors.background;
    } 

    return (
        <div className="system-card">
            <Card>
                <CardHeader
                    action={
                        <IconButton 
                            aria-label="settings" 
                            sx={{
                                "&::after": {
                                    border: "none",
                                },
                            }}
                            onClick={handleClick}>
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={
                        <h5>{designSystem.id}</h5>
                    }
                    subheader={
                        <div className="date caption quiet">
                            {renderDate((metadata && metadata.time) ? metadata.time.lastUpdateInMs : null)} &nbsp;
                        </div>
                    }
                >
                </CardHeader>
                <CardContent>
                    <h6>Theme:</h6>
                    <div className="color-band">
                        <Box>
                            <div className="box" style={{backgroundColor: primary}}></div>
                            <div className="box" style={{backgroundColor: secondary}}></div>
                            <div className="box" style={{backgroundColor: tertiary}}></div>
                            <div className="box" style={{backgroundColor: background}}></div>
                        </Box>
                    </div>
                </CardContent>
            </Card>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {options.map((option) => (
                <MenuItem key={option.value} data-value={option.value} onClick={handleClose}>
                    {option.label}
                </MenuItem>
                ))}
            </Menu>            
        </div>
    );
}

export default SystemCard;