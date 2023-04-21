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
    const [importIsOpen, setImportIsOpen] = useState(false);
    const [error, setError] = useState<string>("");
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
                    designSystems={designSystems}
                    key={ds.id}
                    refresh={getDesignSystemNames}
                />
            )
        }
        return r;
    }

    const onImportClose = async (cmd: string, dest: string, data: string) => {
        if (cmd == "import") {
            console.log("Importing design system: name=",dest,"data=",data);
            if (data) {
                try {
                    if (!dest) throw new Error("Missing design system name");
                    const json = JSON.parse(data);
                    json.id = dest;
                    const ds = themeBuilder?.newDesignSystemFromObject(dest, json);
                    await ds?.store();
                    getDesignSystemNames();
                }
                catch (e) {
                    let message = "Data is wrong format"
                    if (e instanceof Error) {
                        if (e.message.indexOf("JSON") > -1) {
                            message = "Data is wrong format"
                        }
                        else {
                            message = e.message;
                        }
                    }
                    console.warn("Error: " + message)
                    setError("Error: " + message)
                    return;
                }
            }
        }
        setImportIsOpen(false);
        setError("");
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
                <div className="button-area">
                    <Button onClick={() => setSystemNameIsOpen(true)}>
                        Create a New Design System
                    </Button>
                    <Button onClick={() => setImportIsOpen(true)} variant="outlined">
                        Import a Design System
                    </Button>
                </div>
                <ModalSystemName isOpen={systemNameIsOpen} onClose={() => setSystemNameIsOpen(false)} />
                <ModalSystemName isOpen={importIsOpen} onClose={onImportClose} cmd="import" title="Import Design System" message={`Enter the new Design System name.`} error={error} />

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
