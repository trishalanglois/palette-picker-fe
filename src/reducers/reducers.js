import { combineReducers } from 'redux';
import { projects } from './projects';
import { clickedProject } from './clickedProject';

const rootReducer = combineReducers({
    clickedProject,
    projects
})

export default rootReducer;