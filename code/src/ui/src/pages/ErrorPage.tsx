import React from 'react';
import { } from '@mui/material';
import { useEffect, useState } from 'react';


interface Props {
    user: any;
}

const ErrorPage: React.FC<Props> = ({user}) => {

  
    return (
        <>
        <h1>404...Page not Found</h1>
        </>
    );
}

export default ErrorPage;
