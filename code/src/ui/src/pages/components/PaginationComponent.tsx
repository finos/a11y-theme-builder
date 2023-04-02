/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React from 'react';
import { HeadingSection } from '../content/HeadingSection';
import { Pagination } from '@mui/material';
import { ExampleSection } from '../content/ExampleSection';


interface Props {
}

export const PaginationComponent: React.FC<Props> = () => {
    return (
        <div className="content">
            <HeadingSection title='Desktop' heading='Pagination'></HeadingSection>
            <ExampleSection>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="example">
                                    <div className="subtitle1">Basic Pagination</div>
                                    <Pagination count={5} showFirstButton showLastButton/>
                                </div>
                                <div className="example">
                                    <div className="subtitle1">Basic Pagination with more at the End</div>
                                    <Pagination count={11} defaultPage={1} siblingCount={2} boundaryCount={0}/>
                                </div>
                                <div className="example">
                                    <div className="subtitle1">Basic Pagination with more in the Middle</div>
                                    <Pagination count={11} defaultPage={1} boundaryCount={2} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </ExampleSection>
        </div>
    )
}
