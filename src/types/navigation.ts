import {RouteProp} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ComponentType} from 'react';
import {Post} from './posts';

interface IBaseRoute {
  title?: string;
  component: ComponentType<any>;
}

export type MainStackParamList = {
  HomeScreen: undefined;
  PostDetailsScreen: {post: Post};
};

export interface IMainRoute extends IBaseRoute {
  name: keyof MainStackParamList;
}

export interface IMainRoutes {
  home: IMainRoute;
  postDetails: IMainRoute;
}

// Screen Navigation & Route Types
export type HomeScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  'HomeScreen'
>;

export type HomeScreenRouteProp = RouteProp<MainStackParamList, 'HomeScreen'>;

export type PostDetailsScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  'PostDetailsScreen'
>;

export type PostDetailsScreenRouteProp = RouteProp<
  MainStackParamList,
  'PostDetailsScreen'
>;
