import { combineReducers } from 'redux';
import { projects } from './projects';
import { project } from './project';

const rootReducer = combineReducers({
    projects,
    projects: project
})

export default rootReducer;