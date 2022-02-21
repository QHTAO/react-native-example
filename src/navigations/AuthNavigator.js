import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LOGIN} from '../constants/routeNames';
import LoginScreen from '../screens/LoginScreen';

const AuthNavigator = () => {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={LOGIN} component={LoginScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
