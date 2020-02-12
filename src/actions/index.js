  
export const addProjects = projects => ({
    type: 'ADD_PROJECTS',
    projects
});

export const addProject = (id, title) => ({
  type: 'ADD_PROJECT',
  project: {
    id, 
    title
  }
})

export const clickedProject = (id, title) => ({
  type: 'CLICKED_PROJECT',
  project: {
    id, 
    title
  }
})

export const addPalettes = (palettes) => ({
  type: 'ADD_PALETTES',
  palettes
})
