import React from 'react';
import {useEffect} from 'react';
import './Sidebar.scss';
import SidebarProject from '../SidebarProject/SidebarProject';
import { retrieveProjects } from '../../util/apiCalls';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { addProjects } from '../../actions';


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
      <>
      <div>
          <h1 className= "projects-title">Projects</h1>
      </div>   
        {projects.map(project => {
          return (
          <>         
          <SidebarProject
            title={project.title}
              />
          </>
        )
      })}
      </>
    )
  }

export default Sidebar