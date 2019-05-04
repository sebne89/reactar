import React from 'react';
import {
    createBottomTabNavigator,
    createStackNavigator,
    createAppContainer,
} from "react-navigation";

import Icon from 'react-native-ionicons'

import PlanetScreen from './container/PlanetScreen';
import MoonScreen from './container/MoonScreen';
import DwarfPlanetScreen from './container/DwarfPlanetScreen';
import CelestialDetail from "./components/CelestialDetail";
import AugmentedView from "./components/AugmentedView";
import APOD from './components/APOD';

const PlanetStack = createStackNavigator({
    Planet: {
        screen: PlanetScreen,
        navigationOptions: {
            title: 'Overview Planets',
        },
    },
    CelestialDetail: {
        screen: CelestialDetail,
    },
    AugmentedView: {
        screen: AugmentedView,
    }
});

const MoonStack = createStackNavigator({
    Moon: {
        screen: MoonScreen,
        navigationOptions: {
            title: 'Overview Moons',
        },
    },
    CelestialDetail: {
        screen: CelestialDetail,
    },
    AugmentedView: {
        screen: AugmentedView,
    }
});

const DwarfPlanetStack = createStackNavigator({
    Dwarfplanet: {
        screen: DwarfPlanetScreen,
        navigationOptions: {
            title: 'Overview Dwarfplanets',
        },
    },
    CelestialDetail: {
        screen: CelestialDetail,
    },
    AugmentedView: {
        screen: AugmentedView,
    }
});

const AppNavigator = createBottomTabNavigator({
        Planet: {
            screen: PlanetStack,
            navigationOptions: {
                title: 'Planets',
                tabBarIcon: <Icon name='planet'/>,
            }
        },
        Moon: {
            screen: MoonStack,
            navigationOptions: {
                title: 'Moons',
                tabBarIcon: <Icon name='moon'/>,
            }
        },
        Dwarfplanet: {
            screen: DwarfPlanetStack,
            navigationOptions: {
                title: 'Dwarfplanets',
                tabBarIcon: <Icon name='md-globe'/>,
            }
        },
        APOD: {
            screen: APOD,
            navigationOptions: {
                title: 'APOD',
                tabBarIcon: <Icon name='images'/>,
            }
        }
    },
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
    render() {
        return <AppContainer/>;
    }
}
