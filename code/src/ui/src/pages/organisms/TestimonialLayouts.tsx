/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { SectionColorModeSelector } from '../content/SectionColorModeSelector';
import { HeadingSection } from '../../pages/content/HeadingSection';
import { Testimonial } from "../../mui-a11y-tb/organisms/Testimonial";

interface Props {
    colorMode?: string;
}


export const TestimonialLayouts: React.FC<Props> = ({ }) => {

      const [colorMode, setColorMode] = useState<string>("");

      return (
          <div>
              <HeadingSection title="organisms" heading="Teams" />
              <SectionColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
              </SectionColorModeSelector>
              <div className="section-demos" data-background={colorMode}>
                <div className={colorMode}></div>
                <div className="demo-title subtitle1">Testimonial, Large</div>
                <Testimonial className="top40" />
                <p></p>
              </div>
          </div>
      )
  }
