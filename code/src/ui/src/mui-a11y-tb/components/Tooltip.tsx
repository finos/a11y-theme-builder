import React, { useEffect, useState } from 'react';
import { Tooltip as MuiTooltip, TooltipProps } from '@mui/material';

export const Tooltip: React.FC<TooltipProps> = ({children, PopperProps, ...rest}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const refContainer = React.useRef(null);

    useEffect(() => {
        if (refContainer.current) {
            setAnchorEl(refContainer.current);
        }
    }, [refContainer]);

    return (
        <div>
            <MuiTooltip
                {...rest}
                PopperProps={{
                    container: anchorEl,
                    ...PopperProps
                }}
            >
                {children}
            </MuiTooltip>
            <div ref={refContainer}></div>
        </div >
    )
}
