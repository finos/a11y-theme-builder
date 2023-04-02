/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { ErrorInfo, ReactElement } from "react";

interface ErrorHandlerState {
    isError: boolean;
    error: any;
    errorInfo: any;
}

interface ErrorHandlerProps {
    children: ReactElement
}

export class ErrorHandler extends React.Component<ErrorHandlerProps, ErrorHandlerState>{

    constructor(props: ErrorHandlerProps) {
        super(props)
        this.state = {
            isError: false,
            error: {},
            errorInfo: {},
        }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({ isError: true });
        this.setState({ error: error });
        this.setState({ errorInfo: errorInfo });
    }

    render(): React.ReactNode {
        if (this.state?.isError) {
            return (
                <div style={{ margin: "30px" }}>
                    <h2>Error</h2>
                    <h3>Message:</h3>
                    {this.state.error.message}
                    <h3>Stack:</h3>
                    <pre>{this.state.error.stack}</pre>
                    <h3>Component Stack:</h3>
                    <pre>{this.state.errorInfo.componentStack}</pre>
                </div>
            )
        }
        return (this.props.children)
    }
}
