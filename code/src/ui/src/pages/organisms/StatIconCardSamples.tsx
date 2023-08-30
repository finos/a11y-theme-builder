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
import { StatIconCardsTwoButtons} from "../../mui-a11y-tb/organisms/StatIconCardsTwoButtons";
import { StatIconCardsOneButton} from "../../mui-a11y-tb/organisms/StatIconCardsOneButton";
import { StatIconCardsHotlink} from "../../mui-a11y-tb/organisms/StatIconCardsHotlink";
import { StatIconCardsClickable} from "../../mui-a11y-tb/organisms/StatIconCardsClickable";
import { StatIconCardsCenteredTwoButtons} from "../../mui-a11y-tb/organisms/StatIconCardsCenteredTwoButtons";
import { StatIconCardsCenteredOneButton} from "../../mui-a11y-tb/organisms/StatIconCardsCenteredOneButton";
import { StatIconCardsCenteredHotlink} from "../../mui-a11y-tb/organisms/StatIconCardsCenteredHotlink";
import { StatIconCardsCenteredClickable} from "../../mui-a11y-tb/organisms/StatIconCardsCenteredClickable";
import { StatIconCardsScrollingTwoButtons} from "../../mui-a11y-tb/organisms/StatIconCardsScrollingTwoButtons";
import { StatIconCardsScrollingOneButton} from "../../mui-a11y-tb/organisms/StatIconCardsScrollingOneButton";
import { StatIconCardsScrollingHotlink} from "../../mui-a11y-tb/organisms/StatIconCardsScrollingHotlink";
import { StatIconCardsScrollingClickable} from "../../mui-a11y-tb/organisms/StatIconCardsScrollingClickable";

interface Props {
    colorMode?: string;
}


export const StatIconCardSamples: React.FC<Props> = ({ }) => {

      const [colorMode, setColorMode] = useState<string>("");

      return (
          <div >
              <HeadingSection title="organisms" heading="White Cards, with Icons" />
              <SectionColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
              </SectionColorModeSelector>
              <div className={colorMode}></div>
              <ExampleSection>
                <div className="subtitle1">Responsive, Left Aligned with  Two Buttons</div>
                <StatIconCardsTwoButtons className={colorMode}/>
                <p></p>
                <div className="subtitle1">Responsive, Left Aligned with One Button</div>
                <StatIconCardsOneButton className={colorMode}/>
                <p></p>
                <div className="subtitle1">Responsive, Left Aligned with Hotlink</div>
                <StatIconCardsHotlink className={colorMode}/>
                <p></p>
                <div className="subtitle1">Responsive, Left Aligned, Clickable</div>
                <StatIconCardsClickable className={colorMode}/>
                <p></p>
                <div className="subtitle1">Center Aligned with Two Buttons</div>
                <StatIconCardsCenteredTwoButtons className={colorMode}/>
                <p></p>
                <div className="subtitle1">Center Aligned  with One Button</div>
                <StatIconCardsCenteredOneButton className={colorMode}/>
                <p></p>
                <div className="subtitle1">Center Aligned  with Hotlink</div>
                <StatIconCardsCenteredHotlink className={colorMode}/>
                <p></p>
                <div className="subtitle1">Center Aligned,Clickable</div>
                <StatIconCardsCenteredClickable className={colorMode}/>
                <p></p>
                <div className="subtitle1">Horizontal Scrolling Stat Cards with Two Buttons</div>
                <StatIconCardsScrollingTwoButtons className={colorMode}/>
                <p></p>
                <div className="subtitle1">Horizontal Scrolling Stat Cards with One Button</div>
                <StatIconCardsScrollingOneButton className={colorMode}/>
                <p></p>
                <div className="subtitle1">Horizontal Scrolling Stat Cards with Hotlink</div>
                <StatIconCardsScrollingHotlink className={colorMode}/>
                <p></p>
                <div className="subtitle1">Horizontal Scrolling Stat Cards, Clickable</div>
                <StatIconCardsScrollingClickable className={colorMode}/>
                <p></p>
              </ExampleSection>






          </div>
      )
  }
