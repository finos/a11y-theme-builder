import React, { useEffect, useState } from 'react';
import SystemCard from '../components/SystemCard';
import { ExampleSection } from './content/ExampleSection';
import { HeadingSection } from './content/HeadingSection';
import { ThemeBuilder } from 'a11y-theme-builder-sdk';
import { LocalStorage } from '../LocalStorage';
import { ServerStorage } from '../ServerStorage';

interface Props {
    user: any;
}

const JumpStart: React.FC<Props> = ({ user }) => {
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
            if (name.toLowerCase().indexOf("sample") > -1) {
            r.push(
                <SystemCard
                    key={name}
                    name={name}
                    title={name}
                    onClickHandler={async (event, name) => { window.location.href = "/designSystem/" + name }}
                />
            )
            }
        }
        return r;
    }

    return (
        <div>
            <HeadingSection title="Sample and Template Design System" heading="Jump Start">
                Explore our sample design systems.  You can duplicate theme
                to make your own or start from scratch to build your own systems.
            </HeadingSection>
            <div className="top40" />
            <ExampleSection title="Sample Design Systems">
            <div className="card-container">
                {renderDesignSystems()}
            </div>
            </ExampleSection>
        </div>
    );
}

export default JumpStart;
