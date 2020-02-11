import React from 'react';
import './PalettesContainer.scss';
import Palette from '../Palette/Palette';
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
        <h1 className= "palettes-title">Palettes:</h1>
      </div>  
      {palettes.map(palette => {
        return (
        <>         
        <Palette
          id={palette.id}
          title={palette.name}
          colorOne={palette.color1}
          colorTwo={palette.color2}
          colorThree={palette.color3}
          colorFour={palette.color4}
          colorFive={palette.color5}
          projectId={palette.projectid}           
            />
        </>
      )
    })}
    </>
  )
}

export default PalettesContainer;