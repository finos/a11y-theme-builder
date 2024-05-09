/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React from 'react';
import { useEffect, useState, ReactNode } from 'react';
import {
  DesignSystem,
  Event,
  EventType,
  Popovers,
} from '@finos/a11y-theme-builder-sdk';
import OrganismIntro from './OrganismIntro';
import { ErrorHandler } from '../../../ErrorHandler';
import {
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
  styled,
  Collapse,
  Button,
  InputLabel,
  TextField,
  InputAdornment,
} from '@mui/material';
import { LeftNavHeader, LeftNavItem } from '../../../components/LeftNavTabs';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { NavSwitch } from '../../../components/NavSwitch';
import { TextLayouts } from '../../organisms/TextLayouts';
import { TextIconLayouts } from '../../organisms/TextIconLayouts';
import { DecorativeTextLayouts } from '../../organisms/DecorativeTextLayouts';
import { DecorativeTextIconLayouts } from '../../organisms/DecorativeTextIconLayouts';
import { ImagesOnly } from '../../organisms/ImagesOnly';
import { TemplateExample } from '../../organisms/TemplateExample';
import { BackgroundImageExample } from '../../organisms/BackgroundImageExample';
import { FullWidthBackgrounds } from '../../organisms/FullWidthBackgrounds';
import { FullWidthVideo } from '../../organisms/FullWidthVideo';
import { ListsSingle } from '../../organisms/ListsSingle';
import { ListsDouble } from '../../organisms/ListsDouble';
import { ListsDoubleImageLeft } from '../../organisms/ListsDoubleImageLeft';
import { ListsTriple } from '../../organisms/ListsTriple';
import { ListsSingleClickable } from '../../organisms/ListsSingleClickable';
import { ListsDoubleClickable } from '../../organisms/ListsDoubleClickable';
import { ListsTripleClickable } from '../../organisms/ListsTripleClickable';
import { ListsDoubleClickableImageLeft } from '../../organisms/ListsDoubleClickableImageLeft';
import { CardsStandard } from '../../organisms/CardsStandard';
import { IconCardsStandard } from '../../organisms/IconCardsStandard';
import { ImageCardsStandard } from '../../organisms/ImageCardsStandard';
import { ImageCardsStandard916 } from '../../organisms/ImageCardsStandard916';
import { PricingCardSamples } from '../../organisms/PricingCardSamples';
import { StatCardSamples } from '../../organisms/StatCardSamples';
import { StatIconCardSamples } from '../../organisms/StatIconCardSamples';
import { VideoLayouts } from '../../organisms/VideoLayouts';
import { YouTubeLayouts } from '../../organisms/YouTubeLayouts';
import { FooterLayouts } from '../../organisms/FooterLayouts';
import { TeamLayouts } from '../../organisms/TeamLayouts';
import { FeatureLayouts } from '../../organisms/FeatureLayouts';
import { TestimonialLayouts } from '../../organisms/TestimonialLayouts';
import { TestimonialCardLayouts } from '../../organisms/TestimonialCardLayouts';
import { HeroExample } from '../../organisms/HeroExample';

import { Preferences } from '../../../Preferences';

const name = 'organismsContent';

interface templateItem {
  value: string;
  label: string;
  organism: string;
  disabled: boolean;
}

