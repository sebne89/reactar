import React, {Component} from 'react';
import {
    StyleSheet,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
    FlatList,
} from 'react-native';

import {data} from '../assets/data/planet-data';
import Celestial from "../components/Celestial";

class PlanetScreen extends React.Component {

    showCelestialDetail = (item) => {
        this.props.navigation.navigate('CelestialDetail', item);
    };

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <FlatList
                        data={data}
                        renderItem={({item}) =>
                                <TouchableOpacity style={styles.item} onPress={() => this.showCelestialDetail(item)}>
                                    <Celestial
                                        image={item.image}
                                        name={item.name}
                                        type={item.type}
                                        shortDescription={item.shortDescription}
                                    />
                                </TouchableOpacity>
                        }
                        keyExtractor={(item, index) => item.id.toString()}
                    />
                </View>
            </ScrollView>
        )
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
        backgroundColor: '#007AFF',
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
});

export default PlanetScreen;