import React, { useState } from 'react';
import './SidebarProject.scss';

export const SidebarProject = ({ title, id }) => {

  const [clickedId, setClickedId] = useState('');
  const [clickedName, setClickedTitle] = useState('');

  const handleChange = event => {
    setClickedId(event.target.id);
    setClickedTitle(event.target.innerText);
    console.log(clickedId, clickedName);
  }

  //onClick - setClickedProject to the event.target.value 
  //when clickedProject changes, useEffect will fire 
  //returns new <ProjectForm component?

  return (
    <> 
      <button className='sidebar-project-name' id={id} onClick={(event) => handleChange(event)}>{title}</button>
    </>
  )
}

export default SidebarProject;


//change h2s to buttons, interpolate their value/id? -- which also needs to be passed down from Sidebar 

//when a user clicks, create <ProjectForm> with the title of the project passed as props
//styling -- when it's been clicked, keep an active state on the title 