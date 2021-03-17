import { combineReducers } from 'redux';
import todos from './store';

const rootReducer = combineReducers({
    todos,
});

export default rootReducer;
