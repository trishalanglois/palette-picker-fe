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