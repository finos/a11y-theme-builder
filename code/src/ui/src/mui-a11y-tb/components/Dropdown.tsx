/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { ReactNode, useEffect, useState } from 'react';
import { Select, BaseSelectProps } from '@mui/material';

interface Props extends BaseSelectProps {
    children?: ReactNode
}

export const Dropdown: React.FC<Props> = ({children, MenuProps, ...rest}) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const refContainer = React.useRef(null);
    useEffect(() => {
        if (refContainer.current) {
            setAnchorEl(refContainer.current);
        }
    }, [refContainer]);

    return (
        <div>
            <Select
                {...rest}
                MenuProps={{
                    container: anchorEl,
                    ...MenuProps
                }}
            >
                {children}
            </Select>
            <div ref={refContainer} ></div>
        </div >
    )
}
