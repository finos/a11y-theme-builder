/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useState, useEffect } from 'react';
import "./Hero.css";

interface Props {
    style?: any;
    children?: React.ReactNode;
    className?: string;
}

export const HeroInlineImage: React.FC<Props> = ({style, children, className=""}) => {
    return (
        <div className={"hero backgroundInlineImage " + className} style={style}>
            {children}
        </div>
    )
}
