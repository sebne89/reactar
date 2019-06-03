import {FETCHING_PLANET_DATA, FETCHING_PLANET_DATA_SUCCESS, FETCHING_PLANET_DATA_FAILURE} from '../constants/planet_constants';

const wikiEndpoint = 'https://en.wikipedia.org/api/rest_v1/page/summary/';

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

    /*/!* NASA API *!/
    const uri = 'https://api.nasa.gov/planetary/apod?api_key=';
    const uri_date = '&date=';
    const apodRequest = uri + api_key + uri_date;

    const toFetch = 5;
    let date = moment();

    let data = [];

    for (let i = toFetch; i > 0; i--) {

        /!* Go back in time to retrieve (current date - i) APOD from the NASA API *!/
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
    return Promise.all(data);*/

    let uri = wikiEndpoint + name + '_(' + this.state.type + ')' + '?redirect=true';

    fetch(uri)
        .then((response) => response.json())
        .then((responseJson) => {

            let description = responseJson.description;
            let extract = responseJson.extract;

            console.log(extract);
            console.log(description);

            if (typeof description === "undefined" || typeof extract === "undefined" || description.includes('Disambiguation')) {
                console.log('Page not found. Retrying query with another URI, without type of the celestial object as parameter.');
                this.refetchCelestial(name);
            } else {
                this.setState({
                    shortDescription: description,
                    description: extract,
                })
            }
        })
        .catch((error) => {
            console.log(error)
        })
}

function refetchCelestial(name) {
    let uri_retry = wikiEndpoint + name + '?redirect=true';

    fetch(uri_retry)
        .then((response) => response.json())
        .then((responseJson => {
            let description = responseJson.description;
            let extract = responseJson.extract;
            console.log('Inside RefetchCelestial');

            console.log(extract);
            console.log(description);

            console.log(responseJson);

            this.setState({
                shortDescription: description,
                description: extract,
            })
        }))
}