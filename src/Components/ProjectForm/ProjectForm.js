import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ProjectForm.scss';
import { postProject } from '../../util/apiCalls';
import { addProject } from '../../actions/actions';

export const ProjectForm = ({ projectTitle, id }) => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const currentProject = useSelector(state => state.currentProject)

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await postProject(title)
      dispatch(addProject(response.id[0], title))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="project-form-wrapper"> 
      <form className="project-name-form">
        {currentProject ? <h3>{currentProject}</h3> :
          
          <>
          <label className="title-input-label">PROJECT TITLE</label>
          <input className="title-input" type="text" onChange={(event) => setTitle(event.target.value)}/> </>}



        <button className="generate-palette-button" type="button" onClick={(event) => handleSubmit(event)}>generate palette</button>
      </form>
    </div>
  )
}


export default ProjectForm;
