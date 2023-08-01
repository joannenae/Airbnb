import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from './styles';

const GuestsScreen = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const navigation = useNavigation();

  return (
    <View style={{justifyContent: 'space-between', height: '100%'}}>
      <View>
        <View style={styles.row}>
          <View>
            <Text style={{fontWeight: 'bold'}}>Adults</Text>
            <Text style={{color: 'gray'}}>Ages 13 or above</Text>
          </View>
          <View style={styles.buttonBox}>
            <Pressable
              onPress={() => setAdults(Math.max(0, adults - 1))}
              style={styles.button}>
              <Text>-</Text>
            </Pressable>
            <Text style={{marginHorizontal: 20, fontSize: 16}}>{adults}</Text>
            <Pressable
              onPress={() => setAdults(adults + 1)}
              style={styles.button}>
              <Text style={{fontSize: 20, color: '#b0b0b0'}}>+</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.row}>
          <View>
            <Text style={{fontWeight: 'bold'}}>Children</Text>
            <Text style={{color: 'gray'}}>Ages 2-12</Text>
          </View>
          <View style={styles.buttonBox}>
            <Pressable
              onPress={() => setChildren(Math.max(0, adults - 1))}
              style={styles.button}>
              <Text>-</Text>
            </Pressable>
            <Text style={{marginHorizontal: 20, fontSize: 16}}>{children}</Text>
            <Pressable
              onPress={() => setChildren(children + 1)}
              style={styles.button}>
              <Text style={{fontSize: 20, color: '#b0b0b0'}}>+</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.row}>
          <View>
            <Text style={{fontWeight: 'bold'}}>Infants</Text>
            <Text style={{color: 'gray'}}>Under 2</Text>
          </View>
          <View style={styles.buttonBox}>
            <Pressable
              onPress={() => setInfants(Math.max(0, infants - 1))}
              style={styles.button}>
              <Text>-</Text>
            </Pressable>
            <Text style={{marginHorizontal: 20, fontSize: 16}}>{infants}</Text>
            <Pressable
              onPress={() => setInfants(infants + 1)}
              style={styles.button}>
              <Text style={{fontSize: 20, color: '#b0b0b0'}}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <Pressable
        onPress={() =>
          navigation.navigate('Home', {
            screen: 'Explore',
            params: {
              screen: 'SearchResults',
            },
          })
        }
        style={{
          marginBottom: 70,
          backgroundColor: '#f15454',
          alignItems: 'center',
          justifyContent: 'center',
          height: 50,
          marginHorizontal: 20,
          borderRadius: 20,
        }}>
        <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>
          Search
        </Text>
      </Pressable>
    </View>
  );
};

export default GuestsScreen;
