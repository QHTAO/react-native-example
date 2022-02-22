import React from 'react';
import {View, Text} from 'react-native';
import {Container} from '../components';

import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
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
