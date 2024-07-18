/**
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useEffect } from 'react';
import { Button, ButtonGroup } from '@mui/material';
import { HeadingSection } from '../content/HeadingSection';
import { ExampleSection } from '../content/ExampleSection';

interface Props {}

export const ButtonGroupsComponent: React.FC<Props> = () => {

    useEffect(() => {
        console.log('ButtonsStandardComponent mounted');
    }, []);

    function barGraphIcon(props?: any) {
        return (
            <div className="inline-icon">
                <i className="fa-solid fa-chart-simple"></i>
            </div>
        );
    }

    const renderButtonGroup = (
        title: string,
        orientation: 'horizontal' | 'vertical',
        variant: 'contained' | 'outlined' | 'text'
    ) => {
        return (
            <div className="row">
                <div className="col-12">
                    <div className="subtitle1">{title}</div>
                    <div className="buttonDemo">
                        <ButtonGroup
                            orientation={orientation}
                            variant={variant}
                        >
                            <Button>No Icon</Button>
                            <Button startIcon={barGraphIcon()}>
                                Left Icon
                            </Button>
                            <Button endIcon={barGraphIcon()}>Right Icon</Button>
                            <Button>{barGraphIcon()}</Button>
                        </ButtonGroup>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div>
            <HeadingSection heading="Button Groups" title="Desktop" />
            <ExampleSection>
                <h6>Horizontal Groups</h6>
                {renderButtonGroup('primary', 'horizontal', 'contained')}
                {renderButtonGroup('secondary', 'horizontal', 'outlined')}
                {renderButtonGroup('tertiary', 'horizontal', 'text')}

                <h6>Vertical Groups</h6>
                {renderButtonGroup('primary', 'vertical', 'contained')}
                {renderButtonGroup('secondary', 'vertical', 'outlined')}
                {renderButtonGroup('tertiary', 'vertical', 'text')}
            </ExampleSection>
        </div>
    );
};
