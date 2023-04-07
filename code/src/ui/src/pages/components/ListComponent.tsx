/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React from 'react';
import { Avatar, Checkbox, FormControlLabel } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import { Link } from 'react-router-dom';
import './ListComponent.css';


interface Props {
    type: number
    title: string
    isStyle2?: boolean;
    hasAvatar?: boolean
    hasImg?: boolean
    hasIcon?: boolean
    isLarge?: boolean
    hasCheckbox?: boolean
    isClickable?: boolean
}

export const ListComponent: React.FC<Props> = ({ type, title, isStyle2, hasAvatar,
        hasImg, hasIcon, isLarge, hasCheckbox, isClickable }) => {

    const body = <div className="body2">
        Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum.
    </div>

    const listTitle = <>
        {!(type === 2) || <div className="overline">OVERLINE</div> }
        {isStyle2 || <div className="body2">List Title</div>}
        {!isStyle2 || <div className="subtitle1">List Title</div>}
        {!(type === 3) || body }
    </>

    const listIcon = <>
        {!hasAvatar || <Avatar/>}
        {!hasImg || isLarge
        || <img alt='list-style-1' src="/sample.jpg" className='list-img'/>}
        {!hasImg || !isLarge
        || <img alt='list-style-1' src="/image-1.jpeg" className='list-img'/>}
        {!hasIcon  || isLarge
        || <ErrorIcon color='error'/>}
        {!hasIcon  || !isLarge
        || <ErrorIcon color='error' fontSize='large'/>}
    </>


    return (
        <div className="sample">
            <div className="subtitle1">{title}</div>
            <div className="list">
                <div className="list-body">
                    <div className="container-flex">
                        { (!hasAvatar && !hasImg && !hasIcon )
                        || <div className="list-icon">
                            {isClickable || listIcon}
                            {!isClickable || <Link to={''} className='list-link'>{listIcon}</Link>}
                        </div>}
                        <div className="list-content">
                            {isClickable || listTitle}
                            {!isClickable || <Link to={''} className='list-link'>{listTitle}</Link>}
                            </div>
                        {!hasCheckbox
                        || <div className="list-checkbox"><FormControlLabel control={<Checkbox defaultChecked />} label="" /></div>}
                    </div>
                </div>
            </div>
        </div>
    )
}
