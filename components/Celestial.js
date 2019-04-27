import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions
} from 'react-native';

class Celestial extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={this.props.image} style={styles.celestialImage}/>

                <View style={styles.content}>
                    <Text style={styles.name}>{this.props.name}</Text>
                    <Text style={styles.shortDescription}>{this.props.shortDescription}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        width: Dimensions.get('window').width - 10,
        paddingHorizontal: 10,
    },
    celestialImage: {
        borderRadius: 30,
        width: 60,
        height: 60,
        marginRight: 15,
        marginVertical: 15
    },
    name: {
        fontSize: 22,
        color: '#FFF',
        fontWeight: 'bold',
    },
    shortDescription: {
        fontSize: 15,
        width: Dimensions.get('window').width / 1.4,
        color: '#FFF',
        paddingTop: 5,
        paddingRight: 15,
    },
    content: {
        padding: 5,
    }
});

export default Celestial;