import React, { ReactNode } from 'react';
import { Select, SelectProps } from '@mui/material';

type Props = SelectProps & {
    children?: ReactNode;
};

export const Dropdown: React.FC<Props> = ({ children, MenuProps, ...rest }) => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
    const refContainer = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (refContainer.current) {
            setAnchorEl(refContainer.current);
        }
    }, []);

    return (
        <div>
            <Select
                {...rest}
                MenuProps={{
                    container: anchorEl,
                    ...MenuProps,
                }}
            >
                {children}
            </Select>
            <div ref={refContainer}></div>
        </div>
    );
};
