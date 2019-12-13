import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import ProfileScreen from '../screens/ProfileScreen'
import StartGameScreen from '../screens/StartGameScreen'

const MainNavigator = createStackNavigator({
  Home: {screen: StartGameScreen},
  Profile: {screen: ProfileScreen},
});

const Navigator = createAppContainer(MainNavigator);

export default Navigator;