import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';
// 关闭react native 警告⚠️
console.disableYellowBox = true;
AppRegistry.registerComponent(appName, () => App);
