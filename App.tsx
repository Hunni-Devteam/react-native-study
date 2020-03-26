/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import IndexPage from './src/pages/Index';
import React, { Component } from 'react';
import {
  // SafeAreaView,
  StyleSheet,
  ScrollView,
  // View,
  Text,
  StatusBar,
} from 'react-native';

class App extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <IndexPage />
      </>
    );
  }
};

export default App;
