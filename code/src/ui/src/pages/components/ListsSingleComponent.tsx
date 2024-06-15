/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { HeadingSection } from '../content/HeadingSection';
import { ExampleSection } from '../content/ExampleSection';
import { FormControlLabel, Radio, RadioGroup , Grid } from '@mui/material';
import { SettingsSection } from '../content/SettingsSection';
import { ListComponent } from './ListComponent';


interface Props {
}

export const ListsSingleComponent: React.FC<Props> = () => {


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
            <HeadingSection title='Desktop' heading='Lists - Single Line'></HeadingSection>
            <Grid container spacing={2} columns={12} margin={2}>
              <Grid item spacing={2} lg={12} md={12} sm={12}>
               <SettingsSection>
                  <RadioGroup
                      aria-labelledby="isClickable-button-group-label"
                      name="isClickable-buttons-group"
                      defaultValue="non-clickable"
                      onChange={handleChange}
                  >
                      <FormControlLabel value="non-clickable" control={<Radio />} label="Non-Clickable"/>
                      <FormControlLabel value="clickable" control={<Radio />} label="Clickable List"/>
                  </RadioGroup>
                </SettingsSection>
              </Grid>
            </Grid>

            <ExampleSection>
                <section>
                    <div className="row">
                        <div className="col-6">
                            <h6>Single Line Lists without Checkbox</h6>
                            <div className="Sample">
                              <ListComponent isClickable={isClickable} type={1} title={'Style 1 - Single Line'}  overline={''} body={'testing'}  ></ListComponent>
                              <ListComponent isClickable={isClickable} type={1} title={'Style 2 - Single Line'} isStyle2  overline={''} body={'testing'}  ></ListComponent>
                              <ListComponent isClickable={isClickable} hasAvatar type={1} title={'Style 1 - with Avatar'}  overline={''} body={'testing'}  ></ListComponent>
                              <ListComponent isClickable={isClickable} hasAvatar type={1} title={'Style 2 - with Avatar'} isStyle2  overline={''} body={'testing'}  ></ListComponent>
                              <ListComponent isClickable={isClickable} hasImg type={1} title={'Style 1 - with Square Image'}  overline={''} body={'testing'}  ></ListComponent>
                              <ListComponent isClickable={isClickable} hasImg type={1} title={'Style 2 - with Square Image'} isStyle2  overline={''} body={'testing'}  ></ListComponent>
                              <ListComponent isClickable={isClickable} hasImg isLarge type={1} title={'Style 1 - with Wide Image'}  overline={''} body={'testing'}   ></ListComponent>
                              <ListComponent isClickable={isClickable} hasImg isLarge type={1} title={'Style 2 - with Wide Image'} isStyle2  overline={''} body={'testing'}  ></ListComponent>
                              <ListComponent isClickable={isClickable} hasIcon type={1} title={'Style 1 - with Icon'}  overline={''} body={'testing'}  ></ListComponent>
                              <ListComponent isClickable={isClickable} hasIcon type={1} title={'Style 2 - with Icon'} isStyle2  overline={''} body={'testing'}  ></ListComponent>
                              <ListComponent isClickable={isClickable} hasIcon isLarge type={1} title={'Style 1 - with Large Icon'}  overline={''} body={'testing'}  ></ListComponent>
                              <ListComponent isClickable={isClickable} hasIcon isLarge type={1} title={'Style 2 - with Large Icon'} isStyle2  overline={''} body={'testing'}  ></ListComponent>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="row">
                        <div className="col-6">
                            <h6>Single Line Lists with Checkbox</h6>
                            <div className="Sample">
                              <ListComponent isClickable={isClickable} hasCheckbox type={1} title={'Single Line - Style 1'}  overline={''} body={'testing'}  ></ListComponent>
                              <ListComponent isClickable={isClickable} hasCheckbox type={1} title={'List - Style 2'} isStyle2  overline={''} body={'testing'}  ></ListComponent>
                              <ListComponent isClickable={isClickable} hasCheckbox hasAvatar type={1} title={'Style 1 - with Avatar'}  overline={''} body={'testing'}  ></ListComponent>
                              <ListComponent isClickable={isClickable} hasCheckbox hasAvatar type={1} title={'Style 2 - with Avatar'} isStyle2  overline={''} body={'testing'}  ></ListComponent>
                              <ListComponent hasCheckbox hasImg type={1} title={'Style 1 - with Square Image'}  overline={''} body={'testing'}  ></ListComponent>
                              <ListComponent isClickable={isClickable} hasCheckbox hasImg type={1} title={'Style 2 - with Square Image'} isStyle2  overline={''} body={'testing'}  ></ListComponent>
                              <ListComponent isClickable={isClickable} hasCheckbox hasImg isLarge type={1} title={'Style 1 - with Wide Image'}  overline={''} body={'testing'}  ></ListComponent>
                              <ListComponent isClickable={isClickable} hasCheckbox hasImg isLarge type={1} title={'Style 2 - with Wide Image'} isStyle2  overline={''} body={'testing'}  ></ListComponent>
                              <ListComponent isClickable={isClickable} hasCheckbox hasIcon type={1} title={'Style 1 - with Icon'}  overline={''} body={'testing'}  ></ListComponent>
                              <ListComponent isClickable={isClickable} hasCheckbox hasIcon type={1} title={'Style 2 - with Icon'} isStyle2  overline={''} body={'testing'}  ></ListComponent>
                              <ListComponent isClickable={isClickable} hasCheckbox hasIcon isLarge type={1} title={'Style 1 - with Large Icon'}  overline={''} body={'testing'}  ></ListComponent>
                              <ListComponent isClickable={isClickable} hasCheckbox hasIcon isLarge type={1} title={'Style 2 - with Large Icon'} isStyle2  overline={''} body={'testing'}  ></ListComponent>
                            </div>
                        </div>
                    </div>
                </section>
            </ExampleSection>

        </div>
    )
}
