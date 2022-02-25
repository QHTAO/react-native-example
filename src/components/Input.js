import {TextInput} from 'react-native';
import React from 'react';
import tw from 'twrnc';
const Input = props => {
  return (
    <TextInput
      style={tw`h-10 p-2 border  border-solid border-gray-500 rounded-md`}
      {...props}
    />
  );
};

export default Input;
