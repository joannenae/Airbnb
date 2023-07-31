/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import feed from './assets/data/feed';

// import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';

function App(): JSX.Element {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        <ScrollView>
          {feed.map(el => {
            return <Post el={el} />;
          })}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default App;
