import {FETCHING_WIKI_DATA, FETCHING_WIKI_DATA_SUCCESS, FETCHING_WIKI_DATA_FAILURE} from "../constants/wiki_constants";

const initialState = {
    data: [],
    dataFetched: false,
    isFetching: false,
    error: false
};

export default function wikiReducer(state = initialState, action) {
    switch (action.type) {
        case FETCHING_WIKI_DATA:
            return {
                ...state,
                data: [],
                isFetching: true
            };
        case FETCHING_WIKI_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.data
            };
        case FETCHING_WIKI_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            };
        default:
            return state
    }
}