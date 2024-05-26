import React, {useEffect} from 'react';
import {RootNavigation} from 'navigation';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <RootNavigation />;
};
export default App;
