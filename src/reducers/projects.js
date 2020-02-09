export const projects = (state = [], action) => {
    switch (action.type) {
    case 'ADD_PROJECTS':
        return [...state, ...action.projects]
    default:
        return state
    }
}