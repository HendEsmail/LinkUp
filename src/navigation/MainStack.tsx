import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList} from 'types';
import {MAIN_ROUTES} from './mainRoutes';

const {Navigator, Screen} = createNativeStackNavigator<MainStackParamList>();
const MainStack = () => {
  return (
    <Navigator
      screenOptions={{
        header: () => null,
      }}>
      <Screen
        name={MAIN_ROUTES.home.name}
        component={MAIN_ROUTES.home.component}
      />
      <Screen
        name={MAIN_ROUTES.postDetails.name}
        component={MAIN_ROUTES.postDetails.component}
      />
    </Navigator>
  );
};

export default MainStack;
