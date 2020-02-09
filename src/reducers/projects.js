export const projects = (state = [], action) => {
    switch (action.type) {
    case 'ADD_PROJECTS':
        return [...state, ...action.projects]
    case 'ADD_PROJECT':
        console.log(action.project)
        return [...state, action.project]
    default:
        return state
    }
}