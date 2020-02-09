import { combineReducers } from 'redux';
import { project } from './project';

const rootReducer = combineReducers({
  projects: project
})

export default rootReducer;