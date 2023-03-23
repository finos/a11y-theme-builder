import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Property, StateSetting } from '../../sdk';
import { ColorSwatch } from '../ColorSwatch';
import { ChromePicker, ColorResult } from "react-color";

export interface ColorProps {
    property: StateSetting;
    style?: any;
    label?: string;
    defaultValue?: string;
}

export const ColorProperty: React.FC<ColorProps> = ({ property, style, label="", defaultValue="#FFFFFF" }) => {
    const [value, setValue] = useState<string>(property.prop.getValue() || property.prop.getDefaultValue() || defaultValue);
    const [show, setShow] = useState<boolean>(false);

    const handleCancel = () => {
        setValue(property.prop.getValue() || property.prop.getDefaultValue() || defaultValue);
        setShow(false);
    }

    const handleSave = () => {
        setShow(false);
        property.prop.setValue(value);
    }

    const popup:any = {
        background: "var(--background)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-1)",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        position: "absolute",
        zIndex: "100",
    }

    return (
        <div style={style}>
            <span onClick={() => setShow(true)}>
                <ColorSwatch shade={value} label={label || property.name} style={{width: "150px"}}/>
            </span>
            {show && 
            <div>
                <div style={{position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}} 
                    onClick={handleCancel}/>
                <div style={popup}>
                    <div><b>Select a Color</b></div>
                    <ChromePicker color={value} onChange={(color:any) => setValue(color.hex)} />
                    <div style={{display:"flex", justifyContent:"space-between", paddingTop:"20px"}}>
                        <Button onClick={handleCancel}>Cancel</Button>
                        <Button onClick={handleSave}>Save</Button>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}
