import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Main from './Main.js'
import DetailScreen from './DetailScreen.js'

const App = StackNavigator({
  Main: {
    screen: Main
  },
  DetailScreen: {
    screen: DetailScreen
  }
});

export default App