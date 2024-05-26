import {IMainRoutes} from 'types';
import {HomeScreen, PostDetailsScreen} from 'screens';

export const MAIN_ROUTES: IMainRoutes = {
  home: {
    name: 'HomeScreen',
    component: HomeScreen,
  },
  postDetails: {
    name: 'PostDetailsScreen',
    component: PostDetailsScreen,
  },
};
