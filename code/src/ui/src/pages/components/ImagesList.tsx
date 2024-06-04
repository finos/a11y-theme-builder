/*
 * SPDX-License-Identifier: Apache-2.0
 * Copyright 2024 FINOS A11y Theme Builder contributors - see NOTICE file
 */

/*
 Code borrowed from MUI project
 * Source: https://github.com/mui/material-ui/blob/aae4ecc0f48c2a8ea47b9532ed1b721472dc96a8/docs/data/material/components/image-list/TitlebarImageList.tsx
 * License: MIT License - see NOTICE file
 * Original Author: MUI Contributors
*/

import React, { useState } from 'react';
import { HeadingSection } from '../content/HeadingSection';
import { ExampleSection } from '../content/ExampleSection';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { SettingsSection } from '../content/SettingsSection';
import { ListComponent } from './ListComponent';
import { Divider, Grid, ImageList, ImageListItem, ImageListItemBar, ListSubheader, IconButton } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

interface Props {
}

export const ImagesList: React.FC<Props> = () => {


    const [isClickable, setIsClickable] = useState(false)
    async function handleChange(event: any): Promise<void> {
        const value = event.target.value;
        if (value === "clickable") {
            setIsClickable(true)
            return
        }
        setIsClickable(false)
    }

    return (
        <div className="content">
            <HeadingSection title='Desktop' heading='Image-List'></HeadingSection>

            <ExampleSection>
                <section>
                    <div className="row">
                        <div className="col-6">
                            <h6>Image List with title bars</h6>
                            <div className="Sample">
                                {/* START of borrowed code 1 */}
                                <ImageList sx={{ width: 500, height: 450 }}>
                                    <ImageListItem key="Subheader" cols={2}>
                                        <ListSubheader component="div">December</ListSubheader>
                                    </ImageListItem>
                                    {itemData.map((item) => (
                                        <ImageListItem key={item.img}>
                                            <img
                                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                                alt={item.title}
                                                loading="lazy"
                                            />
                                            <ImageListItemBar
                                                title={item.title}
                                                subtitle={item.author}
                                                actionIcon={
                                                    <IconButton
                                                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                                        aria-label={`info about ${item.title}`}
                                                    >
                                                        <InfoIcon />
                                                    </IconButton>
                                                }
                                            />
                                        </ImageListItem>
                                    ))}
                                </ImageList>
                                {/* END of borrowed code 1 */}
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="row">
                        <div className="col-6">
                            <h6>Image List with Title bar below image</h6>
                            <div className="Sample">
                                {/* START of borrowed code 2 */}
                                <ImageList sx={{ width: 500, height: 450 }}>
                                    {itemData.map((item) => (
                                        <ImageListItem key={item.img}>
                                            <img
                                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                                alt={item.title}
                                                loading="lazy"
                                            />
                                            <ImageListItemBar
                                                title={item.title}
                                                subtitle={<span>by: {item.author}</span>}
                                                position="below"
                                            />
                                        </ImageListItem>
                                    ))}
                                </ImageList>
                                {/* END of borrowed code 2 */}
                            </div>
                        </div>
                    </div>
                </section>
            </ExampleSection>

        </div>
    )
}
{/* START of borrowed code 3 */}
const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        author: '@bkristastucchio',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
        author: '@rollelflex_graphy726',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
        author: '@helloimnik',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        author: '@nolanissac',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
        author: '@hjrc33',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
        author: '@tjdragotta',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
        author: '@katie_wasserman',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
        author: '@silverdalex',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
        author: '@shelleypauls',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
        author: '@peterlaster',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
        author: '@southside_customs',
        cols: 2,
    },
];
{/* END of borrowed code 3 */}
