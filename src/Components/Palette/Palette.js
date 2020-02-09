import React from 'react';
import './Palette.scss';
import Color from '../Color/Color';

export const Palette = () => {
  const colors = ['000000', 'ffffff', '000000', 'ffffff', '000000']
  const generatePalette = colors.map(color => {
    return (
      <>
        <Color
          key={color} 
          color={color}
        />
      </>
    )
  })

  return (
    <aside className="palette-wrapper">
      <button className="delete-button">X</button>
      <div className="palettes-wrapper">
        {generatePalette}
      </div>
      <h4 className="palette-name-label">Palette Name</h4>
    </aside>
  )
}

export default Palette;

//mapState to GET the palettes for a given project 