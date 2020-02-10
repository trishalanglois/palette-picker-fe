import { combineReducers } from 'redux';
import { projects } from './projects';
import { currentProject } from './currentProject';

const rootReducer = combineReducers({
    currentProject,
    projects
})

export default rootReducer;