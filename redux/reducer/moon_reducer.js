import {FETCHING_MOON_DATA, FETCHING_MOON_DATA_SUCCESS, FETCHING_MOON_DATA_FAILURE} from "../constants/moon_constants";

const initialState = {
    data: [],
    dataFetched: false,
    isFetching: false,
    error: false
};

export default function moonReducer(state = initialState, action) {
    switch (action.type) {
        case FETCHING_MOON_DATA:
            return {
                ...state,
                data: [],
                isFetching: true
            };
        case FETCHING_MOON_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.data
            };
        case FETCHING_MOON_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            };
        default:
            return state
    }
}