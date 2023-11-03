/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React from 'react';
import { useEffect, useState } from 'react';
import { List, Button, InputLabel, Grid } from '@mui/material';
import { LeftNavHeader, LeftNavItem } from '../../../components/LeftNavTabs';
import { DesignSystem, Event, EventType } from '@finos/a11y-theme-builder-sdk';
import { HeadingSection } from '../HeadingSection';
import FileSaver from 'file-saver';
import { Preferences } from '../../../Preferences';

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
    const pref = new Preferences(designSystem.name);

    const [showItem, setShowItem] = React.useState(pref.get("code-content-selected") || "code");
    useEffect(() => {
        pref.set("code-content-selected", showItem)
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

    const getDyslexiaCssCode = () => {
        return designSystem.code.cssGenerator.getDyslexiaAsString();
    }

    const getMotionSensitivityCssCode = () => {
        return designSystem.code.cssGenerator.getMotionSensitivityAsString();
    }

    const getDyslexiaJsonCode = () => {
        return designSystem.code.jsonGenerator.getDyslexiaAsString();
    }

    const getMotionSensitivityJsonCode = () => {
        return designSystem.code.jsonGenerator.getMotionSensitivityAsString();
    }

    const getJsonCodeDM = () => {
        const code = designSystem.code.getJSONDM();
        return JSON.stringify(code,null,2);
    }

    const getJsonCodeLM = () => {
        const code = designSystem.code.getJSONLM();
        return JSON.stringify(code,null,2);
    }

    const getJsonBaseCode = () => {
        const code = designSystem.code.getJSONBase();
        return JSON.stringify(code,null,2);
    }

    const saveFile = (data: string, fileName: string) => {
        var file = new File([data], fileName, {type: "text/plain;charset=utf-8"});
        FileSaver.saveAs(file);
    }

    return (
        <>
            <div className="design-system-editor-left-nav" >
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
                      <Grid container spacing={2} columns={12} margin={2}>
                        <Grid item spacing={2} lg={12} md={12} sm={12}>
                          <h1>Getting Started with Code</h1>
                          Once your design system has been created and you've tweaked all of the parameters for the various atoms, molecules and organisms, you can generate code that can be used to ensure accessibility-compliant applications.
                          <ul>
                              <li>For a web application: <p>CSS is generated.  It can be copied into your application's css file and used style HTML or MUI React components to provide accessibile content.</p></li>
                              <li>For a design tool: <p>JSON tokens are generated.  They can be copied and imported into your design tool such as Figma.</p></li>
                          </ul>
                        </Grid>
                      </Grid>
                      </>}
                      {showItem === "css" && <>
                          <HeadingSection title="Code Generators" heading="CSS Code" />
                          <Grid container spacing={2} columns={12} margin={2}>
                            <Grid item spacing={2} lg={12} md={12} sm={12}>
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
                                      { getMotionSensitivityCssCode() }
                                  </pre>
                                  <Button variant="contained" onClick={() => navigator.clipboard.writeText(getMotionSensitivityCssCode())}>Copy</Button>
                                  <span style={{paddingLeft: "20px"}}> &nbsp;</span>
                                  <Button variant="outlined" onClick={() => saveFile(getMotionSensitivityCssCode(), designSystem.name + "-motion.css")}>Download</Button>
                              </div>

                              <div className="top40">
                                  <InputLabel>Dyslexic</InputLabel>
                                  <pre style={codeStyle}>
                                      { getDyslexiaCssCode() }
                                  </pre>
                                  <Button variant="contained" onClick={() => navigator.clipboard.writeText(getDyslexiaCssCode())}>Copy</Button>
                                  <span style={{paddingLeft: "20px"}}> &nbsp;</span>
                                  <Button variant="outlined" onClick={() => saveFile(getDyslexiaCssCode(), designSystem.name + "-dyslexic.css")}>Download</Button>
                              </div>
                            </Grid>
                          </Grid>
                          </>}

                      {showItem === "json" && <>
                          <HeadingSection title="Code Generators" heading="JSON Code" />
                          <Grid container spacing={2} columns={12} margin={2}>
                            <Grid item spacing={2} lg={12} md={12} sm={12}>
                              <div className="top40">
                                  <h5>Base Code</h5>
                              </div>

                              <div className="top40">
                                  <InputLabel>Base JSON Code</InputLabel>
                                  <pre style={codeStyle}>
                                      {getJsonBaseCode()}
                                  </pre>
                                  <Button variant="contained" onClick={() => navigator.clipboard.writeText(getJsonBaseCode())}>Copy</Button>
                                  <span style={{paddingLeft: "20px"}}> &nbsp;</span>
                                  <Button variant="outlined" onClick={() => saveFile(getJsonBaseCode(), designSystem.name + ".json")}>Download</Button>
                              </div>
                              <div className="top40">
                                  <InputLabel>Light Mode Theme Layer</InputLabel>
                                  <pre style={codeStyle}>
                                      {getJsonCodeLM()}
                                  </pre>
                                  <Button variant="contained" onClick={() => navigator.clipboard.writeText(getJsonCodeLM())}>Copy</Button>
                                  <span style={{paddingLeft: "20px"}}> &nbsp;</span>
                                  <Button variant="outlined" onClick={() => saveFile(getJsonCodeLM(), designSystem.name + "-darkmode.json")}>Download</Button>
                              </div>
                              <div className="top40">
                                  <InputLabel>Dark Mode Theme Layer</InputLabel>
                                  <pre style={codeStyle}>
                                      {getJsonCodeDM()}
                                  </pre>
                                  <Button variant="contained" onClick={() => navigator.clipboard.writeText(getJsonCodeDM())}>Copy</Button>
                                  <span style={{paddingLeft: "20px"}}> &nbsp;</span>
                                  <Button variant="outlined" onClick={() => saveFile(getJsonCodeDM(), designSystem.name + "-darkmode.json")}>Download</Button>
                              </div>
                            </Grid>
                          </Grid>
                      </>}


              </div>
            </div>
        </>
    );
}
