import {FETCHING_PLANET_DATA, FETCHING_PLANET_DATA_SUCCESS, FETCHING_PLANET_DATA_FAILURE} from "../constants/planet_constants";

const initialState = {
    data: [],
    dataFetched: false,
    isFetching: false,
    error: false
};

export default function planetReducer(state = initialState, action) {
    switch (action.type) {
        case FETCHING_PLANET_DATA:
            return {
                ...state,
                data: [],
                isFetching: true
            };
        case FETCHING_PLANET_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.data
            };
        case FETCHING_PLANET_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            };
        default:
            return state
    }
}