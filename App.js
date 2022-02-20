import {View, Text} from 'react-native';
import React from 'react';
import tw from 'twrnc';
const App = () => {
  return (
    <View style={tw`bg-blue-100 flex-1`}>
      <Text style={tw.style('text-2xl text-center mt-6')}>Hello Word</Text>
      <View style={tw`w-40 h-40 bg-blue-600 mt-6`}></View>
    </View>
  );
};

export default App;
