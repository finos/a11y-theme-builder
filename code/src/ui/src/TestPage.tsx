import React, {ReactDOM} from 'react';
import { Tab, Tabs, Box, Button, Grid, Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import { ServerStorage } from './ServerStorage';
import { LocalStorage } from './LocalStorage';

interface Props {
    user: any;
}

    // var v = window.localStorage.getItem("buttons");
    // window.localStorage.setItem("buttons", buttons);
    // window.localStorage.removeItem("uploadAttachments")
// let keys = Object.keys(localStorage);
// console.log("Local storage keys=",keys);
// for (var i in keys) {
//     console.log(keys[i]+"="+localStorage.getItem(keys[i]))
// }

const TestPage: React.FC<Props> = ({user}) => {

    const paperStyle = {padding: "10px", height:"100%"}

    //const storage = new ServerStorage();
    const storage = new LocalStorage();

    const [tabIndex, setTabIndex] = useState(0);
    const [designSystems, setDesignSystems] = useState<string[]>([]);
    const [designSystemData, setDesignSystemData] = useState<any>();

    const handleTabChange = (event:any, newTabIndex:number) => {
        setTabIndex(newTabIndex);
    };

    // Storage Test
    const getDesignSystems = async () => { 
        console.log(`getDesignSystems()`);
        const list = await storage.listKeys();
        setDesignSystems(list);
    }

    const addDesignSystem = async () => { 
        console.log(`addDesignSystem()`);
        const num = Math.floor(Math.random() * 1000)
        const data = {id:"DS_"+num, data:"This is data for design system " + num}
        const r = await storage.set(data.id, JSON.stringify(data));
        await getDesignSystems();
        await showDesignSystem({target:{name:data.id}});
    }

    const showDesignSystem = async (event: any) => {
        console.log(`showDesignSystem(${event.target.name})`);
        const ds = await storage.get(event.target.name);
        const dso = JSON.parse(ds)
        setDesignSystemData(dso);
    }

    const deleteDesignSystem = async (event: any) => {
        console.log(`deleteDesignSystem(${event.target.name})`);
        const ds = await storage.delete(event.target.name);
        await getDesignSystems();
    }

    const updateDesignSystem = async (event: any) => {
        console.log(`updateDesignSystem(${event.target.name})`);
        const id = event.target.name;
        let cnt = 1;
        const c = await storage.get(id);
        const co = JSON.parse(c);
        if (co.updated) {
            cnt = co.updated + 1;
        }
        const ds = await storage.set(id, JSON.stringify({data: "Updated data for design system " + id, updated:cnt}));
        await getDesignSystems();
        await showDesignSystem(event);
    }

    const renderDesignSystems = () => {
        console.log("renderDesignSystems()")
        let text = [];
        for (var i=0; i<designSystems.length; i++) {
            const id = designSystems[i];
            text.push(
                <tr key={"ds_"+id}>
                    <td><b>{id}</b></td>
                    <td><Button name={id} onClick={showDesignSystem} >View</Button></td>
                    <td><Button name={id} onClick={updateDesignSystem} >Update</Button></td>
                    <td><Button name={id} onClick={deleteDesignSystem} >Delete</Button></td>
                </tr>
                )
        }
        return <table><thead><tr><th>Name</th><th>View</th><th>Update</th><th>Delete</th></tr></thead><tbody>{text}</tbody></table>;
    }

    useEffect(() => {
        console.log("Init page load")
        console.log("classList=",document.body.classList);
        getDesignSystems();
    }, []);

    useEffect(() => {
        //console.log("designSystemData updated =", designSystemData);
    }, [designSystemData]);

    const PrettyPrintJson = (data:any) => {
        //console.log("keys=",Object.keys(data))
        const key1 = Object.keys(data)[0]; // not sure why this object key with name of variable is inserted?  But remove that level.
        const d = data[key1];
        return (<div><pre>{ JSON.stringify(d, null, 4) }</pre></div>);
    }

    return (
        <Box>
            <Box sx={{ width: '100%' }}>
                <Tabs value={tabIndex} onChange={handleTabChange} textColor="secondary" indicatorColor="secondary" >
                    <Tab label="Storage Test" />
                    <Tab label="Other Tests" />
                </Tabs>
            </Box>

            {tabIndex === 0 && (
                <Box>
                    <h1 style={{textAlign: "center"}}>Storage Test</h1>
                    <div style={{paddingTop: "20px"}}>
                        <h2>Design Systems:</h2>
                        <div style={{marginBottom: "20px", textAlign:"center"}}>
                            <Button variant="contained" onClick={addDesignSystem}> Add a new design system </Button>
                        </div>
                        <Grid container spacing={2} style={{padding: "10px"}}>
                            <Grid item xs={3}>
                            <Paper style={paperStyle}>
                                {renderDesignSystems()}
                            </Paper>
                            </Grid>
                            <Grid item xs={9}>
                            <Paper style={paperStyle}>
                                {!designSystemData && <div>Select design system to view</div>}
                                {designSystemData && PrettyPrintJson({designSystemData})}
                            </Paper>
                            </Grid>
                        </Grid>
                    </div>
                </Box>
            )}

            {tabIndex === 1 && (
                <>Other Test</>
            )}
        </Box>
    );
}

export default TestPage;
