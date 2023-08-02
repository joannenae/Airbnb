import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 120,
    padding: 5,
  },
  innerContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  bedrooms: {
    marginVertical: 10,
    fontSize: 15,
    color: 'gray',
  },
  description: {
    fontSize: 16,
    lineHeight: 25,
  },
  prices: {
    fontSize: 16,
    marginVertical: 10,
  },
  newPrice: {
    fontWeight: 'bold',
  },
  totalPrice: {
    color: 'gray',
    textDecorationLine: 'underline',
    fontSize: 15,
  },
});

export default styles;
