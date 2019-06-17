import React from 'react';
import {
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    View,
    FlatList, Dimensions
} from 'react-native';

import {data} from '../assets/data/moon-data';
import Celestial from "../components/Celestial";

class MoonScreen extends React.Component {

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
        backgroundColor: '#3F5075',
        borderRadius: 8,
        margin: 5,
    },
    title: {
        paddingBottom: 10,
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default MoonScreen;