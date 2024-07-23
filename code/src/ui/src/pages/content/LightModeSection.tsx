/**
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */

import React from 'react';

interface Props {
    children?: React.ReactNode;
    title?: string;
    style?: any;
}

export const LightModeSection: React.FC<Props> = ({
    children,
    title,
    style,
}) => {
    return (
        <div data-mode="light" style={style} className="lightholder">
            <h4 style={{ marginTop: '10px', marginBottom: '10px' }}>
                {title || 'Light Mode'}
            </h4>
            {children}
        </div>
    );
};
