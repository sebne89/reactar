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

import {fetchData} from "../redux/action/moon_action";
import {data} from '../assets/data/moon-data';
import Celestial from "../components/Celestial";

class MoonScreen extends React.Component {

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
                        data={this.props.moonData}
                        renderItem={({item}) =>
                            /*<LinearGradient style={styles.linearGradient} colors={['#5AC8FF', '#0080FF']}>*/
                            <TouchableOpacity style={styles.item} onPress={() => this.showCelestialDetail(item)}>
                                <Celestial
                                    image={item.image}
                                    name={item.name}
                                    type={item.type}
                                    shortDescription={item.shortDescription}
                                />
                            </TouchableOpacity>
                            /*</LinearGradient>*/
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
        moonData: state.moonData.data
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
        backgroundColor: '#3F5075',
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

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MoonScreen);