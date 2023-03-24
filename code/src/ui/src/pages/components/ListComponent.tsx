import React from 'react';
import { Avatar, Checkbox, FormControlLabel, Grid } from '@mui/material';

import ErrorIcon from '@mui/icons-material/Error';
import { Link } from 'react-router-dom';


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

    const listTitle = <>
        {isStyle2 || <div className="body2">List Title</div>}
        {!isStyle2 || <div className="subtitle1">List Title</div>}
    </>

    const listDecor = <>
        {!hasAvatar || <Avatar/>}
        {!hasImg || isLarge
        || <img alt='list-style-1' src="/image-1.jpeg" style={{objectFit: "cover",width: "60px", height: "60px"}}/>}
        {!hasImg || !isLarge
        || <img alt='list-style-1' src="/image-1.jpeg" style={{objectFit: "cover",width: "100px", height: "60px"}}/>}
        {!hasIcon  || isLarge 
        || <ErrorIcon color='error'/>}
        {!hasIcon  || !isLarge 
        || <ErrorIcon color='error' fontSize='large'/>}
    </>
    return (
        <div className="sample">
            <div className="subtitle1">{title}</div>
            <div className="list">
                {isClickable || listDecor}
                {!isClickable || <Link to={''}>{listDecor}</Link>}
                <div className="list-body">
                    <Grid container spacing={6}>
                        <Grid item xs={6}>
                            {isClickable || listTitle}
                            {!isClickable || <Link to={''}>{listTitle}</Link>}
                        </Grid>
                        {!hasCheckbox
                        || <Grid item xs={4}><FormControlLabel control={<Checkbox defaultChecked />} label="One" /></Grid>}
                    </Grid>
                </div>
            </div>
        </div>
    )
}
