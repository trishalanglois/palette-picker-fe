import React from 'react';
import {useEffect} from 'react';
import './Sidebar.scss';
import SidebarProject from '../SidebarProject/SidebarProject';
import { retrieveProjects } from '../../util/apiCalls';
import { connect } from 'react-redux';
import { addProjects } from '../../actions';


export const Sidebar = (props) => {
  useEffect(() => {
    retrieveProjects()
        .then(data => {
          props.addProjects(data)
        })
  },[]);

    return (
      <>
      <div>
          <h1 className= "projects-title">Projects</h1>
      </div>   
        {props.projects.map(project => {
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
export const mapStateToProps = (state) => ({
  projects: state.projects
})
export const mapDispatchToProps = dispatch => ({
  addProjects: projects => dispatch( addProjects(projects) )
})
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)