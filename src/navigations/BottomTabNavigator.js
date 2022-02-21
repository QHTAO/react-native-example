import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HOME, WORKBENCH, NOTIFY, PROFILE} from '../constants/routeNames';
import HomeScreen from '../screens/HomeScreen';
import NotifyScreen from '../screens/NotifyScreen';
import ProfileScreen from '../screens/ProfileScreen';
import WorkbenchScreen from '../screens/WorkbenchScreen';

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name={HOME} component={HomeScreen} />
      <Tab.Screen name={WORKBENCH} component={NotifyScreen} />
      <Tab.Screen name={NOTIFY} component={ProfileScreen} />
      <Tab.Screen name={PROFILE} component={WorkbenchScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
