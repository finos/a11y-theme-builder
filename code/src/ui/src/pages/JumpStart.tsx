/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useEffect, useState } from 'react';
import SystemCard from '../components/SystemCard';
import { ExampleSection } from './content/ExampleSection';
import { HeadingSection } from './content/HeadingSection';
import { Storage, ThemeBuilder } from 'a11y-theme-builder-sdk';

interface Props {
    user: any;
    storage: Storage;
}

const JumpStart: React.FC<Props> = ({ user, storage }) => {
    const [designSystems, setDesignSystems] = useState<any>([]);
    const [themeBuilder, setThemeBuilder] = useState<ThemeBuilder>();

    const getDesignSystemNames = async () => {
        let _themeBuilder = await ThemeBuilder.create({ storage: storage });
        setThemeBuilder(_themeBuilder);
    };

    useEffect(() => {
        if (themeBuilder) {
            themeBuilder.listMetadata().then(function(_designSystems:any) {
                console.log("_designSystems=", _designSystems);
                setDesignSystems(_designSystems);
            });
        }
    }, [themeBuilder]);

    useEffect(() => {
        getDesignSystemNames();
    }, []);

    const renderDesignSystems = () => {
        if (!designSystems) { return (null) }
        const r = [];
        for (var i=0; i<designSystems.length; i++) {
            const ds = designSystems[i];
            if (ds.metadata && ds.metadata.sample) {
                r.push(
                    <SystemCard
                        key={ds.id}
                        themeBuilder={themeBuilder}
                        designSystems={designSystems}
                        designSystem={ds}
                        refresh={getDesignSystemNames}
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
