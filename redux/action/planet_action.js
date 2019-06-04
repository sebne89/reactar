import {FETCHING_PLANET_DATA, FETCHING_PLANET_DATA_SUCCESS, FETCHING_PLANET_DATA_FAILURE} from '../constants/planet_constants';
import {fetchWikipedia} from "../../utils/fetchHelper/fetchWikipediaAPI";

export function getData() {
    return {
        type: FETCHING_PLANET_DATA
    }
}

export function getDataSuccess(data) {
    return {
        type: FETCHING_PLANET_DATA_SUCCESS,
        data,
    }
}

export function getDataFailure() {
    return {
        type: FETCHING_PLANET_DATA_FAILURE
    }
}

export function fetchData() {

    const cType = 'planet';

    return (dispatch) => {
        dispatch(getData());
        fetchWikipedia(cType)
            .then((data) => {
                dispatch(getDataSuccess(data))
            })
            .catch((err) => console.log('err:', err))
    }
}