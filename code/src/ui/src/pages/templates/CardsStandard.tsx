/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { DesignSystem, Images } from 'a11y-theme-builder-sdk';
import { Breadcrumbs, Button, Link, Typography, Grid } from '@mui/material';
import { ExampleSection } from '../content/ExampleSection';
import { SectionColorModeSelector } from '../content/SectionColorModeSelector';
import { HeadingSection } from '../../pages/content/HeadingSection';
import { StandardCardsTwoButtons } from "../../mui-a11y-tb/templates/StandardCardsTwoButtons";
import { StandardCardsOneButton } from "../../mui-a11y-tb/templates/StandardCardsOneButton";
import { StandardCardsHotlink } from "../../mui-a11y-tb/templates/StandardCardsHotlink";
import { StandardCardsClickable } from "../../mui-a11y-tb/templates/StandardCardsClickable";
import { StandardCardsCenteredTwoButtons } from "../../mui-a11y-tb/templates/StandardCardsCenteredTwoButtons";
import { StandardCardsCenteredOneButton } from "../../mui-a11y-tb/templates/StandardCardsCenteredOneButton";
import { StandardCardsCenteredHotlink } from "../../mui-a11y-tb/templates/StandardCardsCenteredHotlink";
import { StandardCardsCenteredClickable } from "../../mui-a11y-tb/templates/StandardCardsCenteredClickable";
import { StandardCardsScrollingTwoButtons } from "../../mui-a11y-tb/templates/StandardCardsScrollingTwoButtons";
import { StandardCardsScrollingOneButton } from "../../mui-a11y-tb/templates/StandardCardsScrollingOneButton";
import { StandardCardsScrollingHotlink } from "../../mui-a11y-tb/templates/StandardCardsScrollingHotlink";
import { StandardCardsScrollingClickable } from "../../mui-a11y-tb/templates/StandardCardsScrollingClickable";

interface Props {
    colorMode?: string;
}


export const CardsStandard: React.FC<Props> = ({ }) => {

      const [colorMode, setColorMode] = useState<string>("");

      return (
          <div>
              <HeadingSection title="Templates" heading="White Cards, Standard" />
              <SectionColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
              </SectionColorModeSelector>
              <div className={colorMode}></div>
              <ExampleSection>
                <div className="subtitle1">Responsive, Left Aligned with Two Buttons</div>
                <StandardCardsTwoButtons  className={colorMode}/>
                <p></p>
                <div className="subtitle1">Responsive,  Left Aligned with One Button</div>
                <StandardCardsOneButton  className={colorMode}/>
                <p></p>
                <div className="subtitle1">Responsive,  Left Aligned  with Hotlink</div>
                <StandardCardsHotlink  className={colorMode}/>
                <p></p>
                <div className="subtitle1">Responsive,  Left Aligned  Clickable</div>
                <StandardCardsClickable  className={colorMode}/>
                <p></p>
                <div className="subtitle1">Center Aligned, Two Buttons</div>
                <StandardCardsCenteredTwoButtons  className={colorMode}/>
                <p></p>
                <div className="subtitle1">Center Aligned, One Button</div>
                <StandardCardsCenteredOneButton  className={colorMode}/>
                <p></p>
                <div className="subtitle1">Center Aligned, Hotlink</div>
                <StandardCardsCenteredHotlink  className={colorMode}/>
                <p></p>
                <div className="subtitle1">Center Aligned, Clickable</div>
                <StandardCardsCenteredClickable  className={colorMode}/>
                <p></p>
                <div className="subtitle1">Horizontal Scrolling Cards, Left Aligned with Two Buttons</div>
                <StandardCardsScrollingTwoButtons  className={colorMode} />
                <p></p>
                <div className="subtitle1">Horizontal Scrolling Cards, Left Aligned with One Button</div>
                <StandardCardsScrollingOneButton  className={colorMode} />
                <p></p>
                <div className="subtitle1">Horizontal Scrolling Cards, Left Aligned with Hotlink</div>
                <StandardCardsScrollingHotlink  className={colorMode} />
                <p></p>
                <div className="subtitle1">Horizontal Scrolling Cards, Left Aligned with Clickable</div>
                <StandardCardsScrollingClickable  className={colorMode} />
              </ExampleSection>




          </div>
      )
  }
