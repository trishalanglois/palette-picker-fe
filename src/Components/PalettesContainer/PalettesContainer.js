import React from 'react';
import './PalettesContainer.scss';
import DisplayPalettes from '../DisplayPalettes/DisplayPalettes';
import { useSelector, useDispatch } from 'react-redux';
import { retrievePalettes } from '../../util/apiCalls';


export const PalettesContainer = () => {
  const dispatch = useDispatch()
  const clickedProject = useSelector(state => state.clickedProject)
  const palettes = useSelector(state => state.palettes)

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await retrievePalettes(clickedProject.id)
      dispatch({type: 'ADD_PALETTES', palettes: response})
    } catch (error) {
    }
  }

  return (
    <>
      <div className="palettes">
        <button className="display-palette-button" type="button" onClick={(event) => handleSubmit(event)}>Display {clickedProject.title} Palettes</button>           
      </div>  
      {palettes.map(palette => {
        return (
        <>         
            <DisplayPalettes
              color1={palette.color1}
              color2 ={palette.color2}
              color3 ={palette.color3}
              color4 ={palette.color4}
              color5={palette.color5}
              name={palette.name}
              />
        </>
      )
    })}
    </>
  )
}

export default PalettesContainer;