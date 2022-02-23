import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import tw from 'twrnc';
const Button = ({onPress, title}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={tw`bg-blue-600 rounded-md px-3 py-2`}>
      <Text style={tw`text-white text-lg text-center`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
