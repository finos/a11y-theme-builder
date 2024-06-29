/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React from 'react';
import { Avatar, Checkbox, FormControlLabel } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import { Link } from 'react-router-dom';
import './ListComponent.css';

interface Props {
    type: number;
    overline: string;
    title: string;
    body: string;
    isStyle2?: boolean;
    hasAvatar?: boolean;
    hasImg?: boolean;
    hasIcon?: boolean;
    isLarge?: boolean;
    hasCheckbox?: boolean;
    isClickable?: boolean;
}

export const ListComponent: React.FC<Props> = ({
    type,
    title,
    overline,
    body,
    isStyle2,
    hasAvatar,
    hasImg,
    hasIcon,
    isLarge,
    hasCheckbox,
    isClickable,
}) => {
    const listTitle = (
        <>
            {!(type === 2) || <div className="overline">{overline}</div>}
            {isStyle2 || <div className="body2">{title}</div>}
            {!isStyle2 || <div className="subtitle1">{title}</div>}
            {!(type === 3) || <div className="body2">{body}</div>}
        </>
    );

    const listIcon = (
        <>
            {!hasAvatar || <Avatar />}
            {!hasImg || isLarge || (
                <img
                    alt="list-style-1"
                    src="/sample.jpg"
                    className="image-sq"
                />
            )}
            {!hasImg || !isLarge || (
                <img
                    alt="list-style-1"
                    src="/sample.jpg"
                    className="image-lg"
                />
            )}
            {!hasIcon || isLarge || <ErrorIcon />}
            {!hasIcon || !isLarge || <ErrorIcon fontSize="large" />}
        </>
    );

    const listClass = isClickable ? 'list list-clickable' : 'list';

    return (
        <div className={listClass}>
            <div className="list-body">
                <div className="container-flex">
                    {(!hasAvatar && !hasImg && !hasIcon) || (
                        <div className="inline-icon">{listIcon}</div>
                    )}
                    <div className="list-content">{listTitle}</div>
                    {!hasCheckbox || (
                        <div className="list-checkbox">
                            <FormControlLabel
                                control={<Checkbox defaultChecked />}
                                label=""
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
