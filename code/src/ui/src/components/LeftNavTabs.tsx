/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { ReactNode } from 'react';
import { styled } from '@mui/material';
import { ListSubheader, ListItemButton, ListItemText } from "@mui/material";

export const LeftNavHeader = styled(ListSubheader)(( {theme }) => ({
    fontWeight: "bold",
    textTransform: "uppercase",
    background: "var(--leftNav)",
    fontSize: "1em",
    position: "unset",
}));

export const LeftNavText = styled(ListSubheader)(( {theme }) => ({
    // textTransform: "uppercase",
    background: "var(--leftNav)",
    //color: "var(--on-leftNav)",
    fontSize: "1em",
}));

export interface LeftNavItemProps {
    selected?:string,
    value?: string,
    text: string,
    indent?: number,
    disabled?:boolean,
    children?:ReactNode,
    onClick?:any
}

export const LeftNavItem : React.FC<LeftNavItemProps> = (props) => {
    let fontSize = "var(--baseFont)";
    if (props.indent && (props.indent > 1)) {
        fontSize = `calc(${1-props.indent*0.05} * var(--baseFont))`;
    }
    const selected = props.value && (props.selected == props.value);
    return(
        <ListItemButton sx={{
            pl: 2 + (props.indent ? 2*props.indent : 0),
            background: selected ? "var(--dropdown-focus-bg)" : null,
            color: selected ? "var(--on-dropdown-focus-bg)" : null,
            marginLeft: "8px",
            ':hover': {
                backgroundColor: selected ? "var(--dropdown-hover-bg)" : null,
                color: selected ? "var(--on-dropdown-hover-bg)" : null,
            }
        }}
            disabled={props.disabled}
            onClick={props.onClick}
        >
            <ListItemText
                primary={props.text}
                primaryTypographyProps={{
                    textTransform: "uppercase",
                    fontSize: fontSize,
                    fontWeight: "500",
                }}
            >
            </ListItemText>
            {props.children}
        </ListItemButton>
    )
}
