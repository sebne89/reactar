import {
    FETCHING_DWARFPLANET_DATA,
    FETCHING_DWARFPLANET_DATA_SUCCESS,
    FETCHING_DWARFPLANET_DATA_FAILURE
} from '../constants/dwarfplanet_constants';
import {fetchWikipedia} from '../../utils/fetchHelper/fetchWikipediaAPI';

export function getData() {
    return {
        type: FETCHING_DWARFPLANET_DATA
    }
}

export function getDataSuccess(data) {
    return {
        type: FETCHING_DWARFPLANET_DATA_SUCCESS,
        data,
    }
}

export function getDataFailure() {
    return {
        type: FETCHING_DWARFPLANET_DATA_FAILURE
    }
}

export function fetchData() {

    const cType = 'dwarfplanet';

    return (dispatch) => {
        dispatch(getData());
        fetchWikipedia(cType)
            .then((data) => {
                dispatch(getDataSuccess(data))
            })
            .catch((err) => console.log('err:', err))
    }
}


/*
function fetchWikipedia(cType) {

    for (let i = 0; i < celestialData.length; i++) {

        if (celestialData[i].cType === cType) {

            let name = celestialData[i].name;
            let type = celestialData[i].type;

            let uri = wikiEndpoint + name + '_(' + type + ')' + '?redirect=true';

            data.push(
                fetch(uri)
                    .then((response) => response.json())
                    .then((responseJson) => {

                        let description = responseJson.description;
                        let extract = responseJson.extract;

                        if (typeof description === "undefined" || typeof extract === "undefined" || description.includes('Disambiguation')) {

                            reFetch(name, type);

                        } else {

                            data.push(JSON.stringify({
                                name: name,
                                type: type,
                                shortDescription: description,
                                description: extract
                            }));

                        }
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            )
        }
    }
    return Promise.all(data);
}

function reFetch(name, type) {

    let uri = wikiEndpoint + name + '?redirect=true';

    fetch(uri)
        .then((response) => response.json())
        .then((responseJson => {

            let description = responseJson.description;
            let extract = responseJson.extract;

            data.push(JSON.stringify({
                name: name,
                type: type,
                shortDescription: description,
                description: extract
            }));
        }))
}*/
