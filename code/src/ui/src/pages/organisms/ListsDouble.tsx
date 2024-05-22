/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { SectionColorModeSelector } from '../content/SectionColorModeSelector';
import { HeadingSection } from '../../pages/content/HeadingSection';
import { ListDouble } from "../../mui-a11y-tb/organisms/ListDouble";
import { ListDoubleAvatar } from "../../mui-a11y-tb/organisms/ListDoubleAvatar";
import { ListDoubleImage } from "../../mui-a11y-tb/organisms/ListDoubleImage";
import { ListDoubleImageWide } from "../../mui-a11y-tb/organisms/ListDoubleImageWide";
import { ListDoubleIconSmall } from "../../mui-a11y-tb/organisms/ListDoubleIconSmall";
import { ListDoubleIconLarge} from "../../mui-a11y-tb/organisms/ListDoubleIconLarge";

interface Props {
    colorMode?: string;
}


export const ListsDouble: React.FC<Props> = ({ }) => {

      const [colorMode, setColorMode] = useState<string>("");

      return (
          <div>
              <HeadingSection title="organisms" heading="Lists, Double Line" />
              <SectionColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
              </SectionColorModeSelector>
              <div className="section-demos" data-background={colorMode}>
                  <div className="demo-title subtitle1">List, standard</div>
                  <ListDouble className="top40 "  />
                  <p></p>
                  <div className="demo-title subtitle1">List, with avatars</div>
                  <ListDoubleAvatar className="top40 "  />
                  <p></p>
                  <div className="demo-title subtitle1">List, with images</div>
                  <ListDoubleImage className="top40 "  />
                  <p></p>
                  <div className="demo-title subtitle1">List, with wide images</div>
                  <ListDoubleImageWide className="top40 "  />
                  <p></p>
                  <div className="demo-title subtitle1">List, with icons</div>
                  <ListDoubleIconSmall className="top40 " />
                  <p></p>
                  <div className="demo-title subtitle1">List, with wide icons</div>
                  <ListDoubleIconLarge className="top40 "/>
                  <p></p>

              </div>
          </div>
      )
  }
