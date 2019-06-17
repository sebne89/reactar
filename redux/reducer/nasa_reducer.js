import {FETCHING_NASA_DATA, FETCHING_NASA_DATA_SUCCESS, FETCHING_NASA_DATA_FAILURE} from "../constants/nasa_constants";

const initialState = {
    data: [],
    dataFetched: false,
    isFetching: false,
    error: false
};

export default function nasaReducer(state = initialState, action) {
    switch (action.type) {
        case FETCHING_NASA_DATA:
            return {
                ...state,
                data: [],
                isFetching: true
            };
        case FETCHING_NASA_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.data
            };
        case FETCHING_NASA_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            };
        default:
            return state
    }
}