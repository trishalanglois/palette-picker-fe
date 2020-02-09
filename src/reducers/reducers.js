import { combineReducers } from 'redux';
import { projects } from '../reducers/projects';

const rootReducer = combineReducers({
    projects
})

export default rootReducer;