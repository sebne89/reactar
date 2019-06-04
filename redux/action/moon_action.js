import {FETCHING_MOON_DATA, FETCHING_MOON_DATA_SUCCESS, FETCHING_MOON_DATA_FAILURE} from '../constants/moon_constants';
import {fetchWikipedia} from "../../utils/fetchHelper/fetchWikipediaAPI";

export function getData() {
    return {
        type: FETCHING_MOON_DATA
    }
}

export function getDataSuccess(data) {
    return {
        type: FETCHING_MOON_DATA_SUCCESS,
        data,
    }
}

export function getDataFailure() {
    return {
        type: FETCHING_MOON_DATA_FAILURE
    }
}

export function fetchData() {

    const cType = 'moon';

    return (dispatch) => {
        dispatch(getData());
        fetchWikipedia(cType)
            .then((data) => {
                dispatch(getDataSuccess(data))
            })
            .catch((err) => console.log('err:', err))
    }
}