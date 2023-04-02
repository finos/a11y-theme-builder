/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React from 'react';
import { HeadingSection } from '../../content/HeadingSection';
import { ComputedColorSwatch } from '../../../components/ComputedColorSwatch';

interface Props {
}

const swatchesObj = {
    labels: ["Gray"],
    shadeIds: ["050", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
    classNameSuffix: "bg",
}

export const CoreColorsComponent: React.FC<Props> = ({}) => {

    return (
        <div>
            <HeadingSection title="Colors" heading="Core Colors" />
            <div>
                <div className="subtitle1 top40">White</div>
                <div className="theme-colors">
                    <ComputedColorSwatch
                        className="white"
                        label="White"
                    />
                    <ComputedColorSwatch
                        className="white-half"
                        label="White Half"
                    />
                </div>
                <div className="subtitle1 top40">Black</div>
                <div className="theme-colors">
                    <ComputedColorSwatch
                        className="black"
                        label="Black"
                    />
                    <ComputedColorSwatch
                        className="black-half"
                        label="Black Half"
                    />
                </div>
                <div className="subtitle1 top40">Near Black</div>
                <div className="theme-colors">
                    <ComputedColorSwatch
                        className="nearblack-bg"
                        label="Near Black"
                    />
                </div>
            </div>
            {swatchesObj.labels.map((swatchLabel) => {
                return (
                    <div>
                        <div className="subtitle1 top40">{swatchLabel}</div>
                        <div className="theme-colors">
                            {swatchesObj.shadeIds.map((shadeId) => {
                                return (
                                    <ComputedColorSwatch
                                        className={`${swatchLabel.toLowerCase()}-${shadeId}-${swatchesObj.classNameSuffix}`}
                                        label={`${swatchLabel}-${shadeId}`}
                                    />
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
