/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import Router from './src/navigation/Router';

function App(): JSX.Element {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <Router />
    </>
  );
}

export default App;
