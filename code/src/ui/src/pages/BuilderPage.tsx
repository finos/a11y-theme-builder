import React from 'react';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import {Atom1} from '../components/atom1';
import {Atom2} from '../components/atom2';
import Atom3 from '../components/atom3';


interface Props {
    user: any;
}

let styles:any = {
    divclass: {
        color: "red",
    },
    editorclass: {
        color: "green",
    },
}

const BuilderPage: React.FC<Props> = ({user}) => {

    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event:any, newTabIndex:number) => {
        setTabIndex(newTabIndex);
    };

    const setStyles = async function(newStyle:any) {

    }
  
    return (
        <Box>
            <Box sx={{ width: '100%' }}>
                <Tabs value={tabIndex} onChange={handleTabChange} textColor="secondary" indicatorColor="secondary" >
                    <Tab label="Atom1 HTML Render" />
                    <Tab label="Atom1 HTML Editor" />
                    <Tab label="Atom2 React Render" />
                    <Tab label="Atom2 React Editor" />
                    <Tab label="Atom3 React Render" />
                    <Tab label="Atom3 React Editor" />
                </Tabs>
            </Box>
            <Box sx={{ padding: 2 }}>
                {tabIndex === 0 && (
                    <Box>
                        <div dangerouslySetInnerHTML={{ __html: Atom1.render() }}></div>
                    </Box>
                )}
                {tabIndex === 1 && (
                    <Box>
                        <div dangerouslySetInnerHTML={{ __html: Atom1.editor() }}></div>
                    </Box>
                )}
                {tabIndex === 2 && (
                    <Box>
                        <Atom2 styles={styles}/>
                    </Box>
                )}
                {tabIndex === 3 && (
                    <Box>
                        <Atom2 editor={true} />
                    </Box>
                )}
                {tabIndex === 4 && (
                    <Box>
                        <Atom3 styles={styles}  setStyles={setStyles}/>
                    </Box>
                )}
                {tabIndex === 5 && (
                    <Box>
                        <Atom3 editor={true} />
                    </Box>
                )}
            </Box>
        </Box>
    );
}

export default BuilderPage;
