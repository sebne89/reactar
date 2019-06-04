import {celestialData} from '../../assets/data/celestialData';

const wikiEndpoint = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
let data = [];

export function fetchWikipedia(cType) {

    for (let i = 0; i < celestialData.length; i++) {

        if (celestialData[i].cType === cType) {
            console.log(celestialData[i].cType + " " + cType);
            let name = celestialData[i].name;
            let type = celestialData[i].type;

            let uri = wikiEndpoint + name + '_(' + type + ')' + '?redirect=true';

            fetch(uri)
                .then((response) => response.json())
                .then((responseJson) => {

                    let description = responseJson.description;
                    let extract = responseJson.extract;

                    if (typeof description === "undefined" || typeof extract === "undefined" || description.includes('Disambiguation')) {

                        reFetch(name, type);

                    } else {

                        data.push({
                            name: name,
                            type: cType,
                            shortDescription: description,
                            description: extract
                        });

                        console.log(data);
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
    return Promise.all(data);
}

function reFetch(name, cType) {

    let uri = wikiEndpoint + name + '?redirect=true';

    fetch(uri)
        .then((response) => response.json())
        .then((responseJson => {

            let description = responseJson.description;
            let extract = responseJson.extract;

            data.push({
                name: name,
                type: cType,
                shortDescription: description,
                description: extract
            });
        }))
}