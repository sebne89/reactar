import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {ARKit} from 'react-native-arkit';


class AugmentedView extends React.Component {

    static navigationOptions = ({navigation}) => {
        const {state} = navigation;
        return {
            title: `${state.params.name}`,
        }
    };

    render() {

        const arObject = this.props.navigation.state.params.arObject;
        console.log(arObject);

        return (
            <View style={styles.container}>
                <ARKit style={styles.container}
                       debug
                       onARKitError={console.log}
                >
                    <ARKit.Box
                        position={{x: 0, y: 0, z: 0}}
                        shape={{width: 0.1, height: 0.1, length: 0.1, chamfer: 0.01}}
                    />
                </ARKit>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});

export default AugmentedView;