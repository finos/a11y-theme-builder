/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import SystemCard from '../components/SystemCard';
import ModalSystemName from '../components/modals/ModalSystemName';
import { Storage, ThemeBuilder } from 'a11y-theme-builder-sdk';
import { HeadingSection } from './content/HeadingSection';
import { ExampleSection } from './content/ExampleSection';

interface Props {
    user: any;
    storage: Storage;
}

const GetStarted: React.FC<Props> = ({ user, storage }) => {
    const [systemNameIsOpen, setSystemNameIsOpen] = useState(false);
    const [themeBuilder, setThemeBuilder] = useState<ThemeBuilder>();
    const [designSystems, setDesignSystems] = useState<any>([]);

    const getDesignSystemNames = async () => {
        let _themeBuilder = await ThemeBuilder.create({ storage: storage });
        setThemeBuilder(_themeBuilder);
    }

    useEffect(() => {
        if (themeBuilder) {
            themeBuilder.listMetadata().then(function(_designSystems:any) {
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
            r.push(
                <SystemCard
                    themeBuilder={themeBuilder}
                    designSystem={ds}
                    key={ds.id}
                    refresh={getDesignSystemNames}
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
                <div className="card-container">
                    {renderDesignSystems()}
                </div>
            </ExampleSection>
        </div>
    )
}

export default GetStarted;
