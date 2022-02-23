import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HOME, WORKBENCH, NOTIFY, PROFILE} from '../constants/routeNames';
import HomeScreen from '../screens/HomeScreen';
import NotifyScreen from '../screens/NotifyScreen';
import ProfileScreen from '../screens/ProfileScreen';
import WorkbenchScreen from '../screens/WorkbenchScreen';

import Icon from 'react-native-vector-icons/Ionicons';

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      tabBarOptions={{
        showIcon: true,
      }}>
      <Tab.Screen
        name={HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={WORKBENCH}
        component={WorkbenchScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="grid" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={NOTIFY}
        component={NotifyScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="notifications" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={PROFILE}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
