import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import SystemCard from '../components/SystemCard';
import ModalSystemName from '../components/modals/ModalSystemName';
import { ThemeBuilder } from 'a11y-theme-builder-sdk';
import { LocalStorage } from '../LocalStorage';
import { ServerStorage } from '../ServerStorage';
import { HeadingSection } from './content/HeadingSection';
import { ExampleSection } from './content/ExampleSection';

interface Props {
    user: any;
}

const GetStarted: React.FC<Props> = ({ user }) => {
    const [systemNameIsOpen, setSystemNameIsOpen] = useState(false);

    const [designSystemNames, setDesignSystemNames] = useState<string[]>([]);

    const getDesignSystemNames = async () => {
        //const storage = new LocalStorage();
        const storage = new ServerStorage();
        let _themeBuilder = await ThemeBuilder.create({ storage: storage });
        if (_themeBuilder) {
            const dsn = await _themeBuilder.listDesignSystemNames();
            console.log("dsn=", dsn);
            setDesignSystemNames(dsn);
        }
    };

    useEffect(() => {
        getDesignSystemNames();
    }, []);

    const renderDesignSystems = () => {
        const r = [];
        for (var i in designSystemNames) {
            const name = designSystemNames[i];
            r.push(
                <SystemCard
                    key={name}
                    name={name}
                    title={name}
                    onClickHandler={async (event, name) => { window.location.href = "/designSystem/" + name }}
                />
            )
        }
        return r;
    }

    return (
        <div>
            <HeadingSection title="Design Systems" heading="Getting Started">
                <h6 style={{ margin: "0px" }}>Design Systems</h6>
                <p>
                    A design system is created by building your atomic elements
                    and then assigning them to core components.
                </p>
                <h6 style={{ margin: "0px" }}>Themes</h6>
                <p>
                    Themes use the atomic styles and components defined in the
                    Design Systems and skin the components in the defined Theme colors.
                    Themes are children to Design Systems and every Design Systems must
                    have at least one theme.
                </p>
                <div className="row top40" />
                <Button onClick={() => setSystemNameIsOpen(true)}>
                    Create a New Design System
                </Button>
                <ModalSystemName isOpen={systemNameIsOpen} onClose={() => setSystemNameIsOpen(false)} />
            </HeadingSection>
            <ExampleSection title="Your Design Systems">
                <div style={{ display: "flex", gap: "20px" }}>
                    {renderDesignSystems()}
                </div>
            </ExampleSection>
        </div>
    )
}

export default GetStarted;
