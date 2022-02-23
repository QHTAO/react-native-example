import React from 'react';
import {View, Text} from 'react-native';
import {Container} from '../components';
import Button from '../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {setAuthenticated} from '../features/authSlice';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const handlePress = async () => {
    const token = 'dsaD#@$@#QWASC3qrsdf$EWEFFER#@%R67r5uhsfd';
    try {
      await AsyncStorage.setItem('token', token);
      dispatch(setAuthenticated(true));
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Container>
      <Text>LoginScreen</Text>
      <Button title={'登录'} onPress={handlePress} />
    </Container>
  );
};

export default LoginScreen;
