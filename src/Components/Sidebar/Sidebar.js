import React from 'react';
import './Sidebar.scss';
import SidebarProject from '../SidebarProject/SidebarProject';
import { retrieveProjects } from '../../util/apiCalls';
import { useSelector, useDispatch, } from 'react-redux';
import{useEffect} from 'react'


export const Sidebar = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    retrieveProjects()
    .then(data => {
      dispatch({type: 'ADD_PROJECTS', projects: data})
    })
  });

  return (
    <> 
      <h2>Projects:</h2>
      <SidebarProject />
    </>
  )
}



export default Sidebar;