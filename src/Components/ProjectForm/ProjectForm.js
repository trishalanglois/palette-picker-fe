import React from 'react';
import './ProjectForm.scss';

export const ProjectForm = (props) => {
  const projectTitle = props.valueOf();





  return (
    <div className="project-form-wrapper"> 
      <form className="project-name-form">
        {/* <h2 className="project-name-main"></h2> */}

          <label className="title-input-label">PROJECT TITLE</label>
          <input className="title-input" type="text" /> 

        <button className="generate-palette-button" type="button">generate palette</button>
      </form>

    </div>
  )
}

export const mapStateToProps = state => ({

})

export default ProjectForm;

// regular props, passed down from clickevent from sidebar - show the project title 
// mapDispatchToProps - create new project, rerender App so it shows up in the sidebar, also shows up on the main card 