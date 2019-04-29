import React from 'react';
import {
    StyleSheet,
    ScrollView,
    Image,
    Text,
    View,
    Dimensions,
    TouchableOpacity
} from 'react-native';


class CelestialDetail extends React.Component {

    static navigationOptions = ({navigation}) => {
        const {state} = navigation;
        return {
            title: `${state.params.name}`,
        }
    };

    constructor(props) {
        super(props);

        const {id, type, name, image, shortDescription, description} = this.props.navigation.state.params;

        this.state = {
            id: id,
            type: type,
            name: name,
            image: image,
            shortDescription: shortDescription,
            description: description,
            firstParagraph: '',
        }
    }

    componentWillMount() {

        this.getFirstParagraph(this.state.name);

    }

    refetchCelestial(name){
        let uri_retry = 'https://en.wikipedia.org/api/rest_v1/page/summary/' + name + '?redirect=true';

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

    getFirstParagraph(name) {
        let uri = 'https://en.wikipedia.org/api/rest_v1/page/summary/' + name + '_(' + this.state.type + ')' + '?redirect=true';

        fetch(uri)
            .then((response) => response.json())
            .then((responseJson) => {

                let description = responseJson.description;
                let extract = responseJson.extract;

                console.log(extract);
                console.log(description);

                if (typeof description === "undefined" || typeof extract === "undefined" || description.includes('Disambiguation')){
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

    render() {

        const {id, type, name, image, description} = this.props.navigation.state.params;
        const shortDescription = this.props.navigation.state.params.shortDescription;

        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.content}>
                        <Image style={styles.celestialImage} source={image}/>
                        <View style={styles.type}>
                            <Text style={styles.whitetext}>{type}</Text>
                        </View>
                        <View style={styles.information}>
                            <View style={styles.introductionCard}>
                                <Text style={styles.whitetext}>Introduction:</Text>
                                <Text style={styles.whitetext}>{this.state.shortDescription}</Text>
                            </View>
                            <View style={styles.descriptionCard}>
                                <Text style={styles.whitetext}>Short Description:</Text>
                                <Text style={styles.whitetext}>{this.state.description}</Text>
                                <Text>{this.state.id}</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.ar}>
                            <Text style={styles.artext}>View in Augmented Reality</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        /*marginHorizontal: 10,*/
    },
    celestialImage: {
        width: Dimensions.get('window').width - 45,
        height: Dimensions.get('window').height / 1.5,
        borderRadius: 8,
        marginTop: 8,
    },
    bg: {
        flex: 1,
        resizeMode: 'cover',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    header: {},
    content: {
        backgroundColor: '#FFFFFF75',
        borderRadius: 8,
        alignItems: 'center',
        margin: 15,
    },
    type: {
        marginTop: -18,
        backgroundColor: '#0080FF',
        paddingVertical: 7,
        paddingHorizontal: 10,
        borderRadius: 8,
    },
    whitetext: {
        color: '#FFF',
    },
    information: {
        margin: 10,
    },
    introductionCard: {
        marginBottom: 15,
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#7D7D7D'
    },
    linearGradient: {
        margin: 0,
        borderRadius: 10,
        padding: 10,
    },
    descriptionCard: {
        marginBottom: 15,
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#0080FF'
    },
    ar: {
        backgroundColor: '#0080FF',
        borderRadius: 8,
        width: 250,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },
    artext: {
        color: '#FFF',
    }
});

export default CelestialDetail;