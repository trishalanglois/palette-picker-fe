import React from 'react';
import {useEffect} from 'react';
import './Sidebar.scss';
import SidebarProject from '../SidebarProject/SidebarProject';
import { retrieveProjects } from '../../util/apiCalls';
import { useSelector, useDispatch } from 'react-redux';


export const Sidebar = () => {
  const dispatch = useDispatch()
  const projects = useSelector(state => state.projects)

  useEffect(() => {
    retrieveProjects()
        .then(data => {
          dispatch({type: 'ADD_PROJECTS', projects:data})
        })
  },[]);

    return (
      <nav className="project-sidebar">
        <div className="projects">
            <h1 className= "projects-title">PROJECTS</h1>
        </div>   
          {projects.map(project => {
            return (
            <>         
            <SidebarProject
              title={project.title}
              id={project.id}
                />
            </>
          )
        })}
      </nav>
    )
  }

export default Sidebar