/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Provider} from 'react-redux'
import { StackNavigator } from 'react-navigation';

import store from './src/Store/Store.js'
import App from './src/Components/App.js'

export default class AwesomeProject extends Component {


  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}





AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
