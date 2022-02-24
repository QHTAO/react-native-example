import {TextInput} from 'react-native';
import React from 'react';
import tw from 'twrnc';
const Input = props => {
  return (
    <TextInput
      style={[
        tw`h-10 p-2 border-solid border-gray-500 rounded-md`,
        {borderWidth: 1},
      ]}
      {...props}
    />
  );
};

export default Input;
