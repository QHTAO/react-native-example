import React, {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import BottomTabNavigator from './BottomTabNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppNavContainer = () => {
  const [authLoaded, setAuthLoaded] = React.useState(false);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  useEffect(() => {
    setAuthLoaded(true);
    setIsAuthenticated(true);
  }, []);
  return (
    <>
      {authLoaded ? (
        <NavigationContainer>
          {isAuthenticated ? <BottomTabNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
};

export default AppNavContainer;
