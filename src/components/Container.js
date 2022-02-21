import React from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import tw from 'twrnc';
const Container = ({style, children}) => {
  return (
    <SafeAreaView style={[tw`flex-1 bg-white`, style]}>
      <ScrollView style={{flex: 1}}>
        <View>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Container;

