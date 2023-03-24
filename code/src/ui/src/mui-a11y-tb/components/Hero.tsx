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
