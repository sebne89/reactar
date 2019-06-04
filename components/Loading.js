import React from 'react';
import {
    StyleSheet,
    ScrollView,
    Image,
    Text,
    View,
    Dimensions,
    ActivityIndicator,
} from 'react-native';

class Loading extends React.Component {
    render(){
        return (
            <View style={styles.isLoading}>
                <ActivityIndicator
                    size="large"
                />
                <Text style={styles.title}>Hello little friend!</Text>
                <Text style={styles.waitingText}>Grant yourself a nice cup of coffee, while we're loading the latest information for you.</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    isLoading: {
        marginTop: 200,
        alignItems: 'center',
    },
    waitingText: {
        marginTop: 22,
        textAlign: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 28,
    },
    informationBlock: {
        margin: 10,
    },
});

export default Loading;