import React from 'react';
import Navigate from './src/Navigation/Navigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/index';

export default function App() {
  return (
    <Provider store={store}>
      <Navigate />
    </Provider>
  );
}
