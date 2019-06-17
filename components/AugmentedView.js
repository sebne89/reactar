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
                       planeDetection={ARKit.ARPlaneDetection.Horizontal}
                       onARKitError={console.log}
                >
                    <ARKit.Model
                        position={{ x: 0, y: 0, z: -1, frame: 'local' }}
                        scale={0.1}
                        model={{
                            file: arObject,
                        }}
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