import React, {useEffect, useMemo, useState} from 'react';
import {IMAGES} from 'images';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  PostDetailsScreenNavigationProp,
  PostDetailsScreenRouteProp,
} from 'types';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors} from 'theme';
import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Fontisto';
import BackIcon from 'react-native-vector-icons/AntDesign';
import {getComments} from 'api';
import {Comment} from 'types';
import {CommentItem} from 'components';
const PostDetails = () => {
  const {
    params: {post},
  } = useRoute<PostDetailsScreenRouteProp>();
  const navigation = useNavigation<PostDetailsScreenNavigationProp>();

  const [commentsList, setCommentsList] = useState<Comment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getComments(post.id)
      .then(res => {
        setCommentsList(res);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [post.id]);

  const renderComments = useMemo(() => {
    return commentsList.length ? (
      commentsList.map((comment, index) => (
        <CommentItem comment={comment} key={index} />
      ))
    ) : (
      <View style={style.noCommentContainer}>
        <Text style={style.noComment}>No Comments yet!</Text>
      </View>
    );
  }, [commentsList]);

  return (
    <>
      <ScrollView
        style={style.background}
        contentContainerStyle={{paddingBottom: responsiveHeight(10)}}>
        <View style={style.post}>
          <TouchableOpacity
            onPress={() => {
              navigation.pop();
            }}>
            <BackIcon
              name="arrowleft"
              size={responsiveHeight(3)}
              color={colors.orange}
            />
          </TouchableOpacity>
          <View style={style.user}>
            <Image source={IMAGES.postAvatar} style={style.userImage} />
            <Text style={style.userName}>{`User #${post.user_id}`}</Text>
          </View>
          <Text style={style.title}>{post.title}</Text>
          <Text style={style.body}>{post.body}</Text>
        </View>
        <View style={style.comment}>
          <Text style={style.commentTitle}>Comments</Text>
          <Icon
            name="comments"
            color={colors.orange}
            size={responsiveHeight(2.5)}
          />
        </View>
        {loading ? <ActivityIndicator /> : renderComments}
      </ScrollView>
    </>
  );
};

export default PostDetails;

const style = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.black,
    paddingTop: responsiveHeight(5),
    paddingHorizontal: responsiveWidth(3),
  },
  post: {
    borderBottomWidth: responsiveHeight(0.2),
    borderBottomColor: colors.orange,
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
    fontWeight: '900',
  },
  title: {
    color: colors.blue,
    fontWeight: '700',
    maxWidth: '85%',
    marginBottom: responsiveHeight(1.5),
  },
  body: {
    color: colors.white,
    marginBottom: responsiveHeight(2),
    fontSize: responsiveFontSize(2),
  },
  comment: {flexDirection: 'row', alignItems: 'center'},
  commentTitle: {
    marginTop: responsiveHeight(2),
    color: colors.blue,
    fontWeight: '700',
    marginEnd: responsiveWidth(1.6),
    fontSize: responsiveFontSize(2.3),
  },
  noComment: {color: colors.orange, fontSize: responsiveFontSize(2)},
  noCommentContainer: {
    backgroundColor: colors.gray,
    borderRadius: responsiveHeight(1),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: responsiveHeight(1.5),
    paddingVertical: responsiveHeight(1),
  },
});
