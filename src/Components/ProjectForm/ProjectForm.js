import React, { useState, useEffect, useSelector } from 'react';
import { useDispatch } from 'react-redux';
import './ProjectForm.scss';
import { postProject } from '../../util/apiCalls';
import { addProject } from '../../actions/actions';

export const ProjectForm = (props) => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await postProject(title)
      dispatch(addProject(response.id, title))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="project-form-wrapper"> 
      <form className="project-name-form">
          <label className="title-input-label">PROJECT TITLE</label>
          <input className="title-input" type="text" onChange={(event) => setTitle(event.target.value)}/> 

        <button className="generate-palette-button" type="button" onClick={(event) => handleSubmit(event)}>generate palette</button>
      </form>
    </div>
  )
}


export default ProjectForm;
