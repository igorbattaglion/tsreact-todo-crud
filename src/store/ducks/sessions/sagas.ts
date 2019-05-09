import { call, put } from 'redux-saga/effects';
import apis from '../../../services/api';
import { loadSuccess, loadFailure } from './actions';
import { saveState, deleteState, loadState } from '../../../persist/localStorage';


export function* getSession(){
    try{
        const response = yield call(apis.getSession);
        saveState(response.data)
        yield put(loadSuccess(response.data));
    } catch (err){
        yield put(loadFailure());
    }
}

export function* updateSession(action :any){
    try{
        const session = loadState()
        const response = yield call(apis.patchSession, session.sessionId, action.payload);
        saveState({status: response.data.status, sessionId: session.sessionId, errorRate: response.data.errorRate})
        yield put(loadSuccess(response.data));
    } catch (err){
        yield put(loadFailure());
    }
}

export function* deleteSession(){
    try{
        const session = loadState()
        const response = yield call(apis.deleteSession, session.sessionId);
        deleteState()
        yield put(loadSuccess(response.data));
    } catch (err){
        yield put(loadFailure());
    }
}