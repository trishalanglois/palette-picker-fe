import React from 'react';
import './PaletteForm.scss';
import Color from '../Color/Color'
import PalettesContainer from '../PalettesContainer/PalettesContainer';

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


      <div className="add-palette-form-top">
        <div className="name-palette-wrapper">
          <label className="name-palette-label">PALETTE NAME</label>
          <input className="name-palette-input" type="text"></input>
        </div>
        <div className="palettes-wrapper">
          {generatePalette}
        </div>

      </div>

      <button className="add-palette-button" type="button">add to project</button>
      <PalettesContainer />
    </form>
  )
}

export default PaletteForm;


//props will hold 5 random colors from ProjectForm's generate colors 
//add to project button will fire POST request, re-render new PaletteForm
