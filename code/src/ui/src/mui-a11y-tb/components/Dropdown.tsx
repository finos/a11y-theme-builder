import React, { ReactNode, useEffect, useState } from 'react';
import { Select, SelectProps } from '@mui/material';

interface Props extends SelectProps {
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
