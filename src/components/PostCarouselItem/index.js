import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, useWindowDimensions, Pressable} from 'react-native';
import styles from './styles';

const Post = props => {
  const post = props.post;

  const width = useWindowDimensions().width;

  const navigation = useNavigation();

  const goToPostPage = () => {
    navigation.navigate('Post', {postId: post.id});
  };

  return (
    <Pressable
      onPress={goToPostPage}
      style={[styles.container, {width: width - 60}]}>
      <View style={styles.innerContainer}>
        {/* Image */}
        <Image style={styles.image} source={{uri: post.image}} />
        <View style={{marginHorizontal: 10, flex: 1}}>
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
            <Text style={styles.newPrice}> ${post.newPrice}</Text> / night
          </Text>
        </View>
      </View>
    </Pressable>
  );
};
export default Post;
