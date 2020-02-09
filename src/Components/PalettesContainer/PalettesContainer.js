import React from 'react';
import './PalettesContainer.scss';
import Palette from '../Palette/Palette';

export const PalettesContainer = () => {
  return (
    <div className="palettes-container"> 
      <h3 className="palettes-title">PALETTES</h3>
      <Palette />
    </div>
  )
}

export default PalettesContainer;