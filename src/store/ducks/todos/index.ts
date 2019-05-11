import { TodosState, TodosTypes } from './types'
import { Reducer } from 'redux';

const INITIAL_STATE: TodosState ={
    data: { status: '', todos: []},
    error: false,
    loading: false,
};

const reducer: Reducer<TodosState | any> = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case TodosTypes.LOAD_REQUEST:
            return{ 
                ...state, loading: true
            };
        case TodosTypes.LOAD_SUCCESS:
            return{ 
                ...state, loading: false, error: false, data: action.payload.data 
            };
        case TodosTypes.LOAD_UPDATE:
            return{ 
                ...state, loading: false, error: false, data: action.payload.data
            };
        case TodosTypes.LOAD_CREATE:
            return{ 
                ...state, loading: false, error: false, data: action.payload.data
            };
        case TodosTypes.LOAD_DELETE:
            return{ 
                ...state, loading: false, error: false, data: []
            };
        case TodosTypes.LOAD_FAILURE:
            return{ 
                ...state, loading: false, error: true, data: []
            }
        default:
            return state;

    }
};

export default reducer;



