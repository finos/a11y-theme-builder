/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React from 'react';


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
