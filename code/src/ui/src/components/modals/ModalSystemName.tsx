/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import { Button } from '@mui/material';
import React, { useState } from 'react';
import './Modals.css';

interface Props {
    isOpen: any;
    onClose: any;
    cmd?: string; // copy or rename or import.  If not set, then create a new design system
    source?: string; // name of design system
    title?: string; // optional title to display
    message?: string; // optional message to display
    error?: string; // optional error string to display
}

const ModalSystemName: React.FC<Props> = ({
    isOpen,
    onClose,
    cmd,
    source,
    title,
    message,
    error,
}) => {
    const [systemName, setSystemName] = useState('');
    const [data, setData] = useState('');
    const [fileContent, setFileContent] = useState('');
    const [fileName, setFileName] = useState('');

    const handleSubmit = async () => {
        if (cmd) {
            if (cmd == 'copy' || cmd == 'rename') {
                console.log(
                    cmd + ' Design System ' + source + ' to ' + systemName
                );
                await onClose(cmd, systemName);
            } else if (cmd == 'import') {
                console.log(cmd + ' Design System as ' + systemName);
                if (fileName || fileContent) {
                    await onClose(cmd, systemName, fileContent);
                } else {
                    await onClose(cmd, systemName, data);
                }
            }
        } else {
            onClose();
            console.log('Creating new Design System:', systemName);
            // TODO: Check for name already exist
            window.location.href = `/designSystem/${systemName}`;
        }
    };

    const handleCancel = () => {
        if (cmd) {
            onClose(cmd);
        } else {
            onClose();
        }
        setSystemName('');
        setData('');
    };

    const handleFileSelect = async (event: any) => {
        if (!event.target.files) {
            console.log('No file');
            setFileName('');
            setFileContent('');
            return;
        }
        const file = event.target.files[0];
        const { name } = file;
        const reader = new FileReader();
        reader.onload = (evt) => {
            if (!evt?.target?.result) {
                return;
            }
            const { result } = evt.target;
            setFileContent('' + result);
            setFileName(name);
        };
        reader.readAsText(file);
    };

    if (!isOpen) return null;
    return (
        <>
            <div className="overlay" onClick={onClose}></div>
            <div className="modal modal-systemName">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title fs-5">
                            {title || 'Design System Name'}
                        </h5>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="modal-body">
                            <div className="top16">
                                {message ||
                                    "Let's get started by naming your Design Systems."}
                            </div>
                            <br />
                            <label className="label-1" htmlFor="name">
                                Name
                            </label>
                            <br />
                            <input
                                type="text"
                                id="new-name"
                                placeholder="Enter design system name"
                                className="input-1"
                                required
                                value={systemName}
                                style={{
                                    width: '100%',
                                    boxSizing: 'border-box',
                                }}
                                onChange={(e) => setSystemName(e.target.value)}
                            />
                            {cmd == 'import' && (
                                <div className="top40">
                                    Copy & paste design system data <br />
                                    <span style={{ paddingLeft: '20px' }}>
                                        OR
                                    </span>
                                    <br /> Select a design system file.
                                    <div className="top24" />
                                    <label
                                        className="label-1"
                                        htmlFor="import-data"
                                    >
                                        Design System data
                                    </label>
                                    <br />
                                    <textarea
                                        className="input-1"
                                        id="import-data"
                                        value={data}
                                        style={{
                                            width: '100%',
                                            paddingLeft: '8px',
                                            border: '1px solid var(--border)',
                                            height: '100px',
                                            borderRadius: 'var(--spacing-half)',
                                            fontFamily: 'var(--primaryFont)',
                                            fontSize: 'var(--baseFont)',
                                            boxSizing: 'border-box',
                                        }}
                                        placeholder="Copy & paste design system data here"
                                        onChange={(e) =>
                                            setData(e.target.value)
                                        }
                                    />
                                    <label
                                        className="label-1"
                                        htmlFor="import-data"
                                    >
                                        Design System file
                                    </label>
                                    <br />
                                    <div
                                        style={{ display: 'flex', gap: '10px' }}
                                    >
                                        <input
                                            type="text"
                                            id="file-name"
                                            placeholder="Select a design system file"
                                            className="input-1"
                                            value={fileName}
                                            readOnly
                                        />
                                        <Button
                                            component="label"
                                            variant="outlined"
                                        >
                                            <span
                                                style={{ whiteSpace: 'nowrap' }}
                                            >
                                                Select file
                                            </span>
                                            <input
                                                type="file"
                                                accept=".json"
                                                hidden
                                                onChange={handleFileSelect}
                                                value=""
                                            />
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </div>
                        {error && <div style={{ color: 'red' }}>{error}</div>}
                        <div className="modal-footer">
                            <Button onClick={handleSubmit}>Next</Button>
                            <Button
                                onClick={handleCancel}
                                className="MuiButton-outlined"
                            >
                                Cancel
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ModalSystemName;
