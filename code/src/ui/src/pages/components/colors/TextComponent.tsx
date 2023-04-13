/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React from 'react';
import { HeadingSection } from '../../content/HeadingSection';
import { ComputedTextColorSwatch } from '../../../components/ComputedTextColorSwatch';

const sampleText: string = "Sample Text";
interface Props {
}

export const TextComponent: React.FC<Props> = ({}) => {

    return (
        <div>
            <HeadingSection title="Colors" heading="Text Colors" />
            <div>
                <div className="subtitle1 top40">Dark Text</div>
                <div className="theme-colors">
                    <ComputedTextColorSwatch
                        colorSampleClassName={"black"}
                        sampleText={sampleText}
                        label="Default"
                    />
                    <ComputedTextColorSwatch
                        colorSampleClassName={"black quiet"}
                        textSampleClassName={"quiet"}
                        sampleText={sampleText}
                        label="Quiet"
                    />
                    <ComputedTextColorSwatch
                        colorSampleClassName={"black disabled"}
                        textSampleClassName={"disabled"}
                        sampleText={sampleText}
                        label="Disabled"
                    />
                </div>
                <div className="subtitle1 top40">White Text</div>
                <div className="theme-colors">
                    <ComputedTextColorSwatch
                        containerClassName="black"
                        colorSampleClassName={"white"}
                        sampleText={sampleText}
                        label="Default"
                    />
                    <ComputedTextColorSwatch
                        containerClassName="black"
                        colorSampleClassName={"white quiet"}
                        textSampleClassName={"quiet"}
                        sampleText={sampleText}
                        label="Quiet"
                    />
                    <ComputedTextColorSwatch
                        containerClassName="black"
                        colorSampleClassName={"white disabled"}
                        textSampleClassName={"disabled"}
                        sampleText={sampleText}
                        label="Disabled"
                    />
                </div>
                <div className="subtitle1 top40">State Text</div>
                <div className="theme-colors">
                    <ComputedTextColorSwatch
                        textSampleClassName={"info-text"}
                        sampleText={sampleText}
                        label="Info"
                        showHex={true}
                    />
                    <ComputedTextColorSwatch
                        textSampleClassName={"success-text"}
                        sampleText={sampleText}
                        label="Success"
                        showHex={true}
                    />
                    <ComputedTextColorSwatch
                        textSampleClassName={"warning-text"}
                        sampleText={sampleText}
                        label={"Warning"}
                        showHex={true}
                    />
                    <ComputedTextColorSwatch
                        textSampleClassName={"danger-text"}
                        sampleText={sampleText}
                        label={"Danger"}
                        showHex={true}
                    />
                </div>
            </div>
        </div>
    );
}