const templateList: { [key: string]: templateItem } = {
  textVariations: {
    value: 'textVariations',
    label: 'Text Only, Centered to Page',
    organism: 'textVariations',
    disabled: false,
  },
  textIconVariations: {
    value: 'textIconVariations',
    label: 'Text with Icon, Centered to Page',
    organism: 'textIconVariations',
    disabled: false,
  },
  decoractivetextVariations: {
    value: 'decoractivetextVariations',
    label: 'Decorative Text, Centered to Page',
    organism: 'decoractivetextVariations',
    disabled: false,
  },
  decoractivetextIconVariations: {
    value: 'decoractivetextIconVariations',
    label: 'Decorative Text with Icon, Centered to Page',
    organism: 'decoractivetextIconVariations',
    disabled: false,
  },
  imageText: {
    value: 'imageText',
    label: 'Image & Text',
    organism: 'ImageText',
    disabled: false,
  },
  backgroundimageText: {
    value: 'backgroundimageText',
    label: 'Background Image & Text',
    organism: 'ImageText',
    disabled: false,
  },
  fullBackground: {
    value: 'fullBackground',
    label: 'Full Width Backgrounds',
    organism: 'fullBackground',
    disabled: false,
  },
  fullVideo: {
    value: 'fullVideo',
    label: 'Full Width Video',
    organism: 'fullVideo',
    disabled: false,
  },
  listVariations: {
    value: 'listVariations',
    label: 'List - Single Line',
    organism: 'listVariations',
    disabled: false,
  },
  listsDoubleVariations: {
    value: 'listsDoubleVariations',
    label: 'List - Double Line',
    organism: 'listsDoubleVariations',
    disabled: false,
  },
  listsTripleVariations: {
    value: 'listsTripleVariations',
    label: 'List - Triple Line',
    organism: 'listsTripleVariations',
    disabled: false,
  },
  listVariationsClickable: {
    value: 'listVariationsClickable',
    label: 'Lists, Clickable - Single Line',
    organism: 'listVariationsClickable',
    disabled: false,
  },
  listsDoubleVariationsClickable: {
    value: 'listsDoubleVariationsClickable',
    label: 'Lists, Clickable - Double Line',
    organism: 'listsDoubleVariationsClickable',
    disabled: false,
  },
  listsTripleVariationsClickable: {
    value: 'listsTripleVariationsClickable',
    label: 'Lists, Clickable - Triple Line',
    organism: 'listsTripleVariationsClickable',
    disabled: false,
  },
  listsDoubleVariationsImageLeft: {
    value: 'listsDoubleVariationsImageLeft',
    label: 'List - Double Line',
    organism: 'listsDoubleVariationsImageLeft',
    disabled: false,
  },
  listsDoubleVariationsClickableImageLeft: {
    value: 'listsDoubleVariationsClickableImageLeft',
    label: 'Lists, Clickable - Double Line',
    organism: 'listsDoubleVariationsClickableImageLeft',
    disabled: false,
  },
  cardVariationsStandard: {
    value: 'cardVariationsStandard',
    label: 'Cards, Standard',
    organism: 'cardVariationsStandard',
    disabled: false,
  },
  cardVariationsIcons: {
    value: 'cardVariationsIcons',
    label: 'Cards, with Icons',
    organism: 'cardVariationsIcons',
    disabled: false,
  },
  imageCardVariations: {
    value: 'imageCardVariations',
    label: 'Cards, with Images 9:21',
    organism: 'imageCardVariations',
    disabled: false,
  },
  imageCard916Variations: {
    value: 'imageCard916Variations',
    label: 'Cards, with Images 9:16',
    organism: 'imageCard916Variations',
    disabled: false,
  },
  pricingCardVariations: {
    value: 'pricingCardVariations:',
    label: 'Cards, with Pricing',
    organism: 'pricingCardVariations:',
    disabled: false,
  },
  statCardVariations: {
    value: 'statCardVariations:',
    label: 'Cards, with Stats',
    organism: 'statCardVariations:',
    disabled: false,
  },
  staticonCardVariations: {
    value: 'staticonCardVariations:',
    label: 'Cards, with Stats & Icons',
    organism: 'staticonCardVariations',
    disabled: false,
  },
  imagesOnlyVariations: {
    value: 'imagesOnlyVariations',
    label: 'Images Only',
    organism: 'imagesOnlyVariations',
    disabled: false,
  },
  videoVariations: {
    value: 'videoVariations',
    label: 'Videos',
    organism: 'videoVariations',
    disabled: false,
  },
  youTubeVariations: {
    value: 'youTubeVariations',
    label: 'YouTube Videos',
    organism: 'youTubeVariations',
    disabled: false,
  },
  footerVariations: {
    value: 'footerVariations',
    label: 'Footers',
    organism: 'footerVariations',
    disabled: false,
  },
  teamVariations: {
    value: 'teamVariations',
    label: 'Teams',
    organism: 'teamVariations',
    disabled: false,
  },
  featureVariations: {
    value: 'featureVariations',
    label: 'Feature Highlights',
    organism: 'featureVariations',
    disabled: false,
  },
  testimonialVariations: {
    value: 'testimonialVariations',
    label: 'Testimonials',
    organism: 'testimonialVariations',
    disabled: false,
  },
  testimonCardVariations: {
    value: 'testimonCardVariations',
    label: 'Testimonial Cards',
    organism: 'testimonCardVariations',
    disabled: false,
  },
  heroVariations: {
    value: 'heroVariations',
    label: 'Heros',
    organism: 'heroVariations',
    disabled: false,
  },
};

