import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import SuggestionRow from './SuggestionRow';

const DestinationSearch = () => {
  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Input component */}
      <GooglePlacesAutocomplete
        placeholder="Where are you going"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          navigation.navigate('Guest');
        }}
        fetchDetails
        styles={{
          textInput: styles.textInput,
        }}
        query={{
          key: 'AIzaSyB6lDMJNDfW4MgSVG8AShtUNmCHZvHSKww',
          language: 'en',
          type: '(cities)',
        }}
        suppressDefaultStyles
        renderRow={item => <SuggestionRow item={item} />}
      />
    </View>
  );
};

export default DestinationSearch;
