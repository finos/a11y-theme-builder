/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useState, useEffect } from 'react';
import "./Hero.css";

interface Props {
    style?: any;
    children?: React.ReactNode;
}

export const Hero: React.FC<Props> = ({style, children}) => {
    return (
        <div className="hero" style={style}>
            {children}
        </div>
    )
}
