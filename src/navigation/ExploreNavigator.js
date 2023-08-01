import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/Home';
// import SearchResultsScreen from '../screens/SearchResults';
import SearchResultsTabNavigator from './SearchResultsTabNavigator';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Home'}
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'SearchResults'}
        // component={SearchResultsScreen}
        component={SearchResultsTabNavigator}
        options={{title: 'Search your destination'}}
      />
    </Stack.Navigator>
  );
};

export default Router;
