import React, { useState, useEffect } from 'react';
import './PaletteForm.scss';
import Color from '../Color/Color'
import PalettesContainer from '../PalettesContainer/PalettesContainer';
import Palette from '../Palette/Palette';

export const PaletteForm = () => {

  return (
    <form className="add-palette-form">


      <div className="add-palette-form-top">
        <div className="name-palette-wrapper">
          <label className="name-palette-label">PALETTE NAME</label>
          <input className="name-palette-input" type="text"></input>
        </div>
        <div className="palettes-wrapper">
          <Palette />
        </div>
      </div>
      <button className="add-palette-button" type="button">add to project</button>

      //if there are palettes to go with this project, render PalettesContainer: 
      <PalettesContainer />
    </form>
  )
}

export default PaletteForm;


//props will hold 5 random colors from ProjectForm's generate colors 
//add to project button will fire POST request, re-render new PaletteForm
