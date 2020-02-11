export const clickedProject = (state = {}, action) => {
  switch (action.type) {
  case 'CLICKED_PROJECT':
      return action.project
  default:
      return state
  }
}