/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useState, useEffect } from 'react';
import "./Hero.css";

interface Props {
    style?: any;
    children?: React.ReactNode;
    className?: string;
}

export const Hero: React.FC<Props> = ({style, children, className=""}) => {
    return (
        <div className={"hero " + className} style={style}>
            {children}
        </div>
    )
}
