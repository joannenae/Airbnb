import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 25,
  },
  bedrooms: {
    marginVertical: 10,
    fontSize: 15,
    color: 'gray',
  },
  description: {
    fontSize: 19,
    lineHeight: 25,
  },
  prices: {
    fontSize: 18,
    marginVertical: 10,
  },
  oldPrice: {
    color: 'gray',
    fontWeight: 'bold',
    textDecorationLine: 'line-through',
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
