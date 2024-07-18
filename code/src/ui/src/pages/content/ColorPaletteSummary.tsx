/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React from 'react';
import { ColorPalette } from '@finos/a11y-theme-builder-sdk';

interface Props {

  colorPalette: ColorPalette;
  size?: string;
  gap?:  string;
}

export const ColorPaletteSummary: React.FC<Props> = ({ colorPalette, size = '12px',gap = '12px' }) => {
  
//   const divStyle: React.CSSProperties={
//     display: "flex",
//     gap: gapbtw,
//   }
  return (
  <div style={{display:"flex",gap:gap}}>
    {
        colorPalette.getColors().map((color,index)=>{
            console.log("it's working as of now ",color.hex);
            return (
            <div style={{
                width: size,
                height: size,
                borderRadius: '50%',
                borderStyle:'solid',
                border:'1px solid #91919F',
                backgroundColor: color.hex.getValue(),}
            }>
            </div>
                );
        })

        }
    
    
  </div>

  );
};

