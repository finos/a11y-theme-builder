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
import { StatCardsTwoButtons} from "../../mui-a11y-tb/templates/StatCardsTwoButtons";
import { StatCardsOneButton} from "../../mui-a11y-tb/templates/StatCardsOneButton";
import { StatCardsHotlink} from "../../mui-a11y-tb/templates/StatCardsHotlink";
import { StatCardsClickable} from "../../mui-a11y-tb/templates/StatCardsClickable";
import { StatCardsCenteredTwoButtons} from "../../mui-a11y-tb/templates/StatCardsCenteredTwoButtons";
import { StatCardsCenteredOneButton} from "../../mui-a11y-tb/templates/StatCardsCenteredOneButton";
import { StatCardsCenteredHotlink} from "../../mui-a11y-tb/templates/StatCardsCenteredHotlink";
import { StatCardsCenteredClickable} from "../../mui-a11y-tb/templates/StatCardsCenteredClickable";
import { StatCardsScrollingTwoButtons} from "../../mui-a11y-tb/templates/StatCardsScrollingTwoButtons";
import { StatCardsScrollingOneButton} from "../../mui-a11y-tb/templates/StatCardsScrollingOneButton";
import { StatCardsScrollingHotlink} from "../../mui-a11y-tb/templates/StatCardsScrollingHotlink";
import { StatCardsScrollingClickable} from "../../mui-a11y-tb/templates/StatCardsScrollingClickable";

interface Props {
    colorMode?: string;
}


export const StatCardSamples: React.FC<Props> = ({ }) => {

      const [colorMode, setColorMode] = useState<string>("");

      return (
          <div >
              <HeadingSection title="Templates" heading="White Cards, with Icons" />
              <SectionColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
              </SectionColorModeSelector>
              <div className={colorMode}></div>
              <ExampleSection>
                <div className="subtitle1">Responsive, Left Aligned with  Two Buttons</div>
                <StatCardsTwoButtons className={colorMode}/>
                <p></p>
                <div className="subtitle1">Responsive, Left Aligned with One Button</div>
                <StatCardsOneButton className={colorMode}/>
                <p></p>
                <div className="subtitle1">Responsive, Left Aligned with Hotlink</div>
                <StatCardsHotlink className={colorMode}/>
                <p></p>
                <div className="subtitle1">Responsive, Left Aligned, Clickable</div>
                <StatCardsClickable className={colorMode}/>
                <p></p>
                <div className="subtitle1">Center Aligned with Two Buttons</div>
                <StatCardsCenteredTwoButtons className={colorMode}/>
                <p></p>
                <div className="subtitle1">Center Aligned  with One Button</div>
                <StatCardsCenteredOneButton className={colorMode}/>
                <p></p>
                <div className="subtitle1">Center Aligned  with Hotlink</div>
                <StatCardsCenteredHotlink className={colorMode}/>
                <p></p>
                <div className="subtitle1">Center Aligned,Clickable</div>
                <StatCardsCenteredClickable className={colorMode}/>
                <p></p>
                <div className="subtitle1">Horizontal Scrolling Stat Cards with Two Buttons</div>
                <StatCardsScrollingTwoButtons className={colorMode}/>
                <p></p>
                <div className="subtitle1">Horizontal Scrolling Stat Cards with One Button</div>
                <StatCardsScrollingOneButton className={colorMode}/>
                <p></p>
                <div className="subtitle1">Horizontal Scrolling Stat Cards with Hotlink</div>
                <StatCardsScrollingHotlink className={colorMode}/>
                <p></p>
                <div className="subtitle1">Horizontal Scrolling Stat Cards, Clickable</div>
                <StatCardsScrollingClickable className={colorMode}/>
                <p></p>
              </ExampleSection>






          </div>
      )
  }
