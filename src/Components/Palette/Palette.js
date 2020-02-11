import React, { useState, useEffect } from 'react';
import './Palette.scss';
import Color from '../Color/Color';

export const Palette = () => {
  const [currentColors, setCurrentColors] = useState({
    color1: {id: 1, color: ''},
    color2: {id: 2, color: ''},
    color3: {id: 3, color: ''},
    color4: {id: 4, color: ''},
    color5: {id: 5, color: ''}
  })


  const generatePalette = () => {
    setCurrentColors({
      color1: {id: 1, color: Math.floor(Math.random()*16777215).toString(16)},
      color2: {id: 2, color: Math.floor(Math.random()*16777215).toString(16)},
      color3: {id: 3, color: Math.floor(Math.random()*16777215).toString(16)},
      color4: {id: 4, color: Math.floor(Math.random()*16777215).toString(16)},
      color5: {id: 5, color: Math.floor(Math.random()*16777215).toString(16)}
    })
  }

  useEffect(() => {
    generatePalette();
  }, [])


  // const colors = ['000000', 'ffffff', '000000', 'ffffff', '000000']
  const renderColors = () => {
    const colorNames = Object.keys(currentColors);
    console.log(colorNames);


  }

  // const generatePalette = colors.map(color => {
  //   return (
  //     <>
  //       <Color
  //         key={color} 
  //         color={color}
  //       />
  //     </>
  //   )
  // })

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