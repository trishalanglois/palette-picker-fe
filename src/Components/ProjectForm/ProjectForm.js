import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './ProjectForm.scss';
import { postProject } from '../../util/apiCalls';
import { addProject } from '../../actions/actions';

export const ProjectForm = (props) => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();


  //re-render to show title (mapState) -- useEvent but listens for the generate palette button click?

  useEffect(() => {
    //mapState to set title = what's in store 
  }, [dispatch])


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await postProject(title)
      // const project = await response.json();
      dispatch(addProject(response.id, title))
    } catch (error) {
      console.log(error)
    }
    //generate 5 random colors and render paletteForm component 
  }

  return (
    <div className="project-form-wrapper"> 
      <form className="project-name-form">
        {/* <h2 className="project-name-main"></h2> */}

          <label className="title-input-label">PROJECT TITLE</label>
          <input className="title-input" type="text" onChange={(event) => setTitle(event.target.value)}/> 

        <button className="generate-palette-button" type="button" onClick={(event) => handleSubmit(event)}>generate palette</button>
      </form>
    </div>
  )
}


export default ProjectForm;
