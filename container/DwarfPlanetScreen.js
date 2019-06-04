import React from 'react';
import {connect} from 'react-redux'
import {
    StyleSheet,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    FlatList, Dimensions
} from 'react-native';

import {fetchData} from '../redux/action/dwarfplanet_action';
import {data} from '../assets/data/dwarfplanet-data';
import Celestial from "../components/Celestial";

class DwarfPlanetScreen extends React.Component {

    componentDidMount() {
        this.props.fetchData();
    }

    showCelestialDetail = (item) => {
        this.props.navigation.navigate('CelestialDetail', item);
    };

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <FlatList
                        data={this.props.dwarfplanetData}
                        renderItem={({item, index}) =>
                            <TouchableOpacity style={styles.item} onPress={() => this.showCelestialDetail(item)}>

                                <Celestial
                                    image={item.image}
                                    name={item.name}
                                    type={item.type}
                                    shortDescription={item.shortDescription}
                                />
                            </TouchableOpacity>

                        }
                        keyExtractor={(item, index) => item.name}
                    />
                </View>
            </ScrollView>
        )
    }
}

function mapStateToProps(state) {
    return {
        dwarfplanetData: state.dwarfplanetData.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchData: () => dispatch(fetchData())
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    containerHeader: {
        paddingTop: 25,
        marginHorizontal: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    item: {
        width: Dimensions.get('window').width - 30,
        backgroundColor: '#162C5C',
        borderRadius: 8,
        margin: 5,
    },
    linearGradient: {
        width: Dimensions.get('window').width - 30,
        margin: 5,
        borderRadius: 10,

    },
    title: {
        paddingBottom: 10,
        fontSize: 24,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#0080FF',
        borderRadius: 8,
        width: 250,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        marginBottom: 22,
    },
    buttonText: {
        color: '#FFF',
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DwarfPlanetScreen);