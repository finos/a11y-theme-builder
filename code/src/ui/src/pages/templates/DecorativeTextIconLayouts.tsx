/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { DesignSystem, Images } from 'a11y-theme-builder-sdk';
import { Breadcrumbs, Button, Link, Typography, Grid } from '@mui/material';
import { ExampleSection } from '../content/ExampleSection';
import { HeadingSection } from '../../pages/content/HeadingSection';
import { Text } from "../../mui-a11y-tb/templates/Text";
import { TextIcons } from "../../mui-a11y-tb/templates/TextIcons";
import { TextIconsWithDivider } from "../../mui-a11y-tb/templates/TextIconsWithDivider";
import { TextIconsGradient} from "../../mui-a11y-tb/templates/TextIconsGradient";
import { TextIconsDropColor} from "../../mui-a11y-tb/templates/TextIconsDropColor";
import { TextIconsCentered } from "../../mui-a11y-tb/templates/TextIconsCentered";
import { TextIconsWithDividerCentered } from "../../mui-a11y-tb/templates/TextIconsWithDividerCentered";
import { TextIconsGradientCentered } from "../../mui-a11y-tb/templates/TextIconsGradientCentered";
import { TextIconsDropColorCentered } from "../../mui-a11y-tb/templates/TextIconsDropColorCentered";

interface Props {
    colorMode?: string;
}


export const DecorativeTextIconLayouts: React.FC<Props> = ({ }) => {

      const [colorMode, setColorMode] = useState<string>("");

      return (
          <div>
              <HeadingSection title="Templates" heading="Teams" />
              <div className={colorMode}></div>
              <ExampleSection>
                <div className="subtitle1">Text with Gradient Title, Centered</div>
                <TextIconsGradient className={"top40 " + colorMode} />
                <p></p>
                <div className="subtitle1">Text with Colored Drop Shadow Title, Centered</div>
                <TextIconsDropColor className={"top40 " + colorMode} />
                <p></p>
                <div className="subtitle1">Text with Gradient Title, Centered</div>
                <TextIconsGradientCentered className={"top40 " + colorMode} />
                <p></p>
                <div className="subtitle1">Text with Colored Drop Shadow Title, Centered</div>
                <TextIconsDropColorCentered className={"top40 " + colorMode} />
                <p></p>
              </ExampleSection>
          </div>
      )
  }
