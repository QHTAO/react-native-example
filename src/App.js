import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import Navigations from './navigations';
import store from './store';
const App = () => {
  return (
    <Provider store={store}>
      <Navigations />
    </Provider>
  );
};

export default App;
