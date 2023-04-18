/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React from 'react';
import { useEffect, useState } from 'react';
import { List, Button, InputLabel } from '@mui/material';
import { LeftNavHeader, LeftNavItem } from '../../../components/LeftNavTabs';
import { DesignSystem, Event, EventType } from 'a11y-theme-builder-sdk';
import { HeadingSection } from '../HeadingSection';
import FileSaver from 'file-saver';

interface Props {
    user: any;
    designSystem: DesignSystem;
}

const codeStyle = {
    overflowY: "auto" as "auto",
    overflowX: "auto" as "auto",
    maxHeight: "400px",
    maxWidth: "calc(100vw - 400px)",
    padding: "20px",
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: "var(--radius-1)",
    margin: "var(--spacing-3) 0",
}

export const CodeContent: React.FC<Props> = ({ user, designSystem }) => {

    const [showItem, setShowItem] = React.useState(localStorage.getItem("themebuilder-code-content-selected") || "code");
    useEffect(() => {
        localStorage.setItem("themebuilder-code-content-selected", showItem)
    }, [showItem])

    const [disabled, setDisabled] = useState<boolean>(false);
    function enableDisableItems() {
        const isDisabled = !designSystem.code.isEnabled();
        setDisabled(isDisabled);
        if (isDisabled) {
            setShowItem("code");
        }
    }
    useEffect(() => {
        if (designSystem) {
            designSystem.setListener("CodeContent-isEditable",
                function(event: Event) {
                    if (event.type == EventType.NodeDisabled) {
                        enableDisableItems();
                    }
                    else if (event.type == EventType.NodeEnabled) {
                        enableDisableItems();
                    }
                }
            )
            enableDisableItems();
        }
    }, [])

    useEffect(() => {
    }, [disabled])

    const getCssCode = () => {
        const r = [":root {"];
        const vars = designSystem.code.getCSSVars();
        Object.keys(vars).forEach(name => {
            r.push(`  ${name}: ${vars[name]};`)
        })
        r.push("}")
        return r.join("\n");
    }

    const getJsonCode = (lm: boolean) => {
        const code = designSystem.code.getJSON(lm);
        return JSON.stringify(code,null,2);
    }

    const saveFile = (data: string, fileName: string) => {
        var file = new File([data], fileName, {type: "text/plain;charset=utf-8"});
        FileSaver.saveAs(file);
    }

    return (
        <>
            <div className="design-system-editor-left-nav">
                <div className="design-system-editor-left-nav-scrollable">
                <List
                        sx={{
                            '& ul': {padding:0},
                            paddingTop: "0px",
                        }}
                    >
                        <LeftNavHeader>Introduction</LeftNavHeader>
                        <LeftNavItem text={"Code"} value="code" indent={1} selected={showItem} onClick={()=> {setShowItem("code")}}/>
                        <LeftNavHeader>Code Generators</LeftNavHeader>
                        <LeftNavItem text={"CSS"} value="css" indent={1} selected={showItem} onClick={()=> {setShowItem("css")}} disabled={disabled}/>
                        <LeftNavItem text={"JSON"} value="json" indent={1} selected={showItem} onClick={()=> {setShowItem("json")}} disabled={disabled}/>
                </List>
                </div>
            </div>
            <div className="design-system-editor-right-content">
                <div className="design-system-editor-right-content-scrollable">
                    {showItem === "code" && <>
                        <h1>Getting Started with Code</h1>
                        Once your design system has been created and you've tweaked all of the parameters for the various atoms, molecules and organisms, you can generate code that can be used to ensure accessibility-compliant applications.
                        <ul>
                            <li>For a web application: <p>CSS is generated.  It can be copied into your application's css file and used style HTML or MUI React components to provide accessibile content.</p></li>
                            <li>For a design tool: <p>JSON tokens are generated.  They can be copied and imported into your design tool such as Figma.</p></li>
                        </ul>
                    </>}
                    {showItem === "css" && <>
                        <HeadingSection title="Code Generators" heading="CSS Code" />
                        <div className="top40">
                            <h5>Base Code</h5>
                        </div>
                        <div className="top40">
                            <InputLabel>CSS for both Light and Dark Modes</InputLabel>
                            <pre style={codeStyle}>
                                {getCssCode()}
                            </pre>
                            <Button variant="contained" onClick={() => navigator.clipboard.writeText(getCssCode())}>Copy</Button>
                            <span style={{paddingLeft: "20px"}}> &nbsp;</span>
                            <Button variant="outlined" onClick={() => saveFile(getCssCode(), designSystem.name + ".css")}>Download</Button>
                        </div>

                        <div className="top40">
                            <InputLabel>Mobile and Tablet CSS</InputLabel>
                        </div>

                        <div className="top40">
                            <pre style={codeStyle}>
                                Code goes here
                            </pre>
                            <Button variant="contained" onClick={() => navigator.clipboard.writeText("Code goes here")}>Copy</Button>
                            <span style={{paddingLeft: "20px"}}> &nbsp;</span>
                            <Button variant="outlined" onClick={() => saveFile("Code goes here", designSystem.name + "-mobile.css")}>Download</Button>
                        </div>

                        <div className="top40">
                            <h5>Accessibility CSS</h5>
                        </div>

                        <div className="top40">
                            <InputLabel>Motion Sensitive</InputLabel>
                            <pre style={codeStyle}>
                                Code goes here
                            </pre>
                            <Button variant="contained" onClick={() => navigator.clipboard.writeText("Code goes here")}>Copy</Button>
                            <span style={{paddingLeft: "20px"}}> &nbsp;</span>
                            <Button variant="outlined" onClick={() => saveFile("Code goes here", designSystem.name + "-motion.css")}>Download</Button>
                        </div>

                        <div className="top40">
                            <InputLabel>Dyslexic</InputLabel>
                            <pre style={codeStyle}>
                                Code goes here
                            </pre>
                            <Button variant="contained" onClick={() => navigator.clipboard.writeText("Code goes here")}>Copy</Button>
                            <span style={{paddingLeft: "20px"}}> &nbsp;</span>
                            <Button variant="outlined" onClick={() => saveFile("Code goes here", designSystem.name + "-dyslexic.css")}>Download</Button>
                        </div>
                    </>}

                    {showItem === "json" && <>
                        <HeadingSection title="Code Generators" heading="JSON Code" />
                        <div className="top40">
                            <h5>Base Code</h5>
                        </div>

                        <div className="top40">
                            <InputLabel>JSON for both Light and Dark Modes</InputLabel>
                            <pre style={codeStyle}>
                                {getJsonCode(true)}
                            </pre>
                            <Button variant="contained" onClick={() => navigator.clipboard.writeText(getJsonCode(true))}>Copy</Button>
                            <span style={{paddingLeft: "20px"}}> &nbsp;</span>
                            <Button variant="outlined" onClick={() => saveFile(getJsonCode(true), designSystem.name + ".json")}>Download</Button>
                        </div>

                        <div className="top40">
                            <InputLabel>Dark Mode Theme Layer</InputLabel>
                            <pre style={codeStyle}>
                                {getJsonCode(false)}
                            </pre>
                            <Button variant="contained" onClick={() => navigator.clipboard.writeText(getJsonCode(false))}>Copy</Button>
                            <span style={{paddingLeft: "20px"}}> &nbsp;</span>
                            <Button variant="outlined" onClick={() => saveFile(getJsonCode(false), designSystem.name + "-darkmode.json")}>Download</Button>
                        </div>

                        <div className="top40">
                            <InputLabel>Mobile and Tablet JSON</InputLabel>
                        </div>

                        <div className="top40">
                            <pre style={codeStyle}>
                                Code goes here
                            </pre>
                            <Button variant="contained" onClick={() => navigator.clipboard.writeText("Code goes here")}>Copy</Button>
                            <span style={{paddingLeft: "20px"}}> &nbsp;</span>
                            <Button variant="outlined" onClick={() => saveFile("Code goes here", designSystem.name + "-mobile.json")}>Download</Button>
                        </div>

                        <div className="top40">
                            <h5>Accessibility JSON</h5>
                        </div>

                        <div className="top40">
                            <InputLabel>Motion Sensitive</InputLabel>
                            <pre style={codeStyle}>
                                Code goes here
                            </pre>
                            <Button variant="contained" onClick={() => navigator.clipboard.writeText("Code goes here")}>Copy</Button>
                            <span style={{paddingLeft: "20px"}}> &nbsp;</span>
                            <Button variant="outlined" onClick={() => saveFile("Code goes here", designSystem.name + "-motion.json")}>Download</Button>
                        </div>

                        <div className="top40">
                            <InputLabel>Dyslexic</InputLabel>
                            <pre style={codeStyle}>
                                Code goes here
                            </pre>
                            <Button variant="contained" onClick={() => navigator.clipboard.writeText("Code goes here")}>Copy</Button>
                            <span style={{paddingLeft: "20px"}}> &nbsp;</span>
                            <Button variant="outlined" onClick={() => saveFile("Code goes here", designSystem.name + "-dyslexic.json")}>Download</Button>
                        </div>
                    </>}
                </div>
            </div>
        </>
    );
}