interface Props {
  user: any;
  designSystem: DesignSystem;
}

export const OrganismContent: React.FC<Props> = ({ user, designSystem }) => {
  const pref = new Preferences(designSystem.name);

  let generalSelected = false;
  if (pref.get('organisms-general-selected') == 'true') {
    generalSelected = true;
  }
  const [displayGeneral, setDisplayGeneral] =
    useState<boolean>(generalSelected);
  useEffect(() => {
    pref.set('organisms-organisms-selected', '' + displayGeneral);
  }, [displayGeneral]);

  let videoSelected = false;
  if (pref.get('organisms-organisms-selected') == 'true') {
    videoSelected = true;
  }
  const [displayVideo, setDisplayVideo] = useState<boolean>(videoSelected);
  useEffect(() => {
    pref.set('organisms-organisms-selected', '' + displayVideo);
  }, [displayVideo]);

  let listSelected = false;
  const [displayLists, setDisplayList] = useState<boolean>(listSelected);
  useEffect(() => {
    pref.set('organisms-organisms-selected', '' + displayLists);
  }, [displayLists]);

  let listSelectedImageLeft = false;
  const [displayListsImageLeft, setDisplayListImageLeft] = useState<boolean>(
    listSelectedImageLeft
  );
  useEffect(() => {
    pref.set('organisms-organisms-selected', '' + displayListsImageLeft);
  }, [displayListsImageLeft]);

  let cardsClickable = false;
  const [displayCardsClickable, setDisplayCardsClickable] =
    useState<boolean>(cardsClickable);
  useEffect(() => {
    pref.set('organisms-organisms-selected', '' + displayCardsClickable);
  }, [displayCardsClickable]);

  let otherSelected = false;
  const [displayOther, setDisplayOther] = useState<boolean>(otherSelected);
  useEffect(() => {
    pref.set('organisms-organisms-selected', '' + displayOther);
  }, [displayOther]);

  let textSelected = false;
  const [displayText, setDisplayText] = useState<boolean>(textSelected);
  useEffect(() => {
    pref.set('organisms-organisms-selected', '' + displayText);
  }, [displayText]);

  const [organisms, setorganisms] = useState<{ [key: string]: templateItem }>(
    templateList
  );
  useEffect(() => {}, [organisms]);

  const [showTemplate, setShowTemplate] = React.useState(
    pref.get('template-content-selected') || 'organisms'
  );
  useEffect(() => {
    pref.set('template-content-selected', showTemplate);
    console.log(`${name} - showTemplate=${showTemplate}`);
  }, [showTemplate]);

  const [darkMode, setDarkMode] = useState<boolean>(
    pref.get('organisms-mode-selected') == 'true' || false
  );
  useEffect(() => {
    pref.set('organisms-mode-selected', '' + darkMode);
  }, [darkMode]);

  interface LeftNavorganismsProps {
    item: any;
    indent?: number;
    disabled?: boolean;
  }
  const LeftNavorganisms: React.FC<LeftNavorganismsProps> = ({
    item,
    indent,
    disabled,
  }) => {
    return (
      <LeftNavItem
        selected={showTemplate}
        value={item.value}
        text={item.label}
        indent={indent}
        disabled={disabled !== undefined ? disabled : item.disabled}
        onClick={() => {
          setShowTemplate(item.value);
        }}
      />
    );
  };
  return (
    <>
      <div className="design-system-editor-left-nav">
        <div className="design-system-editor-left-nav-scrollable">
          <List
            sx={{
              '& ul': { padding: 0 },
              paddingTop: '0px',
            }}
          >
            <LeftNavHeader>Introduction</LeftNavHeader>
            <LeftNavItem
              text={'organisms'}
              value="organisms"
              indent={1}
              selected={showTemplate}
              onClick={() => {
                setShowTemplate('organisms');
              }}
            />
            <LeftNavItem text="Mode" indent={1} />
            <div style={{ paddingLeft: '50px' }}>
              <NavSwitch
                leftLabel="Light"
                rightLabel="Dark"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
            </div>

            <LeftNavHeader>Template Settings</LeftNavHeader>
            <LeftNavItem
              text={'Text'}
              indent={1}
              onClick={() => setDisplayText(!displayText)}
            >
              {displayText ? <ExpandLess /> : <ExpandMore />}
            </LeftNavItem>
            <Collapse in={displayText} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <LeftNavorganisms item={organisms.textVariations} indent={2} />
              </List>
              <List component="div" disablePadding>
                <LeftNavorganisms
                  item={organisms.textIconVariations}
                  indent={2}
                />
              </List>
              <List component="div" disablePadding>
                <LeftNavorganisms
                  item={organisms.decoractivetextVariations}
                  indent={2}
                />
              </List>
              <List component="div" disablePadding>
                <LeftNavorganisms
                  item={organisms.decoractivetextIconVariations}
                  indent={2}
                />
              </List>
            </Collapse>
            <LeftNavItem
              text={'Images'}
              indent={1}
              onClick={() => setDisplayGeneral(!displayGeneral)}
            >
              {displayGeneral ? <ExpandLess /> : <ExpandMore />}
            </LeftNavItem>
            <Collapse in={displayGeneral} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <LeftNavorganisms
                  item={organisms.imagesOnlyVariations}
                  indent={2}
                />
              </List>
              <List component="div" disablePadding>
                <LeftNavorganisms item={organisms.imageText} indent={2} />
              </List>
              <List component="div" disablePadding>
                <LeftNavorganisms
                  item={organisms.backgroundimageText}
                  indent={2}
                />
              </List>
              <List component="div" disablePadding>
                <LeftNavorganisms item={organisms.fullBackground} indent={2} />
              </List>
            </Collapse>
            <LeftNavItem
              text={'Videos'}
              indent={1}
              onClick={() => setDisplayVideo(!displayVideo)}
            >
              {displayVideo ? <ExpandLess /> : <ExpandMore />}
            </LeftNavItem>
            <Collapse in={displayVideo} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <LeftNavorganisms item={organisms.videoVariations} indent={2} />
              </List>
              <List component="div" disablePadding>
                <LeftNavorganisms
                  item={organisms.youTubeVariations}
                  indent={2}
                />
              </List>
              <List component="div" disablePadding>
                <LeftNavorganisms item={organisms.fullVideo} indent={2} />
              </List>
            </Collapse>
            <LeftNavItem
              text={'Lists, Center Aligned'}
              indent={1}
              onClick={() => setDisplayList(!displayLists)}
            >
              {displayLists ? <ExpandLess /> : <ExpandMore />}
            </LeftNavItem>
            <Collapse in={displayLists} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <LeftNavorganisms item={organisms.listVariations} indent={2} />
              </List>
              <List component="div" disablePadding>
                <LeftNavorganisms
                  item={organisms.listsDoubleVariations}
                  indent={2}
                />
              </List>
              <List component="div" disablePadding>
                <LeftNavorganisms
                  item={organisms.listsTripleVariations}
                  indent={2}
                />
              </List>
              <List component="div" disablePadding>
                <LeftNavorganisms
                  item={organisms.listVariationsClickable}
                  indent={2}
                />
              </List>
              <List component="div" disablePadding>
                <LeftNavorganisms
                  item={organisms.listsDoubleVariationsClickable}
                  indent={2}
                />
              </List>
              <List component="div" disablePadding>
                <LeftNavorganisms
                  item={organisms.listsTripleVariationsClickable}
                  indent={2}
                />
              </List>
            </Collapse>
            <LeftNavItem
              text={'Lists, Image Left'}
              indent={1}
              onClick={() => setDisplayListImageLeft(!displayListsImageLeft)}
            >
              {displayListsImageLeft ? <ExpandLess /> : <ExpandMore />}
            </LeftNavItem>
            <Collapse in={displayListsImageLeft} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <LeftNavorganisms
                  item={organisms.listsDoubleVariationsImageLeft}
                  indent={2}
                />
              </List>
              <List component="div" disablePadding>
                <LeftNavorganisms
                  item={organisms.listsDoubleVariationsClickableImageLeft}
                  indent={2}
                />
              </List>
            </Collapse>
            <LeftNavItem
              text={'Cards, White'}
              indent={1}
              onClick={() => setDisplayCardsClickable(!displayCardsClickable)}
            >
              {displayCardsClickable ? <ExpandLess /> : <ExpandMore />}
            </LeftNavItem>
            <Collapse in={displayCardsClickable} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <LeftNavorganisms
                  item={organisms.cardVariationsStandard}
                  indent={2}
                />
              </List>
              <List component="div" disablePadding>
                <LeftNavorganisms
                  item={organisms.cardVariationsIcons}
                  indent={2}
                />
              </List>
              <List component="div" disablePadding>
                <LeftNavorganisms
                  item={organisms.imageCard916Variations}
                  indent={2}
                />
              </List>
              <List component="div" disablePadding>
                <LeftNavorganisms
                  item={organisms.imageCardVariations}
                  indent={2}
                />
              </List>
              <List component="div" disablePadding>
                <LeftNavorganisms
                  item={organisms.statCardVariations}
                  indent={2}
                />
              </List>
              <List component="div" disablePadding>
                <LeftNavorganisms
                  item={organisms.staticonCardVariations}
                  indent={2}
                />
              </List>
              <List component="div" disablePadding>
                <LeftNavorganisms
                  item={organisms.pricingCardVariations}
                  indent={2}
                />
              </List>
              <List component="div" disablePadding>
                <LeftNavorganisms
                  item={organisms.testimonCardVariations}
                  indent={2}
                />
              </List>
            </Collapse>
            <LeftNavItem
              text={'Other'}
              indent={1}
              onClick={() => setDisplayOther(!displayOther)}
            >
              {displayOther ? <ExpandLess /> : <ExpandMore />}
            </LeftNavItem>
            <Collapse in={displayOther} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <LeftNavorganisms item={organisms.heroVariations} indent={2} />
              </List>
              <List component="div" disablePadding>
                <LeftNavorganisms
                  item={organisms.footerVariations}
                  indent={2}
                />
              </List>
              <List component="div" disablePadding>
                <LeftNavorganisms item={organisms.teamVariations} indent={2} />
              </List>
              <List component="div" disablePadding>
                <LeftNavorganisms
                  item={organisms.featureVariations}
                  indent={2}
                />
              </List>
              <List component="div" disablePadding>
                <LeftNavorganisms
                  item={organisms.testimonialVariations}
                  indent={2}
                />
              </List>
            </Collapse>
          </List>
        </div>
      </div>
      <div
        className="design-system-editor-right-content"
        data-mode={darkMode ? 'dark' : 'light'}
      >
        <div className="design-system-editor-right-content-scrollable">
          {showTemplate === 'organisms' && <OrganismIntro />}
          {showTemplate === organisms.imageText.value && (
            <ErrorHandler>
              <TemplateExample />
            </ErrorHandler>
          )}
          {showTemplate === organisms.imagesOnlyVariations.value && (
            <ErrorHandler>
              <ImagesOnly />
            </ErrorHandler>
          )}
          {showTemplate === organisms.backgroundimageText.value && (
            <ErrorHandler>
              <BackgroundImageExample />
            </ErrorHandler>
          )}
          {showTemplate === organisms.fullBackground.value && (
            <ErrorHandler>
              <FullWidthBackgrounds />
            </ErrorHandler>
          )}
          {showTemplate === organisms.fullVideo.value && (
            <ErrorHandler>
              <FullWidthVideo />
            </ErrorHandler>
          )}
          {showTemplate === organisms.listVariations.value && (
            <ErrorHandler>
              <ListsSingle />
            </ErrorHandler>
          )}
          {showTemplate === organisms.listsDoubleVariations.value && (
            <ErrorHandler>
              <ListsDouble />
            </ErrorHandler>
          )}
          {showTemplate === organisms.listsDoubleVariationsImageLeft.value && (
            <ErrorHandler>
              <ListsDoubleImageLeft />
            </ErrorHandler>
          )}
          {showTemplate === organisms.listsTripleVariations.value && (
            <ErrorHandler>
              <ListsTriple />
            </ErrorHandler>
          )}
          {showTemplate === organisms.listVariationsClickable.value && (
            <ErrorHandler>
              <ListsSingleClickable />
            </ErrorHandler>
          )}
          {showTemplate === organisms.listsDoubleVariationsClickable.value && (
            <ErrorHandler>
              <ListsDoubleClickable />
            </ErrorHandler>
          )}
          {showTemplate ===
            organisms.listsDoubleVariationsClickableImageLeft.value && (
            <ErrorHandler>
              <ListsDoubleClickableImageLeft />
            </ErrorHandler>
          )}
          {showTemplate === organisms.listsTripleVariationsClickable.value && (
            <ErrorHandler>
              <ListsTripleClickable />
            </ErrorHandler>
          )}
          {showTemplate === organisms.cardVariationsStandard.value && (
            <ErrorHandler>
              <CardsStandard />
            </ErrorHandler>
          )}
          {showTemplate === organisms.cardVariationsIcons.value && (
            <ErrorHandler>
              <IconCardsStandard />
            </ErrorHandler>
          )}
          {showTemplate === organisms.imageCardVariations.value && (
            <ErrorHandler>
              <ImageCardsStandard />
            </ErrorHandler>
          )}
          {showTemplate === organisms.imageCard916Variations.value && (
            <ErrorHandler>
              <ImageCardsStandard916 />
            </ErrorHandler>
          )}
          {showTemplate === organisms.statCardVariations.value && (
            <ErrorHandler>
              <StatCardSamples />
            </ErrorHandler>
          )}
          {showTemplate === organisms.staticonCardVariations.value && (
            <ErrorHandler>
              <StatIconCardSamples />
            </ErrorHandler>
          )}
          {showTemplate === organisms.pricingCardVariations.value && (
            <ErrorHandler>
              <PricingCardSamples />
            </ErrorHandler>
          )}
          {showTemplate === organisms.videoVariations.value && (
            <ErrorHandler>
              <VideoLayouts />
            </ErrorHandler>
          )}
          {showTemplate === organisms.youTubeVariations.value && (
            <ErrorHandler>
              <YouTubeLayouts />
            </ErrorHandler>
          )}
          {showTemplate === organisms.textVariations.value && (
            <ErrorHandler>
              <TextLayouts />
            </ErrorHandler>
          )}
          {showTemplate === organisms.decoractivetextIconVariations.value && (
            <ErrorHandler>
              <DecorativeTextIconLayouts />
            </ErrorHandler>
          )}
          {showTemplate === organisms.decoractivetextVariations.value && (
            <ErrorHandler>
              <DecorativeTextLayouts />
            </ErrorHandler>
          )}
          {showTemplate === organisms.textIconVariations.value && (
            <ErrorHandler>
              <TextIconLayouts />
            </ErrorHandler>
          )}
          {showTemplate === organisms.heroVariations.value && (
            <ErrorHandler>
              <HeroExample />
            </ErrorHandler>
          )}
          {showTemplate === organisms.footerVariations.value && (
            <ErrorHandler>
              <FooterLayouts />
            </ErrorHandler>
          )}
          {showTemplate === organisms.teamVariations.value && (
            <ErrorHandler>
              <TeamLayouts />
            </ErrorHandler>
          )}
          {showTemplate === organisms.featureVariations.value && (
            <ErrorHandler>
              <FeatureLayouts />
            </ErrorHandler>
          )}
          {showTemplate === organisms.testimonialVariations.value && (
            <ErrorHandler>
              <TestimonialLayouts />
            </ErrorHandler>
          )}
          {showTemplate === organisms.testimonCardVariations.value && (
            <ErrorHandler>
              <TestimonialCardLayouts />
            </ErrorHandler>
          )}
        </div>
      </div>
    </>
  );
};
