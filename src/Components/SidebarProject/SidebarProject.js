import React, { useState } from 'react';
import './SidebarProject.scss';

export const SidebarProject = ({ title, id }) => {

  const [clickedProject, setClickedProject] = useState('');

  // const handleChange = event => {
  //   setClickedProject(event.target.id);
  //   console.log(event.target.id);
  // }

  //onClick - setClickedProject to the event.target.value 
  //when clickedProject changes, useEffect will fire 
  //returns new <ProjectForm component?

  return (
    <> 
      <button id={id} onClick={(event) => setClickedProject(event.target.id)}>{title}</button>
    </>
  )
}

export default SidebarProject;


//change h2s to buttons, interpolate their value/id? -- which also needs to be passed down from Sidebar 

//when a user clicks, create <ProjectForm> with the title of the project passed as props
//styling -- when it's been clicked, keep an active state on the title 