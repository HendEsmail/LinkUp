import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Post, HomeScreenNavigationProp} from 'types';
import {IMAGES} from 'images';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors} from 'theme';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
type Props = {
  post: Post;
};

export const PostItem = ({post}: Props) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <TouchableOpacity
      style={style.post}
      onPress={() => {
        navigation.navigate('PostDetailsScreen', {post});
      }}>
      <View style={style.user}>
        <Image source={IMAGES.postAvatar} style={style.userImage} />
        <Text style={style.userName}>{`User #${post.user_id}`}</Text>
      </View>
      <Text style={style.title}>{post.title}</Text>
      <Text style={style.body}>{post.body}</Text>
      <View style={style.iconContainer}>
        <Icon name="arrowright" size={responsiveHeight(3)} />
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  post: {
    borderRadius: responsiveHeight(4),
    marginTop: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(3),
    paddingBottom: responsiveHeight(2),
    backgroundColor: colors.gray,
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: responsiveWidth(22),
    height: responsiveHeight(12),
  },
  userName: {
    color: colors.orange,
    marginStart: responsiveWidth(2),
    fontWeight: '600',
  },
  title: {
    color: colors.white,
    fontWeight: '700',
    maxWidth: '85%',
    marginBottom: responsiveHeight(1.5),
  },
  body: {color: colors.lightGray},
  iconContainer: {
    borderRadius: responsiveHeight(99),
    backgroundColor: colors.orange,
    width: responsiveWidth(10),
    height: responsiveWidth(10),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
});
