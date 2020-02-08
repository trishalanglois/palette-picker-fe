import React from 'react';
import './FormContainer.scss';
import ProjectForm from '../ProjectForm/ProjectForm';
import PaletteForm from '../PaletteForm/PaletteForm'

export const FormContainer = () => {
  return (
    <> 
      <ProjectForm />
      <PaletteForm />
    </>
  )
}

export default FormContainer;