/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React from 'react';
import { HeadingSection } from '../../content/HeadingSection';
import { ComputedColorSwatch } from '../../../components/ComputedColorSwatch';

interface Props {
}

export const BackgroundColorsComponent: React.FC<Props> = ({}) => {

    return (
        <div>
            <HeadingSection title="Colors" heading="Background Colors" />
            <div>
                <div className="theme-colors">
                    <ComputedColorSwatch
                        className={"background"}
                        label={"Primary BG"}
                    />
                    <ComputedColorSwatch
                        className={"background-secondary"}
                        label={"Secondary BG"}
                    />
                    <ComputedColorSwatch
                        className={"background-tertiary"}
                        label={"Tertiary BG"}
                    />
                    <ComputedColorSwatch
                        className={"black"}
                        label={"Black BG"}
                    />
                    <ComputedColorSwatch
                        className={"white"}
                        label={"White BG"}
                    />
                </div>
            </div>
        </div>
    );
}
