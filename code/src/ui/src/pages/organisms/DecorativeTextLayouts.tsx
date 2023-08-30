/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { DesignSystem, Images } from 'a11y-theme-builder-sdk';
import { Breadcrumbs, Button, Link, Typography, Grid } from '@mui/material';
import { ExampleSection } from '../content/ExampleSection';
import { HeadingSection } from '../../pages/content/HeadingSection';
import { Text } from "../../mui-a11y-tb/organisms/Text";
import { TextWithDivider } from "../../mui-a11y-tb/organisms/TextWithDivider";
import { TextGradient} from "../../mui-a11y-tb/organisms/TextGradient";
import { TextDropColor} from "../../mui-a11y-tb/organisms/TextDropColor";
import { TextCentered } from "../../mui-a11y-tb/organisms/TextCentered";
import { TextWithDividerCentered } from "../../mui-a11y-tb/organisms/TextWithDividerCentered";
import { TextGradientCentered } from "../../mui-a11y-tb/organisms/TextGradientCentered";
import { TextDropColorCentered } from "../../mui-a11y-tb/organisms/TextDropColorCentered";

interface Props {
    colorMode?: string;
}


export const DecorativeTextLayouts: React.FC<Props> = ({ }) => {

      const [colorMode, setColorMode] = useState<string>("");

      return (
          <div>
              <HeadingSection title="organisms" heading="Teams" />
              <div className={colorMode}></div>
              <ExampleSection>
                <div className={colorMode}></div>
                <div className="subtitle1">ext with Gradient Title</div>
                <TextGradient className={"top40 " + colorMode} />
                <p></p>
                <div className="subtitle1">Text with Colored Drop Shadow Title</div>
                <TextDropColor className={"top40 " + colorMode} />
                <p></p>
                <div className="subtitle1">ext with Gradient Title, Centered</div>
                <TextGradientCentered className={"top40 " + colorMode} />
                <p></p>
                <div className="subtitle1">Text with Colored Drop Shadow Title, Centered</div>
                <TextDropColorCentered className={"top40 " + colorMode} />
                <p></p>
              </ExampleSection>
          </div>
      )
  }
