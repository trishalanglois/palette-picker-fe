import React from 'react';
import './PalettesContainer.scss';
import Palette from '../Palette/Palette';
import { useSelector, useDispatch } from 'react-redux';
import { retrievePalettes } from '../../util/apiCalls';
import { addPalettes } from '../../actions/';
import { clickedProject } from '../../actions/actions';


export const PalettesContainer = () => {
  const dispatch = useDispatch()
  const clickedProject = useSelector(state => state.clickedProject)
  const palettes = useSelector(state => state.palettes)

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await retrievePalettes(clickedProject.id)
      console.log(response)
      dispatch({type: 'ADD_PALETTES', palettes: response})
    } catch (error) {
    }
  }

  return (
    <>
      <div className="palettes">
      <button className="display-palette-button" type="button" onClick={(event) => handleSubmit(event)}>Display Palettes</button>   
        <h1 className= "palettes-title">Palettes</h1>
      </div>  
      {/* {palettes.map(palette => {
        return (
        <>         
        <Palette
          title={project.title}
          id={project.id}
            />
        </>
      )
    })} */}
    </>
  )
}

export default PalettesContainer;