/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Property, StateSetting } from 'a11y-theme-builder-sdk';
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


    return (
        <div style={style}>
            <span onClick={() => setShow(true)}>
                <ColorSwatch shade={value} label={label || property.name} style={{width: "150px"}}/>
            </span>
            {show &&
            <div className="windowOverlay ">
              <div className="colorPop">
                { /* <div style={{position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}}
                    onClick={handleCancel}/> */ }

                    <div><b>Select a Color</b></div>
                    <ChromePicker color={value} onChange={(color:any) => setValue(color.hex)} />
                    <div style={{display:"flex", justifyContent:"space-between", paddingTop:"20px", gap: "8px"}}>
                        <Button onClick={handleSave}>Save</Button>
                        <Button variant="outlined" onClick={handleCancel}>Cancel</Button>
                    </div>
              </div>
            </div>
            }
        </div>
    )
}
