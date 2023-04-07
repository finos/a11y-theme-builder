/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React from 'react'

interface Props {
    changeTab(newTabIndex: string): void;
}


const AtomicIntro: React.FC<Props> = ({changeTab}) => {

    return (
        <>
            <h1>Atoms</h1>
            <div>
                <h5>Getting Started with Atoms</h5>
                <p>
                    To get started you will define your atoms, which are the very basic building blocks of your design language.
                </p>
                <p>
                    Complete the following two steps to unlock the rest of the tool:
                </p>
                <ol>
                    <li>Define your <a onClick={(event) => changeTab("colorPalette")}>Color Palette</a></li>
                    <li>Define your <a onClick={(event) => changeTab("colorThemes")}>Color Theme</a></li>
                </ol>
                <p></p>
                <h6>Have Fun!</h6>
            </div>
        </>
    )
}

export default AtomicIntro;