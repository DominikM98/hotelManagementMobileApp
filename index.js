/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import AppetizerScreen from './views/menu_dinner/AppetizerScreen.js'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppetizerScreen);
//AppRegistry.registerComponent(appName, () => App);
