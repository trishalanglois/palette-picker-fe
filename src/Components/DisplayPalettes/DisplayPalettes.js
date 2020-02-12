import React, { useState, useEffect } from 'react';
import Color from '../Color/Color';

export const DisplayPalettes = ({ color1,color2,color3,color4,color5 }) => {

  return (
    <aside className="palette-wrapper">
      <div className="palettes-wrapper">
        <Color
            key={color1} 
            color={color1}
            />
        <Color
            key={color2}
            color={color2}
            />
        <Color
            key={color3} 
            color={color3}
            />
        <Color
            key={color4} 
            color={color4}
        />
        <Color
            key={color5} 
            color={color5}
         />
      </div>
    </aside>
  )
}
export default DisplayPalettes;