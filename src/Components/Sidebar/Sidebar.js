import React from 'react';
import './Sidebar.scss';
import SidebarProject from '../SidebarProject/SidebarProject';
import { retrieveProjects } from '../../util/apiCalls';
// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from 'react';
import { connect } from 'react-redux';
import { addProjects } from '../../actions';


export class Sidebar extends React.Component {
  componentDidMount() {
    retrieveProjects()
      .then(data => {
        this.props.addProjects(data)
      })
  }

  render(){
    return (
      <>
        {this.props.projects.map(project => {
          return (
            <>
            <div>
              <h1 className= "projects-title">Projects</h1>
            </div>
            
          <SidebarProject
            title={project.title}
              />
          </>
        )
      })}
      </>
    )
  }
}

export const mapStateToProps = (state) => ({
  projects: state.projects
})

export const mapDispatchToProps = dispatch => ({
  addProjects: projects => dispatch( addProjects(projects) )
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)