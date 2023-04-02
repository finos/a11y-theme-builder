/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React from 'react';
import { HeadingSection } from '../../content/HeadingSection';

interface Props {
}

export const GradientsComponent: React.FC<Props> = () => {

        return (
            <div>
                <HeadingSection title="Colors" heading="Gradients" />
                <div className="subtitle1 top40">Gradient 1</div>
                <div className="gradient-group">
                    <div className="gradient-swatch gradient-1">
                        <div>Aa</div>
                    </div>
                </div>
                <div className="subtitle1 top40">Gradient 2</div>
                <div className="gradient-group">
                    <div className="gradient-swatch gradient-2">
                        <div>Aa</div>
                    </div>
                </div>
                <div className="subtitle1 top40">Gradient 3</div>
                <div className="gradient-group">
                    <div className="gradient-swatch gradient-3">
                        <div>Aa</div>
                    </div>
                </div>
            </div>
        );
}
