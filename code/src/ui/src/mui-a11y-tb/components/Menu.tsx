import React, { ReactNode, useEffect, useState } from 'react';
import { Menu as MuiMenu, MenuProps } from '@mui/material';

interface Props extends MenuProps {
    children?: ReactNode
}

export const Menu: React.FC<Props> = ({children, ...rest}) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const refContainer = React.useRef(null);
    useEffect(() => {
        if (refContainer.current) {
            setAnchorEl(refContainer.current);
        }
    }, [refContainer]);

    return (
        <div>
            <MuiMenu
                {...rest}
                container={anchorEl}
            >
                {children}
            </MuiMenu>
            <div ref={refContainer} ></div>
        </div >
    )
}
