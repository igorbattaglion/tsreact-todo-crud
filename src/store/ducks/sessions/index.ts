import { SessionsState, SessionsTypes } from './types'
import { Reducer } from 'redux';

const INITIAL_STATE: SessionsState ={
    data: [],
    error: false,
    loading: false,
    isAuthenticated: false,
};

const reducer: Reducer<SessionsState> = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SessionsTypes.LOAD_REQUEST:
            return{ 
                ...state, loading: true
            };
        case SessionsTypes.LOAD_SUCCESS:
            return{ 
                ...state, loading: false, error: false, data: action.payload.data, isAuthenticated: true 
            };
        case SessionsTypes.LOAD_UPDATE:
            return{ 
                ...state, loading: false, error: false, data: action.payload.data, isAuthenticated: true 
            };
        case SessionsTypes.LOAD_LOGOUT:
            return{ 
                ...state, loading: false, error: false, data: [], isAuthenticated: false
            };
        case SessionsTypes.LOAD_FAILURE:
            return{ 
                ...state, loading: false, error: true, data: [], isAuthenticated: false
            }
        default:
            return state;

    }
};

export default reducer;



