import {FETCHING_WIKI_DATA, FETCHING_WIKI_DATA_SUCCESS, FETCHING_WIKI_DATA_FAILURE} from '../constants/wiki_constants';


export function getData() {
    return {
        type: FETCHING_WIKI_DATA
    }
}

export function getDataSuccess(data) {
    return {
        type: FETCHING_WIKI_DATA_SUCCESS,
        data,
    }
}

export function getDataFailure() {
    return {
        type: FETCHING_WIKI_DATA_FAILURE
    }
}

export function fetchData() {
    return (dispatch) => {
        dispatch(getData());
        fetch()
            .then((data) => {
                dispatch(getDataSuccess(data))
            })
            .catch((err) => console.log('err:', err))
    }
}

function fetch() {

    /* NASA API */
    const uri = 'https://api.nasa.gov/planetary/apod?api_key=';
    const uri_date = '&date=';
    const apodRequest = uri + api_key + uri_date;

    const toFetch = 5;
    let date = moment();

    let data = [];

    for (let i = toFetch; i > 0; i--) {

        /* Go back in time to retrieve (current date - i) APOD from the NASA API */
        date = date.subtract(1, "days");
        let _tmpDate = date.format("YYYY-MM-DD");

        data.push(
            fetch(apodRequest + _tmpDate)
                .then((response) => response.json())
                .catch((error) => {
                    console.log(error);
                })
        )
    }
    return Promise.all(data);
}