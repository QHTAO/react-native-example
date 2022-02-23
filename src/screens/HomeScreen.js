import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {Container} from '../components';
import {getUsers} from '../api/users';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <Container>
      <View>
        <Text>HomeScreen</Text>
        <Icon name={'ios-sad'} size={100} color={'blue'} />
      </View>
    </Container>
  );
};

export default HomeScreen;
