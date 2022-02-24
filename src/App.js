import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import Navigations from './navigations';
import store from './store';
import {BASE_URL} from '@env';
console.log(BASE_URL);
const App = () => {
  return (
    <Provider store={store}>
      <Navigations />
    </Provider>
  );
};

export default App;
