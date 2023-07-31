import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'white',
    width: '70%',
    marginLeft: 25,
  },
  button: {
    backgroundColor: 'white',
    width: 200,
    height: 40,
    marginTop: 25,
    marginLeft: 25,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  searchButton: {
    position: 'absolute',
    top: 30,
    zIndex: 1,
    backgroundColor: 'white',
    width: Dimensions.get('screen').width - 20,
    height: 55,
    marginHorizontal: 10,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  searchButtonText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default styles;
