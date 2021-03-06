import { createSwitchNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import Login from '../screens/Login';

export default createSwitchNavigator(
  {
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Login: Login,
    Main: MainTabNavigator,
  },
  {
    initialRouteName: 'Login',
  }
);