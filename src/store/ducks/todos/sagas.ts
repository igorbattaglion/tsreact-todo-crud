import { call, put } from 'redux-saga/effects';
import apis from '../../../services/api';
import { successTodo, failureTodo } from './actions';
import { loadState } from '../../../persist/localStorage';


export function* getTodos(){
    try{
        const session = loadState()
        const response = yield call(apis.getTodos, session.sessionId);
        yield put(successTodo(response.data));
    } catch (err){
        yield put(failureTodo());
    }
}

export function* updateTodo(action :any){
    try{
        const session = loadState()
        const response = yield call(apis.updateTodo, session.sessionId, action.payload.text, action.payload.isCompleted, action.payload.urgency);
        yield put(successTodo(response.data));
    } catch (err){
        yield put(failureTodo());
    }
}

export function* createTodo(action :any){
    try{
        const session = loadState()
        const response = yield call(apis.createTodo, session.sessionId, action.payload.text, action.payload.isCompleted, action.payload.urgency );
        yield put(successTodo(response.data));
    } catch (err){
        yield put(failureTodo());
    }
}

export function* deleteTodo(action :any){
    try{
        const session = loadState()
        const response = yield call(apis.deleteTodo, session.sessionId, action.payload.todoID);
        yield put(successTodo(response.data));
    } catch (err){
        yield put(failureTodo());
    }
}