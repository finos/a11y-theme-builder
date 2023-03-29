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
