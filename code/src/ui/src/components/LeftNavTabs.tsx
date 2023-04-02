/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { ReactNode } from 'react';
import { styled } from '@mui/material';
import { Tab, Tabs, ListSubheader, ListItemButton, ListItemText } from "@mui/material";

// export const LeftNavTab = styled(Tab)(({ theme }) => ({
//     alignItems: "flex-start",
//     left: "20px",
// }));

// export const LeftNavTab2 = styled(Tab)(({ theme }) => ({
//     alignItems: "flex-start",
//     left: "40px",
//     fontSize: "smaller",
// }));

// export const LeftNavHeaderTab = styled(Tab)(( {theme }) => ({
//     alignItems: "flex-start",
//     fontWeight: "bold",
// }))

// export const LeftNavTabs = styled(Tabs)(( {theme }) => ({
//     '.MuiTabs-indicator': {
//         left: 0,
//         backgroundColor: "#000"
//     },
//     '.Mui-disabled': {
//         color: "black", //"var(--color)",
//         opacity: 1,
//     },
// }))

// export const LeftPreviewTab = styled(Tab)(({ theme }) => ({
//     alignItems: "flex-start",
// }));


export const LeftNavHeader = styled(ListSubheader)(( {theme }) => ({
    fontWeight: "bold",
    textTransform: "uppercase",
    background: "var(--leftNav)",
    fontSize: "1em",
}));

export const LeftNavText = styled(ListSubheader)(( {theme }) => ({
    textTransform: "uppercase",
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
            background: selected ? "var(--secondary)" : null,
            color: selected ? "var(--on-secondary)" : null,
            borderRight: selected ? "2px solid black" : null,
            ':hover': { 
                backgroundColor: selected ? "var(--secondary)" : null,
                color: selected ? "var(--on-secondary)" : null,
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
