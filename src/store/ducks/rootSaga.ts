import { all, takeLatest } from 'redux-saga/effects';
import { SessionsTypes } from './sessions/types';
import { getSession, updateSession, deleteSession } from './sessions/sagas';
import { getTodos, createTodo, deleteTodo, updateTodo } from './todos/sagas';
import { TodosTypes } from './todos/types';

export default function* rootSaga(){
    return yield all([
        takeLatest(SessionsTypes.LOAD_REQUEST, getSession),
        takeLatest(SessionsTypes.LOAD_UPDATE, updateSession),
        takeLatest(SessionsTypes.LOAD_LOGOUT, deleteSession),
        takeLatest(TodosTypes.LOAD_REQUEST, getTodos),
        takeLatest(TodosTypes.LOAD_CREATE, createTodo),
        takeLatest(TodosTypes.LOAD_DELETE, deleteTodo),
        takeLatest(TodosTypes.LOAD_UPDATE, updateTodo),
    ])
}