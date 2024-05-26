import {IMAGES} from 'images';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Comment} from 'types';
import {colors} from 'theme';

type Props = {
  comment: Comment;
};

export const CommentItem = ({comment}: Props) => {
  return (
    <View style={style.comment}>
      <Image source={IMAGES.girlAvatar} style={style.userImage} />
      <View style={style.user}>
        <Text style={style.userName}>{comment.name}</Text>
        <Text style={style.body}>{comment.body}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  comment: {
    borderRadius: responsiveHeight(2),
    marginTop: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(3),
    backgroundColor: colors.gray,
    flexDirection: 'row',
  },

  userImage: {
    width: responsiveWidth(15),
    height: responsiveHeight(10),
  },
  user: {
    paddingVertical: responsiveHeight(2),
    marginEnd: responsiveWidth(18),
  },
  userName: {
    color: colors.orange,
    marginStart: responsiveWidth(1),
    fontWeight: '800',
    marginBottom: responsiveHeight(1.2),
  },
  body: {
    color: colors.blue,
  },
});
