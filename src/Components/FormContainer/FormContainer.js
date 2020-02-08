import React from 'react';
import './FormContainer.scss';
import ProjectForm from '../ProjectForm/ProjectForm';
import PaletteForm from '../PaletteForm/PaletteForm'

export const FormContainer = () => {
  return (
      <article className="main-box"> 
        <ProjectForm />
        <PaletteForm />
      </article>
  )
}

export default FormContainer;