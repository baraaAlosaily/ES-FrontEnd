import {
    GET_ALL_DATA_START,
    GET_ALL_DATA_SUCCESS,
    SEARCH_DATA_START,
    SEARCH_DATA_SUCCESS
} from './action';

import { initialState } from './appContext';


const reducer = (state, action) => {
    switch (action.type) {
        case GET_ALL_DATA_START:
            return {
                ...state,
                isLoading: true
            }
        case GET_ALL_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                results: action.payload.results,
                totalResults: action.payload.totalResults,
                ActionType: action.payload.ActionType,
                ApplicationType: action.payload.ApplicationType
            }
        case SEARCH_DATA_START:
            return {
                ...state,
                isLoading: true
            }
        case SEARCH_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                results: action.payload.results,
            }   
    }

    throw new Error(`no such action :${action.type}`);
}

export default reducer;
