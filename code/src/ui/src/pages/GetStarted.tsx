import React, { useEffect } from 'react';
import { Button, Grid } from '@mui/material';
import { useState } from 'react';
import SystemCard from '../components/SystemCard';
import ModalSystemName from '../components/modals/ModalSystemName';
import { ThemeBuilder, DesignSystem } from 'a11y-theme-builder-sdk';
import { LocalStorage } from '../LocalStorage';
import { useNavigate } from "react-router-dom";

const name = "GetStarted";

let initComplete = false;


interface Props {
    user: any;
}

const GetStarted: React.FC<Props> = ({user}) => {
    const navigate = useNavigate();

    const [systemNameIsOpen, setSystemNameIsOpen] = useState(false);

    const [designSystemNames, setDesignSystemNames] = useState<string[]>([]);

    const getDesignSystemNames = async () => {
        const storage = new LocalStorage();
        //const storage = new ServerStorage();
        let _themeBuilder = await ThemeBuilder.create({storage: storage});
        if (_themeBuilder) {
            const dsn = await _themeBuilder.listDesignSystemNames();
            setDesignSystemNames(dsn);
        }
    };

    useEffect(() => {
        if (!initComplete) {
            initComplete = true;
            getDesignSystemNames();
        }
    }, []);

    const renderDesignSystems = () => {
        const r = [];
        for (var i in designSystemNames) {
            const name = designSystemNames[i];
            r.push(
                <Grid key={name} item xs={9} sm={7} md={5}>
                    <SystemCard 
                        name={name}
                        title={name}
                        onClickHandler={async (event, name)=>{window.location.href="/designSystem/"+name}}
                    />
                </Grid>
            )
        }
        return r;
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="overline-large">
                        Design Systems
                    </div>
                    <h1>Get Started</h1>
                    <div className="subtitle1">
                        Design Systems
                    </div>
                    <p>
                        A design system is created by building your atomic elements
                        and then assigning them to core components.
                    </p>
                    <div className="subtitle1">
                        Themes
                    </div>
                    <p>
                        Themes use the atomic styles and components defined in the
                        Design Systems and skin the components in the defined Theme colors.
                        Themes are children to Design Systems and every Design Systems must
                        have at least one theme.
                    </p>
                </div>
            </div>
            <div className="row top40">
                <Button onClick={() => setSystemNameIsOpen(true)}>
                    Create a New Design System

                </Button>
            </div>
            <ModalSystemName isOpen={systemNameIsOpen} onClose={ () => setSystemNameIsOpen(false)}/>
            <div className="row top40">
                <div className="col-12">
                    <h5>Your Design Systems</h5>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card-area">
                        <Grid
                            container
                            spacing={3}
                        >
                            {renderDesignSystems()}
                        </Grid>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetStarted;
