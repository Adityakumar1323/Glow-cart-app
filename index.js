import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './App';
import { registerRootComponent } from 'expo';
import { name as appName } from './app.json';

registerRootComponent(App);
