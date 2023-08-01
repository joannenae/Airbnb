import React, {useState} from 'react';
import {FlatList, TextInput, Text, View, Pressable} from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';

import search from '../../../assets/data/search';
import {useNavigation} from '@react-navigation/native';

const DestinationSearch = () => {
  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Input component */}
      <TextInput
        style={styles.textInput}
        placeholder="Where are you going?"
        value={inputText}
        onChangeText={setInputText}
      />
      {/* list of destination */}
      <FlatList
        data={search}
        renderItem={({item}) => (
          <Pressable
            style={styles.row}
            onPress={() => navigation.navigate('Guest')}>
            <View style={styles.iconContainer}>
              <Entypo name={'location-pin'} size={25} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default DestinationSearch;
