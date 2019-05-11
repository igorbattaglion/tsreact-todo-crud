import { createStore, Store, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { SessionsState } from './ducks/sessions/types';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';
import { TodosState } from './ducks/todos/types';


export interface ApplicationState {
    sessions: SessionsState
    todos: TodosState
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)

export default store;