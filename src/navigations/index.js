import React, {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import BottomTabNavigator from './BottomTabNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {setAuthenticated} from '../features/authSlice';

const AppNavContainer = () => {
  const isAuthenticated = useSelector(state => state.isAuthenticated);
  const dispatch = useDispatch();
  useEffect(() => {
    async function getToken() {
      try {
        const token = await AsyncStorage.getItem('token');
        console.log(token);
        if (token !== null) {
          dispatch(setAuthenticated(true));
        }
      } catch (error) {
        console.log(error);
      }
    }
    getToken();
  }, []);
  return (
    <NavigationContainer>
      {isAuthenticated ? <BottomTabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavContainer;
