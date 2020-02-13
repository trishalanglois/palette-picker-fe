import { combineReducers } from 'redux';
import { projects } from './projects';
import { clickedProject } from './clickedProject';
import { palettes } from './palettes';


const rootReducer = combineReducers({
    clickedProject,
    projects,
    palettes
})

export default rootReducer;