/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import { Card, CardContent, CardHeader, IconButton, Box, Menu, MenuItem, Divider, Button } from "@mui/material";
import React, { useState, MouseEvent, ReactNode } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { FormattedTime, FormattedDate } from "react-intl";
import { ThemeBuilder } from "a11y-theme-builder-sdk";
import ModalSystemName from '../components/modals/ModalSystemName';
import FileSaver from 'file-saver';

interface Props {
    themeBuilder?: ThemeBuilder;
    designSystems: any;
    designSystem: any;
    refresh: Function;
}

export const SystemCard: React.FC<Props> = ({themeBuilder, designSystems, designSystem, refresh}) => {
    const name = designSystem.id;
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const [doCopy, setDoCopy] = useState(false);
    const [doRename, setDoRename] = useState(false);
    const handleClose = async (value: string) => {
        setAnchorEl(null);
        if (value) {
            if (value == "load") {
                window.location.href = "/designSystem/" + name;
            }
            else if (value == "copy") {
                setDoCopy(true);
            }
            else if (value == "rename") {
                setDoRename(true);
            }
            else if (value == "add") {
                const ds = await themeBuilder?.getDesignSystem(name);
                ds?.setIsSample(true);
                await ds?.store();
                refresh();
            }
            else if (value == "remove") {
                const ds = await themeBuilder?.getDesignSystem(name);
                ds?.setIsSample(false);
                await ds?.store();
                refresh();
            }
            else if (value == "delete") {
                await themeBuilder?.deleteDesignSystem(name);
                refresh();
            }
            else if (value == "view") {
                const s = await themeBuilder?.storage.get(name);
                setView(JSON.stringify(s,null,4));
            }
            else if (value == "download") {
                const s = await themeBuilder?.storage.get(name);
                const data = JSON.stringify(s,null,4);
                var file = new File([data], name + "-design-system.json", {type: "text/plain;charset=utf-8"});
                FileSaver.saveAs(file);

            }
        }
    }
    const isDesignSystem = (name: string) => {
        for (var i in designSystems) {
            if (designSystems[i].id == name) {
                return true;
            }
        }
        return false;
    }
    const onClose = async (cmd: string, dest: string) => {
        if (cmd == "copy") {
            setDoCopy(false);
            if (dest) {
                console.log("Copying Design System " + name + " to " + dest);
                if (isDesignSystem(dest)) {
                    console.log("Design system already exists");
                }
                else {
                    if (themeBuilder) {
                        const ds = await themeBuilder.getDesignSystem(name);
                        const nds = await ds.copy(dest);
                    }
                    setTimeout(function() { refresh() }, 500);
                }
            }
        }
        else if (cmd == "rename") {
            setDoRename(false);
            if (dest) {
                console.log("Rename Design System " + name + " to " + dest);
                if (isDesignSystem(dest)) {
                    console.log("Design system already exists");
                }
                else {
                    if (themeBuilder) {
                        const ds = await themeBuilder.getDesignSystem(name);
                        const nds = await ds.copy(dest);
                        if (nds) {
                            await themeBuilder.deleteDesignSystem(name);
                        }
                    }
                    setTimeout(function() { refresh() }, 500);
                }
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
                    <h5>Data for {name}</h5>
                    <div className="button-area">
                        <Button variant="contained" onClick={() => navigator.clipboard.writeText(view)}>Copy to clipboard</Button>
                        <Button  variant="outlined" onClick={() => setView(null)}>Cancel</Button>
                    </div>
                    <div>
                        <pre 
                            style={{
                                border:"1px solid var(--border)", 
                                borderRadius:"var(--spacing-half)",
                                padding: "10px",
                                fontSize: "var(--baseFont)",
                            }}
                        >{view}</pre>
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
                            className= "MuiButton-text"
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
                        >{name}</h5>
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
                <MenuItem onClick={() => handleClose("copy")}>Copy Design System</MenuItem>
                <MenuItem onClick={() => handleClose("rename")}>Rename Design System</MenuItem>
                {!isSample && <MenuItem onClick={() => handleClose("add")}>Add to Samples Page</MenuItem>}
                {isSample && <MenuItem onClick={() => handleClose("remove")}>Remove from Samples Page</MenuItem>}
                <Divider/>
                <MenuItem onClick={() => handleClose("view")}>View Design System Data</MenuItem>
                <MenuItem onClick={() => handleClose("download")}>Download Design System Data</MenuItem>
                <Divider/>
                <MenuItem onClick={() => handleClose("delete")}>Delete Design System</MenuItem>
            </Menu>
            {renderView()}
            <ModalSystemName isOpen={doCopy} onClose={onClose} cmd="copy" source={name} title="Copy Design System" message={`Enter the new Design System name to copy from "${name}".`} />
            <ModalSystemName isOpen={doRename} onClose={onClose} cmd="rename" source={name} title="Rename Design System" message={`Enter the new Design System name to rename "${name}".`} />
        </div>
    );
}

export default SystemCard;
