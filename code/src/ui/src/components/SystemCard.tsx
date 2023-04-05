/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import { Card, CardContent, CardHeader, IconButton, Box, Menu, MenuItem, Divider } from "@mui/material";
import React, { useState, MouseEvent, ReactNode } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { FormattedTime, FormattedDate } from "react-intl";
import { ThemeBuilder } from "a11y-theme-builder-sdk";

interface Props {
    themeBuilder?: ThemeBuilder;
    designSystem: any;
    refresh: Function;
}

export const SystemCard: React.FC<Props> = ({themeBuilder, designSystem, refresh}) => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = async (value: string) => {
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
            else if (value == "view") {
                const s = await themeBuilder?.storage.get(designSystem.id);
                setView(JSON.stringify(s,null,4));
            }
        }
    }
    const [view, setView] = useState<string | null>();
    const renderView = () => {
        if (view) {
            return (
            <>
                <div className="overlay" onClick={() => setView(null)} ></div>
                <div className="modal" style={{width: "50%", height:"80%", overflow:"auto"}}>
                    <h5>Data for {designSystem.id}</h5>
                    <div>
                        <pre>{view}</pre>
                    </div>
                </div>
            </>
            )
        }
        return null;
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
    let isSample = false;
    if (metadata && metadata.sample) {
        isSample = true;
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
                        <h5 
                            onClick={() => handleClose("load")}
                            style={{cursor: "pointer"}}
                        >{designSystem.id}</h5>
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
                <MenuItem onClick={() => handleClose("load")}>Load Design System</MenuItem>
                {!isSample && <MenuItem onClick={() => handleClose("add")}>Add to Samples Page</MenuItem>}
                {isSample && <MenuItem onClick={() => handleClose("remove")}>Remove from Samples Page</MenuItem>}                
                <Divider/>
                <MenuItem onClick={() => handleClose("view")}>View Design System Data</MenuItem>
                <Divider/>
                <MenuItem onClick={() => handleClose("delete")}>Delete Design System</MenuItem>
            </Menu>
            {renderView()}  
        </div>
    );
}

export default SystemCard;