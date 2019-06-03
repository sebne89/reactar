import {FETCHING_DWARFPLANET_DATA, FETCHING_DWARFPLANET_DATA_SUCCESS, FETCHING_DWARFPLANET_DATA_FAILURE} from "../constants/dwarfplanet_constants";

const initialState = {
    data: [],
    dataFetched: false,
    isFetching: false,
    error: false
};

export default function dwarfplanetReducer(state = initialState, action) {
    switch (action.type) {
        case FETCHING_DWARFPLANET_DATA:
            return {
                ...state,
                data: [],
                isFetching: true
            };
        case FETCHING_DWARFPLANET_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.data
            };
        case FETCHING_DWARFPLANET_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            };
        default:
            return state
    }
}