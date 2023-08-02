import React from 'react';
import {Text, View} from 'react-native';
import {Marker} from 'react-native-maps';

const CustomMarker = props => {
  const {coordinate, price, onPress, isSelected} = props;
  return (
    <Marker coordinate={coordinate} onPress={onPress}>
      <View
        style={{
          backgroundColor: isSelected ? 'black' : 'white',
          padding: 10,
          borderRadius: 20,
        }}>
        <Text
          style={{fontWeight: 'bold', color: isSelected ? 'white' : 'black'}}>
          ${price}
        </Text>
      </View>
    </Marker>
  );
};

export default CustomMarker;
