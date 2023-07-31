import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const Post = props => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image style={styles.image} source={{uri: props.el.image}} />
      {/* Bed & Bedroom */}
      <Text style={styles.bedrooms}>
        {props.el.bed}bed . {props.el.bedroom}bedrooms
      </Text>
      {/* type & description */}
      <Text style={styles.description} numberOfLines={2}>
        {props.el.title}
        {/* Ut in ultricies diam. Vivamus feugiat ipsum orci, quis consectetur mi
        consectetur nec. Integer elit lacus, commodo id eros in, elementum
        convallis neque. */}
      </Text>
      {/* Old price & new price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${props.el.oldPrice}</Text>
        <Text style={styles.newPrice}> ${props.el.newPrice}</Text> / night
      </Text>
      {/* Total */}
      <Text style={styles.totalPrice}>${props.el.totalPrice} total</Text>
    </View>
  );
};
export default Post;
