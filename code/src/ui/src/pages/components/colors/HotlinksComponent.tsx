/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React from 'react';
import { HeadingSection } from '../../content/HeadingSection';
import { ComputedHotlinkColorSwatch } from '../../../components/ComputedHotlinkColorSwatch';

const sampleText: string = "Sample Text";
interface Props {
}

export const HotlinksComponent: React.FC<Props> = ({}) => {

    return (
        <div>
            <HeadingSection title="Colors" heading="Hotlink Colors" />
            <div>
                <div className="subtitle1 top40">Colored Hotlinks</div>
                <div className="theme-colors">
                    <ComputedHotlinkColorSwatch
                        className={"hotlink"}
                        sampleText={sampleText}
                        label="Default"
                    />
                    <ComputedHotlinkColorSwatch
                        className={"hotlink active"}
                        sampleText={sampleText}
                        label={"Hover/Active"}
                    />
                    <ComputedHotlinkColorSwatch
                        className={"hotlink visited"}
                        sampleText={sampleText}
                        label={"Visited"}
                    />
                </div>
                <div className="subtitle1 top40">Dark Hotlinks</div>
                <div className="theme-colors">
                    <ComputedHotlinkColorSwatch
                        containerClassName="white"
                        className={"hotlink"}
                        sampleText={sampleText}
                        label="Default"
                    />
                    <ComputedHotlinkColorSwatch
                        containerClassName="white"
                        className={"hotlink active"}
                        sampleText={sampleText}
                        label={"Hover/Active"}
                    />
                    <ComputedHotlinkColorSwatch
                        containerClassName="white"
                        className={"hotlink visited"}
                        sampleText={sampleText}
                        label={"Visited"}
                    />
                </div>
                <div className="subtitle1 top40">White Hotlinks</div>
                <div className="theme-colors">
                    <ComputedHotlinkColorSwatch
                        containerClassName="black"
                        className={"hotlink"}
                        sampleText={sampleText}
                        label="Default"
                    />
                    <ComputedHotlinkColorSwatch
                        containerClassName="black"
                        className={"hotlink active"}
                        sampleText={sampleText}
                        label={"Hover/Active"}
                    />
                    <ComputedHotlinkColorSwatch
                        containerClassName="black"
                        className={"hotlink visited"}
                        sampleText={sampleText}
                        label={"Visited"}
                    />
                </div>
            </div>
        </div>
    );
}
