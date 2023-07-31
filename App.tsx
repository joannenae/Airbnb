/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView, StatusBar} from 'react-native';
import DestinationSearch from './src/screens/DestinationSearch';
// import feed from './assets/data/feed';

// import HomeScreen from './src/screens/Home';
// import SearchResultsScreen from './src/screens/SearchResults';
// import Post from './src/components/Post';

function App(): JSX.Element {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        {/* <Post el={el} /> */}
        {/* <SearchResultsScreen /> */}
        <DestinationSearch />
      </SafeAreaView>
    </>
  );
}

export default App;
