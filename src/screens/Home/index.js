import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import styles from './styles';
import Fontiso from 'react-native-vector-icons/Fontisto';

const HomeScreen = () => {
  return (
    <View>
      {/* SearchBar */}
      <Pressable
        style={styles.searchButton}
        onPress={() => console.warn('Search btn clicked')}>
        <Fontiso name="search" size={20} color={'#f15454'} />
        <Text style={styles.searchButtonText}>Where are you going?</Text>
      </Pressable>
      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image}>
        {/* Title */}
        <Text style={styles.title}>Go Near</Text>
        {/* Button */}
        <Pressable
          style={styles.button}
          onPress={() => console.warn('btn clicked')}>
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
