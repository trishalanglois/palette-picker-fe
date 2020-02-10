import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './SidebarProject.scss';
import ProjectForm from '../ProjectForm/ProjectForm';
import { clickedProject } from '../../actions/actions';


export const SidebarProject = ({ title, id }) => {
  const [clickedId, setClickedId] = useState('');
  const [clickedName, setClickedTitle] = useState('');
  const dispatch = useDispatch();

  const handleChange = (id, name) => {
    setClickedId(id);
    setClickedTitle(name);
    dispatch(clickedProject(id, name));
  }


  return (
    <> 
      <h2 className='sidebar-project-name' id={id} onClick={event => handleChange(event.target.id, event.target.innerText)}>{title}</h2>   
    </>
  )
}

export default SidebarProject;