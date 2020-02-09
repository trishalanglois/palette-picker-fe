import React from 'react';
import './PaletteForm.scss';
import Color from '../Color/Color'

export const PaletteForm = () => {
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
    <form className="add-palette-form">
      <div className="name-palette-wrapper">
        <label className="name-palette-label">NAME PALETTE</label>
        <input className="name-palette-input" type="text"></input>
      </div>
      <div className="palettes-wrapper">
        {generatePalette}
      </div>
    </form>
  )
}

export default PaletteForm;


//props will hold 5 random colors from ProjectForm's generate colors 
//add to project button will fire POST request, re-render new PaletteForm
