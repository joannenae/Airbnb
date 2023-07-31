import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const Post = props => {
  const post = props.post;
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image style={styles.image} source={{uri: post.image}} />
      {/* Bed & Bedroom */}
      <Text style={styles.bedrooms}>
        {post.bed}bed . {post.bedroom}bedrooms
      </Text>
      {/* type & description */}
      <Text style={styles.description} numberOfLines={2}>
        {post.title}
        {/* Ut in ultricies diam. Vivamus feugiat ipsum orci, quis consectetur mi
        consectetur nec. Integer elit lacus, commodo id eros in, elementum
        convallis neque. */}
      </Text>
      {/* Old price & new price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice}</Text>
        <Text style={styles.newPrice}> ${post.newPrice}</Text> / night
      </Text>
      {/* Total */}
      <Text style={styles.totalPrice}>${post.totalPrice} total</Text>
    </View>
  );
};
export default Post;
