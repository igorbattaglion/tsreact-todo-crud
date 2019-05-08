import { call, put } from 'redux-saga/effects';
import apis from '../../../services/api';
import { loadSuccess, loadFailure } from './actions';

export function* load(){
    try{
        const response = yield call(apis.getTodos);
        console.log(response)
        yield put(loadSuccess(response.data));
    } catch (err){
        yield put(loadFailure());
    }
}