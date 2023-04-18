/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React from 'react';
import { GeneratedCodeSection } from '../content/GeneratedCodeSection';
import { ExampleSection } from '../content/ExampleSection';
import { SettingsSection } from '../content/SettingsSection';
import { HeadingSection } from '../content/HeadingSection';

/*
    ***DEMO***
    THIS ATOM IS INTENDED FOR DEMO PURPOSES.
    A USER READING THE DOCS MIGHT BE DIRECTED HERE.
    LOOKING AT THIS FILE FIRST MIGHT HELP BEFORE ADDING YOUR OWN ATOMS.
*/

// DEMO:    Import the atom class you created in the SDK.
//          Ours is called "MinimumTarget".
import { MinimumTarget } from 'a11y-theme-builder-sdk';

// DEMO:    We have prebuild editor components that can be used for some property types..
//          If you require more functionality, you must create your own within the atom.
import { NumberSelectable } from '../../components/editors/NumberSelectable';
import { StringProperty } from '../../components/editors/StringProperty';

interface Props {
// DEMO:    Pass the atom type we make in the SDK as a prop
    atom: MinimumTarget;
}

// DEMO:    Name your atom accordingly.
//          Our is named "ExampleAtom".
//          The convention is to name it after its sdk class followed by "atom".
//          In our case, we should therefore have named it "MinimumTargetAtom".
export const ExampleAtom: React.FC<Props> = ({ atom }) => {
// export const MinimumTargetAtom: React.FC<Props> = ({ atom }) => {
    return (
        <div>

            {
            // DEMO:    In the HeadingSection, pass your sdk atom as the item,
            //          and give an appropriate title and heading.
            //          Inside the HeadingSection, you may add more explanatory text.
            }
            <HeadingSection item={atom} title="Theme" heading="Minimum Click Area">
                <div>Define the minimum click area for your desktop experience.</div>
            </HeadingSection>

            {
            // DEMO:    In the ExampleSection, you may wish to provide a rendering that
            //          demonstrates the effects of the changes the user might make to your atom.
            }
            <ExampleSection>
                None
            </ExampleSection>

            {
            // DEMO:    In the SettingsSection, you should put all your interfaces that allow
            //          allow the user to change your properties.
            //          Simple dropdowns are provided for numbers and strings, but other inputs
            //          will need to be custom made.
            //          There are many examples in other atoms/molecules, you should look at for inspiration.
            }
            <SettingsSection>
                <NumberSelectable property={atom.minHeight} defaultValue={44} units="px" />
            </SettingsSection>

            {
            // DEMO:    In the GeneratedCodeSection, you should pass your sdk atom class.
            //          Information on how this section works will be in another tutorial.
            }
            <GeneratedCodeSection item={atom}/>
        </div>
    )
}
