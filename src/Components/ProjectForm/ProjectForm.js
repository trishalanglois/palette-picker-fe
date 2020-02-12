import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ProjectForm.scss';
import { postProject } from '../../util/apiCalls';
import { addProject, clickedProject } from '../../actions/actions';

export const ProjectForm = ({ projectTitle, id }) => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const chosenProject = useSelector(state => state.clickedProject)
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await postProject(title)
      dispatch(addProject(response.id[0], title))
      dispatch(clickedProject(response.id[0], title))
    } catch (error) {
    }
  }
  
  return (
    <div className="project-form-wrapper"> 
      <form className="project-name-form">
        {chosenProject.title && 
          <h2 className="project-name">{chosenProject.title}</h2>
        }
      {!chosenProject.title &&
        <>
          <label className="title-input-label">PROJECT TITLE</label>
          <input className="title-input" type="text" onChange={(event) => setTitle(event.target.value)} />
          <button className="generate-palette-button" type="button" onClick={(event) => handleSubmit(event)}>name project</button>
        </>
        }
      </form>
    </div>
  )
}
export default ProjectForm;