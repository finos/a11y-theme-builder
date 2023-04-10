/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { HeadingSection } from '../content/HeadingSection';
import { ExampleSection } from '../content/ExampleSection';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
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
            <ExampleSection>
                <section>
                    <div className="row">
                        <div className="col-6">
                            <h6>Single Line Lists without Checkbox</h6>
                            <ListComponent isClickable={isClickable} type={1} title={'Single Line - Style 1'}></ListComponent>
                            <ListComponent isClickable={isClickable} type={1} title={'List - Style 2'} isStyle2></ListComponent>
                            <ListComponent isClickable={isClickable} hasAvatar type={1} title={'Style 1 - with Avatar'}></ListComponent>
                            <ListComponent isClickable={isClickable} hasAvatar type={1} title={'Style 2 - with Avatar'} isStyle2></ListComponent>
                            <ListComponent isClickable={isClickable} hasImg type={1} title={'Style 1 - with Square Image'}></ListComponent>
                            <ListComponent isClickable={isClickable} hasImg type={1} title={'Style 2 - with Square Image'} isStyle2></ListComponent>
                            <ListComponent isClickable={isClickable} hasImg isLarge type={1} title={'Style 1 - with Wide Image'}></ListComponent>
                            <ListComponent isClickable={isClickable} hasImg isLarge type={1} title={'Style 2 - with Wide Image'} isStyle2></ListComponent>
                            <ListComponent isClickable={isClickable} hasIcon type={1} title={'Style 1 - with Icon'}></ListComponent>
                            <ListComponent isClickable={isClickable} hasIcon type={1} title={'Style 2 - with Icon'} isStyle2></ListComponent>
                            <ListComponent isClickable={isClickable} hasIcon isLarge type={1} title={'Style 1 - with Large Icon'}></ListComponent>
                            <ListComponent isClickable={isClickable} hasIcon isLarge type={1} title={'Style 2 - with Large Icon'} isStyle2></ListComponent>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="row">
                        <div className="col-6">
                            <h6>Single Line Lists with Checkbox</h6>
                            <ListComponent isClickable={isClickable} hasCheckbox type={1} title={'Single Line - Style 1'}></ListComponent>
                            <ListComponent isClickable={isClickable} hasCheckbox type={1} title={'List - Style 2'} isStyle2></ListComponent>
                            <ListComponent isClickable={isClickable} hasCheckbox hasAvatar type={1} title={'Style 1 - with Avatar'}></ListComponent>
                            <ListComponent isClickable={isClickable} hasCheckbox hasAvatar type={1} title={'Style 2 - with Avatar'} isStyle2></ListComponent>                            <ListComponent hasCheckbox hasImg type={1} title={'Style 1 - with Square Image'}></ListComponent>
                            <ListComponent isClickable={isClickable} hasCheckbox hasImg type={1} title={'Style 2 - with Square Image'} isStyle2></ListComponent>
                            <ListComponent isClickable={isClickable} hasCheckbox hasImg isLarge type={1} title={'Style 1 - with Wide Image'}></ListComponent>
                            <ListComponent isClickable={isClickable} hasCheckbox hasImg isLarge type={1} title={'Style 2 - with Wide Image'} isStyle2></ListComponent>
                            <ListComponent isClickable={isClickable} hasCheckbox hasIcon type={1} title={'Style 1 - with Icon'}></ListComponent>
                            <ListComponent isClickable={isClickable} hasCheckbox hasIcon type={1} title={'Style 2 - with Icon'} isStyle2></ListComponent>
                            <ListComponent isClickable={isClickable} hasCheckbox hasIcon isLarge type={1} title={'Style 1 - with Large Icon'}></ListComponent>
                            <ListComponent isClickable={isClickable} hasCheckbox hasIcon isLarge type={1} title={'Style 2 - with Large Icon'} isStyle2></ListComponent>
                        </div>
                    </div>
                </section>
            </ExampleSection>

        </div>
    )
}
