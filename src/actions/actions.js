export const addProject = (id, title) => ({
  type: 'ADD_PROJECT',
  project: {
    id, 
    title
  }
})