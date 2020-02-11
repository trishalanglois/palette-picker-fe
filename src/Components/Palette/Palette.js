import React, { useState, useEffect } from 'react';
import './Palette.scss';
import Color from '../Color/Color';

export const Palette = ({ currentColors }) => {

  const renderPalette = () => {
    const colorKeys = Object.keys(currentColors);
    return colorKeys.map(colorKey => {
      return (
        <>
          <Color
            key={currentColors[colorKey].color} 
            color={currentColors[colorKey].color}
          />
        </>
      )
    })
  }

  return (
    <aside className="palette-wrapper">
      <div className="palettes-wrapper">
        {renderPalette()}
      </div>
      {/* <h4 className="palette-name-label">Palette Name</h4> */}
    </aside>
  )
}

export default Palette;

