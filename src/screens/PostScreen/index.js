import React from 'react';
import {View} from 'react-native';
import feed from '../../../assets/data/feed';
import PostDetail from '../../components/PostDetail';
import {useRoute} from '@react-navigation/native';

const PostScreen = () => {
  const router = useRoute();

  const post = feed.find(place => place.id === router.params.postId);

  return (
    <View style={{backgroundColor: 'white'}}>
      <PostDetail post={post} />
    </View>
  );
};
export default PostScreen;
