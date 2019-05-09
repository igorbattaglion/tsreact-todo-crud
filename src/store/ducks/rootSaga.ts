import { all, takeLatest } from 'redux-saga/effects';
import { SessionsTypes } from './sessions/types';
import { getSession, updateSession, deleteSession } from './sessions/sagas';

export default function* rootSaga(){
    return yield all([
        takeLatest(SessionsTypes.LOAD_REQUEST, getSession),
        takeLatest(SessionsTypes.LOAD_UPDATE, updateSession),
        takeLatest(SessionsTypes.LOAD_LOGOUT, deleteSession),
    ])
}