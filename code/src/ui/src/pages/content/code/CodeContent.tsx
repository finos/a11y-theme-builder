import React, { ReactFragment, ReactNode} from 'react';
import { useEffect } from 'react';
import { List, ListItemButton, ListItemText, ListSubheader, styled, Button, InputLabel } from '@mui/material';
import { LeftNavHeader, LeftNavItem } from '../../../components/LeftNavTabs';
import { DesignSystem} from 'a11y-theme-builder-sdk';
import { HeadingSection } from '../HeadingSection';

import SyntaxHighlighter from 'react-syntax-highlighter';
//import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface Props {
    user: any;
    designSystem: DesignSystem;
}

const style = {
    background: "var(--surface)",
    padding: "var(--spacing-4)",
    border: "1px solid var(--border)",
    borderRadius: "var(--radius-1)",
    margin: "var(--spacing-3) 0",
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

    const [showItem, setShowItem] = React.useState(localStorage.getItem("themebuilder-code-content-selected") || "atoms");
    useEffect(() => {
        localStorage.setItem("themebuilder-code-content-selected", showItem)
    }, [showItem])
    
    const getCssCode = () => {
        const r = [":root {"];
        const vars = designSystem.code.cssGenerator.getVars();
        Object.keys(vars).forEach(name => {
            r.push(`  ${name}: ${vars[name]};`)
        })
        r.push("}")
        return r.join("\n");
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
                    <LeftNavItem text={"CSS"} value="css" indent={1} selected={showItem} onClick={()=> {setShowItem("css")}}/>
                    <LeftNavItem text={"JSON"} value="json" indent={1} selected={showItem} onClick={()=> {setShowItem("json")}}/>
            </List>
            </div>
            </div>
            <div className="design-system-editor-right-content">
            <div className="design-system-editor-right-content-scrollable">
                {showItem === "code" && <>
                    Introduction...
                </>}
                {showItem === "css" && <>
                <HeadingSection title="Code Generators" heading="CSS Code" />
                <div className="top40">
                    <h5>Base Code</h5>
                </div>
                <div className="top40">
                    <InputLabel>CSS for both Light and Dark Modes</InputLabel>
                    <SyntaxHighlighter language="css" customStyle={codeStyle}>
                        {getCssCode()}
                    </SyntaxHighlighter>
                    <Button variant="contained">Copy</Button>
                </div>

                <div className="top40">
                    <InputLabel>Mobile and Tablet CSS</InputLabel>
                </div>

                <div className="top40">
                    <SyntaxHighlighter language="css" customStyle={codeStyle}>
                        Code goes here
                    </SyntaxHighlighter>
                    <Button variant="contained">Copy</Button>
                </div>

                <div className="top40">
                    <h5>Accessibility CSS</h5>
                </div>
    
                <div className="top40">
                    <InputLabel>Motion Sensitive</InputLabel>
                    <SyntaxHighlighter language="css" customStyle={codeStyle}>
                        Code goes here
                    </SyntaxHighlighter>
                    <Button variant="contained">Copy</Button>
                </div>

                <div className="top40">
                    <InputLabel>Dyslexic</InputLabel>
                    <SyntaxHighlighter language="css" customStyle={codeStyle}>
                        Code goes here
                    </SyntaxHighlighter>
                    <Button variant="contained">Copy</Button>
                </div>
                </>}


                {showItem === "json" && <>
                <HeadingSection title="Code Generators" heading="JSON Code" />
                <div className="top40">
                    <h5>Base Code</h5>
                </div>
                <div className="top40">
                    <InputLabel>JSON for both Light and Dark Modes</InputLabel>
                    <SyntaxHighlighter language="javascript" customStyle={codeStyle}>
                        Code goes here
                    </SyntaxHighlighter>
                    <Button variant="contained">Copy</Button>
                </div>

                <div className="top40">
                    <InputLabel>Mobile and Tablet JSON</InputLabel>
                </div>

                <div className="top40">
                    <SyntaxHighlighter language="javascript" customStyle={codeStyle}>
                        Code goes here
                    </SyntaxHighlighter>
                    <Button variant="contained">Copy</Button>
                </div>

                <div className="top40">
                    <h5>Accessibility JSON</h5>
                </div>
    
                <div className="top40">
                    <InputLabel>Motion Sensitive</InputLabel>
                    <SyntaxHighlighter language="javascript" customStyle={codeStyle}>
                        Code goes here
                    </SyntaxHighlighter>
                    <Button variant="contained">Copy</Button>
                </div>

                <div className="top40">
                    <InputLabel>Dyslexic</InputLabel>
                    <SyntaxHighlighter language="javascript" customStyle={codeStyle}>
                        Code goes here
                    </SyntaxHighlighter>
                    <Button variant="contained">Copy</Button>
                </div>
                </>}
            </div>
            </div>
        </>
    );
}
