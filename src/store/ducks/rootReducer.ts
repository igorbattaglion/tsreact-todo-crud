import { combineReducers } from 'redux';

import sessions from './sessions'
import todos from './todos'

export default combineReducers({
    sessions,
    todos
});