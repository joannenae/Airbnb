import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';

const Post = props => {
  const post = props.post;
  const navigation = useNavigation();
  const goToPostPage = () => {
    navigation.navigate('Post', {postId: post.id});
  };
  return (
    <Pressable onPress={goToPostPage} style={styles.container}>
      {/* Image */}
      <Image style={styles.image} source={{uri: post.image}} />
      {/* Bed & Bedroom */}
      <Text style={styles.bedrooms}>
        {post.bed}bed . {post.bedroom}bedrooms
      </Text>
      {/* type & description */}
      <Text style={styles.description} numberOfLines={2}>
        {post.title}
      </Text>
      {/* Old price & new price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice}</Text>
        <Text style={styles.newPrice}> ${post.newPrice}</Text> / night
      </Text>
      {/* Total */}
      <Text style={styles.totalPrice}>${post.totalPrice} total</Text>
    </Pressable>
  );
};
export default Post;
