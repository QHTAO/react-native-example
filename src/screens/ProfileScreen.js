import React from 'react';
import {View, Text} from 'react-native';
import {Container} from '../components';
import Button from '../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {setAuthenticated} from '../features/authSlice';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const handlePress = async () => {
    try {
      await AsyncStorage.removeItem('token');
      dispatch(setAuthenticated(false));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Text>ProfileScreen</Text>

      <Button onPress={handlePress} title="登出" />
    </Container>
  );
};
export default ProfileScreen;
