import React, {useEffect, useMemo, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors} from 'theme';
import {getPosts} from 'api';
import {Post} from 'types';
import {IMAGES} from 'images';
import {PostItem} from 'components';

const Home = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [postsList, setPostsList] = useState<Post[]>([]);

  useEffect(() => {
    getPosts()
      .then((posts: Post[]) => {
        setPostsList(posts);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  const renderPosts = useMemo(() => {
    if (isError) {
      return (
        <View style={style.imageContainer}>
          <Image
            source={IMAGES.notFound}
            resizeMode="contain"
            style={style.image}
          />
          <Text style={style.text}>
            Something went wrong! make sure your internet connection is good and
            try again
          </Text>
        </View>
      );
    }
    return (
      <FlatList
        data={postsList}
        renderItem={({item}) => <PostItem post={item} />}
        ListEmptyComponent={
          <View style={style.imageContainer}>
            <Image
              source={IMAGES.noResults}
              resizeMode="contain"
              style={style.image}
            />
          </View>
        }
      />
    );
  }, [isError, postsList]);

  return (
    <View style={style.background}>
      <Text style={style.title}>Happening Today 👀</Text>
      {loading ? (
        <ActivityIndicator
          color={colors.orange}
          style={style.loader}
          size="large"
        />
      ) : (
        renderPosts
      )}
    </View>
  );
};

export default Home;

const style = StyleSheet.create({
  background: {
    backgroundColor: colors.black,
    flex: 1,
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveHeight(6),
  },

  title: {
    color: colors.orange,
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    marginBottom: responsiveHeight(2),
  },
  imageContainer: {
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width: responsiveWidth(140),
  },
  text: {
    color: colors.white,
    textAlign: 'center',
    alignSelf: 'center',
    width: responsiveWidth(90),
    fontWeight: '600',
    fontSize: responsiveFontSize(2),
  },
  loader: {
    alignSelf: 'center',
    flex: 1,
  },
});
