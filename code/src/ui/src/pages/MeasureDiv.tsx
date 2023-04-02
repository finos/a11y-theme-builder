/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { ReactNode } from 'react';

interface MeasureDivProps {
    children?: ReactNode;
    style?: any;
    className?: string;
    setHeight: (height: number) => void;
}

export class MeasureDiv extends React.Component {
    children: ReactNode;
    props: MeasureDivProps;
    divElement: any;

    constructor(props: MeasureDivProps) {
        super(props);
        this.props = props;
    }

    componentDidMount(): void {
        const h = this.divElement.clientHeight;
        this.props.setHeight(h);
    }

    public render(): JSX.Element {
        return (
            <div className={this.props.className} style={this.props.style} ref={(divElement) => { this.divElement = divElement }}>
                {this.props.children}
            </div>
        )
    }
}